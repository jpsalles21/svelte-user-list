import type { User } from "$lib/domain/user";
import type { Result } from "$lib/types/result";
import type { ApiError } from "$lib/types/api-error";
import { mapHttpError } from "./httpError";


export const fetchUsers = async (): Promise<Result<User[], ApiError>> => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
        if (!res.ok) { 
            return {
                kind: 'error',
                error: mapHttpError(res.status)
            }
        }

        const data: User[] = await res.json();
        return { kind: 'success', data };

    } catch {
        return {
            kind: 'error',
            error: { type: 'network' }
        }
    }

}