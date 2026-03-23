import { useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'

import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'

interface PasswordFieldProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  label?: string
  placeholder?: string
  isRequired?: boolean
}

const PasswordField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  isRequired
}: PasswordFieldProps<T>) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && <FormLabel isRequired={isRequired}>{label}</FormLabel>}

          <FormControl>
            <InputGroup>
              <InputGroupInput
                {...field}
                type={isShowPassword ? 'text' : 'password'}
                placeholder={placeholder}
                aria-invalid={fieldState.invalid}
              />
              <InputGroupAddon
                align='inline-end'
                className='cursor-pointer'
                onClick={() => setIsShowPassword((prev) => !prev)}
              >
                {isShowPassword ? (
                  <EyeOffIcon className='size-5 text-[#373739]' />
                ) : (
                  <EyeIcon className='size-5 text-[#373739]' />
                )}
              </InputGroupAddon>
            </InputGroup>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordField
