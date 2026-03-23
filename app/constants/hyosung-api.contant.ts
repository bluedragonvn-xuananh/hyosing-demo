import { eStatus } from '~/types'
import { eHealthAnalysis } from '~/types/enums/new-diagnosis.enum'
import { eTypeMessage } from '~/types/models/chat-ai-agent.model'

import { ANSWER_OS_MESSAGE } from './chat-ai.constant'

export const RESPONSE_SAMPLE_DATA = {
  sunmary_information: {
    health: {
      title: '건전도 지수 (HI)',
      value: '62.4',
      desc: '주의구간 (60~75)'
    },
    remaining_life: {
      title: '잔여 수명 (RUL)',
      value: '10',
      desc: '2036'
    },
    above_grade: {
      title: '이상 등급',
      value: 'L2',
      desc: '정밀 점검 권고'
    },
    model_reliability: {
      title: '이상 등급',
      value: '91%',
      desc: 'TabNet v2 기준'
    }
  },
  load_rate_information: {
    rate: 60
  },
  health_analysis: [
    {
      name: 'TR-154-001',
      data: {
        insulation: {
          type: eHealthAnalysis.Insulation_Degradation,
          title: '절연 열화',
          value: 58.2,
          status: eStatus.Caution
        },
        dga_health: {
          type: eHealthAnalysis.DGA_Health,
          title: 'DGA 건전도',
          value: 61.0,
          status: eStatus.Caution
        },
        thermal: {
          type: eHealthAnalysis.Thermal_Soundness,
          title: '열화상 건전도',
          value: 78.4,
          status: eStatus.Normal
        },
        oltc: {
          type: eHealthAnalysis.OLTC_Soundness,
          title: 'OLTC 건전도',
          value: 71.8,
          status: eStatus.Normal
        }
      }
    },
    {
      name: 'TR-154-002',
      data: {
        insulation: {
          type: eHealthAnalysis.Insulation_Degradation,
          title: '절연 열화',
          value: 58.2,
          status: eStatus.Caution
        },
        dga_health: {
          type: eHealthAnalysis.DGA_Health,
          title: 'DGA 건전도',
          value: 61.0,
          status: eStatus.Caution
        },
        thermal: {
          type: eHealthAnalysis.Thermal_Soundness,
          title: '열화상 건전도',
          value: 78.4,
          status: eStatus.Normal
        },
        oltc: {
          type: eHealthAnalysis.OLTC_Soundness,
          title: 'OLTC 건전도',
          value: 71.8,
          status: eStatus.Normal
        }
      }
    },
    {
      name: 'CB-154-007',
      data: {
        insulation: {
          type: eHealthAnalysis.Insulation_Degradation,
          title: '절연 열화',
          value: 58.2,
          status: eStatus.Caution
        },
        dga_health: {
          type: eHealthAnalysis.DGA_Health,
          title: 'DGA 건전도',
          value: 61.0,
          status: eStatus.Caution
        },
        thermal: {
          type: eHealthAnalysis.Thermal_Soundness,
          title: '열화상 건전도',
          value: 78.4,
          status: eStatus.Normal
        },
        oltc: {
          type: eHealthAnalysis.OLTC_Soundness,
          title: 'OLTC 건전도',
          value: 71.8,
          status: eStatus.Normal
        }
      }
    }
  ],
  dga_compare: [
    {
      id: 1,
      status: 'WARNING',
      name: 'H₂ (수소)',
      actual: '142 ppm',
      standard: '100 ppm'
    },
    {
      id: 2,
      status: 'CAUTION',
      name: 'C₂H₂ (아세틸렌)',
      actual: '18 ppm',
      standard: '3 ppm'
    },
    {
      id: 3,
      status: 'NORMAL',
      name: 'C₂H₄ (에틸렌)',
      actual: '24 ppm',
      standard: '50 ppm'
    },
    {
      id: 4,
      status: 'NORMAL',
      name: 'CO (일산화탄소)',
      actual: '680 ppm',
      standard: '700 ppm'
    },
    {
      id: 5,
      status: 'WARNING',
      name: 'CH₄ (메탄)',
      actual: '38 ppm',
      standard: '30 ppm'
    }
  ],
  history_timelife: [
    {
      name: 'TR-154-001',
      history: [
        {
          id: 1,
          date: '2026-01-15',
          status: 'WARNING',
          desc: 'DGA 이상 알람 - C₂H₂ 급증 감지'
        },
        {
          id: 2,
          date: '2025-08-20',
          status: 'NORMAL',
          desc: '정기 점검 완료 - 이상 없음'
        },
        {
          id: 3,
          date: '2024-03-18',
          status: 'NORMAL',
          desc: 'OLTC 탭 절환 시험 완료'
        },
        {
          id: 4,
          date: '2023-09-05',
          status: 'NORMAL',
          desc: 'DGA 채취 - 이상 없음'
        },
        {
          id: 5,
          date: '2024-11-03',
          status: 'NORMAL',
          desc: '열화상 점검 - Hotspot ΔT 6.2°C '
        }
      ]
    },
    {
      name: 'TR-154-002',
      history: [
        {
          id: 1,
          date: '2026-01-15',
          status: 'WARNING',
          desc: 'DGA 이상 알람 - C₂H₂ 급증 감지'
        },
        {
          id: 2,
          date: '2025-08-20',
          status: 'NORMAL',
          desc: '정기 점검 완료 - 이상 없음'
        },
        {
          id: 3,
          date: '2024-03-18',
          status: 'NORMAL',
          desc: 'OLTC 탭 절환 시험 완료'
        },
        {
          id: 4,
          date: '2023-09-05',
          status: 'NORMAL',
          desc: 'DGA 채취 - 이상 없음'
        },
        {
          id: 5,
          date: '2024-11-03',
          status: 'NORMAL',
          desc: '열화상 점검 - Hotspot ΔT 6.2°C '
        }
      ]
    },
    {
      name: 'CB-154-007',
      history: [
        {
          id: 1,
          date: '2026-01-15',
          status: 'WARNING',
          desc: 'DGA 이상 알람 - C₂H₂ 급증 감지'
        },
        {
          id: 2,
          date: '2025-08-20',
          status: 'NORMAL',
          desc: '정기 점검 완료 - 이상 없음'
        },
        {
          id: 3,
          date: '2024-03-18',
          status: 'NORMAL',
          desc: 'OLTC 탭 절환 시험 완료'
        },
        {
          id: 4,
          date: '2023-09-05',
          status: 'NORMAL',
          desc: 'DGA 채취 - 이상 없음'
        },
        {
          id: 5,
          date: '2024-11-03',
          status: 'NORMAL',
          desc: '열화상 점검 - Hotspot ΔT 6.2°C '
        }
      ]
    }
  ],
  ai_chat_agent: [
    {
      id: '1',
      type: eTypeMessage.Answer,
      prompt: ANSWER_OS_MESSAGE.ANSWER_DEFAULT,
      isStreaming: true,
      loading: false,
      visibleLength: 0
    }
  ],
  source_judgment: {
    inspect_document: {
      title: '점검 문서',
      value: 'SK에너지 변압기 DGA 점검 보고서 #2847',
      desc_1: '2024-11-03',
      desc_2: 'OCR 추출'
    },
    judgment_cretiria: {
      title: '판정 기준',
      value: 'AM 판정 기준 v3.1 -  C₂H₂ 임계값',
      desc_1: 'IEC 60599 기반',
      desc_2: '내부 기준서'
    },
    ontology: {
      title: '온톨로지',
      value: 'TR-154-001 수주 → 운영이력 KG',
      desc_1: 'Neo4j',
      desc_2: '연결 노드 23개'
    },
    similar_cases: {
      title: '유사 사례',
      value: '동급 설비 C₂H₂ 초과 사례 3건',
      desc_1: 'Vector DB 유사도 0.87',
      desc_2: null
    }
  }
}

export const RECOMMEND_SAMPLE_DATA = [
  {
    id: 1,
    title: '즉각 정밀 점검 실시 (DGA 재채취 포함)'
  },
  {
    id: 2,
    title: 'OLTC 접촉 저항 재측정 (직전 측정값 : 420μΩ)'
  },
  {
    id: 3,
    title: '60일 이내 차기 점검 일정 수립'
  }
]

export const DGA_SAMPLE_DATA = [
  {
    id: 1,
    code: 'DGA-1',
    title: 'H₂ (수소)',
    value: '142',
    unit: 'ppm',
    status: 'CAUTION'
  },
  {
    id: 2,
    code: 'DGA-2',
    title: 'C₂H₂ (아세틸렌)',
    value: '18',
    unit: 'ppm',
    status: 'WARNING'
  },
  {
    id: 3,
    code: 'DGA-3',
    title: 'C₂H₄ (에틸렌)',
    value: '24',
    unit: 'ppm',
    status: 'NORMAL'
  },
  {
    id: 4,
    code: 'DGA-4',
    title: 'CO (일산화탄소)',
    value: '680',
    unit: 'ppm',
    status: 'NORMAL'
  },
  {
    id: 5,
    code: 'DGA-5',
    title: 'CH₄ (메탄)',
    value: '38',
    unit: 'ppm',
    status: 'INFO'
  }
]

export const EQUIPMENT_SELECTION_SAMPLE_DATA = [
  {
    id: 1,
    title: 'TR-154-001',
    status: 'L2 (주의)',
    range: '345/154kV 주변압기 #1',
    valueK: '345kV',
    valueM: '300MVA',
    code: 'EQUIPMENT_A'
  },
  {
    id: 2,
    title: 'TR-154-002',
    status: 'L1 (정상)',
    range: '345/154kV 주변압기 #2',
    valueK: '345kV',
    valueM: '300MVA',
    code: 'EQUIPMENT_B'
  },
  {
    id: 3,
    title: 'CB-154-007',
    status: 'L3 (경고)',
    range: '154kV GIS차단기 #7',
    valueK: '154kV',
    valueM: 'OLTC',
    code: 'EQUIPMENT_C'
  }
]

export const DGA_INITIAL_FILTER_SAMPLE_DATA = [
  { id: 1, name: 'h2', title: 'H₂ (수소)', unit: 'ppm', value: 100, threshold: 100 },
  { id: 2, name: 'c2h2', title: 'C₂H₂ (아세틸렌)', unit: 'ppm', value: 3, threshold: 3 },
  { id: 3, name: 'c2h4', title: 'C₂H₄ (에틸렌)', unit: 'ppm', value: 50, threshold: 50 },
  { id: 4, name: 'co', title: 'CO (일산화탄소)', unit: 'ppm', value: 700, threshold: 700 },
  { id: 5, name: 'ch4', title: 'CH₄ (메탄)', unit: 'ppm', value: 30, threshold: 30 },
  { id: 6, name: 'load_factor', title: '부하율', unit: '%', value: 0, threshold: 50 }
]

export const DGA_NEXT_FILTER_SAMPLE_DATA = [
  { id: 1, name: 'h2', title: 'H₂ (수소)', unit: 'ppm', value: 142, threshold: 100 },
  { id: 2, name: 'c2h2', title: 'C₂H₂ (아세틸렌)', unit: 'ppm', value: 18, threshold: 3 },
  { id: 3, name: 'c2h4', title: 'C₂H₄ (에틸렌)', unit: 'ppm', value: 24, threshold: 50 },
  { id: 4, name: 'co', title: 'CO (일산화탄소)', unit: 'ppm', value: 680, threshold: 700 },
  { id: 5, name: 'ch4', title: 'CH₄ (메탄)', unit: 'ppm', value: 38, threshold: 30 },
  { id: 6, name: 'load_factor', title: '부하율', unit: '%', value: 60, threshold: 50 }
]

export const BINDING_YEAR_SAMPLE_DATA = [
  { id: 1, year: 2041, rul: 15, yearLoad: 40, status: 'NORMAL' },
  { id: 2, year: 2036, rul: 10, yearLoad: 60, status: 'NORMAL' },
  { id: 3, year: 2029, rul: 3, yearLoad: 80, status: 'WARNING', desc: '7년 단축' },
  { id: 4, year: 2027, rul: 1, yearLoad: 100, status: 'WARNING', desc: '9년 단축' },
  { id: 5, year: 2026, rul: 0.5, yearLoad: 120, status: 'CAUTION', desc: '즉시 교체 권고' }
]
