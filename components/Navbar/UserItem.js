import Image from 'next/image'
import PropTypes from 'prop-types'

export default function UserItem ({ user, logout }) {
  return (
    <div className="flex flex-row items-center pl-8">
      <Image
        src={'https://dummyimage.com/40x40/000/fff'}
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
