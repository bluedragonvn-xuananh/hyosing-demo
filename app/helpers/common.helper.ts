import type { IOption } from '~/types'

export const commonHelper = {
  formatMoney: (money: number = 0) => {
    const safeValue = isNaN(money) ? 0 : money
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    })
      .format(safeValue)
      .replace(/\s?₫/, 'đ')
  },

  formatPriceInput: (value?: string) => {
    const data = value?.replace(/,/g, '').replace(/\D/g, '')
    return {
      raw: data || '',
      formatted: data?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || ''
    }
  },

  copyToClipboard: async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  },

  isEmpty: (value: any) => {
    return (
      value === null || // null
      value === undefined || // undefined
      (typeof value === 'string' && value.trim() === '') || // chuỗi rỗng hoặc toàn dấu cách
      (Array.isArray(value) && value.length === 0) || // mảng rỗng []
      (typeof value === 'object' && Object.keys(value).length === 0) // object rỗng {}
    )
  },

  removeVietnameseTones: (str: string) => {
    if (!str) return ''
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
  },

  scrollToTop: () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  },

  /*
   * Convert array
   * From: object(label, value)[]
   * To: value[]
   */
  convertDataToStringArray(listData: IOption[]) {
    const resultSingleList = listData.map((item) => item.value)
    return resultSingleList
  },

  /*
   * Convert array
   * From: value[]
   * To: object(label, value)[]
   */
  convertDataToObjectArray(listStringData: string[], listObjectData: IOption[]) {
    const resultObjectList = listObjectData.filter((item) => listStringData?.includes(item?.value as string))

    return resultObjectList
  },

  /*
   * Get item from array
   * Key: value
   * Result: object(label, value)[]
   */
  getSingleItemFromArray(keyword: string, listObjectData: IOption[]) {
    const resultObjectItem = listObjectData.find((item) => item.value === keyword)

    return resultObjectItem
  },

  /*
   * Format value range
   */
  formatValueRange(value: number) {
    const rounded = Math.round(value * 100) / 100 // round to 2 decimals

    // if integer → keep .0
    if (Number.isInteger(rounded)) {
      return `${rounded}.0`
    }

    // if 1 decimal → keep it
    if (Number.isInteger(rounded * 10)) {
      return rounded.toFixed(1)
    }

    // otherwise → 2 decimals
    return rounded.toFixed(2)
  },

  /*
   * Fake API Request
   */
  fakeAPIRequest(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms))
  },
  /*
   * Fake chat id
   */
  generateUUID() {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      return crypto.randomUUID()
    }

    // fallback (not cryptographically strong, but fine for tab IDs)
    return 'id-' + Math.random().toString(36).substring(2) + Date.now()
  },
  /*
   * Steam text to create typewriter effect in chat response
   */
  streamText: async ({
    text,
    onUpdate,
    speed = 20,
    signal
  }: {
    text: string
    onUpdate: (length: number) => void // 👈 đổi sang length
    speed?: number
    signal?: AbortSignal
  }) => {
    for (let i = 0; i <= text.length; i++) {
      if (signal?.aborted) break

      onUpdate(i) // 👈 chỉ gửi length

      await new Promise((resolve) => setTimeout(resolve, speed))
    }
  }
}
