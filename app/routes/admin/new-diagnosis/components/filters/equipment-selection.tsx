import { EQUIPMENT_SELECTION_SAMPLE_DATA } from '~/constants/hyosung-api.contant'
import { cn } from '~/lib/utils'

interface IEquipmentSelectionProps {
  equipmentSelected: string | null
  setEquipmentSelected: React.Dispatch<React.SetStateAction<string | null>>
}

const EquipmentSelection = ({ equipmentSelected, setEquipmentSelected }: IEquipmentSelectionProps) => {
  const handleSelectEquipment = (id: string) => {
    if (id === equipmentSelected) {
      setEquipmentSelected(null)
    } else {
      setEquipmentSelected(id)
    }
  }

  return (
    <div className='space-y-2.5'>
      {/* Title */}
      <div className='flex items-center gap-[15px]'>
        <div className='font-bold text-base leading-5 -tracking-[0.5%] text-[#333333] inline-block'>설비 선택</div>
        <div className='flex-1 border-b border-[#E3E5EC]'></div>
      </div>

      {/* Content */}
      <div className='space-y-2.5'>
        {EQUIPMENT_SELECTION_SAMPLE_DATA.map((item, index) => {
          let classStatus

          switch (item.code) {
            case 'EQUIPMENT_A':
              classStatus = 'text-[#FF5E00] bg-[#FFF1D4]'
              break
            case 'EQUIPMENT_B':
              classStatus = 'text-[#0062FF] bg-[#EEF8FF]'
              break
            case 'EQUIPMENT_C':
              classStatus = 'text-[#FF0000] bg-[#FFEBEA]'
              break
            default:
              classStatus = 'text-gray-500 bg-gray-100'
              break
          }

          const isSelected = equipmentSelected === item.title

          return (
            <div
              key={index}
              className={cn(
                'p-3 bg-white rounded-[10px] border border-[#DADDE6] space-y-[5px] cursor-pointer transition-all duration-300 ease-out',
                isSelected && 'border-[#0062FF] bg-[#E2F0F9] shadow-[0px_0px_8px_0px_rgba(0,98,255,0.25)]'
              )}
              onClick={() => handleSelectEquipment(item.title)}
            >
              <div className='flex items-start justify-between'>
                <h2 className='text-sm leading-5 -tracking-[0.5%] font-bold text-[#333333]'>{item.title}</h2>
                <span
                  className={cn(
                    'inline-block px-1 py-0.5  text-xs leading-[15px] -tracking-[0.5%] font-medium rounded-[4px]',
                    classStatus
                  )}
                >
                  {item.status}
                </span>
              </div>

              <h3 className='text-[#333333] font-light text-sm leading-5 -tracking-[0.5%]'>{item.range}</h3>

              <div className='flex items-center gap-[5px]'>
                <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>{item.valueK}</span>
                <span className='text-[#333333]'>·</span>
                <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>{item.valueM}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EquipmentSelection
