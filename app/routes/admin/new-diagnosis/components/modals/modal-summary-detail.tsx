import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle
} from '~/components/ui/dialog'

import { MetricsList } from './summary/metrix-list'

const metricsData = [
  {
    id: 1,
    label: 'C₂H₂ 18 ppm',
    percentage: 38,
    metadata: '[ IEC 60599 §5.3 ]'
  },
  {
    id: 2,
    label: 'H₂ 142 ppm',
    percentage: 24,
    metadata: '[ DGA DB #2847 ]'
  },
  {
    id: 3,
    label: '절연연화 58.2점',
    percentage: 19,
    metadata: '[ 점검이력 2024-11-03 ]'
  },
  {
    id: 4,
    label: 'CH₄38 ppm',
    percentage: 12,
    metadata: '[ IEC 60599 §4.1 ]'
  },
  {
    id: 5,
    label: 'OLTC 건전도 71.8',
    percentage: 7,
    metadata: '[ AM 판정기준 v3.1]'
  }
]

interface ModalSummaryDetailProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ModalSummaryDetail = ({ open, onOpenChange }: ModalSummaryDetailProps) => {
  const handleOnOpenChange = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOnOpenChange}>
      <DialogPortal>
        <DialogOverlay className='DialogOverlay z-[999]' />
        <DialogContent showCloseButton={false} className='p-6 !w-[600px] !max-w-full z-[1000]'>
          <DialogTitle className='!hidden' />
          <DialogDescription className='!hidden' />
          <div className='space-y-[15px]'>
            <div className='flex items-center justify-between gap-2.5'>
              <div className='space-y-[5px]'>
                <p className='text-base leading-5 -tracking-[0.5%] font-bold text-[#000000]'>
                  이 설비가 L2 등급으로 판정된 이유
                </p>
                <p className='relative text-sm leading-5 -tracking-[0.5%] font-light text-[#959595]'>
                  TabNet v2 분석 결과 - Feature Importance
                </p>
              </div>
              <div>
                <div
                  className='bg-white rounded-[10px] w-[60px] h-[44px] border border-[#DADDE6] !outline-none flex items-center justify-center cursor-pointer'
                  onClick={() => handleOnOpenChange()}
                >
                  <span className='relative text-sm leading-5 -tracking-[0.5%] font-bold text-[#959595]'>닫기</span>
                </div>
              </div>
            </div>
            <div className='border-b border-[#E3E5EC]'></div>

            <MetricsList items={metricsData} />

            <div className='border-b border-[#E3E5EC]'></div>
            <div>
              <div className='flex justify-center items-center bg-[#E2F0F9] flex-wrap p-1'>
                <span className='text-sm leading-5 -tracking-[0.5%] font-light text-[#333333]'>
                  TabNet v2 모델이 위 5개 변수를 입력받아 L2 판정을 산출했습니다.
                </span>
                <span className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#0062FF]'>신뢰도 91%</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ModalSummaryDetail
