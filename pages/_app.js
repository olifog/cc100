import '../styles/globals.css'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <div className="container max-w-lg">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
