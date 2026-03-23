import React, { useState } from 'react'

import { FileTextIcon } from '~/assets/icons'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

import ModalFacilityReport from './modals/modal-facility-report'

const NAVIGATION_STEP_DATA = [
  {
    stepNumber: 1,
    label: '설비 선택',
    name: 'equipment'
  },
  {
    stepNumber: 2,
    label: '분석 조건 입력',
    name: 'analysis'
  },
  {
    stepNumber: 3,
    label: 'AI 진단 실행',
    name: 'ai_diagnosis'
  },
  {
    stepNumber: 4,
    label: 'Chat Agent 질의',
    name: 'chat_agent'
  }
]

interface INavigationStep {
  currentStep: 1 | 2 | 3 | 4
  response?: any
}

const NavigationStep = ({ currentStep, response }: INavigationStep) => {
  const [isModalViewFacilityReport, setIsModalViewFacilityReport] = useState<boolean>(false)

  const responseAlready = response ? response : null

  return (
    <>
      <div
        className={`px-5 py-[15px] flex items-center justify-between gap-2 border-b border-[#E3E5EC] fixed w-[calc(100%_-_255px)] h-[75px] left-[255px] top-[56px] bg-white z-50`}
      >
        <div className='flex items-center flex-1'>
          {NAVIGATION_STEP_DATA.map((step, index) => {
            const isActive = step.stepNumber === currentStep
            const isCompleted = step.stepNumber < currentStep
            const isLineCompleted = index + 1 < currentStep
            const isLineActive = index + 1 === currentStep - 1

            return (
              <React.Fragment key={step.stepNumber}>
                <div className='flex gap-2.5 bg-[#E3E5EC]/15 px-[15px] first:pl-0'>
                  <div
                    className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ease-out ',
                      !isActive && !isCompleted && 'bg-[#CED3E4]',
                      isCompleted && 'bg-[#00A521]',
                      isActive && 'bg-[#0062FF]'
                    )}
                  >
                    <span className={cn(`text-white font-medium text-xs leading-[15px] -tracking-[0.5%]`)}>
                      {step.stepNumber}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'font-bold text-sm leading-5 -tracking-[0.5%] text-[#959595] transition-all duration-500 ease-out ',
                      isActive && 'text-[#0062FF]',
                      isCompleted && 'text-[#00A521]'
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {index < NAVIGATION_STEP_DATA.length - 1 && (
                  <div
                    className={cn(
                      'w-[120px] border-b-[2px] border-dashed transition-all duration-500 ease-out ',
                      !isLineCompleted && !isLineActive && 'border-[#CED3E4]',
                      isLineCompleted && 'border-[#00A521]',
                      isLineActive && 'border-[#0062FF]'
                    )}
                  ></div>
                )}
              </React.Fragment>
            )
          })}
        </div>
        <div className='shrink-0'>
          <Button
            className='bg-[#3A4F93] h-11 rouned-[10px] !gap-[5px]'
            disabled={!responseAlready}
            onClick={() => setIsModalViewFacilityReport(true)}
          >
            <FileTextIcon />
            <span className='relative top-0.5 font-bold text-white'>보고서 생성</span>
          </Button>
        </div>
      </div>

      {/* Modal show facility report*/}
      <ModalFacilityReport open={isModalViewFacilityReport} onOpenChange={setIsModalViewFacilityReport} />
    </>
  )
}

export default NavigationStep
