import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

import { ROUTES } from './constants'

export default [
  route(ROUTES.HOME, './layouts/main-layout.tsx', [
    index('routes/main/home.tsx'),
    route(ROUTES.DEMO, 'routes/demo.tsx')
  ]),

  // layout('./layouts/auth-layout.tsx', [
  //   route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.NEW_DIAGNOSIS}`, 'routes/admin/new-diagnosis/index.tsx')
  // ]),

  //Dashboard
  layout('./layouts/dashboard-layout.tsx', [
    route(`${ROUTES.ADMIN.BASE}`, 'routes/admin/index.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.DASHBOARD}`, 'routes/admin/dashboard/index.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.EQUIPMENT_HISTORY}`, 'routes/admin/equipment-history/index.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.NEW_DIAGNOSIS}`, 'routes/admin/new-diagnosis/index.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.TREND_ANALYSIS}`, 'routes/admin/trend-analysis/index.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.CHAT_AGENT}`, 'routes/admin/chat-agent/index.tsx'),
    route(`${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.REPORT_GENERATION}`, 'routes/admin/report-generation/index.tsx')
  ]),

  // Not found
  route('*', 'routes/not-found.tsx')
] satisfies RouteConfig
