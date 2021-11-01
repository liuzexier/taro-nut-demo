
import { postJson } from '@/utils'

export function login(data: {
  phone: string,
  password: string
}) {
  return postJson('/f-admin/login', data)
}

export function register(data: {
  phone: string,
  password: string
}) {
  return postJson('/f-admin/register', data)
}
