import { cn } from '~/lib/utils'

interface IBanner {
  title: string
  className?: string
}

const Banner = ({ title, className }: IBanner) => {
  return (
    <div className={cn('rounded-[12px] p-6 bg-[#0E80FB]/10', className)}>
      <h3 className='font-semibold text-[20px] leading-6'>{title}</h3>
    </div>
  )
}

export default Banner
