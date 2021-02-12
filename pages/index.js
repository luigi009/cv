import Head from 'next/head'

const prefix = '/'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href={prefix + '/favicon.ico'} />

        <script src="https://kit.fontawesome.com/00eaef9f88.js" crossorigin="anonymous"></script>
      </Head>

      <div className="content-wrapper">
      
      <div className="portfolio-items-wrapper">
           
            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-1"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <i className="fas fa-gamepad fa-3x"></i>
                </div>
                
                <h5 className="subtitle">Pong Game</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Games_Javascript/Pong" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-2"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <i className="fas fa-gamepad fa-3x"></i>
                </div>
                
                <h5 className="subtitle">Runner Game</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Games_Javascript/Runner" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-3"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-html5 fa-3x pr-3 bg-pan-left"></i>
                <i className="fab fa-css3-alt fa-3x"></i>
                </div>
                
                <h5 className="subtitle">CSS Grid</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Landing%20Page%20with%20CSS%20Grid" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-4"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-html5 fa-3x pr-3"></i>
                <i className="fab fa-css3-alt fa-3x"></i>
                </div>
                
                <h5 className="subtitle">Login & Registration</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/login%26Registration" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-5"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-html5 fa-3x pr-3"></i>
                <i className="fab fa-css3-alt fa-3x"></i>
                <i className="fab fa-js-square fa-3x pl-3"></i>
                </div>
                
                <h5 className="subtitle">Ratings</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/start%20ratings" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-6"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-html5 fa-3x pr-3"></i>
                <i className="fab fa-css3-alt fa-3x"></i>
                <i className="fab fa-js-square fa-3x pl-3"></i>
                </div>
                
                <h5 className="subtitle">Theme Switcher</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Theme%20Switcher" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-7"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-html5 fa-3x pr-3"></i>
                <i className="fab fa-css3-alt fa-3x"></i>
                <i className="fab fa-js-square fa-3x pl-3"></i>
                </div>
                
                <h5 className="subtitle">Countdown</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Countdown" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-8"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-html5 fa-3x pr-3"></i>
                <i className="fab fa-css3-alt fa-3x"></i>
                <i className="fab fa-js-square fa-3x pl-3"></i>
                </div>
                
                <h5 className="subtitle">Calculator</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Calculator" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-9"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-react fa-3x"></i>
                </div>
                
                <h5 className="subtitle">Weather App</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/master/React%20Weather%20App/react-weather-app" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-10"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                <i className="fab fa-react fa-3x"></i>
                </div>
                
                <h5 className="subtitle">Shopping Cart</h5>
                <a href="https://github.com/luigi009/luigi-fanaro/tree/react/Shopping%20Cart%20(React)/shoppingcart" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-11"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                    <i className="fab fa-html5 fa-3x pr-3"></i>
                    <i className="fab fa-css3-alt fa-3x"></i>
                    <i className="fab fa-js-square fa-3x pl-3"></i>
                </div>
                
                <h5 className="subtitle">Ecommerce Site</h5>
                <a href="https://encantodamoda.com.br/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-12"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                    <i className="fab fa-html5 fa-3x pr-3"></i>
                    <i className="fab fa-css3-alt fa-3x"></i>
                    <i className="fab fa-js-square fa-3x pl-3"></i>
                </div>
                
                <h5 className="subtitle">Logistics website</h5>
                <a href="https://rotas.rdc.com.br/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                </a>
              </div>
            </div>

              <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-13"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                      <i className="fab fa-html5 fa-3x pr-3 scroll-animation-1"></i>
                      <i className="fab fa-css3-alt fa-3x"></i>
                      <i className="fab fa-js-square fa-3x pl-3"></i>
                  </div>
                  
                  <h5 className="subtitle">Shopkeeper's website for Encanto da Moda</h5>
                  <a href="https://lojista.encantodamoda.com.br/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link fa-2x icon-link jello-horizontal"></i>
                  </a>
                </div>
              </div>

              <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-14"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                      <i className="fab fa-html5 fa-3x pr-3 scroll-animation-1"></i>
                      <i className="fab fa-css3-alt fa-3x"></i>
                      <i className="fab fa-js-square fa-3x pl-3"></i>
                  </div>
                  
                  <h5 class="subtitle">Delivery site</h5>
                  <a href="http://painelmotofrete.rdc.com.br/" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-link fa-2x icon-link jello-horizontal"></i>
                  </a>
                </div>
              </div>

      </div>

    </div>
    </>
  )
}
