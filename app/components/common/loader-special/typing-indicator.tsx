const TypingIndicatorLoading = () => {
  return (
    <div className='flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg w-fit'>
      <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]' />
      <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]' />
      <span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' />
    </div>
  )
}

export default TypingIndicatorLoading
