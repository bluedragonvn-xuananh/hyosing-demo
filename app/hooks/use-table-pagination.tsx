import { useEffect, useState } from 'react'

import { useLocation } from 'react-router'
import { useTablePaginationStore } from '~/stores/table-pagination'

export const useTablePagination = (
  initialPageNo: number = 0,
  initialPageSize: number = 10
): [number, number, (page: number) => void, (size: number) => void] => {
  const location = useLocation()
  const store = useTablePaginationStore()

  const getBaseRoute = (pathname: string): string => {
    // const parts = pathname.split('/').filter(Boolean)

    // if (parts[0] !== 'admin' || parts.length < 2) {
    //   return pathname
    // }

    // return parts[1]
    return pathname
  }

  const currentBaseRoute = getBaseRoute(location.pathname)
  const lastActiveRoute = store.lastActiveRoute

  // Helper: Get initial values from store or default
  const getInitialPageNo = (): number => {
    // Change module (base route have defferent with last active) → reset
    if (lastActiveRoute && currentBaseRoute !== lastActiveRoute) {
      return initialPageNo
    }

    // Same module or first time → load data store
    const stored = store.getPagination(currentBaseRoute)
    return stored?.pageNo ?? initialPageNo
  }

  const getInitialPageSize = (): number => {
    // Change module → reset
    if (lastActiveRoute && currentBaseRoute !== lastActiveRoute) {
      return initialPageSize
    }

    // Same module or first time → load data store
    const stored = store.getPagination(currentBaseRoute)
    return stored?.pageSize ?? initialPageSize
  }

  // Initial state with value from store (sysn)
  const [pageNo, setPageNoState] = useState<number>(getInitialPageNo)
  const [pageSize, setPageSizeState] = useState<number>(getInitialPageSize)

  // Handle when route change
  useEffect(() => {
    // Change module → clear previous module
    if (lastActiveRoute && currentBaseRoute !== lastActiveRoute) {
      store.clearPagination(lastActiveRoute)
    }

    // Update last active route
    store.setLastActiveRoute(currentBaseRoute)

    // Change module feature → reset state
    if (lastActiveRoute && currentBaseRoute !== lastActiveRoute) {
      setPageNoState(initialPageNo)
      setPageSizeState(initialPageSize)
    }
  }, [currentBaseRoute, lastActiveRoute, initialPageNo, initialPageSize])

  // Save to store when pageIndex/pageSize changed
  useEffect(() => {
    store.setPageNo(currentBaseRoute, pageNo)
    store.setPageSize(currentBaseRoute, pageSize)
  }, [pageNo, pageSize, currentBaseRoute])

  const setPageNo = (page: number) => {
    setPageNoState(page)
  }

  const setPageSize = (size: number) => {
    setPageSizeState(size)
  }

  return [pageNo, pageSize, setPageNo, setPageSize]
}
