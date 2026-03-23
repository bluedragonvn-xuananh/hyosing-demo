import clsx from 'clsx'
import { LogoIcon } from '~/assets/icons'
import { AdminLogo } from '~/assets/images'
import { useSidebar } from '~/components/ui/sidebar'

const Trademark = () => {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  return (
    <section
      className={clsx(
        'flex items-center justify-center gap-[10px] cursor-pointer',
        !isCollapsed ? 'justify-start' : 'justify-center'
      )}
    >
      {isCollapsed ? (
        <LogoIcon className='w-6 h-6 shrink-0 text-primary-main' />
      ) : (
        <div className='flex justify-center flex-col items-center gap-2.5'>
          <img src={AdminLogo} alt='Admin thumbnail' />
          <h4 className='font-light text-xs leading-[15px] -tracking-[0.5%] text-[#333333]'>ver1.0</h4>
        </div>
      )}
    </section>
  )
}

export default Trademark
