import { useEffect, useMemo, useState } from 'react'

const useStructuredTyping = (content: any, isStreaming?: boolean, trigger?: any) => {
  const [length, setLength] = useState(0)

  const fullText = useMemo(() => {
    return content
      .flat()
      .map((c: any) => c.text)
      .join('')
  }, [content])

  useEffect(() => {
    if (!isStreaming) {
      setLength(fullText.length)
      return
    }

    let i = 0
    setLength(0)

    const interval = setInterval(() => {
      i++
      setLength((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval)
          return prev
        }
        return i
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isStreaming, trigger]) // ❗ bỏ fullText khỏi dependency

  return length
}

export default useStructuredTyping
