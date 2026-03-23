import { useState } from 'react'

import AIChatAgent from './results/ai-chat-agent'
import DGACompare from './results/dga-compare'
import HealthAnalysis from './results/health-analysis'
import HistoryTimeline from './results/history-timeline'
import LoadRateSimulation from './results/load-rate-simulation'
import SourceBasicJudgment from './results/source-basic-judgment'
import SummaryInformation from './results/summary-information'

interface IFinalResultProps {
  response?: any
  finalFilter?: any
  setCurrentStep?: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>
  currentStep?: 1 | 2 | 3 | 4
}

const FinalResult = ({ response, finalFilter, setCurrentStep, currentStep }: IFinalResultProps) => {
  const [yearSlideValue, setYearSlideValue] = useState<number | null>(null)
  return (
    <div className='p-5 flex-1 bg-[#F1F4F7] space-y-[15px]'>
      {/* Summary information */}
      <SummaryInformation response={response} yearSlideValue={yearSlideValue} />

      {/* Load rate simulation */}
      <LoadRateSimulation response={response} setYearSlideValue={setYearSlideValue} />

      {/* Analysis and compare */}
      <div className='grid grid-cols-2 gap-[15px]'>
        <HealthAnalysis response={response} />
        <DGACompare response={response} />
      </div>

      {/* History and AI Chat */}
      <div className='grid grid-cols-2 gap-[15px]'>
        <HistoryTimeline response={response} finalFilter={finalFilter} />
        <AIChatAgent response={response} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>

      {/* Source basic judgment */}
      <SourceBasicJudgment response={response} />
    </div>
  )
}

export default FinalResult
