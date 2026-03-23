import { useEffect, useRef, useState } from 'react'

import { ExpandIcon, RobotAiIcon } from '~/assets/icons'
import { ANSWER_OS_MESSAGE, DEFAULT_CONTENT_ANSWER, OLTC_CONTENT_ANSWER } from '~/constants/chat-ai.constant'
import { commonHelper } from '~/helpers'
import { cn } from '~/lib/utils'
import { type IChatMessage } from '~/types/models/chat-ai-agent.model'

import ChatCore from '../ai-generation-chat/chat-core'
import FormPromptMessage from '../ai-generation-chat/form-prompt-message'
import ModalViewAiChat from '../modals/modal-view-ai-chat'

interface AIChatAgentProps {
  response?: any
  setCurrentStep?: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>
  currentStep?: 1 | 2 | 3 | 4
}

const AIChatAgent = ({ response, currentStep, setCurrentStep }: AIChatAgentProps) => {
  const [listMessagePrompt, setListMessagePrompt] = useState<IChatMessage[]>([])
  const [isModalViewChat, setIsModalViewChat] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const hasStreamedRef = useRef(false)

  useEffect(() => {
    if (!response?.ai_chat_agent?.length) return

    setListMessagePrompt(response.ai_chat_agent)
  }, [response?.ai_chat_agent])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    setTimeout(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }, 0)
  }, [listMessagePrompt])

  useEffect(() => {
    if (!listMessagePrompt.length) return
    if (hasStreamedRef.current) return
    // Prevent steaming again when open modal view chat
    if (isModalViewChat) return

    const firstMessage = listMessagePrompt[0]
    if (!firstMessage?.isStreaming) return

    hasStreamedRef.current = true

    const content =
      firstMessage.prompt === ANSWER_OS_MESSAGE.ANSWER_DEFAULT
        ? DEFAULT_CONTENT_ANSWER
        : firstMessage.prompt === ANSWER_OS_MESSAGE.ANSWER_OLTC
          ? OLTC_CONTENT_ANSWER
          : []

    const fullText = content
      .flat()
      .map((c) => c.text)
      .join('')

    commonHelper
      .streamText({
        text: fullText,
        speed: 30,
        onUpdate: (length: number) => {
          setListMessagePrompt((prev) =>
            prev.map((msg) => (msg.id === firstMessage.id ? { ...msg, visibleLength: length } : msg))
          )
        }
      })
      .then(() => {
        setListMessagePrompt((prev) =>
          prev.map((msg) => (msg.id === firstMessage.id ? { ...msg, isStreaming: false } : msg))
        )
      })
  }, [listMessagePrompt, isModalViewChat])

  return (
    <>
      <div className='border border-[#DADDE6] rounded-[10px] p-4 bg-white min-h-[108px] flex flex-col'>
        {/* Title */}
        <div className='flex justify-between items-center gap-2.5 mb-[20px]'>
          <div className='flex items-center gap-2.5 '>
            <RobotAiIcon className='w-[20px] h-[20px]' />
            <div className='flex items-end gap-2.5'>
              <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>AI Chat Agent</h3>
              <span className='cursor-pointer' onClick={() => setIsModalViewChat(true)}>
                <ExpandIcon className='w-[18px] h-[18px]' />
              </span>
            </div>
          </div>
          <div>
            <div
              className={cn(
                'font-medium rounded-[4px] px-1 py-0.5 inline-block text-xs leading-[15px] -tracking-[0.5%] text-[#0062FF] bg-[#EEF8FF]'
              )}
            >
              Hybrid RAG
            </div>
          </div>
        </div>
        {/* Content */}
        <div className='flex-1 flex flex-col gap-[15px] h-[200px]'>
          <div className='flex-1 relative h-full px-5'>
            <div
              ref={scrollRef}
              className='absolute inset-[0_2px_0_2px] px-[8px] overflow-x-hidden overflow-y-auto pb-4 scrollbar__small__custom'
            >
              {/* Without message */}
              {!listMessagePrompt.length && (
                <div className='flex-1 flex justify-center items-center h-full'>
                  <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
                </div>
              )}

              {listMessagePrompt.length > 0 && (
                <ChatCore messages={listMessagePrompt} setMessages={setListMessagePrompt} />
              )}
            </div>
          </div>

          <div className='mt-auto'>
            <FormPromptMessage
              setListMessagePrompt={setListMessagePrompt}
              response={response}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>
        </div>
      </div>

      {/* Modal show facility report*/}
      <ModalViewAiChat
        open={isModalViewChat}
        onOpenChange={setIsModalViewChat}
        response={response}
        listMessagePrompt={listMessagePrompt}
        setListMessagePrompt={setListMessagePrompt}
        setIsModalViewChat={setIsModalViewChat}
        isModalViewChat={isModalViewChat}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </>
  )
}

export default AIChatAgent
