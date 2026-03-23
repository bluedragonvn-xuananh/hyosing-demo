import { Navigate } from 'react-router'
import { ROUTES } from '~/constants'

const DashboardPage = () => {
  return <Navigate to={`/${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.NEW_DIAGNOSIS}`} replace />
}

export default DashboardPage
