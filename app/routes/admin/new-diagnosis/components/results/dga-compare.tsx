import { SearchCompareIcon } from '~/assets/icons'
import { cn } from '~/lib/utils'

interface DGACompareProps {
  response?: any
}

const DGACompare = ({ response }: DGACompareProps) => {
  const dgaCompareData = response?.dga_compare || null

  return (
    <div className='border border-[#DADDE6] rounded-[10px] p-4 bg-white min-h-[108px] flex flex-col'>
      {/* Title */}
      <div className='flex items-center gap-2.5 mb-[20px]'>
        <SearchCompareIcon className='w-[20px] h-[20px]' />
        <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>DGA 비교표</h3>
      </div>

      {/* Content */}
      <div className='flex-1 h-full'>
        <table className='w-full h-full'>
          <thead className='bg-[#F6F6F9]'>
            <tr>
              <th className='p-[5px]'>
                <span className='text-sm leading-5 -tracking-[0.5%] font-semibold text-[#333333]'>가스</span>
              </th>
              <th className='p-[5px]'>
                <span className='text-sm leading-5 -tracking-[0.5%] font-semibold text-[#333333]'>입력값</span>
              </th>
              <th className='p-[5px]'>
                <span className='text-sm leading-5 -tracking-[0.5%] font-semibold text-[#333333]'>기준치</span>
              </th>
              <th className='p-[5px]'>
                <span className='text-sm leading-5 -tracking-[0.5%] font-semibold text-[#333333]'>상태</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Without data */}
            {!dgaCompareData && (
              <tr>
                <td colSpan={4} className='px-4 py-11 text-center border-b border-[#E3E5EC]'>
                  <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
                </td>
              </tr>
            )}

            {dgaCompareData &&
              dgaCompareData?.length > 0 &&
              dgaCompareData.map((item: any) => {
                const statusName = item.status === 'CAUTION' ? '위험' : item.status === 'WARNING' ? '주의' : '정상'
                const statusClass =
                  item.status === 'CAUTION'
                    ? 'text-[#FF0000] bg-[#FFEBEA]'
                    : item.status === 'WARNING'
                      ? 'text-[#FF5E00] bg-[#FFF1D4]'
                      : 'text-[#0062FF] bg-[#EEF8FF]'

                return (
                  <tr className='border-b border-[#E3E5EC] last:border-0' key={item.id}>
                    <td className='p-[5px] text-center'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-light text-[#333333]'>{item.name}</span>
                    </td>
                    <td className='p-[5px] text-center'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-light text-[#333333]'>
                        {item.actual}
                      </span>
                    </td>
                    <td className='p-[5px] text-center'>
                      <span className='text-sm leading-5 -tracking-[0.5%] font-light text-[#333333]'>
                        {item.standard}
                      </span>
                    </td>
                    <td className='p-[5px] text-center'>
                      <div
                        className={cn(
                          'rounded-[4px] px-1 py-0.5 inline-block text-xs leading-[15px] -tracking-[0.5%] text-[#0062FF] bg-[#E3F5FF]',
                          statusClass
                        )}
                      >
                        {statusName}
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DGACompare
