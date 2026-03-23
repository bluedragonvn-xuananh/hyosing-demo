import TableCustom from '~/components/customs/table-custom'
import { MOCK_DATA } from '~/constants'
import employerHelper from '~/helpers/table/employer.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import { useTablePagination } from '~/hooks/use-table-pagination'

// Initial filter
const INITIAL_FILTER = {
  PAGE_NUMBER: 0,
  LIMIT_ITEM_PER_PAGE: 10
}

const CompanyWorkerTable = () => {
  const { t } = useAppTranslations()

  const [pageNo, pageSize, setPageNo, setPageSize] = useTablePagination(
    INITIAL_FILTER.PAGE_NUMBER,
    INITIAL_FILTER.LIMIT_ITEM_PER_PAGE
  )

  return (
    <div className='relative'>
      <TableCustom
        classNameCoverTable='rounded-[8px]'
        columns={employerHelper.getTableCompanyWorkerContent(t)}
        data={MOCK_DATA.GET_LIST_COMPANY_WORKER()}
        loading={false}
        pageIndex={pageNo}
        setPageIndex={setPageNo}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalElements={MOCK_DATA.GET_LIST_COMPANY_WORKER().length}
        totalPages={1}
        maxPageItemToShow={1}
      />
    </div>
  )
}

export default CompanyWorkerTable
