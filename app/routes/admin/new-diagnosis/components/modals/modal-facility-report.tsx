import { CarretDownIcon, MsExcelIcon, MsPowerpointIcon, MsWordlIcon } from '~/assets/icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle
} from '~/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { DGA_SAMPLE_DATA, RECOMMEND_SAMPLE_DATA } from '~/constants/hyosung-api.contant'

import DgaItem from './facility/dga-item'

interface ModalFacilityReportProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ModalFacilityReport = ({ open, onOpenChange }: ModalFacilityReportProps) => {
  const handleOnOpenChange = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOnOpenChange}>
      <DialogPortal>
        <DialogOverlay className='DialogOverlay z-[999]' />
        <DialogContent showCloseButton={false} className='p-6 !w-[700px] !max-w-full z-[1000]'>
          <DialogTitle className='!hidden' />
          <DialogDescription className='!hidden' />
          <div className='space-y-[15px]'>
            <div className='flex items-center justify-between gap-2.5'>
              <div className='space-y-[5px]'>
                <p className='text-base leading-5 -tracking-[0.5%] font-bold text-[#000000]'>설비 건전성 진단 보고서</p>
                <div className='flex items-center gap-[5px]'>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595] font-light'>TR-154.001</span>
                  <span className='text-[#333333]'>·</span>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595] font-light'>2026-03-16</span>
                  <span className='text-[#333333]'>·</span>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595] font-light'>효성중공업</span>
                </div>
              </div>
              <div className='flex items-center gap-2.5'>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className='flex items-center gap-[5px] cursor-pointer px-3 py-[11px] border border-[#DADDE6] rounded-[10px]'>
                        <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>내보내기</p>
                        <CarretDownIcon className='w-3 h-3' />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-[98px] min-w-[98px] bg-white z-[1100]'>
                      <DropdownMenuItem>
                        <div className='flex items-center gap-[5px]'>
                          <MsPowerpointIcon className='w-[20px] h-[20px] shrink-0' />
                          <p className='text-xs leading-[15px] -tracking-[0.5%] font-bold text-[#333333]'>PPTX</p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className='flex items-center gap-[5px]'>
                          <MsExcelIcon className='w-[20px] h-[20px] shrink-0' />
                          <p className='text-xs leading-[15px] -tracking-[0.5%] font-bold text-[#333333]'>EXCEL</p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className='flex items-center gap-[5px]'>
                          <MsWordlIcon className='w-[20px] h-[20px] shrink-0' />
                          <p className='text-xs leading-[15px] -tracking-[0.5%] font-bold text-[#333333]'>WORD</p>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className='bg-white rounded-[10px] w-[60px] h-[44px] border border-[#DADDE6] !outline-none flex items-center justify-center cursor-pointer'>
                  <span className='relative text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>인쇄</span>
                </div>
                <div
                  className='bg-white rounded-[10px] w-[60px] h-[44px] border border-[#DADDE6] !outline-none flex items-center justify-center cursor-pointer'
                  onClick={() => handleOnOpenChange()}
                >
                  <span className='relative text-sm leading-5 -tracking-[0.5%] font-bold text-[#959595]'>닫기</span>
                </div>
              </div>
            </div>

            <div className='border-b border-[#E3E5EC]'></div>
            <div className='space-y-[15px]'>
              <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>KPI 요약</p>
              <div className='grid grid-cols-4 gap-2.5'>
                <div className='p-4 bg-[#F6F6F9] rounded-[10px] border border-[#DADDE6] space-y-[5px] cursor-pointer'>
                  <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>건전도 지수 (HI)</p>
                  <p className='text-lg leading-[25px] -tracking-[0.5%] font-bold text-[#FF6200]'>62.4</p>
                </div>
                <div className='p-4 bg-[#F6F6F9] rounded-[10px] border border-[#DADDE6] space-y-[5px] cursor-pointer'>
                  <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>잔여 수명 (RUL)</p>
                  <p className='text-lg leading-[25px] -tracking-[0.5%] font-bold text-[#333333]'>10yr</p>
                </div>
                <div className='p-4 bg-[#F6F6F9] rounded-[10px] border border-[#DADDE6] space-y-[5px] cursor-pointer'>
                  <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>이상 등급</p>
                  <p className='text-lg leading-[25px] -tracking-[0.5%] font-bold text-[#333333]'>L2</p>
                </div>
                <div className='p-4 bg-[#F6F6F9] rounded-[10px] border border-[#DADDE6] space-y-[5px] cursor-pointer'>
                  <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>모델 신뢰도</p>
                  <p className='text-lg leading-[25px] -tracking-[0.5%] font-bold text-[#333333]'>91%</p>
                </div>
              </div>
            </div>

            <div className='border-b border-[#E3E5EC]'></div>
            <div className='space-y-[15px]'>
              <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>AI 분석 요약</p>
              <div className='space-y-[15px]'>
                <div className='text-base leading-5 -tracking-[0.5%] font-light text-[#333333]'>
                  DGA 분석에서 C2H2(아세틸렌) 농도가 기준치 대비 6배 초과(18 ppm / 기준 3 ppm) 검출되었습니다. 과거 유사
                  사례(2019년) 대비 내부 아크 가능성이 농후하며, 즉각적인 정밀 점검이 권고됩니다.
                </div>
                <div className='flex items-center gap-2.5'>
                  <div
                    className={
                      'rounded-[4px] px-1 py-0.5 inline-block text-sm leading-5 -tracking-[0.5%] font-medium text-[#0062FF] bg-[#EEF8FF]'
                    }
                  >
                    [ 점검기준 IEC 60599 ]
                  </div>
                  <div
                    className={
                      'rounded-[4px] px-1 py-0.5 inline-block text-sm leading-5 -tracking-[0.5%] font-medium text-[#0062FF] bg-[#EEF8FF]'
                    }
                  >
                    [ 유사사례 DB #2019-TR04 ]
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-[#E3E5EC]'></div>
            <div className='space-y-[15px]'>
              <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>DGA 측정값 요약</p>
              <div className='grid grid-cols-5 gap-2.5'>
                {DGA_SAMPLE_DATA.map((item) => {
                  return <DgaItem key={item.id} item={item} />
                })}
              </div>
            </div>

            <div className='border-b border-[#E3E5EC]'></div>
            <div className='space-y-[15px]'>
              <p className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>권고 조치</p>
              <div className='space-y-[15px]'>
                {RECOMMEND_SAMPLE_DATA.map((item) => (
                  <div className='flex items-center gap-[15px]' key={item.id}>
                    <div className='w-5 h-5 flex items-center justify-center rounded-full bg-[#E3E5EC] shrink-0'>
                      <span className='text-xs leading-[15px] -tracking-[0.5%] font-medium text-[#333333]'>
                        {item.id}
                      </span>
                    </div>
                    <div className='flex-1 text-base leading-5 -tracking-[0.5%] font-light text-[#333333]'>
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ModalFacilityReport
