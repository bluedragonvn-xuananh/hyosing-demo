import * as React from 'react'

import { NavMain } from '~/components/common/sidebar/nav-main'
import Trademark from '~/components/common/sidebar/trademark'
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '~/components/ui/sidebar'
import layoutHelper from '~/helpers/layout.helper'
import useAppTranslations from '~/hooks/use-app-translations'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useAppTranslations()

  return (
    <Sidebar collapsible='icon' {...props} className='shadow-[2px_0px_8px_0px_rgba(0,0,0,0.25)] z-99'>
      <SidebarHeader className='px-[30px] py-5 bg-[#F6F6F9]'>
        <Trademark />
      </SidebarHeader>
      <SidebarContent className='scrollbar-hide bg-[#F6F6F9]'>
        <NavMain sidebarMenu={layoutHelper.getSidebarMenu(t)} />
      </SidebarContent>
      <SidebarRail />
      <div className='bg-[#E3E5EC]/15 px-[30px] py-5 border-t border-[#E3E5EC]'>
        <p className='text-center text-sm leading-5 -tracking-[0.5%] text-[#333333] font-bold'>홍길동</p>
        <p className='text-center text-sm leading-5 -tracking-[0.5%] text-[#959595] font-light'>설비관리팀</p>
      </div>
    </Sidebar>
  )
}
