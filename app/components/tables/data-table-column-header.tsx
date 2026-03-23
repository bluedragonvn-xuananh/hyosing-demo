import type { Column } from '@tanstack/react-table'
import { ChevronDownIconCustom } from '~/assets/icons'
import { cn } from '~/lib/utils'

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  const sorted = column.getIsSorted()

  const handleSort = () => {
    column.toggleSorting(sorted === 'asc')
  }

  return (
    <section className={cn('flex items-center select-none', className)} onClick={handleSort}>
      <span>{title}</span>
      <ChevronDownIconCustom
        className={cn(
          '!w-5 !h-5 transition-transform duration-200 text-black-main shrink-0',
          sorted === 'asc' && 'rotate-180'
        )}
      />
    </section>
  )
}
