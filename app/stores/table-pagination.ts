import { create } from 'zustand'

interface IPaginationState {
  pageNo: number
  pageSize: number
}

interface TablePaginationStore {
  // State: key là base route (vd: "customers"), value là pagination state
  paginationMap: Record<string, IPaginationState>

  // Track last active route để detect khi chuyển module
  lastActiveRoute: string | null

  // Actions
  setPageNo: (baseRoute: string, pageNo: number) => void
  setPageSize: (baseRoute: string, pageSize: number) => void
  getPagination: (baseRoute: string) => IPaginationState | undefined
  clearPagination: (baseRoute: string) => void
  clearAllPagination: () => void
  setLastActiveRoute: (route: string) => void
}

/**
 * Zustand store để quản lý pagination state
 * - Lưu trong memory (không persist)
 * - Mỗi base route có pagination riêng
 * - Reset khi refresh hoặc đóng browser
 */
export const useTablePaginationStore = create<TablePaginationStore>((set, get) => ({
  paginationMap: {},
  lastActiveRoute: null,

  setPageNo: (baseRoute: string, pageNo: number) => {
    set((state) => ({
      paginationMap: {
        ...state.paginationMap,
        [baseRoute]: {
          pageNo: pageNo,
          pageSize: state.paginationMap[baseRoute]?.pageSize ?? 10
        }
      }
    }))
  },

  setPageSize: (baseRoute: string, pageSize: number) => {
    set((state) => ({
      paginationMap: {
        ...state.paginationMap,
        [baseRoute]: {
          pageNo: state.paginationMap[baseRoute]?.pageNo ?? 0,
          pageSize
        }
      }
    }))
  },

  getPagination: (baseRoute: string) => {
    return get().paginationMap[baseRoute]
  },

  clearPagination: (baseRoute: string) => {
    set((state) => {
      const newMap = { ...state.paginationMap }
      delete newMap[baseRoute]
      return { paginationMap: newMap }
    })
  },

  clearAllPagination: () => {
    set({ paginationMap: {}, lastActiveRoute: null })
  },

  setLastActiveRoute: (route: string) => {
    set({ lastActiveRoute: route })
  }
}))
