import clsx from 'clsx'
import { Link, useLocation } from 'react-router'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '~/components/ui/sidebar'
import type { ISidebarMenu } from '~/types'

export interface ISidebarMenuProps {
  sidebarMenu: ISidebarMenu[]
}

export function NavMain({ sidebarMenu }: ISidebarMenuProps) {
  const { openMobile, isMobile, setOpenMobile, state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  const location = useLocation()

  return (
    <SidebarGroup className={isCollapsed ? 'p-4' : 'p-5 border-t border-[#E3E5EC]'}>
      <p className='font-medium text-xs leading-[15px] -tracking-[0.5%] text-[#959595] mb-4'>메뉴</p>
      <SidebarMenu>
        {sidebarMenu.map((item) => {
          const isActive = location.pathname === item.url

          return (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton
                asChild
                data-active={isActive}
                className={clsx(
                  'data-[active=true]:bg-transparent data-[active=true]:text-[#0062FF] !px-0',
                  !isMobile && (isCollapsed ? 'h-[58px]' : 'h-[42px]')
                )}
              >
                <Link
                  to={item.url}
                  onClick={() => {
                    if (isMobile) setOpenMobile(!openMobile)
                  }}
                  className={clsx(
                    'flex items-center gap-3 w-full',
                    !isMobile && (isCollapsed ? 'flex-col' : 'flex-row')
                  )}
                >
                  {item.icon && !isActive && (
                    <item.icon
                      className={clsx(
                        isActive ? 'text-white' : 'text-[#373739]',
                        !isMobile && (isCollapsed ? '!size-4' : '!size-6')
                      )}
                    />
                  )}

                  {item.activeIcon && isActive && <item.activeIcon className='!w-6 !h-6' />}

                  <span
                    className={clsx(
                      'font-bold text-lg leading-[25px] -tracking-[0.5%]',
                      isActive ? 'text-[#0062FF]' : 'text-[#333333]',
                      !isMobile && (isCollapsed ? 'text-[10px]' : 'text-sm')
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
