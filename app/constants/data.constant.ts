import { Globe } from 'lucide-react'

import { type IAppTranslations, eEmployerStatus, eLanguage } from '../types'
import { TRANSLATE_KEYS } from './translate-keys.constant'

export const DATA = {
  GET_ITEMS: (t: (key: string) => string) => {
    return [
      {
        id: 'recents',
        label: 'Recents'
      },
      {
        id: 'home',
        label: 'Home'
      },
      {
        id: 'applications',
        label: 'Applications'
      },
      {
        id: 'desktop',
        label: 'Desktop'
      },
      {
        id: 'downloads',
        label: 'Downloads'
      },
      {
        id: 'documents',
        label: 'Documents'
      }
    ]
  },
  GET_EMAIL_OPTIONS: (t: (key: string) => string) => {
    return [
      {
        label: 'n@example.com',
        value: '01'
      },
      {
        label: 'o@example.com',
        value: '02'
      },
      {
        label: 'i@example.com',
        value: '03'
      }
    ]
  },
  GET_STATUS: (t: (key: string) => string) => {
    return [
      {
        label: 'In progress',
        value: 'IN_PROGRESS'
      },
      {
        label: 'Pending',
        value: 'PENDING'
      },
      {
        label: 'Done',
        value: 'DONE'
      }
    ]
  },
  GET_LANGUAGE: (t: IAppTranslations) => {
    return [
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'language.en'),
        value: eLanguage.En,
        icon: Globe
      },
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'language.ko'),
        value: eLanguage.Ko,
        icon: Globe
      }
    ]
  },
  GET_EMPLOYER_STATUS: (t: IAppTranslations) => {
    return [
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'employerManagement.employerStatus.inProgress'),
        value: eEmployerStatus.InProgress
      },
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'employerManagement.employerStatus.normal'),
        value: eEmployerStatus.Normal
      }
    ]
  },
  GET_EMPLOYER_FILTER_TYPE: () => [
    {
      label: '전체',
      value: 'all'
    },
    {
      label: 'Email',
      value: 'email'
    },
    {
      label: 'Phone',
      value: 'phone'
    }
  ],
  GET_ANALYSIS_BASE_DATE: () => [
    {
      label: '2026-03-11',
      value: '2026-03-11'
    },
    {
      label: '2026-04-11',
      value: '2026-04-11'
    }
  ],
  GET_ANALYSIS_HISTORY_PERIOD: () => [
    {
      label: '5년',
      value: '5'
    }
  ],
  GET_ANALYSIS_ALGORITHM: () => [
    {
      label: 'tabnet_v2',
      value: 'tabnet_v2'
    }
  ],
  GET_ANALYSIS_MODE: () => [
    {
      label: '전체',
      value: 'all'
    }
  ]
}
