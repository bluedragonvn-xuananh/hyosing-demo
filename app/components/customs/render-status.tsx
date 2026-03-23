import { cn } from '~/lib/utils'
import { eStatus } from '~/types'

interface IRenderStatus {
  status: eStatus
}

const RenderStatus = ({ status }: IRenderStatus) => {
  let classStatus
  let textStatus

  switch (status) {
    case eStatus.Normal:
      classStatus = 'text-[#0062FF] bg-[#E3F5FF]'
      textStatus = '정상'
      break
    case eStatus.Caution:
      classStatus = 'text-[#FF5E00] bg-[#FFF1D4]'
      textStatus = '주의'
      break
    default:
      classStatus = 'text-[#0062FF] bg-[#E3F5FF]'
      textStatus = '정상'
      break
  }

  return (
    <div className={cn('rounded-[4px] px-1 py-0.5 inline-block text-xs leading-[15px] -tracking-[0.5%]', classStatus)}>
      {textStatus}
    </div>
  )
}

export default RenderStatus
