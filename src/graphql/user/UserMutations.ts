import { DataSourcesType, ContextWithAuth } from '../../types'
import { UpdateProfileGQLInput } from '../../db/UserTypes'

const UserMutations = {
  updateUserProfile: async (_: any, { input }, { dataSources, user: authenticatedUser }: ContextWithAuth) => {
    const { users }: DataSourcesType = dataSources

    if (authenticatedUser?.uuid == null) throw new Error('Missing user uuid')

    return await users.createOrUpdateUserProfile(authenticatedUser.uuid, input as UpdateProfileGQLInput)
  }

}

export default UserMutations
