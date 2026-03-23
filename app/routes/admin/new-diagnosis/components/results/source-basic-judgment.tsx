import { FolderIcon } from '~/assets/icons'
import { cn } from '~/lib/utils'

interface SourceBasicJudgmentProps {
  response?: any
}

const SourceBasicJudgment = ({ response }: SourceBasicJudgmentProps) => {
  const sourceBasicData = response?.source_judgment || null

  return (
    <div className='border border-[#DADDE6] rounded-[10px] p-4 bg-white  min-h-[108px] '>
      {/* Title */}
      <div className='flex items-center gap-2.5 mb-[20px]'>
        <FolderIcon className='w-[20px] h-[20px]' />
        <h3 className='font-bold text-[#333333] text-base leading-5 -tracking-[0.5%]'>판정 근거 출처</h3>
      </div>

      {/* Content */}
      <div className='grid grid-cols-4 gap-[15px]'>
        {/* 점검 문서 */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-[#F6F6F9] transition-all duration-500 ease-out',
            response && 'cursor-pointer hover:border-[#0062FF] hover:bg-[#E2F0F9] '
          )}
        >
          <h3 className='font-bold text-[#0062FF] text-sm leading-5 -tracking-[0.5%]'>점검 문서</h3>
          <div className='space-y-[5px] min-h-[60px]'>
            {!sourceBasicData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {sourceBasicData && sourceBasicData.inspect_document && (
              <>
                <div className='font-bold text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
                  {sourceBasicData?.inspect_document?.value}
                </div>
                <div className='flex items-center gap-[5px]'>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.inspect_document?.desc_1}
                  </span>
                  <span className='text-[#333333]'>·</span>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.inspect_document?.desc_2}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 판정 기준 */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-[#F6F6F9] transition-all duration-500 ease-out',
            response && 'cursor-pointer hover:border-[#0062FF] hover:bg-[#E2F0F9] '
          )}
        >
          <h3 className='font-bold text-[#0062FF] text-sm leading-5 -tracking-[0.5%]'>판정 기준</h3>
          <div className='space-y-[5px] min-h-[60px]'>
            {!sourceBasicData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {sourceBasicData && sourceBasicData.judgment_cretiria && (
              <>
                <div className='font-bold text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
                  {sourceBasicData?.judgment_cretiria?.value}
                </div>
                <div className='flex items-center gap-[5px]'>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.judgment_cretiria?.desc_1}
                  </span>
                  <span className='text-[#333333]'>·</span>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.judgment_cretiria?.desc_2}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 온톨로지 */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-[#F6F6F9] transition-all duration-500 ease-out',
            response && 'cursor-pointer hover:border-[#0062FF] hover:bg-[#E2F0F9] '
          )}
        >
          <h3 className='font-bold text-[#0062FF] text-sm leading-5 -tracking-[0.5%]'>온톨로지</h3>
          <div className='space-y-[5px] min-h-[60px]'>
            {!sourceBasicData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {sourceBasicData && sourceBasicData.ontology && (
              <>
                <div className='font-bold text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
                  {sourceBasicData?.ontology?.value}
                </div>
                <div className='flex items-center gap-[5px]'>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.ontology?.desc_1}
                  </span>
                  <span className='text-[#333333]'>·</span>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.ontology?.desc_2}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* 유사 사례 */}
        <div
          className={cn(
            'border border-[#DADDE6] rounded-[10px] p-4 space-y-[5px] bg-[#F6F6F9] transition-all duration-500 ease-out',
            response && 'cursor-pointer hover:border-[#0062FF] hover:bg-[#E2F0F9] '
          )}
        >
          <h3 className='font-bold text-[#0062FF] text-sm leading-5 -tracking-[0.5%]'>유사 사례</h3>
          <div className='space-y-[5px] min-h-[60px]'>
            {!sourceBasicData && (
              <div className='min-h-[50px] flex justify-center items-center'>
                <p className='font-light text-sm leading-5 -tracking-[0.5%] text-[#959595]'>데이터 없음</p>
              </div>
            )}

            {sourceBasicData && sourceBasicData.similar_cases && (
              <>
                <div className='font-bold text-sm leading-5 -tracking-[0.5%] text-[#333333]'>
                  {sourceBasicData?.similar_cases?.value}
                </div>
                <div className='flex items-center gap-[5px]'>
                  <span className='text-xs leading-[15px] -tracking-[0.5%] text-[#959595]'>
                    {sourceBasicData?.similar_cases?.desc_1}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SourceBasicJudgment
