import { Outlet } from 'react-router'

export function meta() {
  return [
    { title: 'HYOSUNG Heavy Industries' },
    { name: 'HYOSUNG Heavy Industries', content: 'Welcome to HYOSUNG Heavy Industries' }
  ]
}
const AuthLayout = () => {
  return <Outlet />
}

export default AuthLayout
