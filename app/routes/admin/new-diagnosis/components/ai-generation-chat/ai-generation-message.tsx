import { type IChatMessage } from '~/types/models/chat-ai-agent.model'

import ChatConversation from './render-message/chat-conversation'

interface FormPromptMessageProps {
  listMessagePrompt: IChatMessage[] | []
}

const AiGenerationMessage = ({ listMessagePrompt }: FormPromptMessageProps) => {
  return <ChatConversation listMessagePrompt={listMessagePrompt} />
}

export default AiGenerationMessage
