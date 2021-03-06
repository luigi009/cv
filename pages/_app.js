import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin, faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faLink, faSearchPlus } from '@fortawesome/free-solid-svg-icons'


library.add (
  faGithubSquare,
  faLinkedin,
  faGamepad,
  faLink,
  faSearchPlus,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact
)

// import 'aos/dist/aos.css'
// import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.min.css'

// AOS.init({
//   duration: 1000,
//   offset: 100,
//   once: false,
//   delay: 300
// });

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Luigi Fanaro</title>
        <link rel="icon" href={prefix + '/favicon.ico'} />

        <script src="https://kit.fontawesome.com/00eaef9f88.js" crossOrigin="anonymous"></script>
      </Head>

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
