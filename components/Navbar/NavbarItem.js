import Link from 'next/link'
import PropTypes from 'prop-types'

export default function NavbarItem ({ text, href }) {
  return (
    <Link href={href}>
      <a className="text-white">
        {text}
      </a>
    </Link>
  )
}

NavbarItem.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
}
