import TypingIndicatorLoading from '~/components/common/loader-special/typing-indicator'
import { ANSWER_OS_MESSAGE, DEFAULT_CONTENT_ANSWER, OLTC_CONTENT_ANSWER } from '~/constants/chat-ai.constant'
import useChatAiAgent from '~/hooks/use-chat-ai-agent'
import type { IChatMessage } from '~/types/models/chat-ai-agent.model'

interface IFromAnswer {
  messagePrompt: string
  loading?: boolean
  isStreaming?: boolean
  item: IChatMessage
  visibleLength?: any
}

const FromAnswer = ({ messagePrompt, loading, item }: IFromAnswer) => {
  const { checkMessageAnswerFromOS } = useChatAiAgent()
  const isMessageFromOs = checkMessageAnswerFromOS(messagePrompt ?? undefined)

  const isPromptDefault = messagePrompt === ANSWER_OS_MESSAGE.ANSWER_DEFAULT
  const isAnswerOLTC = messagePrompt === ANSWER_OS_MESSAGE.ANSWER_OLTC

  const content = isPromptDefault ? DEFAULT_CONTENT_ANSWER : isAnswerOLTC ? OLTC_CONTENT_ANSWER : []

  const visibleLength = item.visibleLength || 0

  const renderContent = (content: any, visibleLength: any) => {
    let current = 0

    return content.map((line: any, i: any) => (
      <p key={i}>
        {line.map((item: any, j: any) => {
          const remaining = visibleLength - current
          const textToShow = item.text.slice(0, Math.max(0, remaining))
          current += item.text.length

          if (!textToShow) return null

          if (item.type === 'highlight') {
            return (
              <span key={j} className='text-[#0062FF] font-light'>
                {textToShow}
              </span>
            )
          }

          if (item.type === 'badge') {
            return (
              <span key={j} className='bg-[#EEF8FF] text-[#0062FF] text-[10px] px-1 rounded'>
                {textToShow}
              </span>
            )
          }

          return <span key={j}>{textToShow}</span>
        })}
      </p>
    ))
  }

  if (loading && !messagePrompt) {
    return (
      <div className='flex-1 flex justify-start space-y-[15px]'>
        <div className='flex items-center gap-2.5'>
          <div className='relative top-0.5 w-6 h-6 rounded-[6px] p-1 bg-[linear-gradient(135deg,_#008EDC_0%,_#0047C2_100%)] text-white flex items-center justify-center'>
            AI
          </div>
          <TypingIndicatorLoading />
        </div>
      </div>
    )
  }

  return (
    <>
      {messagePrompt && !Object.values(ANSWER_OS_MESSAGE).includes(messagePrompt ?? '') && !isMessageFromOs && (
        <div className='flex-1 flex justify-start space-y-[15px]'>
          <div className='flex items-start gap-2.5'>
            {/* logo */}
            <div className='relative top-0.5 w-6 h-6 rounded-[6px] p-1 bg-[linear-gradient(135deg,_#008EDC_0%,_#0047C2_100%)] text-white flex items-center justify-center'>
              AI
            </div>

            {/* answer content */}
            <div className='bg-[#F6F6F9] px-2 py-1 rounded-[4px] space-y-2.5'>{messagePrompt}</div>
          </div>
        </div>
      )}

      {messagePrompt && isPromptDefault && (
        <div key={item.id} className='flex-1 flex justify-start space-y-[15px]'>
          <div className='flex items-start gap-2.5'>
            {/* logo */}
            <div className='w-6 h-6 rounded-[6px] p-1 bg-[linear-gradient(135deg,_#008EDC_0%,_#0047C2_100%)] text-white flex items-center justify-center'>
              AI
            </div>

            {/* answer content */}
            <div className='bg-[#F6F6F9] px-2 py-1 rounded-[4px] space-y-2.5'>
              {renderContent(content, visibleLength)}
            </div>
          </div>
        </div>
      )}

      {messagePrompt && isAnswerOLTC && (
        <div key={item.id} className='flex-1 flex justify-start space-y-[15px]'>
          <div className='flex items-start gap-2.5'>
            {/* logo */}
            <div className='w-6 h-6 rounded-[6px] p-1 bg-[linear-gradient(135deg,_#008EDC_0%,_#0047C2_100%)] text-white flex items-center justify-center'>
              AI
            </div>

            {/* answer content */}
            <div className='bg-[#F6F6F9] px-2 py-1 rounded-[4px] space-y-2.5'>
              {renderContent(content, visibleLength)}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FromAnswer
