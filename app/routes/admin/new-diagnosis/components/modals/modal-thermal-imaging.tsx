import { TempoIcon } from '~/assets/icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle
} from '~/components/ui/dialog'

interface ModalThermalImagingProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const ModalThermalImaging = ({ open, onOpenChange }: ModalThermalImagingProps) => {
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
                <p className='text-base leading-5 -tracking-[0.5%] font-bold text-[#000000]'>열화상 이미지 분석</p>
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
            {/* Render image */}
            <div className='h-[356px] bg-[#E4E4E4] relative'>
              <div className='flex items-start gap-2.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <span
                  className='inline-block w-4 h-4 rounded-full bg-[#FF0000]
shadow-[0px_0px_8px_0px_rgba(255,0,0,0.25),0px_4px_4px_0px_rgba(59,26,26,0.25)_inset]'
                ></span>
                <span className='inline-block px-2 py-1.5 rounded-[10px] text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333] bg-white'>
                  52.3°C
                </span>
              </div>
            </div>
            <div>
              <table className='w-full h-full border border-[#F6F6F9]'>
                <thead className='bg-[#F6F6F9]'>
                  <tr>
                    <th className='p-[5px]'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-medium text-[#333333]'>
                        Hotspot 온도{' '}
                      </span>
                    </th>
                    <th className='p-[5px]'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-medium text-[#333333]'>주변온도</span>
                    </th>
                    <th className='p-[5px]'>
                      <div className='text-sm leading-5 -tracking-[0.5%] font-medium text-[#333333] inline-flex items-center'>
                        <TempoIcon className='w-[10px] h-[12px] relative top-0.5' />
                        <span className='relative top-0.5'>T (온도상승)</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-[5px] text-center'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-medium text-[#333333]'>52.3°C</span>
                    </td>
                    <td className='p-[5px] text-center'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-medium text-[#333333]'>41.6°C</span>
                    </td>
                    <td className='p-[5px] text-center'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-medium text-[#333333]'>T 6.2°C</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className='flex justify-center items-center bg-[#E2F0F9] flex-wrap p-1 gap-[5px]'>
                <span className='text-sm leading-4 -tracking-[0.5%] font-medium text-[#333333]'>Hotspot </span>
                <span className='text-sm leading-4 -tracking-[0.5%] font-medium text-[#333333] inline-flex items-center'>
                  <TempoIcon className='w-[10px] h-[12px]' />T 6.2°C
                </span>
                <span className='text-sm leading-4 -tracking-[0.5%] font-medium text-[#333333]'>-</span>
                <span className='text-sm leading-4 -tracking-[0.5%] font-medium text-[#333333]'>정상</span>
                <span className='text-xs leading-[15px] -tracking-[0.5%] font-light text-[#333333]'>
                  (기준 : 15°C 초과 시 주의)
                </span>
                <div className='rounded-[4px] px-1 py-0.5 inline-block text-xs font-medium leading-[15px] -tracking-[0.5%] text-[#0062FF] bg-[#EEF8FF]'>
                  [ 열화상 점검 보고서 2024-11-03 ]
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ModalThermalImaging
