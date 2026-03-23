import { useEffect, useState } from 'react'

import { GraphIcon } from '~/assets/icons'
import { cn } from '~/lib/utils'

const loadRateSimulationRange = [40, 60, 80, 100, 120]

interface LoadRateSimulationProps {
  response?: any
  setYearSlideValue?: (value: number) => void
}

const LoadRateSimulation = ({ response, setYearSlideValue }: LoadRateSimulationProps) => {
  const loadRateData = response?.load_rate_information || null
  const defaultValue = loadRateData ? loadRateData?.rate : 0
  const isDisabled = !loadRateData

  const min = 40
  const max = 120

  const [currentValue, setCurrentValue] = useState(defaultValue)
  const [animatedPercent, setAnimatedPercent] = useState(0)

  const percent = ((currentValue - min) / (max - min)) * 100

  useEffect(() => {
    setCurrentValue(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedPercent(percent)
      if (setYearSlideValue) {
        setYearSlideValue(currentValue)
      }
    }, 50)

    return () => clearTimeout(timeout)
  }, [percent])

  return (
    <div className='border border-[#DADDE6] rounded-[10px] p-4 bg-white  min-h-[108px]'>
      {/* Title */}
      <div className='flex items-center gap-2.5 mb-[20px]'>
        <GraphIcon className='w-[20px] h-[20px]' />
        <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>부하율 시뮬레이션 슬라이더</h3>
      </div>

      {/* Slider */}
      <div className='relative w-[calc(100%_-_16px)] mx-auto'>
        {/* INPUT RANGE (ẩn nhưng vẫn dùng để drag) */}
        <input
          type='range'
          min={min}
          max={max}
          step={20}
          disabled={isDisabled}
          value={currentValue}
          onChange={(e) => setCurrentValue(Number(e.target.value))}
          className={`absolute w-full top-1/2 -translate-y-1/2 opacity-0  z-10 ${!isDisabled ? 'cursor-pointer' : 'pointer-events-none'}`}
        />

        {/* Track background */}
        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-full h-[5px] bg-gray-300 rounded-full' />

        {/* Active track */}
        <div
          className='absolute top-1/2 -translate-y-1/2 h-[5px] bg-[#0059E7] rounded-full transition-all duration-500 ease-out'
          style={{ width: `${animatedPercent}%` }}
        />

        {/* Step dots */}
        <div className='flex relative -top-[8px] left-1'>
          {loadRateSimulationRange.map((rate, index) => {
            const ratePercent = ((rate - min) / (max - min)) * 100
            const isActive = rate <= currentValue
            const isCurrent = rate === currentValue

            const isLastRange = index === loadRateSimulationRange.length - 1

            return (
              <div
                key={rate}
                className='absolute'
                style={{ left: `${isLastRange ? ratePercent - 2 : ratePercent - 1}%` }}
              >
                <div className='flex justify-center flex-col items-center gap-2.5'>
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)_inset] flex justify-center items-center',
                      isLastRange ? '-translate-x-[2px]' : '-translate-x-1/2',
                      isActive ? 'bg-[#015FF7]' : 'bg-[#E3E5EC]',
                      isCurrent && 'border-2 border-[#015FF7] bg-white shadow-none'
                    )}
                  >
                    {isCurrent && <span className='inline-block w-2 h-2 rounded-full bg-[#015FF7]'></span>}
                  </div>
                  <span
                    className={cn(
                      'font-medium text-sm leading-5 -tracking-[0.5%] -translate-x-[5px] ',
                      isActive ? 'text-[#333333]' : 'text-[#959595]',
                      isCurrent && 'text-[#0062FF]'
                    )}
                  >
                    {rate}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LoadRateSimulation
