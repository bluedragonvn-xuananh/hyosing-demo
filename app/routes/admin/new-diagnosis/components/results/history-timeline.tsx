import { Info } from 'lucide-react'
import { HistoryTimelineIcon } from '~/assets/icons'
import { cn } from '~/lib/utils'

interface HistoryTimelineProps {
  response?: any
  finalFilter?: any
}

const HistoryTimeline = ({ response, finalFilter }: HistoryTimelineProps) => {
  const historyTimelifeData = response?.history_timelife || null
  const historySelection = historyTimelifeData
    ? historyTimelifeData.find((item: any) => item.name === finalFilter?.equipment) || null
    : null

  return (
    <div className='border border-[#DADDE6] rounded-[10px] p-4 bg-white  min-h-[108px]'>
      {/* Title */}
      <div className='flex justify-between items-center gap-2.5 mb-[20px]'>
        <div className='flex items-center gap-2.5 '>
          <HistoryTimelineIcon className='w-[20px] h-[20px]' />
          <div className='flex items-end gap-2.5'>
            <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>점검 이력 타임 라인</h3>
            <span className='font-light text-xs leading-[15px] -tracking-[0.5%] text-[#333333]'>최근 5건</span>
          </div>
        </div>
        <div>
          {/* Without data */}
          {!historySelection && (
            <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
          )}
          {historySelection && (
            <p className='font-bold text-sm leading-5 -tracking-[0.5%] text-[#333333]'>{historySelection?.name}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className='flex-1 min-h-[215px]'>
        {/* Without data */}
        {!historySelection && (
          <div className='min-h-[215px] flex justify-center items-center'>
            <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
          </div>
        )}

        {historySelection && (
          <div className='space-y-2.5'>
            {historySelection?.history.length > 0 &&
              historySelection?.history.map((item: any) => {
                const classStatus =
                  item.status === 'WARNING' ? 'text-[#FF5E00] bg-[#FFF1D4]' : 'text-[#0062FF] bg-[#E3F5FF]'
                const statusName = item.status === 'WARNING' ? '이상' : '정상'
                const infoClass = item.status === 'WARNING' ? '#FFC400' : '#E3E5EC'

                return (
                  <div className='flex justify-between items-center' key={item.id}>
                    <div className='flex items-start gap-[5px]'>
                      <Info strokeWidth={1} fill={infoClass} className='text-white' />
                      <div>
                        <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>{item.date}</p>
                        <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#333333]'>{item.desc}</p>
                      </div>
                    </div>
                    <div>
                      <div
                        className={cn(
                          'rounded-[4px] px-1 py-0.5 inline-block text-xs leading-[15px] -tracking-[0.5%]',
                          classStatus
                        )}
                      >
                        {statusName}
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HistoryTimeline
