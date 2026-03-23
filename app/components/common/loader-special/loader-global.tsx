import SpecialSpinner from './loader-special'

const LoaderGlobal = () => {
  return (
    <>
      <div className='fixed inset-0 backdrop-blur-[2px] rounded-[20px] z-99'></div>
      <div
        className='fixed w-[295px] p-9 bg-white rounded-[10px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]
 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-999'
      >
        <div className='flex justify-center mb-2.5'>
          <SpecialSpinner />
        </div>
        <div className='text-lg leading-[30px] -tracking-[0.5%] font-semibold text-[#333333] text-center'>
          잠시만 기다려주세요.
          <br />
          AI 예측을 실행 중입니다.
        </div>
      </div>
    </>
  )
}

export default LoaderGlobal
