import { type IChatMessage, eTypeMessage } from '~/types/models/chat-ai-agent.model'

import FromAnswer from './from-answer'
import FromQuestion from './from-question'

interface ChatConversationProps {
  listMessagePrompt: IChatMessage[] | []
}

const ChatConversation = ({ listMessagePrompt }: ChatConversationProps) => {
  return (
    <div className='space-y-[15px]'>
      {listMessagePrompt &&
        listMessagePrompt.map((item, index) => {
          return item.type === eTypeMessage.Question ? (
            <FromQuestion key={item.id} messagePrompt={item.prompt as string} />
          ) : (
            <FromAnswer
              key={item.id}
              messagePrompt={item.prompt as string}
              loading={item.loading}
              isStreaming={item.isStreaming}
              visibleLength={item.visibleLength} // 👈 QUAN TRỌNG
              item={item}
            />
          )
        })}
    </div>
  )
}

export default ChatConversation
