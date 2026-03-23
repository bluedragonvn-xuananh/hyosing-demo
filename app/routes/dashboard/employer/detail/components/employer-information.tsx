import { Settings } from 'lucide-react'
import { Card, CardContent, CardHeader } from '~/components/ui/card'

const EmployerInformation = () => {
  return (
    <Card className='p-0 gap-0 rounded-[12px]'>
      <CardHeader className='[.border-b]:pb-4 p-4 gap-0 border-b border-[#F8F8FA] font-semibold leading-5'>
        사용자 정보
      </CardHeader>
      <CardContent className='p-4 gap-0 border-t border-[#F8F8FA] space-y-4'>
        <div className='flex items-center gap-10 py-2.5'>
          <div className='w-1/2 flex items-center gap-10'>
            <div className='w-[150px] font-semibold text-sm leading-5'>고용주번호</div>
            <div className='flex-1 text-sm leading-5 -tracking-[1%]'>25-S00011</div>
          </div>
          <div className='w-1/2 flex items-center gap-10'>
            <div className='w-[150px] font-semibold text-sm leading-5'>이메일 (로그인계정)</div>
            <div className='flex-1 text-sm leading-5 -tracking-[1%]'>manager@gmail.com</div>
          </div>
        </div>
        <div className='flex items-center gap-10 py-2.5'>
          <div className='w-1/2 flex items-center gap-10'>
            <div className='w-[150px] font-semibold text-sm leading-5'>비밀번호</div>
            <div className='flex-1 text-sm leading-5 -tracking-[1%] flex items-center gap-4'>
              <span>********</span>
              <span>
                <Settings color='#373739' strokeWidth={1.5} />
              </span>
            </div>
          </div>
          <div className='w-1/2 flex items-center gap-10'>
            <div className='w-[150px] font-semibold text-sm leading-5'>연락처</div>
            <div className='flex-1 text-sm leading-5 -tracking-[1%]'>010-1234-5678</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default EmployerInformation
