import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export const dateHelper = {
  formatDate: (date: Date | string | dayjs.Dayjs | undefined, formatString: string | undefined) => {
    if (!date) return
    return dayjs(date).format(formatString)
  },
  formatDateDetail: (
    startDate: Date | string | dayjs.Dayjs | undefined,
    endDate: Date | string | dayjs.Dayjs | undefined
  ) => {
    if (!startDate || !endDate) return ''
    const format = (d: dayjs.Dayjs) => {
      const day = d.date()
      const month = d.month() + 1
      const year = d.year()
      return `${year}년 ${month}월 ${day}일`
    }
    const start = dayjs(startDate)
    const end = dayjs(endDate)
    return `${format(start)} - ${format(end)}`
  }

  //   formatDateWithTimezone: (
  //     date: Date | string | dayjs.Dayjs | undefined,
  //     formatString: string | undefined,
  //     timeZoneId?: string | null
  //   ) => {
  //     if (!date) return '-'
  //     try {
  //       const dayjsObj = dayjs(date)
  //       if (timeZoneId) {
  //         return dayjsObj.tz(timeZoneId).format(formatString)
  //       }
  //       return dayjsObj.format(formatString)
  //     } catch {
  //       return dayjs(date).format(formatString) || '-'
  //     }
  //   },
}
