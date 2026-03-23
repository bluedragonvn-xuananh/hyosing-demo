import clsx from 'clsx'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { commonHelper } from '~/helpers'

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from '../ui/pagination'

interface IPaginationCustomProps {
  pageIndex?: number
  totalPages?: number
  isPaginationScroll?: boolean
  classNamePagination?: string
  isShowEllipsis?: boolean
  maxPageItemToShow?: number
  isShowTotalPage?: boolean
  onChangePageIndex?: (pageIndex: number) => void
}

const PaginationCustom = ({
  pageIndex = 0,
  totalPages = 0,
  isPaginationScroll = false,
  isShowEllipsis = false,
  isShowTotalPage = true,
  maxPageItemToShow,
  classNamePagination = '',
  onChangePageIndex
}: IPaginationCustomProps) => {
  const maxPagesToShow = maxPageItemToShow || 5

  const renderPageLinks = () => {
    const pages = []
    const maxPagesToShow = maxPageItemToShow || 5
    const startPage = Math.max(0, Number(pageIndex) - Math.floor(maxPagesToShow / 2))
    const endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1)

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink
            className={clsx(
              `text-base rounded-[99px] w-12 h-[31px] ${i === pageIndex ? 'border-2 border-[#E5E7EB]' : ''}`
            )}
            href='#'
            isActive={i === pageIndex}
            onClick={(e) => {
              e.preventDefault()
              if (isPaginationScroll) {
                commonHelper.scrollToTop()
              }
              onChangePageIndex?.(i)
            }}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      )
    }

    return pages
  }

  const onFirstPage = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault()
    if (isPaginationScroll) {
      commonHelper.scrollToTop()
    }
    if (pageIndex > 0) onChangePageIndex?.(0)
  }

  const onLastPage = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault()
    if (isPaginationScroll) {
      commonHelper.scrollToTop()
    }
    if (pageIndex < totalPages - 1) onChangePageIndex?.(totalPages - 1)
  }

  const onPrevPage = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault()
    if (isPaginationScroll) {
      commonHelper.scrollToTop()
    }
    if (pageIndex > 0) onChangePageIndex?.(pageIndex - 1)
  }

  const onNextPage = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault()
    if (isPaginationScroll) {
      commonHelper.scrollToTop()
    }
    if (pageIndex < totalPages - 1) onChangePageIndex?.(pageIndex + 1)
  }

  return (
    <>
      {/* Show current page */}
      {isShowTotalPage && (
        <div className='flex justify-end items-center mt-4'>
          <span className='font-medium text-lg text-(--main-02) mr-1'>{pageIndex + 1}</span>
          <span className='font-medium text-lg -tracking-[0.01rem] text-(--gray-03)'>/</span>
          <span className='font-medium text-lg -tracking-[0.01rem] text-(--gray-03)'>{totalPages}</span>
        </div>
      )}
      <Pagination className={clsx('sticky bottom-0 w-full p-1 justify-end mt-2', classNamePagination)}>
        <PaginationContent>
          {!isShowEllipsis && pageIndex > 0 && (
            <PaginationItem>
              <ChevronsLeft
                onClick={(e) => onFirstPage(e)}
                className={clsx('cursor-pointer', `${pageIndex === 0 ? 'pointer-events-none opacity-50' : ''}`)}
              />
            </PaginationItem>
          )}
          <PaginationItem>
            <ChevronLeft
              onClick={(e) => onPrevPage(e)}
              className={clsx('cursor-pointer', `${pageIndex === 0 ? 'pointer-events-none opacity-50' : ''}`)}
            />
          </PaginationItem>
          {renderPageLinks()}
          {isShowEllipsis && totalPages > maxPagesToShow && pageIndex < totalPages - 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <ChevronRight
              onClick={(e) => onNextPage(e)}
              className={clsx(
                'cursor-pointer',
                `${pageIndex >= totalPages - 1 ? 'pointer-events-none opacity-50' : ''}`
              )}
            />
          </PaginationItem>
          {!isShowEllipsis && (
            <PaginationItem>
              <ChevronsRight
                onClick={(e) => onLastPage(e)}
                className={clsx(
                  'cursor-pointer',
                  `${pageIndex >= totalPages - 1 ? 'pointer-events-none opacity-50' : ''}`
                )}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default PaginationCustom
