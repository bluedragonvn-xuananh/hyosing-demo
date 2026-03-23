import { Outlet } from 'react-router'
import Header from '~/components/common/header'
import { AppSidebar } from '~/components/common/sidebar/app-sidebar'
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar'
import { useActiveSidebarTitle } from '~/hooks/use-active-sidebar-title'

export function meta() {
  return [
    { title: 'HYOSUNG Heavy Industries' },
    { name: 'HYOSUNG Heavy Industries', content: 'Welcome to HYOSUNG Heavy Industries' }
  ]
}

const DashboardLayout = () => {
  const pageTitle = useActiveSidebarTitle()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='overflow-hidden'>
        <Header pageTitle={pageTitle} />
        <section className='mt-[var(--height-header)] relative w-full min-h-full overflow-hidden bg-[#E3E5EC]/15'>
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
