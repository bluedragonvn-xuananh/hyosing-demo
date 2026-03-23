import { useState } from 'react'

import { useNavigate } from 'react-router'
import Banner from '~/components/common/banner'
import TableCustom from '~/components/customs/table-custom'
import { MOCK_DATA, TRANSLATE_KEYS } from '~/constants'
import type { EmployerFilterSchemaType } from '~/helpers'
import employerHelper from '~/helpers/table/employer.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import { useTablePagination } from '~/hooks/use-table-pagination'

import FilterForm from './components/filter-form'

export function meta() {
  return [
    { title: 'HYOSUNG Heavy Industries' },
    { name: 'HYOSUNG Heavy Industries', content: 'Welcome to HYOSUNG Heavy Industries' }
  ]
}

// Initial filter
const INITIAL_FILTER = {
  PAGE_NUMBER: 0,
  LIMIT_ITEM_PER_PAGE: 10
}

const EmployerManagementPage = () => {
  const { t } = useAppTranslations()
  const navigate = useNavigate()

  const [pageNo, pageSize, setPageNo, setPageSize] = useTablePagination(
    INITIAL_FILTER.PAGE_NUMBER,
    INITIAL_FILTER.LIMIT_ITEM_PER_PAGE
  )

  const [filter, setFilter] = useState<EmployerFilterSchemaType>()
  const [alreadyFilterData, setAlreadyFilterData] = useState<EmployerFilterSchemaType>()

  // const employerQuery = useQuery({
  //   queryKey: [
  //     QUERY_KEYS.CUSTOMER_KEY.SEARCH,
  //     pageNo,
  //     pageSize,
  //     filter.searchType,
  //     filter.status,
  //     userRole,
  //     currentUserLoggedIn?.data?.customerId,
  //   ],
  //   queryFn: () =>
  //     CustomerService.getCustomerManagement({
  //       page: pageNo,
  //       pageSize: pageSize,
  //       name:
  //         filter.customerIdAndCustomerName && filter.customerIdAndCustomerName?.length > 0
  //           ? filter.searchType
  //           : undefined,
  //       status: filter.status === eCustomerStatus.All ? undefined : filter.status,
  //       ...(customerIdParam != null ? { id: Number(customerIdParam) } : {}),
  //     }),
  //   enabled: isAdmin || (currentUserLoggedIn != null && !isMeLoading),
  //   placeholderData: keepPreviousData,
  // })

  // const isFetchingData = employerQuery?.isFetching
  // const customerManagementData = employerQuery?.data

  //  const customerTableData = useMemo(() => {
  //   if (!customerManagementData || employerQuery.isLoading) return []
  //   const customerList = customerManagementData?.data.content.map((item) => mapCustomerSearchItem(item))
  //   return customerList?.map((item) => ({ ...item, contact: item.contact?.ceo_phone || null, modelCount: 0 }))
  // }, [customerManagementData, employerQuery.isLoading])

  return (
    <section className='space-y-8'>
      <Banner title={`${t(TRANSLATE_KEYS.TITLE, 'employerManagementListing')}`} />

      <FilterForm
        setFilter={setFilter}
        alreadyFilterData={alreadyFilterData}
        setAlreadyFilterData={setAlreadyFilterData}
        setPageNo={setPageNo}
        // onSearchSubmit={() => queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CUSTOMER_KEY.SEARCH] })}
        // isFetchingData={isFetchingData}
      />

      {/* Table list */}
      <div>
        <div className='p-4 gap-0 font-semibold text-base leading-5 border border-[#EAEFF4] rounded-tl-[12px] rounded-tr-[12px] bg-white'>
          전체 ({MOCK_DATA.GET_LIST_EMPLOYER().length})
        </div>

        <div className='relative'>
          <TableCustom
            classNameCoverTable='border-t-0 rounded-bl-[12px] rounded-br-[12px]'
            columns={employerHelper.getTableContent(t)}
            data={MOCK_DATA.GET_LIST_EMPLOYER()}
            loading={false}
            pageIndex={pageNo}
            setPageIndex={setPageNo}
            pageSize={pageSize}
            setPageSize={setPageSize}
            totalElements={MOCK_DATA.GET_LIST_EMPLOYER().length}
            totalPages={1}
            maxPageItemToShow={1}
          />
        </div>
      </div>
    </section>
  )
}

export default EmployerManagementPage
