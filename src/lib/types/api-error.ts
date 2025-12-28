export type ApiError = 
    | {type: 'network' }
    | {type: 'not_found' }
    | {type: 'unauthorized' }
    | {type: 'unknown'} 