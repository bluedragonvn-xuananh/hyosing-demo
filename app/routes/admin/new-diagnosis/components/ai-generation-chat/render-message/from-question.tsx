interface IFromQuestion {
  messagePrompt: string
}

const FromQuestion = ({ messagePrompt }: IFromQuestion) => {
  return (
    <div className='flex justify-end'>
      <div className='bg-[#E2F0F9] text-[#333333] text-xs leading-[15px] font-light -tracking-[0.5%] p-2 rounded-[4px]'>
        {messagePrompt}
      </div>
    </div>
  )
}

export default FromQuestion
