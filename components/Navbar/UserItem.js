import Image from 'next/image'
import PropTypes from 'prop-types'
import { Client } from '@microsoft/microsoft-graph-client'
import { useState, useEffect } from 'react'

import AuthenticationProvider from '../../lib/authProvider'

export default function UserItem ({ user, logout }) {
  const [photo, setPhoto] = useState(null)

  useEffect(async () => {
    const options = {
      authProvider: new AuthenticationProvider(user)
    }
    const client = Client.initWithMiddleware(options)
    try {
      await client.api('/me/photo/$value').get().then(u => {
        const reader = new FileReader()
        reader.readAsDataURL(u)
        reader.onloadend = () => {
          setPhoto(reader.result)
        }
      })
    } catch (error) {
      await logout()
    }
  }, [])

  return (
    <div className="flex flex-row items-center pl-8">
      <Image
        src={photo ?? '/pfp.png'}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="text-white pl-3 pr-1">
        {user.displayName}
      </div>
      <div className="w-4 h-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}
