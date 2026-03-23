import { useState } from 'react'

import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { cn } from '~/lib/utils'

import CompanyWorkerTable from './company-worker-table'
import SingleCompanyWorker from './single-company-worker'

const LIST_COMPANY_WORKER = [
  {
    label: '업체명 / 근무지1 (3)',
    value: 'company-1'
  },
  {
    label: '업체명 / 근무지2 (3)',
    value: 'company-2'
  },
  {
    label: '업체명 / 근무지2 (3)',
    value: 'company-3'
  }
]

const CompanyWorkerInformation = () => {
  const [tabName, setTabName] = useState(LIST_COMPANY_WORKER[0].value)

  return (
    <Card className='p-0 gap-0 rounded-[12px]'>
      <CardHeader className='[.border-b]:pb-4 p-4 gap-0 border-b border-[#F8F8FA] font-semibold leading-5'>
        업체 정보
      </CardHeader>
      <CardContent className='p-0 gap-0'>
        <div className='border border-[#F8F8FA]'>
          <div className='border-b border-[#F8F8FA] px-4 flex items-end gap-8'>
            {LIST_COMPANY_WORKER.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'py-4 font-semibold text-base leading-5 text-[#D5D5D7] relative cursor-pointer',
                  tabName === item.value && 'text-[#2A3547]'
                )}
                onClick={() => setTabName(item.value)}
              >
                <span>{item.label}</span>
                {tabName === item.value && (
                  <span className='block absolute w-full h-[3px] bg-[#0077FF] left-0 -bottom-[1px]'></span>
                )}
              </div>
            ))}
          </div>

          {LIST_COMPANY_WORKER.map((item, index) => (
            <SingleCompanyWorker key={index} item={item} tabName={tabName} />
          ))}
        </div>

        <div className='p-4 space-y-4'>
          <div className='font-semibold text-base leading-5 -tracking-[1%]'>등록된 근무지 3</div>
          <CompanyWorkerTable />
        </div>
      </CardContent>
    </Card>
  )
}

export default CompanyWorkerInformation
