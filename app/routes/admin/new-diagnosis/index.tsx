import { useState } from 'react'

import LoaderGlobal from '~/components/common/loader-special/loader-global'
import { RESPONSE_SAMPLE_DATA } from '~/constants/hyosung-api.contant'
import { commonHelper } from '~/helpers'

import Filter from './components/filter'
import FinalResult from './components/final-result'
import NavigationStep from './components/navigation-step'

const NewDiagnosisPage = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [response, setResponse] = useState<any | null>(null)
  const [finalFilter, setFinalFilter] = useState<any | null>(null)

  const handleFilter = async (formFilter: any) => {
    setLoading(true)
    setFinalFilter(formFilter)
    await commonHelper.fakeAPIRequest(1500)
    setCurrentStep(3) // default
    setResponse(RESPONSE_SAMPLE_DATA)
    setLoading(false)
  }

  return (
    <div className='pt-[75px]'>
      <NavigationStep currentStep={currentStep} response={response} />
      <div className='flex h-full'>
        {/* Filter sidebar */}
        <Filter
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleFilter={handleFilter}
          loading={loading}
        />
        {/* Result */}
        <FinalResult
          response={response}
          finalFilter={finalFilter}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>

      {loading && <LoaderGlobal />}
    </div>
  )
}

export default NewDiagnosisPage
