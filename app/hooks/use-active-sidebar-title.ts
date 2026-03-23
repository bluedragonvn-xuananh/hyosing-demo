import { useLocation } from 'react-router'
import layoutHelper from '~/helpers/layout.helper'
import useAppTranslations from '~/hooks/use-app-translations'

export const useActiveSidebarTitle = () => {
  const { t } = useAppTranslations()
  const location = useLocation()
  const sidebarMenu = layoutHelper.getSidebarMenu(t)
  const activeItem = sidebarMenu.find((item) => location.pathname.endsWith(item.url))
  return activeItem?.title ?? ''
}
