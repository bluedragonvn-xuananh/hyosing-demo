import { cn } from '~/lib/utils'

interface IDgaItem {
  item: any
}

const DgaItem = ({ item }: IDgaItem) => {
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
    <div className={cn('p-3 border border-[#E3E5EC] bg-[#F6F6F9] rounded-[10px] space-y-1.5', classStatus)}>
      <h3 className='font-medium text-xs leading-[15px] -tracking-[0.5%] text-[#333333]'>{item.title}</h3>
      <div className='flex justify-end gap-[5px]'>
        <span className={cn('font-bold text-base leading-5 -tracking-[0.5%] text-[#333333]', textClass)}>
          {item.value}
        </span>
        <span className='font-lign text-sm leading-5 -tracking-[0.5%] text-[#333333]'>{item.unit}</span>
      </div>
    </div>
  )
}

export default DgaItem
