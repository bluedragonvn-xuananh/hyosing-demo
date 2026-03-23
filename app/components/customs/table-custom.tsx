import { useState } from 'react'

import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import clsx from 'clsx'
import { DataTablePagination } from '~/components/tables/data-table-pagination'
import { Skeleton } from '~/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import { cn } from '~/lib/utils'

import { Spinner } from '../ui/spiner'
import PaginationCustom from './pagination-custom'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  classNameCoverTable?: string
  classNameTable?: string
  loading?: boolean
  skeletonLength?: number
  maxHeightClass?: string
  classNameTableHeader?: string
  classNameTableHead?: string
  classNameTableRow?: string
  classNameTableCell?: string
  textNoResult?: string
  pageIndex?: number
  pageSize?: number
  totalPages?: number
  totalElements?: number
  maxPageItemToShow?: number
  setPageIndex?: (pageIndex: number) => void
  setPageSize?: (pageSize: number) => void
  onActionRow?: (data?: any) => void
}

const TableCustom = <TData, TValue>({
  columns,
  data,
  classNameCoverTable,
  classNameTable,
  loading,
  skeletonLength = 9,
  maxHeightClass,
  onActionRow,
  classNameTableHeader,
  classNameTableHead,
  classNameTableRow,
  classNameTableCell,
  textNoResult = 'No result!',
  totalElements = 0,
  pageSize = 0,
  pageIndex = 0,
  totalPages = 0,
  setPageIndex,
  maxPageItemToShow
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })
  const skeletonRows = Array.from({ length: skeletonLength })

  return (
    <section className='flex flex-col gap-[30px]'>
      <section className={cn('border border-[#EAEFF4] overflow-hidden relative', classNameCoverTable)}>
        {loading && (
          <Spinner className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 size-6 z-30' />
        )}
        <Table className={clsx('table-fixed bg-white', classNameTable)} classNameWrapperTable={maxHeightClass}>
          <TableHeader className={cn('bg-[#F8F8FA] shadow-none', classNameTableHeader)}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className='[&>th:last-child]:border-r-0'>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn('border-b border-b-[#F8F8FA] h-[42px]', classNameTableHead)}
                      style={{ width: header.column.getSize() }}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              skeletonRows.map((_, i) => (
                <TableRow key={`skeleton-${i}`} className={cn(classNameTableRow)}>
                  {columns.map((_, j) => (
                    <TableCell
                      key={`skeleton-cell-${j}`}
                      className={cn('border-b border-b-[#EAEFF4]', classNameTableCell)}
                    >
                      <Skeleton className='h-3' />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={clsx(`${onActionRow ? 'cursor-pointer' : ''}`, classNameTableRow)}
                  onClick={() => onActionRow?.(row?.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className={cn('border-b border-b-[#EAEFF4]', classNameTableCell)}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center !border-r-[3px] !border-r-light-gray !border-b !border-b-light-gray'
                >
                  {textNoResult}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      {!!data?.length && totalElements >= pageSize + 1 && <DataTablePagination table={table} />}
      {/* {!!data?.length && totalElements >= pageSize + 1 && (
        <div>
          <PaginationCustom
            pageIndex={pageIndex}
            totalPages={totalPages}
            onChangePageIndex={setPageIndex}
            maxPageItemToShow={maxPageItemToShow}
          />
        </div>
      )} */}
    </section>
  )
}

export default TableCustom
