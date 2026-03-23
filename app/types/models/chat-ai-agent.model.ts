export enum eTypeMessage {
  Answer = 'ANSWER',
  Question = 'QUESTION'
}

export interface IChatMessage {
  id: any
  type: eTypeMessage
  prompt?: string
  loading?: boolean
  isStreaming?: boolean
  visibleLength?: any
}
