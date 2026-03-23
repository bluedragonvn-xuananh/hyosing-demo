import clsx from 'clsx'
import { Button } from '~/components/ui/button'

import { Spinner } from '../ui/spiner'

interface IButtonSubmitProps {
  label: string
  isDisabled?: boolean
  isLoading?: boolean
  className?: string
}

const ButtonSubmit = ({ label, isDisabled, isLoading = false, className }: IButtonSubmitProps) => {
  return (
    <Button
      type='submit'
      disabled={isDisabled || isLoading}
      className={clsx(
        '!h-12 rounded-[8px] bg-[#2F80ED] text-white cursor-pointer transition-all duration-250 hover:bg-primary-main/80 text-sm tracking-[-1.25%] leading-[20px] relative',
        className
      )}
    >
      {label}
      {isLoading && <Spinner className='absolute top-1/2 right-3 transform -translate-y-1/2 size-5 z-30' />}
    </Button>
  )
}

export default ButtonSubmit
