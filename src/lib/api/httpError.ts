import type { ApiError } from '$lib/types/api-error'

export const mapHttpError = (status: number): ApiError =>{
  switch (status) {
    case 401:
      return { type: 'unauthorized' }

    case 404:
      return { type: 'not_found' }

    case 500:
      return { type: 'unknown' }

    default:
      return { type: 'unknown' }
  }
}
