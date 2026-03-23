import clsx from 'clsx'

interface IContentBodyProps {
  content?: string | number
  className?: string
  onAction?: () => void
}
const ContentBody = ({ content, className, onAction }: IContentBodyProps) => {
  return (
    <p className={clsx('leading-[20px] tracking-[-0.5%] text-black-main', className)} onClick={() => onAction?.()}>
      {content}
    </p>
  )
}

export default ContentBody
