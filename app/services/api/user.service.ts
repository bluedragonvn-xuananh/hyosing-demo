import axiosClient from '~/configs/axios.config'
import { API_USER } from '~/constants/api.constant'
import type { IApiResponse, IUser } from '~/types'

export const UserService = {
  getProfile: async (): Promise<IApiResponse<IUser>> => {
    return await axiosClient.get(API_USER.PROFILE.URL)
  }
}
