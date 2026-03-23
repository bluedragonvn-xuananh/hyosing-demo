import { useEffect, useRef } from 'react'

import { ANSWER_OS_MESSAGE, DEFAULT_CONTENT_ANSWER, OLTC_CONTENT_ANSWER } from '~/constants/chat-ai.constant'
import { commonHelper } from '~/helpers'
import { type IChatMessage } from '~/types/models/chat-ai-agent.model'

import AiGenerationMessage from './ai-generation-message'

interface ChatCoreProps {
  messages: IChatMessage[]
  setMessages: React.Dispatch<React.SetStateAction<IChatMessage[]>>
}

const ChatCore = ({ messages, setMessages }: ChatCoreProps) => {
  const hasStreamedRef = useRef(false)

  useEffect(() => {
    if (!messages.length) return
    if (hasStreamedRef.current) return

    const firstMessage = messages[0]
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
          setMessages((prev) =>
            prev.map((msg) => (msg.id === firstMessage.id ? { ...msg, visibleLength: length } : msg))
          )
        }
      })
      .then(() => {
        setMessages((prev) => prev.map((msg) => (msg.id === firstMessage.id ? { ...msg, isStreaming: false } : msg)))
      })
  }, [messages])

  return <AiGenerationMessage listMessagePrompt={messages} />
}

export default ChatCore
