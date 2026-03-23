import { zodResolver } from '@hookform/resolvers/zod'
import _ from 'lodash'
import { useForm } from 'react-hook-form'
import Select from 'react-select'
import ButtonSubmit from '~/components/common/button-submit'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import { type EmployerFilterSchemaType, getEmployerFilterSchema } from '~/helpers'
import useAppTranslations from '~/hooks/use-app-translations'
import { cn } from '~/lib/utils'
import { eEmployerFilterFormKey } from '~/types/enums/form.enum'

interface IFilterForm {
  setFilter: (value: any) => void
  setPageNo: (pageNo: number) => void
  alreadyFilterData: any
  setAlreadyFilterData: (value: any) => void
  isFetchingData?: boolean
  onSearchSubmit?: () => void
}

export const initFilter = {
  [eEmployerFilterFormKey.SearchType]: 'all',
  [eEmployerFilterFormKey.SearchKey]: ''
}

const FilterForm = ({ setFilter, onSearchSubmit, setPageNo, alreadyFilterData, setAlreadyFilterData }: IFilterForm) => {
  const { t } = useAppTranslations()
  const customerFilterSchema = getEmployerFilterSchema(t)

  const form = useForm<EmployerFilterSchemaType>({
    resolver: zodResolver(customerFilterSchema),
    defaultValues: initFilter
  })

  const handleChangeFilter = (filterData: any) => {
    const isFilterChange = !_.isEqual(filterData, alreadyFilterData)
    if (isFilterChange) {
      setPageNo(0)
    }
    setAlreadyFilterData(filterData)
  }

  const handleSubmit = (values: EmployerFilterSchemaType) => {
    console.log('values search', values)
    setFilter(values)
    handleChangeFilter(values)
    onSearchSubmit?.()
  }

  const handleReset = () => {
    setFilter(initFilter)
    handleChangeFilter(initFilter)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Card className='p-6 rounded-[16px] shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12)]'>
          <CardContent className='px-0 flex items-center gap-8'>
            <div className='font-semibold text-sm leading-6 -tracking-[1%] w-[54px] shrink-0'>
              {t(TRANSLATE_KEYS.LABEL, 'search')}
            </div>

            <div className='flex flex-1 items-center gap-4'>
              <FormField
                control={form.control}
                name={eEmployerFilterFormKey.SearchType}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        {...field}
                        classNamePrefix='react-select'
                        className={cn('react-select-container w-35', fieldState?.error && 'select--error')}
                        placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'pleaseSelect')}
                        noOptionsMessage={() => t(TRANSLATE_KEYS.COMMON, 'noData')}
                        options={DATA.GET_EMPLOYER_FILTER_TYPE() ?? []}
                        value={DATA.GET_EMPLOYER_FILTER_TYPE().find((c) => c.value === field.value) || null}
                        onChange={(option: any) => field.onChange(option?.value ?? null)}
                        isSearchable={false}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={eEmployerFilterFormKey.SearchKey}
                render={({ field }) => {
                  return (
                    <FormItem className='flex-1'>
                      <FormControl>
                        <Input
                          className='border-[#EEEEEE] h-11 placeholder:text-[#AAAAAA] placeholder:text-sm'
                          placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'employerManagement.filter.emailOrCompany')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            </div>

            <div className='flex items-center gap-4'>
              <Button variant='outline' className='h-11 w-30 !text-sm text-[#AAAAAA]' onClick={handleReset}>
                {t(TRANSLATE_KEYS.ACTION, 'reset')}
              </Button>
              <ButtonSubmit className='!h-11 w-30' label={`${t(TRANSLATE_KEYS.ACTION, 'search')}`}></ButtonSubmit>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}

export default FilterForm
