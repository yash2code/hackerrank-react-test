import React from 'react'

export const userService = {
  login,
  logout,
  register,
  isLoading,
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }
  localStorage.setItem('user', JSON.stringify({ username, password }))

  // call `/users/authenticate` with requestOptions to authenticate the login process

  return fetch('/users/authenticate', requestOptions).then(handleResponse)
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  return fetch('/users/register', requestOptions).then(handleResponse)
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText)
  }

  return response.json()
}

function isLoading(loading) {
  if (loading) {
    return (
      <img
        alt='spinner'
        src='../../spinner.gif'
        style={{ width: '20px', marginLeft: '12px' }}
      />
    )
  }
  return null
}
