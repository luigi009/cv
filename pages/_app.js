import '../styles/globals.css'
import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapsibleNavbar">
            <i class="fas fa-bars"></i>
          </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        </div>
        <div class="right-side">
              <div class="brand" style={{color: "white"}}>
                Luigi Fanaro
              </div>
        </div>
      </nav>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
