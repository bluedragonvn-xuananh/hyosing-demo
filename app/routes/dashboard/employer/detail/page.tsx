import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router'
import Banner from '~/components/common/banner'
import { TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'
import { cn } from '~/lib/utils'
import { eEmployerDetailTab } from '~/types'

import CompanyWorkerInformation from './components/company-worker-information'
import EmployeeInformation from './components/employee-information'
import EmployerInformation from './components/employer-information'

const DetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t } = useAppTranslations()
  const [tabName, setTabName] = useState<eEmployerDetailTab>(eEmployerDetailTab.Employer)

  useEffect(() => {
    if (!slug || isNaN(Number(slug))) {
      navigate('/not-found', { replace: true })
    }
  }, [slug])

  return (
    <section className='space-y-8'>
      <Banner title={`${t(TRANSLATE_KEYS.TITLE, 'employerManagementDetail')}`} />

      {/* Tab menu list information  */}
      <div className='border-b-4 border-[#EEEEEE] flex gap-2 items-end'>
        <div
          className={cn(
            'px-[23px] py-4 relative cursor-pointer',
            tabName === eEmployerDetailTab.Employer ? 'text-[#2A3547]' : 'text-[#D5D5D7]'
          )}
          onClick={() => setTabName(eEmployerDetailTab.Employer)}
        >
          <span className='text-base font-semibold leading-5 -tracking-[1%] '>고용주 정보</span>
          {tabName === eEmployerDetailTab.Employer && (
            <span className='block w-full h-[4px] bg-[#0077FF] absolute left-0 -bottom-1'></span>
          )}
        </div>

        <div
          className={cn(
            'px-[23px] py-4 relative cursor-pointer',
            tabName === eEmployerDetailTab.CompanyWorker ? 'text-[#2A3547]' : 'text-[#D5D5D7]'
          )}
          onClick={() => setTabName(eEmployerDetailTab.CompanyWorker)}
        >
          <span className='text-base font-semibold leading-5 -tracking-[1%] '>업체/근무지 정보</span>
          {tabName === eEmployerDetailTab.CompanyWorker && (
            <span className='block w-full h-[4px] bg-[#0077FF] absolute left-0 -bottom-1'></span>
          )}
        </div>

        <div
          className={cn(
            'px-[23px] py-4 relative cursor-pointer',
            tabName === eEmployerDetailTab.Employee ? 'text-[#2A3547]' : 'text-[#D5D5D7]'
          )}
          onClick={() => setTabName(eEmployerDetailTab.Employee)}
        >
          <span className='text-base font-semibold leading-5 -tracking-[1%] '>직원 정보</span>
          {tabName === eEmployerDetailTab.Employee && (
            <span className='block w-full h-[4px] bg-[#0077FF] absolute left-0 -bottom-1'></span>
          )}
        </div>
      </div>
      {/* Tab content list information  */}
      {tabName === eEmployerDetailTab.Employer && <EmployerInformation />}
      {tabName === eEmployerDetailTab.CompanyWorker && <CompanyWorkerInformation />}
      {tabName === eEmployerDetailTab.Employee && <EmployeeInformation />}
    </section>
  )
}

export default DetailPage
