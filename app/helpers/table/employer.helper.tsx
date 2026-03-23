import type { ColumnDef } from '@tanstack/react-table'
import ContentBody from '~/components/tables/content-body'
// import { dateHelper } from '@/helpers/date.helper'
import TitleHead from '~/components/tables/title-head'
import { DATA, DATE, TRANSLATE_KEYS } from '~/constants'
import { type IAppTranslations, eEmployerCompanyWorkerTableKey, eEmployerManagementTableKey } from '~/types'

import { commonHelper } from '../common.helper'
import { dateHelper } from '../date.helper'

const employerHelper = {
  getTableContent: (t: IAppTranslations) => {
    // Columns colEmployerNumber
    const colEmployerNumber: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.EmployerNumber,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.employerNumber')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.EmployerNumber) ?? '-'} />
      }
    }

    // Columns colEmployerEmail
    const colEmployerEmail: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.Email,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.email')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.Email) ?? '-'} />
      }
    }

    // Columns colEmployerContact
    const colEmployerContact: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.Contact,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.contact')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.Contact) ?? '-'} />
      }
    }

    // Columns colEmployerRepresentativeName
    const colEmployerRepresentativeName: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.RepresentativeName,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.representativeName')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.RepresentativeName) ?? '-'} />
      }
    }

    // Columns colEmployerNumberAffiliatedCompany
    const colEmployerNumberAffiliatedCompany: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.NumberAffiliatedCompany,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.numberAffiliatedCompany')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.NumberAffiliatedCompany) ?? '-'} />
      }
    }

    // Columns colEmployerNumberAffiliatedWorkLocation
    const colEmployerNumberAffiliatedWorkLocation: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.NumberAffiliatedWorkLocation,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.numberAffiliatedWorkLocation')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.NumberAffiliatedWorkLocation) ?? '-'} />
      }
    }

    // Columns colTotalEmployees
    const colTotalEmployees: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.TotalEmployees,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.totalEmployees')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerManagementTableKey.TotalEmployees) ?? '-'} />
      }
    }

    // Columns colStatus
    const colStatus: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.Status,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.status')} />
      },
      cell: ({ row }) => {
        const statusValue = row.getValue(eEmployerManagementTableKey.Status) as string
        const statusItem = commonHelper.getSingleItemFromArray(statusValue, DATA.GET_EMPLOYER_STATUS(t))
        const statusResult = statusItem ? statusItem.label : '-'

        return <ContentBody content={statusResult} />
      },
      size: 100
    }

    // Columns colDateRegistration
    const colDateRegistration: ColumnDef<any> = {
      accessorKey: eEmployerManagementTableKey.DateRegistration,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerManagement.dateRegistration')} />
      },
      cell: ({ row }) => {
        const registrationDate = row.getValue(eEmployerManagementTableKey.DateRegistration) as string
        const registrationDateResult = registrationDate
          ? `${dateHelper.formatDate(registrationDate, DATE.DATE_FORMAT_V3)}`
          : '-'

        return <ContentBody content={registrationDateResult} />
      }
    }

    // Base order (without off status col)
    const columns = [
      colEmployerNumber,
      colEmployerEmail,
      colEmployerContact,
      colEmployerRepresentativeName,
      colEmployerNumberAffiliatedCompany,
      colEmployerNumberAffiliatedWorkLocation,
      colTotalEmployees,
      colStatus,
      colDateRegistration
    ]

    return columns
  },
  getTableCompanyWorkerContent: (t: IAppTranslations) => {
    // Columns colLocation
    const colLocation: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.WorkLocation,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.workLocation')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerCompanyWorkerTableKey.WorkLocation) ?? '-'} />
      }
    }

    // Columns colAddress
    const colAddress: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.WorkAddress,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.workAddress')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerCompanyWorkerTableKey.WorkAddress) ?? '-'} />
      }
    }

    // Columns colPayDate
    const colPayDate: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.PayDate,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.workAddress')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerCompanyWorkerTableKey.PayDate) ?? '-'} />
      },
      size: 130
    }

    // Columns colEmployerContact
    const colEmployerContact: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.Contact,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.contact')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerCompanyWorkerTableKey.Contact) ?? '-'} />
      },
      size: 130
    }

    // Columns colTotalEmployees
    const colTotalEmployees: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.TotalEmployees,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.totalEmployees')} />
      },
      cell: ({ row }) => {
        return <ContentBody content={row.getValue(eEmployerCompanyWorkerTableKey.TotalEmployees) ?? '-'} />
      },
      size: 70
    }

    // Columns colStatus
    const colStatus: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.Status,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.status')} />
      },
      cell: ({ row }) => {
        const statusValue = row.getValue(eEmployerCompanyWorkerTableKey.Status) as string
        const statusItem = commonHelper.getSingleItemFromArray(statusValue, DATA.GET_EMPLOYER_STATUS(t))
        const statusResult = statusItem ? statusItem.label : '-'

        return <ContentBody content={statusResult} />
      },
      size: 70
    }

    // Columns colDateRegistration
    const colDateRegistration: ColumnDef<any> = {
      accessorKey: eEmployerCompanyWorkerTableKey.DateRegistration,
      header: ({ column }) => {
        return <TitleHead title={t(TRANSLATE_KEYS.TABLE, 'employerCompanyWorker.dateRegistration')} />
      },
      cell: ({ row }) => {
        const registrationDate = row.getValue(eEmployerCompanyWorkerTableKey.DateRegistration) as string
        const registrationDateResult = registrationDate
          ? `${dateHelper.formatDate(registrationDate, DATE.DATE_FORMAT_DOT)}`
          : '-'

        return <ContentBody content={registrationDateResult} />
      },
      size: 70
    }

    // Base order (without off status col)
    const columns = [
      colLocation,
      colAddress,
      colEmployerContact,
      colPayDate,
      colTotalEmployees,
      colStatus,
      colDateRegistration
    ]

    return columns
  }
}

export default employerHelper
