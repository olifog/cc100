import Link from 'next/link'

import { useUser } from '../../hooks/useUser'
import NavBarItem from './NavbarItem'
import UserItem from './UserItem'

export default function Navbar () {
  const [user, { mutate }] = useUser()

  async function handleLogout () {
    await fetch('/api/auth/microsoft/logout')
    mutate({ user: null })
  }

  return (
    <header className="w-screen flex flex-row justify-center bg-gradient-to-tr from-gray-700 to-gray-900">
      <nav className="w-full max-w-5xl px-2 py-4 flex flex-row justify-between items-center">
        <Link href="/">
          <a className="flex">
            Home (icon here in future)
          </a>
        </Link>
        <div className="flex flex-row items-center divide-x divide-x-2 space-x-8">
          <div className="space-x-6">
            <NavBarItem text="About" href="about" />
            <NavBarItem text="Progress" href="progress" />
            <NavBarItem text="Example tab 3" href="hi" />
          </div>
          {user
            ? (
                <UserItem user={user} logout={handleLogout} />
              )
            : (
                <div className="pl-8">
                  <Link href="/api/auth/microsoft/login">
                    <a className="rounded-md py-2 px-4 bg-blue-800 text-white text-sm">Sign in with Office 365</a>
                  </Link>
                </div>
              )
          }
        </div>
      </nav>
    </header>
  )
}
