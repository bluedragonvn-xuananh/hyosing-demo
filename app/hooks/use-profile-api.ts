import { type UseQueryOptions, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '~/constants'
import { UserService } from '~/services/api/user.service'
import type { IUser } from '~/types'

type UseProfileApiQueryOptions = Omit<UseQueryOptions<IUser | undefined>, 'queryKey' | 'queryFn'>

export const useProfileApi = (options?: UseProfileApiQueryOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER.PROFILE],
    queryFn: async () => {
      const res = await UserService.getProfile()
      return res?.result?.data
    },
    ...options
  })
}
