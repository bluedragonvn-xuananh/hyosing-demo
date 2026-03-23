import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { useSidebar } from '~/components/ui/sidebar'

interface IHeaderProps {
  pageTitle?: string
}
const Header = ({ pageTitle }: IHeaderProps) => {
  const { state, isMobile } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <header
      className={clsx(
        'flex flex-wrap gap-space-main shrink-0 items-center justify-between transition-all ease-linear px-5 py-[15px]',
        'fixed top-0 right-0 z-50',
        'bg-white backdrop-blur-sm border-b border-[#E3E5EC]',
        !isMobile && (isCollapsed ? 'left-[4.5rem]' : 'left-[16rem]'),
        isMobile && 'left-0'
      )}
    >
      <section className='flex items-center gap-[30px]'>
        <div className='flex items-center gap-2.5'>
          <span className='font-bold text-lg leading-[25px] -tracking-[0.5%] text-[#959595]'>진단</span>
          <span className='relative -top-0.5'>
            <ChevronRight className='text-[#959595]' />
          </span>
          <span className='font-bold text-lg leading-[25px] -tracking-[0.5%] text-[#333333]'>설비 건전성 AI 분석</span>
        </div>
        <p className='font-bold text-[22px] leading-[24px] tracking-[-0.5%] !hidden'>{pageTitle}</p>
      </section>
      <section className='flex items-center gap-6'>
        <div className='flex items-center gap-2.5'>
          <div className='w-[17px] h-[17px] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.4)_inset] bg-[#1FCC00]'></div>
          <h3 className='uppercase font-bold text-lg leading-[25px] -tracking-[0.5%] text-[#00A521] relative top-0.5'>
            AI AGENT READY
          </h3>
        </div>
      </section>
    </header>
  )
}

export default Header
