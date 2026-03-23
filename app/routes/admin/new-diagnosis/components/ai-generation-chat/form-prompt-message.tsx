import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { ANSWER_OS_MESSAGE, DEFAULT_CONTENT_ANSWER, OLTC_CONTENT_ANSWER } from '~/constants/chat-ai.constant'
import { type AIPromptMessageType, chatAIPromptMessage, commonHelper } from '~/helpers'
import useChatAiAgent from '~/hooks/use-chat-ai-agent'
import { cn } from '~/lib/utils'
import { type IChatMessage, eTypeMessage } from '~/types/models/chat-ai-agent.model'

interface FormPromptMessageProps {
  setListMessagePrompt: React.Dispatch<React.SetStateAction<IChatMessage[] | []>>
  response?: any
  setIsModalViewChat?: React.Dispatch<React.SetStateAction<boolean>>
  isModalViewChat?: boolean
  currentStep?: 1 | 2 | 3 | 4
  setCurrentStep?: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>
}

const FormPromptMessage = ({ setListMessagePrompt, response, setCurrentStep, currentStep }: FormPromptMessageProps) => {
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const formSchema = chatAIPromptMessage()
  const { checkMessageQuestionFromOS, responseMessageBaseOnQuestionFromOS } = useChatAiAgent()

  const form = useForm<AIPromptMessageType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      promptMessage: undefined
    },
    mode: 'onChange'
  })

  const onSubmit = async (formData: AIPromptMessageType) => {
    const messageContent = formData.promptMessage?.trim()
    if (!messageContent) return

    if (currentStep === 3 && setCurrentStep) {
      setCurrentStep(4)
    }

    if (isTyping) return

    setIsTyping(true)

    try {
      const questionId = commonHelper.generateUUID()
      const answerId = commonHelper.generateUUID()

      const questionMessage: IChatMessage = {
        id: questionId,
        type: eTypeMessage.Question,
        prompt: messageContent
      }

      const loadingMessage: IChatMessage = {
        id: answerId,
        type: eTypeMessage.Answer,
        prompt: '',
        loading: true
      }

      setListMessagePrompt((prev) => [...prev, questionMessage, loadingMessage])

      form.reset()

      const isMessageFromOs = checkMessageQuestionFromOS(messageContent)

      await commonHelper.fakeAPIRequest(500)

      const finalAnswer = isMessageFromOs
        ? responseMessageBaseOnQuestionFromOS(messageContent)
        : ANSWER_OS_MESSAGE.ANSWER_DEFAULT

      const content =
        finalAnswer === ANSWER_OS_MESSAGE.ANSWER_DEFAULT
          ? DEFAULT_CONTENT_ANSWER
          : finalAnswer === ANSWER_OS_MESSAGE.ANSWER_OLTC
            ? OLTC_CONTENT_ANSWER
            : []

      const fullText = content
        .flat()
        .map((c) => c.text)
        .join('')

      // 👇 stream
      await commonHelper.streamText({
        text: fullText,
        speed: 30,
        onUpdate: (length: number) => {
          setListMessagePrompt((prev) =>
            prev.map((msg) =>
              msg.id === answerId
                ? {
                    ...msg,
                    prompt: finalAnswer,
                    visibleLength: length,
                    loading: false,
                    isStreaming: true
                  }
                : msg
            )
          )
        }
      })

      // 👇 end stream
      setListMessagePrompt((prev) =>
        prev.map((msg) =>
          msg.id === answerId
            ? {
                ...msg,
                isStreaming: false
              }
            : msg
        )
      )
    } finally {
      // Make sure unlock
      setIsTyping(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex items-center gap-2.5 border border-[#E3E5EC] rounded-[8px] p-1.5'>
            <FormField
              control={form.control}
              name='promptMessage'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <div className='relative'>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='내용을 입력하세요.'
                        disabled={isTyping || !response}
                        type='text'
                        value={field.value ?? ''}
                        className='rounded-none h-[42px] border-0 p-0 !text-base'
                        onKeyDown={(e) => {
                          if (e.nativeEvent.isComposing) return

                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            form.handleSubmit(onSubmit)()
                          }
                        }}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <Button
              disabled={!form.formState.isValid || isTyping}
              className={cn('bg-[#3A4F93] h-[42px] rouned-[6px] w-[55px] disabled:bg-[#B0B9D4]')}
            >
              <span className='relative text-xs leading-[15px] -tracking-[0.5%] font-bold text-white'>전송</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default FormPromptMessage
