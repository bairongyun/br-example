
// type AccessName = 'owner' | 'master' | 'staff' | 'guest' | 'noauth' | '无权限'
export type AccessRight = '400' | '300' | '200' | '100' | '-1'

/* 权限 级别 */
export const OWNER: AccessRight = '400'
export const MASTER: AccessRight = '300'
export const STAFF: AccessRight = '200'
export const GUEST: AccessRight = '100'
export const NOAUTH: AccessRight = '-1'
