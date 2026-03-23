import { Navigate } from 'react-router'
import { ROUTES } from '~/constants'

const MainLayout = () => {
  return <Navigate to={`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.NEW_DIAGNOSIS}`} replace />
}

export default MainLayout
