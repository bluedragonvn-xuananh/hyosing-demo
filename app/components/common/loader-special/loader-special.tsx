import { cn } from '~/lib/utils'

import './style.css'

interface SpecialSpinnerProps {
  className?: string
}

const SpecialSpinner = ({ className }: SpecialSpinnerProps) => {
  return (
    <div className={cn('spinner-os', className)}>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
      <div className='spinner-blade'></div>
    </div>
  )
}

export default SpecialSpinner
