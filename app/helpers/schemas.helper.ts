import { z } from 'zod'
import { TRANSLATE_KEYS } from '~/constants'
import { type IAppTranslations } from '~/types'
import { eEmployerFilterFormKey, eLoginFormKey, eTestFormKey } from '~/types/enums/form.enum'

export const getTestSchema = (t: (key: string) => string) =>
  z
    .object({
      [eTestFormKey.Quantity]: z.string().nonempty({ message: t('inputValidate.fieldCannotBeEmpty') }),
      [eTestFormKey.Status]: z.enum(['IN_PROGRESS', 'PENDING', 'DONE'], {
        message: 'You need to select a notification type.'
      }),
      [eTestFormKey.Username]: z.string().optional(),
      [eTestFormKey.Items]: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: 'You have to select at least one item.'
      }),
      [eTestFormKey.Bio]: z
        .string()
        .min(10, {
          message: 'Bio must be at least 10 characters.'
        })
        .max(160, {
          message: 'Bio must not be longer than 30 characters.'
        }),
      [eTestFormKey.Email]: z.string().nonempty({ message: t('inputValidate.fieldCannotBeEmpty') })
    })
    .superRefine((data, ctx) => {
      if (data[eTestFormKey.Status] === 'PENDING') {
        console.log('check ne: ', data[eTestFormKey.Username])
        if (!data[eTestFormKey.Username]) {
          ctx.addIssue({
            code: 'custom',
            path: [eTestFormKey.Username],
            message: t('inputValidate.fieldCannotBeEmpty')
          })
        }
      }
    })

export type TestFormSchema = z.infer<ReturnType<typeof getTestSchema>>

/*
 * Login admin schema
 */
export const getLoginSchema = (t: IAppTranslations) =>
  z.object({
    [eLoginFormKey.Id]: z.string().nonempty({ message: t(TRANSLATE_KEYS.INPUT_VALIDATE, 'fieldCannotBeEmpty') }),
    [eLoginFormKey.Password]: z.string().nonempty({ message: t(TRANSLATE_KEYS.INPUT_VALIDATE, 'fieldCannotBeEmpty') })
  })

export type LoginFormSchemaType = z.infer<ReturnType<typeof getLoginSchema>>

/*
 * Filter employer management schema
 */
export const getEmployerFilterSchema = (t: IAppTranslations) => {
  return z.object({
    [eEmployerFilterFormKey.SearchType]: z.string().nullable().optional(),
    [eEmployerFilterFormKey.SearchKey]: z.string().optional()
  })
}

export type EmployerFilterSchemaType = z.infer<ReturnType<typeof getEmployerFilterSchema>>

/*
 * Chat AI Agent
 */
export const chatAIPromptMessage = () =>
  z.object({
    promptMessage: z.string().trim().min(1, '메시지를 입력해주세요.')
  })

export type AIPromptMessageType = z.infer<ReturnType<typeof chatAIPromptMessage>>
