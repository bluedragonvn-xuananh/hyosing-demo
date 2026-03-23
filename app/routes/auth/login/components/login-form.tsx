import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { AdminLogo } from '~/assets/images'
import ButtonSubmit from '~/components/common/button-submit'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { ROUTES, TRANSLATE_KEYS } from '~/constants'
import { type LoginFormSchemaType, getLoginSchema } from '~/helpers/schemas.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import { eLoginFormKey } from '~/types/enums/form.enum'

const LoginForm = () => {
  const { t } = useAppTranslations()
  const [viewIdType, setViewIdType] = useState<'text' | 'password'>('text')
  const [viewPasswordType, setViewPasswordType] = useState<'text' | 'password'>('password')

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const formSchema = getLoginSchema(t)

  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [eLoginFormKey.Id]: '',
      [eLoginFormKey.Password]: ''
    },
    mode: 'all'
  })

  const onSubmit = (formData: LoginFormSchemaType) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    navigate(`/${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.NEW_DIAGNOSIS}`, {
      replace: true
    })
  }

  const toggleViewIdType = () => {
    const typeView = viewIdType === 'text' ? 'password' : 'text'
    setViewIdType(typeView)
  }

  const toggleViewPasswordType = () => {
    const typeView = viewPasswordType === 'text' ? 'password' : 'text'
    setViewPasswordType(typeView)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-7.5 bg-white w-96 lg:w-[460px]'>
          <div className='flex'>
            <Link to='/' className='hover:opacity-80'>
              <img src={AdminLogo} alt='Admin thumbnail' />
            </Link>
          </div>

          <div className='flex flex-col gap-7.5'>
            {/* Id */}
            <FormField
              control={form.control}
              name={eLoginFormKey.Id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t(TRANSLATE_KEYS.INPUT_LABEL, 'id')}</FormLabel>
                  <div className='relative'>
                    <FormControl>
                      <Input
                        type={viewIdType}
                        className='rounded-[8px] h-[42px] border-[#EEEEEE] pr-11'
                        placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'id')}
                        {...field}
                      />
                    </FormControl>
                    <span
                      className='inline-block absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer z-10'
                      onClick={toggleViewIdType}
                    >
                      {viewIdType === 'text' ? (
                        <EyeOff color='#a4b5ba' strokeWidth={1.5} />
                      ) : (
                        <Eye color='#a4b5ba' strokeWidth={1.5} />
                      )}
                    </span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name={eLoginFormKey.Password}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t(TRANSLATE_KEYS.INPUT_LABEL, 'password')}</FormLabel>
                  <div className='relative'>
                    <FormControl>
                      <Input
                        type={viewPasswordType}
                        className='rounded-[8px] h-[42px] border-[#EEEEEE] pr-11'
                        placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'password')}
                        {...field}
                      />
                    </FormControl>
                    <span
                      className='inline-block absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer z-10'
                      onClick={toggleViewPasswordType}
                    >
                      {viewPasswordType === 'text' ? (
                        <EyeOff color='#a4b5ba' strokeWidth={1.5} />
                      ) : (
                        <Eye color='#a4b5ba' strokeWidth={1.5} />
                      )}
                    </span>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ButtonSubmit
            isDisabled={!form.formState.isValid}
            isLoading={isLoading}
            label={t(TRANSLATE_KEYS.ACTION, 'login')}
          />
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
