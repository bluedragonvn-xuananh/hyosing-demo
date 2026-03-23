import { ANSWER_OS_MESSAGE, QUESTION_MESSAGE } from '~/constants/chat-ai.constant'

const useChatAiAgent = () => {
  const checkMessageAnswerFromOS = (message: string | undefined): boolean => {
    if (!message) return false

    return message.startsWith(ANSWER_OS_MESSAGE.ANSWER_DEFAULT)
  }

  const checkMessageQuestionFromOS = (message: string | undefined): boolean => {
    if (!message) return false
    const keyword = QUESTION_MESSAGE.QUESTION_OLTC.toLowerCase()

    return message.toLowerCase().includes(keyword)
  }

  const responseMessageBaseOnQuestionFromOS = (promptQuestion: string) => {
    const text = promptQuestion.toLowerCase()
    const keyword = QUESTION_MESSAGE.QUESTION_OLTC.toLowerCase()

    if (text.includes(keyword)) {
      return ANSWER_OS_MESSAGE.ANSWER_OLTC
    }

    return ANSWER_OS_MESSAGE.ANSWER_DEFAULT
  }

  return {
    checkMessageAnswerFromOS,
    checkMessageQuestionFromOS,
    responseMessageBaseOnQuestionFromOS
  }
}

export default useChatAiAgent
