import { useState } from 'react'

import { HealthAnalysisIcon } from '~/assets/icons'
import DegradationBar from '~/components/customs/progress-bar/degradation-bar'
import { eHealthAnalysis } from '~/types/enums/new-diagnosis.enum'

import ModalThermalImaging from '../modals/modal-thermal-imaging'

interface HealthAnalysisProps {
  response?: any
}

const HealthAnalysis = ({ response }: HealthAnalysisProps) => {
  const [isModalViewThermalImaging, setIsModalViewThermalImaging] = useState<boolean>(false)
  const healthAnalysisData = response?.health_analysis || null

  const healthAnalysisSelection = healthAnalysisData ? healthAnalysisData?.[0] : null

  return (
    <>
      <div className='border border-[#DADDE6] rounded-[10px] p-4 bg-white  min-h-[108px]'>
        {/* Title */}
        <div className='flex items-center gap-2.5 mb-[20px]'>
          <HealthAnalysisIcon className='w-[20px] h-[20px]' />
          <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>건전도 분석</h3>
        </div>

        {/* Content */}
        <div className='space-y-[15px]'>
          <div className='flex items-center gap-[30px] pt-3 pb-[17px]'>
            <div className='w-1/2'>
              {!healthAnalysisSelection && (
                <DegradationBar type={eHealthAnalysis.Insulation_Degradation} title='절연 열화' />
              )}

              {healthAnalysisSelection && healthAnalysisSelection.data && (
                <DegradationBar
                  type={healthAnalysisSelection.data.insulation.type}
                  title={healthAnalysisSelection.data.insulation.title}
                  value={healthAnalysisSelection.data.insulation.value}
                  status={healthAnalysisSelection.data.insulation.status}
                  onClick={() => setIsModalViewThermalImaging(true)}
                />
              )}
            </div>
            <div className='w-1/2'>
              {!healthAnalysisSelection && <DegradationBar type={eHealthAnalysis.DGA_Health} title='DGA 건전도' />}

              {healthAnalysisSelection && healthAnalysisSelection.data && (
                <DegradationBar
                  type={healthAnalysisSelection.data.dga_health.type}
                  title={healthAnalysisSelection.data.dga_health.title}
                  value={healthAnalysisSelection.data.dga_health.value}
                  status={healthAnalysisSelection.data.dga_health.status}
                  onClick={() => setIsModalViewThermalImaging(true)}
                />
              )}
            </div>
          </div>
          <div className='flex items-center gap-[30px] pt-3 pb-[17px]'>
            <div className='w-1/2'>
              {!healthAnalysisSelection && (
                <DegradationBar type={eHealthAnalysis.Thermal_Soundness} title='열화상 건전도' />
              )}

              {healthAnalysisSelection && healthAnalysisSelection.data && (
                <DegradationBar
                  type={healthAnalysisSelection.data.thermal.type}
                  title={healthAnalysisSelection.data.thermal.title}
                  value={healthAnalysisSelection.data.thermal.value}
                  status={healthAnalysisSelection.data.thermal.status}
                  onClick={() => setIsModalViewThermalImaging(true)}
                />
              )}
            </div>
            <div className='w-1/2'>
              {!healthAnalysisSelection && <DegradationBar type={eHealthAnalysis.OLTC_Soundness} title='OLTC 건전도' />}

              {healthAnalysisSelection && healthAnalysisSelection.data && (
                <DegradationBar
                  type={healthAnalysisSelection.data.oltc.type}
                  title={healthAnalysisSelection.data.oltc.title}
                  value={healthAnalysisSelection.data.oltc.value}
                  status={healthAnalysisSelection.data.oltc.status}
                  onClick={() => setIsModalViewThermalImaging(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal show thermal imaging */}
      <ModalThermalImaging open={isModalViewThermalImaging} onOpenChange={setIsModalViewThermalImaging} />
    </>
  )
}

export default HealthAnalysis
