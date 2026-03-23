import { useEffect, useState } from 'react'

import { Info } from 'lucide-react'
import { cn } from '~/lib/utils'

interface IDGAInputProps {
  listInitialDGA: IDGAItem[]
  onChange: (updatedItems: IDGAItem[]) => void
  currentStep?: 1 | 2 | 3 | 4
  disabled?: boolean
}

export interface IDGAItem {
  id: number
  name: string
  title: string
  unit: string
  value: number
  threshold: number
  caution?: number
  warning?: number
}

const DGAInput = ({ listInitialDGA, onChange, disabled }: IDGAInputProps) => {
  const [dgaItems, setDgaItems] = useState<IDGAItem[]>(listInitialDGA)

  // Cập nhật state nội bộ khi prop listInitialDGA thay đổi
  useEffect(() => {
    setDgaItems(listInitialDGA)
  }, [listInitialDGA])

  const handleValueChange = (id: number, newValue: number) => {
    const updated = dgaItems.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    setDgaItems(updated)
    onChange(updated)
  }

  // Determine status based on value and threshold
  const getStatus = (item: IDGAItem) => {
    const value = Number(item.value)
    const threshold = item.threshold

    if (!threshold) return 'NORMAL'

    const ratio = value / threshold

    if (ratio > 2.001) return 'DANGER'
    if (ratio >= 2) return 'CAUTION'
    if (ratio >= 1.5) return 'WARNING'
    if (ratio > 1) return 'INFO'

    return 'NORMAL'
  }

  return (
    <div className='space-y-2.5'>
      {/* Title */}
      <div className='flex items-center gap-[15px]'>
        <div className='font-bold text-base leading-5 -tracking-[0.5%] text-[#333333] inline-block'>DGA 입력</div>
        <div className='flex-1 border-b border-[#E3E5EC]'></div>
      </div>

      {/* Content */}
      <div className='grid grid-cols-2 gap-2.5'>
        {dgaItems.map((item) => {
          const status = getStatus(item)
          let classStatus = ''
          let textClass = ''

          switch (status) {
            case 'DANGER':
              classStatus = 'bg-[#FFEBEB] border-[#FFBBBB]'
              textClass = 'text-[#FF0000]'
              break
            case 'CAUTION':
              classStatus = 'bg-[#FFEBEB] border-[#FFBBBB]'
              textClass = 'text-[#FF0000]'
              break
            case 'WARNING':
              classStatus = 'bg-[#FFEEDB] border-[#FFC39E]'
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
              key={item.id}
              className={cn('p-4 border rounded-[10px] space-y-1.5 transition-all duration-500 ease-out', classStatus)}
            >
              <div className='flex items-center justify-between relative'>
                <h3 className='font-medium text-xs leading-[15px] -tracking-[0.5%] text-[#333333]'>{item.title}</h3>
                {status === 'DANGER' && (
                  <div className='absolute right-0 -top-[3px]'>
                    <Info strokeWidth={1} fill='#FF5023' className='text-white' size={20} />
                  </div>
                )}
              </div>
              <div className='flex justify-end gap-[5px]'>
                <div className='w-[70px]'>
                  <input
                    id={item.name}
                    type='text'
                    value={item.value}
                    disabled={disabled}
                    onKeyDown={(e) => {
                      const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab']
                      if (!/[0-9.]/.test(e.key) && !allowedKeys.includes(e.key)) {
                        e.preventDefault()
                      }
                    }}
                    onChange={(e) => {
                      const rawValue = e.target.value

                      const numericValue = rawValue.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')

                      handleValueChange(item.id, numericValue === '' ? 0 : parseFloat(numericValue))
                    }}
                    className='max-w-[100%] w-auto bg-transparent rounded-[10px] py-1 px-2 focus:outline-none text-right'
                  />
                </div>
                <span className={cn('font-bold text-base -tracking-[0.5%] shrink-0', textClass)}>{item.unit}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DGAInput
