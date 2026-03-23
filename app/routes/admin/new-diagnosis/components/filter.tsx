import { useEffect, useRef, useState } from 'react'

import { FilterCheckIcon } from '~/assets/icons'
import { Button } from '~/components/ui/button'
import { DGA_INITIAL_FILTER_SAMPLE_DATA, DGA_NEXT_FILTER_SAMPLE_DATA } from '~/constants/hyosung-api.contant'
import { cn } from '~/lib/utils'

import AnalysisCondition from './filters/analysis-condition'
import DGAInput, { type IDGAItem } from './filters/dga-input'
import EquipmentSelection from './filters/equipment-selection'

interface IFilterProps {
  loading?: boolean
  handleFilter: (formFilter: any) => void
  setCurrentStep: React.Dispatch<React.SetStateAction<1 | 2 | 3 | 4>>
  currentStep?: 1 | 2 | 3 | 4
}

const Filter = ({ setCurrentStep, handleFilter, loading }: IFilterProps) => {
  const [equipmentSelected, setEquipmentSelected] = useState<string | null>(null)
  const [analysisCondition, setAnalysisCondition] = useState<any | null>(null)
  const [dgaState, setDgaState] = useState({
    listInitial: DGA_INITIAL_FILTER_SAMPLE_DATA,
    values: DGA_INITIAL_FILTER_SAMPLE_DATA
  })

  const isAnalysisConditionValid = (condition: any) => {
    if (!condition) return false
    const keys = ['baseDate', 'historyPeriod', 'algorithm', 'analysisMode']
    return keys.every((key) => condition[key] !== null && condition[key] !== undefined && condition[key] !== '')
  }

  const isValid = equipmentSelected && isAnalysisConditionValid(analysisCondition) && dgaState.values.length > 0

  // Cập nhật step tự động dựa vào dữ liệu
  useEffect(() => {
    if (equipmentSelected || (isAnalysisConditionValid(analysisCondition) && dgaState.values.length > 0)) {
      setCurrentStep(2)
    } else {
      setCurrentStep(1)
    }
  }, [equipmentSelected, analysisCondition, dgaState.values])

  const handlePrepareFilter = () => {
    if (handleFilter) {
      const formFilter = {
        equipment: equipmentSelected,
        analysisCondition: analysisCondition,
        dga: dgaState.values
      }

      handleFilter(formFilter)
    }
  }

  // Reset DGA and analysisCondition when equipment change
  const prevEquipmentRef = useRef<string | null>(null)

  useEffect(() => {
    if (prevEquipmentRef.current !== equipmentSelected) {
      setAnalysisCondition(null)

      setDgaState({
        listInitial: DGA_INITIAL_FILTER_SAMPLE_DATA,
        values: DGA_INITIAL_FILTER_SAMPLE_DATA
      })
    }

    prevEquipmentRef.current = equipmentSelected
  }, [equipmentSelected])

  // Reset DGA when analysisCondition change
  useEffect(() => {
    if (!isAnalysisConditionValid(analysisCondition)) {
      setDgaState({
        listInitial: DGA_INITIAL_FILTER_SAMPLE_DATA,
        values: DGA_INITIAL_FILTER_SAMPLE_DATA
      })
    } else {
      setDgaState({
        listInitial: DGA_NEXT_FILTER_SAMPLE_DATA,
        values: DGA_NEXT_FILTER_SAMPLE_DATA
      })
    }
  }, [analysisCondition])

  return (
    <div className='p-5 w-[340px] shrink-0 space-y-[50px]'>
      {/* Equipment selection */}
      <EquipmentSelection equipmentSelected={equipmentSelected} setEquipmentSelected={setEquipmentSelected} />

      {/* Analysic condition */}
      <AnalysisCondition
        analysisCondition={analysisCondition}
        setAnalysisCondition={setAnalysisCondition}
        disabled={!equipmentSelected}
      />

      {/* DGA Input */}
      <DGAInput
        listInitialDGA={dgaState.listInitial}
        onChange={(newValues) => setDgaState((prev) => ({ ...prev, values: newValues }))}
        disabled={!equipmentSelected || !isAnalysisConditionValid(analysisCondition)}
      />

      {/* Action */}
      <div>
        <Button
          className={cn(
            'bg-[#0062FF] h-[50px] rounded-[10px] !gap-2.5 w-full',
            !isValid && 'pointer-events-none bg-[#CED3E4]',
            loading && 'pointer-events-none bg-[#CED3E4]'
          )}
          onClick={handlePrepareFilter}
        >
          <FilterCheckIcon />
          <span className='relative top-0.5 text-base leading-5 -tracking-[0.5%] font-bold text-white'>
            AI 예측실행
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Filter
