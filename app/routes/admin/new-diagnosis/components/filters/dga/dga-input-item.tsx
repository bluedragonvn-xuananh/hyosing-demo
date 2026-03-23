import { Info } from 'lucide-react'
import { cn } from '~/lib/utils'

interface IDgaItem {
  item: any
  isSelected?: boolean
}

const DgaInputItem = ({ item }: IDgaItem) => {
  let classStatus
  let textClass

  switch (item.status) {
    case 'WARNING':
      classStatus = 'bg-[#FFEEDB] border-[#FFC39E]'
      textClass = 'text-[#FF0000]'
      break
    case 'CAUTION':
      classStatus = 'bg-[#FFEBEB] border-[#FFBBBB]'
      textClass = 'text-[#FF6200]'
      break
    case 'INFO':
      classStatus = 'bg-[#FFFCE4] border-[#FFDFA3]'
      textClass = 'text-[#FFA600]'
      break
    default:
      classStatus = 'bg-[#F6F6F9] border-[#E3E5EC]'
      break
  }

  return (
    <div
      className={cn('p-4 border border-[#E3E5EC] bg-[#F6F6F9] rounded-[10px] space-y-1.5 cursor-pointer', classStatus)}
    >
      <div className='flex items-center gap-1 justify-between relative'>
        <h3 className='font-medium text-xs leading-[15px] -tracking-[0.5%] text-[#333333]'>{item.title}</h3>
        {item.status === 'CAUTION' && (
          <div className='absolute right-0 -top-[3px]'>
            <Info strokeWidth={1} fill='#FF5023' className='text-white' size={20} />
          </div>
        )}
      </div>
      <div className='flex justify-end gap-[5px] flex-wrap'>
        <div>
          <input
            type='text'
            className='border border-[#E3E5EC] bg-[#F6F6F9] rounded-[10px] py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <span className={cn('font-bold text-base leading-5 -tracking-[0.5%] text-[#333333]', textClass)}>
          {item.value}
        </span>
        <span className='font-lign text-sm leading-5 -tracking-[0.5%] text-[#333333]'>{item.unit}</span>
      </div>
    </div>
  )
}

export default DgaInputItem
