import '../styles/globals.css'
import Link from 'next/link'
import 'aos/dist/aos.css'
import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.min.css'

AOS.init({
  duration: 1000,
  offset: 100,
  once: false,
  delay: 300
});

function MyApp({ Component, pageProps }) {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="navbar-nav d-flex flex-row">
              <li><Link href="/"><a className="pr-4">Home</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
          </ul>
      </nav>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
