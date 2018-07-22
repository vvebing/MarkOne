import fetch from '../utils/fetch'

export function signUp (data) {
  return fetch({
    url: '/api/users/',
    method: 'POST',
    data
  })
}

export function signIn (data) {
  return fetch({
    url: '/api/users/login',
    method: 'POST',
    data
  })
}