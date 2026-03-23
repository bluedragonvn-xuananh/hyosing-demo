import PercentProgressBar from '~/components/customs/progress-bar/percent-progress-bar'

import type { MetricItem } from './metrix-list'

interface IMetrixItem {
  item: MetricItem
}

const MetrixItem = ({ item }: IMetrixItem) => {
  return (
    <div key={item.id} className='flex items-center gap-[5px]'>
      <div className='w-[150px] shrink-0 space-y-[2px]'>
        <h3 className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>{item.label}</h3>
        {item.metadata && (
          <div className='rounded-[4px] px-1 py-0.5 inline-block text-xs font-medium leading-[15px] -tracking-[0.5%] text-[#0062FF] bg-[#EEF8FF]'>
            {item.metadata}
          </div>
        )}
      </div>

      <div className='flex-1'>
        <PercentProgressBar percentage={item.percentage} />
      </div>
    </div>
  )
}

export default MetrixItem
