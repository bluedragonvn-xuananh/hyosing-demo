import {
  ActiveSettingIcon,
  NavAdjustIcon,
  NavCustomerSupportIcon,
  NavDashboardIcon,
  NavFileIcon,
  NavSettingIcon
} from '~/assets/icons'
import { ROUTES, TRANSLATE_KEYS } from '~/constants'
import type { IAppTranslations } from '~/types'

const layoutHelper = {
  getSidebarMenu: (t: IAppTranslations) => {
    const BASE_PATH = `/${ROUTES.ADMIN.BASE}`
    return [
      {
        icon: NavDashboardIcon,
        activeIcon: NavDashboardIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'dashboard'),
        url: `${BASE_PATH}/${ROUTES.ADMIN.DASHBOARD}`
      },
      {
        icon: NavSettingIcon,
        activeIcon: NavSettingIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'equipmentHistory'),
        url: `${BASE_PATH}/${ROUTES.ADMIN.EQUIPMENT_HISTORY}`
      },
      {
        activeIcon: ActiveSettingIcon,
        icon: NavSettingIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'newDiagnosis'),
        url: `${BASE_PATH}/${ROUTES.ADMIN.NEW_DIAGNOSIS}`
      },
      {
        icon: NavAdjustIcon,
        activeIcon: NavAdjustIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'trendAnalysis'),
        url: `${BASE_PATH}/${ROUTES.ADMIN.TREND_ANALYSIS}`
      },
      {
        icon: NavCustomerSupportIcon,
        activeIcon: NavCustomerSupportIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'chatAgent'),
        url: `${BASE_PATH}/${ROUTES.ADMIN.CHAT_AGENT}`
      },
      {
        icon: NavFileIcon,
        activeIcon: NavFileIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'reportGeneration'),
        url: `${BASE_PATH}/${ROUTES.ADMIN.REPORT_GENERATION}`
      }
    ]
  }
}

export default layoutHelper
