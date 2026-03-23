import { useEffect, useState } from 'react'

import { commonHelper } from '~/helpers'
import { cn } from '~/lib/utils'
import type { eStatus } from '~/types'
import { eHealthAnalysis } from '~/types/enums/new-diagnosis.enum'

import RenderStatus from '../render-status'

interface IDegradationBar {
  title: string
  type: string
  status?: eStatus.Normal | eStatus.Caution | any
  value?: number
  onClick?: () => void
}

const DegradationBar = ({ value, title, type, status, onClick }: IDegradationBar) => {
  const [percent, setPercent] = useState(0)

  const hasData = value !== undefined && value !== null

  useEffect(() => {
    if (hasData) {
      const t = setTimeout(() => setPercent(value!), 100)
      return () => clearTimeout(t)
    }
  }, [value])

  let gradientBar
  let initialGradientBar
  let colorTextValue

  switch (type) {
    case eHealthAnalysis.Insulation_Degradation:
      gradientBar = 'from-[#FF8A00] to-[#FF7A00]'
      initialGradientBar = 'bg-[#FF7A00]'
      colorTextValue = 'text-[#FF7A00]'
      break
    case eHealthAnalysis.DGA_Health:
      gradientBar = 'from-[#77B429] to-[#82C42C]'
      initialGradientBar = 'bg-[#82C42C]'
      colorTextValue = 'text-[#FF7A00]'
      break
    case eHealthAnalysis.Thermal_Soundness:
      gradientBar = 'from-[#487EC0] to-[#5492DF]'
      initialGradientBar = 'bg-[#5492DF]'
      colorTextValue = 'text-[#0062FF]'
      break
    case eHealthAnalysis.OLTC_Soundness:
      gradientBar = 'from-[#BD44AE] to-[#DA4EC9]'
      initialGradientBar = 'bg-[#DA4EC9]'
      colorTextValue = 'text-[#0062FF]'
      break
    default:
      gradientBar = 'from-gray-400 to-gray-500'
      initialGradientBar = 'bg-gray-500'
      break
  }

  return (
    <div className={cn('space-y-[5px]', onClick && 'cursor-pointer')} onClick={onClick && onClick}>
      {/* Header */}
      <div className='flex items-center justify-between gap-2.5'>
        <span className='text-[#333333] text-sm leading-5 -tracking-[0.5%] font-medium'>{title}</span>
        <div className='flex items-center gap-2.5'>
          <span
            className={cn(
              'text-[#959595] text-sm leading-5 -tracking-[0.5%] font-light',
              hasData && `${colorTextValue} font-medium`
            )}
          >
            {hasData ? `${commonHelper.formatValueRange(value)}` : '데이터 없음'}
          </span>
          {hasData && <RenderStatus status={status as eStatus} />}
        </div>
      </div>

      {/* Bar */}
      <div
        className={cn(
          'relative h-[17px] bg-[#E3E5EC] rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]',
          hasData && 'overflow-hidden'
        )}
      >
        {/* Progress */}
        <div
          className={cn(
            `h-full rounded-full transition-all duration-700 ease-out
                     bg-gradient-to-b shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]`,
            gradientBar
          )}
          style={{ width: `${percent}%` }}
        />

        {/* Thumb (glow dot) */}
        {!hasData && (
          <div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 w-2.5 h-[17px] rounded-full bg-[#FF7A00] shadow-md transition-all duration-700',
              initialGradientBar
            )}
            style={{ left: `calc(${percent}% - 2px)` }}
          />
        )}
      </div>
    </div>
  )
}

export default DegradationBar
