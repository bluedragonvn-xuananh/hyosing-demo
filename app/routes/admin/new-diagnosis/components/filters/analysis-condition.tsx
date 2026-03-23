import { useEffect, useState } from 'react'

import Select from 'react-select'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'
import { cn } from '~/lib/utils'

interface IAnalysisConditionProps {
  analysisCondition?: any | null
  setAnalysisCondition: React.Dispatch<React.SetStateAction<any | null>>
  currentStep?: 1 | 2 | 3 | 4
  disabled?: boolean
}

const AnalysisCondition = ({ analysisCondition, setAnalysisCondition, disabled }: IAnalysisConditionProps) => {
  const [formValues, setFormValues] = useState({
    baseDate: null,
    historyPeriod: null,
    algorithm: null,
    analysisMode: null
  })
  const { t } = useAppTranslations()

  const handleChange = (key: keyof typeof formValues) => (option: any) => {
    const newValue = option?.value ?? null
    const newFormValues = {
      ...formValues,
      [key]: newValue
    }

    setFormValues(newFormValues)

    setAnalysisCondition(newFormValues)
  }

  useEffect(() => {
    if (!analysisCondition) {
      setFormValues({
        baseDate: null,
        historyPeriod: null,
        algorithm: null,
        analysisMode: null
      })
    }
  }, [analysisCondition])

  return (
    <div className='space-y-2.5'>
      {/* Title */}
      <div className='flex items-center gap-[15px]'>
        <div className='font-bold text-base leading-5 -tracking-[0.5%] text-[#333333] inline-block'>분석조건</div>
        <div className='flex-1 border-b border-[#E3E5EC]'></div>
      </div>

      {/* Content */}
      <div className='space-y-2.5'>
        <div className='flex items-center gap-[15px]'>
          <div className='shrink-0 w-[92px] font-medium text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
            분석기준일
          </div>
          <div className='flex-1'>
            <Select
              classNamePrefix='react-select'
              className={cn('react-select-container custom-h-34 w-full')}
              placeholder='년-월-일'
              isDisabled={disabled}
              noOptionsMessage={() => t(TRANSLATE_KEYS.COMMON, 'noData')}
              options={DATA.GET_ANALYSIS_BASE_DATE() ?? []}
              value={DATA.GET_ANALYSIS_BASE_DATE().find((opt) => opt.value === formValues.baseDate) || null}
              onChange={handleChange('baseDate')}
              isSearchable={false}
            />
          </div>
        </div>

        <div className='flex items-center gap-[15px]'>
          <div className='shrink-0 w-[92px] font-medium text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
            이력 참조기간
          </div>
          <div className='flex-1'>
            <Select
              classNamePrefix='react-select'
              className={cn('react-select-container custom-h-34 w-full')}
              placeholder='선택'
              isDisabled={disabled}
              noOptionsMessage={() => t(TRANSLATE_KEYS.COMMON, 'noData')}
              options={DATA.GET_ANALYSIS_HISTORY_PERIOD() ?? []}
              value={DATA.GET_ANALYSIS_HISTORY_PERIOD().find((opt) => opt.value === formValues.historyPeriod) || null}
              onChange={handleChange('historyPeriod')}
              isSearchable={false}
            />
          </div>
        </div>

        <div className='flex items-center gap-[15px]'>
          <div className='shrink-0 w-[92px] font-medium text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
            알고리즘
          </div>
          <div className='flex-1'>
            <Select
              classNamePrefix='react-select'
              className={cn('react-select-container custom-h-34 w-full')}
              placeholder='선택'
              isDisabled={disabled}
              noOptionsMessage={() => t(TRANSLATE_KEYS.COMMON, 'noData')}
              options={DATA.GET_ANALYSIS_ALGORITHM() ?? []}
              value={DATA.GET_ANALYSIS_ALGORITHM().find((opt) => opt.value === formValues.algorithm) || null}
              onChange={handleChange('algorithm')}
              isSearchable={false}
            />
          </div>
        </div>

        <div className='flex items-center gap-[15px]'>
          <div className='shrink-0 w-[92px] font-medium text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
            분석 모드
          </div>
          <div className='flex-1'>
            <Select
              classNamePrefix='react-select'
              className={cn('react-select-container custom-h-34 w-full')}
              placeholder='선택'
              isDisabled={disabled}
              noOptionsMessage={() => t(TRANSLATE_KEYS.COMMON, 'noData')}
              options={DATA.GET_ANALYSIS_MODE() ?? []}
              value={DATA.GET_ANALYSIS_MODE().find((opt) => opt.value === formValues.analysisMode) || null}
              onChange={handleChange('analysisMode')}
              isSearchable={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalysisCondition
