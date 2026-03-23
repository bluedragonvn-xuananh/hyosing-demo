import MetrixItem from './metrix-item'

export interface MetricItem {
  id: number
  label: string
  percentage: number
  metadata?: string
}

interface MetricsListProps {
  items: MetricItem[]
}

export function MetricsList({ items }: MetricsListProps) {
  return (
    <div className='space-y-[15px]'>
      {items.map((item) => (
        <MetrixItem key={item.id} item={item} />
      ))}
    </div>
  )
}
