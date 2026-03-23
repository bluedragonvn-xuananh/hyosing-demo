import { cn } from '~/lib/utils'

interface IPercentProgressBar {
  maxPercentage?: number
  percentage: number
  showCurrentPercentage?: boolean
}

const PercentProgressBar = ({ maxPercentage = 100, percentage, showCurrentPercentage = true }: IPercentProgressBar) => {
  const rawPercent = (percentage / maxPercentage) * 100
  const percentResult = Math.min(100, Math.max(0, rawPercent))

  let gradientBar
  let percentTextColor

  if (percentResult < 20) {
    gradientBar = 'from-[#ABABAB] to-[#B8B8B8]'
    percentTextColor = 'text-[#333333]'
  } else if (percentResult < 50) {
    gradientBar = 'from-[#DE0000] to-[#FF0000]'
    percentTextColor = 'text-[#FF0000]'
  } else if (percentResult < 70) {
    gradientBar = 'from-[#FF8A00] to-[#FF7A00]'
    percentTextColor = 'text-[#FF7A00]'
  } else {
    gradientBar = 'from-[#77B429] to-[#82C42C]'
    percentTextColor = 'text-[#82C42C]'
  }

  return (
    <div className='flex items-center gap-[15px]'>
      <div className='flex-1 h-6 bg-gray-200 rounded-[4px] overflow-hidden shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'>
        <div
          className={cn(
            `h-full transition-all duration-500 ease-out rounded-[4px] bg-gradient-to-b shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]`,
            gradientBar
          )}
          style={{ width: `${percentResult}%` }}
        />
      </div>
      {showCurrentPercentage && (
        <span className={cn('text-sm leading-5 -tracking-[0.5%] font-medium min-w-fit ', percentTextColor)}>
          {Math.round(percentResult)}%
        </span>
      )}
    </div>
  )
}

export default PercentProgressBar
