import { useState } from 'react'

import { BINDING_YEAR_SAMPLE_DATA } from '~/constants/hyosung-api.contant'
import { cn } from '~/lib/utils'

import ModalSummaryDetail from '../modals/modal-summary-detail'

interface SummaryInformationProps {
  response?: any
  yearSlideValue?: number | null
}

const SummaryInformation = ({ response, yearSlideValue }: SummaryInformationProps) => {
  const [isModalViewTrafficOpen, setIsModalViewTrafficOpen] = useState<boolean>(false)
  const summaryData = response?.sunmary_information || null

  const selectedYearData = BINDING_YEAR_SAMPLE_DATA.find((item) => item.yearLoad === yearSlideValue)

  const computedSummary = summaryData
    ? {
        ...summaryData,
        remaining_life: selectedYearData
          ? {
              ...summaryData.remaining_life,
              value: selectedYearData.rul,
              status: selectedYearData.status,
              desc: selectedYearData.year,
              moredesc: selectedYearData.desc
            }
          : summaryData.remaining_life
      }
    : null

  const getStatusClass = (status?: string) => {
    switch (status) {
      case 'NORMAL':
        return 'text-[#00A651]'
      case 'WARNING':
        return 'text-[#FF8C00]'
      case 'CAUTION':
        return 'text-[#FF3B30]'
      default:
        return 'text-[#959595]'
    }
  }

  return (
    <>
      <div className='grid grid-cols-4 gap-[15px]'>
        {/* 건전도 지수 (HI) */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-white ',
            response && 'cursor-pointer'
          )}
          onClick={() => response && setIsModalViewTrafficOpen(true)}
        >
          <h3 className='font-bold text-[#333333] text-sm leading-5 -tracking-[0.5%]'>건전도 지수 (HI)</h3>
          <div className='space-y-[5px] min-h-[50px]'>
            {!summaryData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {summaryData && summaryData.health && (
              <>
                <div>
                  <span className='inline-block mr-[5px] font-bold text-xl leading-[25px] -tracking-[0.5%] text-[#FF6200]'>
                    {summaryData?.health?.value}
                  </span>
                  <span className='inline-block font-light text-base leading-5 -tracking-[0.5%]'>/100</span>
                </div>
                <div className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>
                  {summaryData?.health?.desc}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 잔여 수명 (RUL) */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-white ',
            response && 'cursor-pointer'
          )}
          onClick={() => response && setIsModalViewTrafficOpen(true)}
        >
          <h3 className='font-bold text-[#333333] text-sm leading-5 -tracking-[0.5%]'>잔여 수명 (RUL)</h3>
          <div className='space-y-[5px] min-h-[50px]'>
            {!summaryData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {computedSummary && computedSummary.remaining_life && (
              <>
                <div>
                  <span className='inline-block mr-[5px] font-bold text-xl leading-[25px] -tracking-[0.5%] text-[#333333]'>
                    {computedSummary?.remaining_life?.value}yr
                  </span>
                </div>
                <div className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>
                  예상 갱신 {computedSummary?.remaining_life?.desc}년{' '}
                  {computedSummary?.remaining_life?.moredesc && (
                    <span className={cn('ml-1 font-medium', getStatusClass(computedSummary?.remaining_life?.status))}>
                      {computedSummary?.remaining_life?.moredesc}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 이상 등급 */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-white ',
            response && 'cursor-pointer'
          )}
          onClick={() => response && setIsModalViewTrafficOpen(true)}
        >
          <h3 className='font-bold text-[#333333] text-sm leading-5 -tracking-[0.5%]'>이상 등급</h3>
          <div className='space-y-[5px] min-h-[50px]'>
            {!summaryData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {summaryData && summaryData.above_grade && (
              <>
                <div>
                  <span className='inline-block mr-[5px] font-bold text-xl leading-[25px] -tracking-[0.5%] text-[#333333]'>
                    {summaryData?.above_grade?.value}
                  </span>
                </div>
                <div className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>
                  {summaryData?.above_grade?.desc}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 모델 신뢰도 */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-white ',
            response && 'cursor-pointer'
          )}
          onClick={() => response && setIsModalViewTrafficOpen(true)}
        >
          <h3 className='font-bold text-[#333333] text-sm leading-5 -tracking-[0.5%]'>모델 신뢰도</h3>
          <div className='space-y-[5px] min-h-[50px]'>
            {!summaryData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {summaryData && summaryData.model_reliability && (
              <>
                <div>
                  <span className='inline-block mr-[5px] font-bold text-xl leading-[25px] -tracking-[0.5%] text-[#333333]'>
                    {summaryData?.model_reliability?.value}
                  </span>
                </div>
                <div className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>
                  {summaryData?.model_reliability?.desc}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal show summary detail */}
      <ModalSummaryDetail open={isModalViewTrafficOpen} onOpenChange={setIsModalViewTrafficOpen} />
    </>
  )
}

export default SummaryInformation
