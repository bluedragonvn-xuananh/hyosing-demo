export const ANSWER_OS_MESSAGE = {
  ANSWER_DEFAULT: 'OS_answer_default',
  ANSWER_OLTC: 'OS_anwser_oltc'
}

export const QUESTION_MESSAGE = {
  QUESTION_OLTC: 'OLTC'
}

export const DEFAULT_CONTENT_ANSWER = [
  [{ text: 'TR-154-001 설비 종합 진단 결과', type: 'highlight' }, { text: '를 안내드립니다.' }],
  [
    { text: '현재 DGA 분석에서 ' },
    { text: 'C₂H₂(아세틸렌) 18 ppm', type: 'highlight' },
    { text: '이 기준치(3 ppm) 대비 ' },
    { text: '6배 초과', type: 'highlight' },
    { text: ' 검출되었습니다. 아세틸렌은 아크 방전의 지표 가스로, 즉 각적인 정밀 점검이 권고됩니다. ' },
    { text: '[ IEC 60599 ]', type: 'badge' }
  ],
  [
    { text: 'H2(수소) 또한 142 ppm으로 기준치(100 ppm)를 초과하여, 내부 부분 방전 가능성이 있습니다. ' },
    { text: '[ DGA DB #2847 ]', type: 'badge' }
  ]
]

export const OLTC_CONTENT_ANSWER = [
  [
    {
      text: 'OLTC 탭 절환 이상 알람 발생 시 다음 절차에 따라 조치하십시오.'
    }
  ],
  [
    {
      text: '1단계: 즉시 자동 조작 중지 후 수동 모드로 전환'
    }
  ],
  [
    {
      text: '2단계: 접촉 저항 측정 (기준치: 500μΩ 이하)'
    }
  ],
  [
    {
      text: '3단계: 동작 횟수 확인 및 오일 탁도 점검'
    }
  ],
  [
    {
      text: '4단계: 이상 지속 시 정전 후 내부 점검 실시'
    }
  ],
  [
    {
      text: '관련 근거: AM 판정 기준 v3.1 §4.2 '
    },
    {
      text: '[OLTC 조치 절차]',
      type: 'badge'
    }
  ]
]
