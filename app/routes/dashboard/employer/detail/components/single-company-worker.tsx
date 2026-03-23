import { cn } from '~/lib/utils'

interface ISingleCompanyWorker {
  item: any
  tabName: any
}

const SingleCompanyWorker = ({ item, tabName }: ISingleCompanyWorker) => {
  return (
    <div className={cn('p-4 space-y-4 hidden', tabName === item.value && 'block')}>
      <div className='flex items-center gap-10 py-2.5'>
        <div className='w-1/2 flex items-center gap-10'>
          <div className='w-[150px] font-semibold text-sm leading-5'>업체명</div>
          <div className='flex-1 text-sm leading-5 -tracking-[1%]'>업체명</div>
        </div>
        <div className='w-1/2 flex items-center gap-10'>
          <div className='w-[150px] font-semibold text-sm leading-5'>대표자명</div>
          <div className='flex-1 text-sm leading-5 -tracking-[1%]'>홍길동</div>
        </div>
      </div>

      <div className='flex items-center gap-10 py-2.5'>
        <div className='w-1/2 flex items-center gap-10'>
          <div className='w-[150px] font-semibold text-sm leading-5'>사업장주소</div>
          <div className='flex-1 text-sm leading-5 -tracking-[1%]'>서울특별시 강남구 테헤란로 {item.label}</div>
        </div>
        <div className='w-1/2 flex items-center gap-10'>
          <div className='w-[150px] font-semibold text-sm leading-5'>업종</div>
          <div className='flex-1 text-sm leading-5 -tracking-[1%]'>업종명</div>
        </div>
      </div>

      <div className='flex items-center gap-10 py-2.5'>
        <div className='w-1/2 flex items-center gap-10'>
          <div className='w-[150px] font-semibold text-sm leading-5'>사업자등록증</div>
          <div className='flex-1 text-sm leading-5 -tracking-[1%]'>사업자등록증_사본.pdf</div>
        </div>
        <div className='w-1/2 flex items-center gap-10'>
          <div className='w-[150px] font-semibold text-sm leading-5'>보건증 수집 여부</div>
          <div className='flex-1 text-sm leading-5 -tracking-[1%]'>필수 수집</div>
        </div>
      </div>
    </div>
  )
}

export default SingleCompanyWorker
