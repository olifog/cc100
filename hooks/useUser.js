import useSWR from 'swr'
import Router from 'next/router'
import { useEffect } from 'react'

export function useUser ({ redirectTo = null } = {}) {
  const { data, mutate } = useSWR('/api/user')

  useEffect(() => {
    if (!redirectTo || !data) return

    if (!data?.user) {
      Router.push(redirectTo)
    }
  }, [data, redirectTo])

  const user = data?.user
  return { user, mutate }
}
