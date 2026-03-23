import { useEffect, useRef, useState } from 'react'

import { RobotAiIcon } from '~/assets/icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle
} from '~/components/ui/dialog'
import type { IChatMessage } from '~/types/models/chat-ai-agent.model'

import ChatCore from '../ai-generation-chat/chat-core'
import FormPromptMessage from '../ai-generation-chat/form-prompt-message'

interface ModalViewAiChatProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  setListMessagePrompt: React.Dispatch<React.SetStateAction<IChatMessage[] | []>>
  listMessagePrompt: IChatMessage[] | []
  response?: any
  setIsModalViewChat?: React.Dispatch<React.SetStateAction<boolean>>
  isModalViewChat?: boolean
  currentStep?: 1 | 2 | 3 | 4
  setCurrentStep?: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>
}

const ModalViewAiChat = ({
  open,
  onOpenChange,
  response,
  setIsModalViewChat,
  isModalViewChat,
  listMessagePrompt,
  setListMessagePrompt,
  currentStep,
  setCurrentStep
}: ModalViewAiChatProps) => {
  const [modalMessages, setModalMessages] = useState<IChatMessage[]>([])
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const handleOnOpenChange = () => {
    // Sync message from modal to main
    if (modalMessages.length) {
      setListMessagePrompt(modalMessages)
    }
    onOpenChange(false)
  }

  useEffect(() => {
    if (!open) return
    setModalMessages([...listMessagePrompt])
  }, [open, listMessagePrompt])

  useEffect(() => {
    if (!open) return
    if (!modalMessages.length) return

    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({
        behavior: modalMessages.length > listMessagePrompt.length ? 'smooth' : 'auto'
      })
    })
  }, [modalMessages, open])

  return (
    <Dialog open={open} onOpenChange={handleOnOpenChange}>
      <DialogPortal>
        <DialogOverlay className='DialogOverlay z-[999]' />
        <DialogContent showCloseButton={false} className='p-6 !w-[700px] !max-w-full z-[1000]'>
          <DialogTitle className='!hidden' />
          <DialogDescription className='!hidden' />
          <div className='space-y-[15px]'>
            <div className='flex items-center justify-between gap-2.5'>
              <div className='flex justify-between items-center gap-2.5 '>
                <div className='flex items-center gap-2.5 '>
                  <RobotAiIcon className='w-[20px] h-[20px]' />
                  <div className='flex items-end gap-2.5'>
                    <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>AI Chat Agent</h3>
                  </div>
                </div>
                <div>
                  <div className='font-medium rounded-[4px] px-1 py-0.5 inline-block text-xs leading-[15px] -tracking-[0.5%] text-[#0062FF] bg-[#EEF8FF]'>
                    Hybrid RAG
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2.5'>
                <div
                  className='bg-white rounded-[10px] w-[60px] h-[44px] border border-[#DADDE6] !outline-none flex items-center justify-center cursor-pointer'
                  onClick={() => handleOnOpenChange()}
                >
                  <span className='relative text-sm leading-5 -tracking-[0.5%] font-bold text-[#959595]'>닫기</span>
                </div>
              </div>
            </div>

            <div className='border-b border-[#E3E5EC]'></div>

            {/* Content */}
            <div className='flex-1 flex flex-col gap-[15px] h-[409px]'>
              <div className='flex-1 relative grow-1 h-full px-5'>
                <div
                  ref={scrollRef}
                  className='absolute inset-[0_2px_0_2px] px-[8px] overflow-x-hidden overflow-y-auto pb-4 scrollbar__small__custom'
                >
                  {/* Without message */}
                  {!modalMessages.length && (
                    <div className='flex-1 flex justify-center items-center h-full'>
                      <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595] text-center'>
                        대화내역이 없습니다.
                        <br />
                        AI 예측 실행 시 추가 대화가 가능합니다.
                      </p>
                    </div>
                  )}

                  {modalMessages.length > 0 && (
                    <>
                      <ChatCore messages={modalMessages} setMessages={setModalMessages} />
                      <div ref={bottomRef} />
                    </>
                  )}
                </div>
              </div>

              <div className='mt-auto'>
                <FormPromptMessage
                  setListMessagePrompt={setModalMessages}
                  response={response}
                  setIsModalViewChat={setIsModalViewChat}
                  isModalViewChat={isModalViewChat}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ModalViewAiChat
