import { useState } from 'react'

import { Globe } from 'lucide-react'
import { toast } from 'sonner'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '~/components/ui/select'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'
import { cn } from '~/lib/utils'
import { eLanguage } from '~/types'

interface ISelectLanguage {
  buttonClassName?: string
  isHiddenLanguageName?: boolean
  iconColor?: string
  iconClassName?: string
}

const SelectLanguage = ({
  buttonClassName,
  isHiddenLanguageName = false,
  iconColor = '#5A6A85',
  iconClassName
}: ISelectLanguage) => {
  const { t, i18n } = useAppTranslations()
  const DATA_LANGUAGE = DATA.GET_LANGUAGE(t)
  const [language, setLanguage] = useState<eLanguage>(eLanguage.Ko)
  const languageLabelSelected = DATA_LANGUAGE.find((l) => l.value === language)?.label

  return (
    <section className='ml-auto'>
      <Select
        value={language}
        onValueChange={(val) => {
          setLanguage(val as eLanguage)
          i18n.changeLanguage(val)
          toast.success(t(TRANSLATE_KEYS.MSG, 'changeLanguageSuccess'))
        }}
      >
        <SelectTrigger
          className={cn(
            'rounded-[4px] px-4 py-1.5 border border-[#EAEFF4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer focus-visible:border-[#EAEFF4] focus-visible:ring-0 focus:outline-hidden',
            buttonClassName
          )}
          isHiddenIcon={true}
        >
          <div className='flex items-center gap-2'>
            <Globe color={iconColor} className={cn('!w-6 !h-6', iconClassName)} />
            {!isHiddenLanguageName && (
              <p className='font-semibold text-sm leading-5 -tracking-[1%] text-[#5A6A85] relative top-0.5'>
                {languageLabelSelected}
              </p>
            )}
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {DATA_LANGUAGE.map((l) => {
              return (
                <SelectItem key={l.value} value={l.value}>
                  {l.label}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  )
}

export default SelectLanguage
