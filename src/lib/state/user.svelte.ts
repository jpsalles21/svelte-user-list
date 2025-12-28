import type { Result } from '$lib/types/result'
import type { ApiError } from '$lib/types/api-error'
import type { User } from '$lib/domain/user'
import { fetchUsers } from '$lib/api/user'

let users = $state<Result<User[], ApiError>>({
  kind: 'idle'
})

export const getUsers = () => {
  return users
}

export const loadUsers = async () =>   {
  users = { kind: 'loading' }
  users = await fetchUsers()
}
