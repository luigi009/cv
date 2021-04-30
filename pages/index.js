import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { faHtml5, faCss3Alt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faLink, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {

  //Pong Modal
  const [showModalPong, setShowModalPong] = useState(false);

  const handleCloseModalPong = () => setShowModalPong(false);
  const handleShowModalPong = () => setShowModalPong(true);

  //Snake Modal
  const [showModalSnake, setShowModalSnake] = useState(false);

  const handleCloseModalSnake = () => setShowModalSnake(false);
  const handleShowModalSnake = () => setShowModalSnake(true);

  //CSS Grid Modal
  const [showModalCssGrid, setShowModalCssGrid] = useState(false);

  const handleCloseModalCssGrid = () => setShowModalCssGrid(false);
  const handleShowModalCssGrid = () => setShowModalCssGrid(true);

  //Login & Registration Modal
  const [showModalLoginRegistration, setShowModalLoginRegistration] = useState(false);

  const handleCloseModalLoginRegistration = () => setShowModalLoginRegistration(false);
  const handleShowModalLoginRegistration = () => setShowModalLoginRegistration(true);

  //Ratings Modal
  const [showModalRatings, setShowModalRatings] = useState(false);

  const handleCloseModalRatings = () => setShowModalRatings(false);
  const handleShowModalRatings = () => setShowModalRatings(true);

  //Theme Switcher Modal
  const [showModalThemeSwitcher, setShowModalThemeSwitcher] = useState(false);

  const handleCloseModalThemeSwitcher = () => setShowModalThemeSwitcher(false);
  const handleShowModalThemeSwitcher = () => setShowModalThemeSwitcher(true);

  //Countdown Modal
  const [showModalCountdown, setShowModalCountdown] = useState(false);

  const handleCloseModalCountdown = () => setShowModalCountdown(false);
  const handleShowModalCountdown = () => setShowModalCountdown(true);

  //Calculator Modal
  const [showModalCalculator, setShowModalCalculator] = useState(false);

  const handleCloseModalCalculator = () => setShowModalCalculator(false);
  const handleShowModalCalculator = () => setShowModalCalculator(true);

  //Weather App Modal
  const [showModalWeatherApp, setShowModalWeatherApp] = useState(false);

  const handleCloseModalWeatherApp = () => setShowModalWeatherApp(false);
  const handleShowModalWeatherApp = () => setShowModalWeatherApp(true);

  //Shopping Cart Modal
  const [showModalShoppingCart, setShowModalShoppingCart] = useState(false);

  const handleCloseModalShoppingCart = () => setShowModalShoppingCart(false);
  const handleShowModalShoppingCart = () => setShowModalShoppingCart(true);

  //Ecommerce Modal
  const [showModalEcommerce, setShowModalEcommerce] = useState(false);

  const handleCloseModalEcommerce = () => setShowModalEcommerce(false);
  const handleShowModalEcommerce = () => setShowModalEcommerce(true);

  //Logistics website Modal
  const [showModalLogistics, setShowModalLogistics] = useState(false);

  const handleCloseModalLogistics = () => setShowModalLogistics(false);
  const handleShowModalLogistics = () => setShowModalLogistics(true);

  //Shopkeepers website Modal
  const [showModalShopkeepers, setShowModalShopkeepers] = useState(false);

  const handleCloseModalShopkeepers = () => setShowModalShopkeepers(false);
  const handleShowModalShopkeepers = () => setShowModalShopkeepers(true);

  //Delivery website Modal
  const [showModalDelivery, setShowModalDelivery] = useState(false);

  const handleCloseModalDelivery = () => setShowModalDelivery(false);
  const handleShowModalDelivery = () => setShowModalDelivery(true);

  //Consumer Delivery website Modal
  const [showModalConsumerDelivery, setShowModalConsumerDelivery] = useState(false);

  const handleCloseModalConsumerDelivery = () => setShowModalConsumerDelivery(false);
  const handleShowModalConsumerDelivery = () => setShowModalConsumerDelivery(true);

  //Netflix-Clone website modal
  const [showModalNetflixClone, setShowModalNetflixClone] = useState(false);

  const handleCloseModalNetflixClone = () => setShowModalNetflixClone(false);
  const handleShowModalNetflixClone = () => setShowModalNetflixClone(true);

  //Movie-Series-Info
  const [showModalMoviesSeriesInfo, setShowModalMoviesSeriesInfo] = useState(false);

  const handleCloseModalMoviesSeriesInfo = () => setShowModalMoviesSeriesInfo(false);
  const handleShowModalMoviesSeriesInfo = () => setShowModalMoviesSeriesInfo(true);

  return (
    <>
      <div className="content-wrapper">
      
      <div className="portfolio-items-wrapper">
           
            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-1"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faGamepad} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Pong Game</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Games_Javascript/Pong" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#pongModalImages" id="pongModalInput" onClick={handleShowModalPong}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                    {/* <!-- Modal --> */}
                    <Modal show={showModalPong} onHide={handleCloseModalPong} size="lg" centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Pong Game Images</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <Carousel>
                          <Carousel.Item>
                            <img
                              src={ prefix + '/img/modalImg/pong-modal-image-1.jpg'}
                              alt="First slide"
                              width={800}
                              height={500}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              src={prefix + '/img/modalImg/pong-modal-image-2.jpg'}
                              alt="Second slide"
                              width={800}
                              height={500}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              src={prefix + '/img/modalImg/pong-modal-image-3.jpg'}
                              alt="Third slide"
                              width={800}
                              height={500}
                            />
                          </Carousel.Item>
                        </Carousel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModalPong}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-2"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faGamepad} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Snake Game</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Games_Javascript/Runner" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#snakeModalImages" id="snakeModalInput" onClick={handleShowModalSnake}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalSnake} onHide={handleCloseModalSnake} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Snake Game Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/snake-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/snake-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/snake-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalSnake}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-3"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">CSS Grid</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Landing%20Page%20with%20CSS%20Grid" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#cssGridModalImages" id="cssGridModalInput" onClick={handleShowModalCssGrid}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalCssGrid} onHide={handleCloseModalCssGrid} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>CSS Grid Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/CSSGrid-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/CSSGrid-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/CSSGrid-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalCssGrid}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-4"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Login & Registration</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/login%26Registration" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#loginRegistrationModalImages" id="loginRegistrationModalInput" onClick={handleShowModalLoginRegistration}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalLoginRegistration} onHide={handleCloseModalLoginRegistration} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Login & Registration Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/login&Registration-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalLoginRegistration}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-5"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Ratings</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/start%20ratings" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#ratingsModalImages" id="ratingsModalInput" onClick={handleShowModalRatings}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalRatings} onHide={handleCloseModalRatings} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Ratings Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/rating-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={250}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/rating-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={250}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/rating-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={250}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalRatings}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-6"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Theme Switcher</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Theme%20Switcher" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#themeSwitcherModalImages" id="themeSwitcherModalInput" onClick={handleShowModalThemeSwitcher}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalThemeSwitcher} onHide={handleCloseModalThemeSwitcher} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Theme Switcher Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/themeSwitcher-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/themeSwitcher-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/themeSwitcher-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalThemeSwitcher}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-7"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Countdown</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Countdown" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#countdownModalImages" id="countdownModalInput" onClick={handleShowModalCountdown}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalCountdown} onHide={handleCloseModalCountdown} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Countdown Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/countdown-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalCountdown}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-8"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Calculator</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/master/Calculator" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} size="2x" style={{marginRight: "15px"}} />
                  </a>
                  <a href="#calculatorModalImages" id="calculatorModalInput" onClick={handleShowModalCalculator}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalCalculator} onHide={handleCloseModalCalculator} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Calculator Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/calculator-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={450}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/calculator-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={450}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/calculator-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={450}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalCalculator}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-9"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Weather App</h5>
                <div className="d-flex flex-row">
                  <a href="https://weather-app-luigi009.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#weatherAppModalImages" id="weatherAppModalInput" onClick={handleShowModalWeatherApp}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalWeatherApp} onHide={handleCloseModalWeatherApp} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Weather App Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/weatherApp-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/weatherApp-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/weatherApp-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalWeatherApp}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-10"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Shopping Cart</h5>
                <div className="d-flex flex-row">
                  <a href="https://github.com/luigi009/luigi-fanaro/tree/react/Shopping%20Cart%20(React)/shoppingcart" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#shoppingCartModalImages" id="shoppingCartModalInput" onClick={handleShowModalShoppingCart}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalShoppingCart} onHide={handleCloseModalShoppingCart} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Shopping Cart Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/shoppingCart-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/shoppingCart-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/shoppingCart-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalShoppingCart}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-11"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Ecommerce Site</h5>
                <div className="d-flex flex-row">
                  <a href="https://encantodamoda.com.br/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#ecommerceCartModalImages" id="ecommerceModalInput" onClick={handleShowModalEcommerce}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalEcommerce} onHide={handleCloseModalEcommerce} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Ecommerce Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/ecommerce-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/ecommerce-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/ecommerce-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/ecommerce-modal-image-4.jpg'}
                                alt="Fourth slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/ecommerce-modal-image-5.jpg'}
                                alt="Fifth slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalEcommerce}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
              <div className="portfolio-img-background" id="project-12"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Logistics website</h5>
                <div className="d-flex flex-row">
                  <a href="https://rotas.rdc.com.br/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                  </a>
                  <a href="#logisticsModalImages" id="logisticsModalInput" onClick={handleShowModalLogistics}>
                    <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                  </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalLogistics} onHide={handleCloseModalLogistics} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Logistics website Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/logistics-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/logistics-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/logistics-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalLogistics}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                </div>
              </div>
            </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-13"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                    <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                    <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  </div>
                  
                  <h5 className="subtitle">Shopkeeper's website</h5>
                  <div className="d-flex flex-row">
                    <a href="https://lojista.encantodamoda.com.br/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                    </a>
                    <a href="#shopkeepersModalImages" id="shopkeepersModalInput" onClick={handleShowModalShopkeepers}>
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                    </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalShopkeepers} onHide={handleCloseModalShopkeepers} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Shopkeeper's website Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/shopkeepers-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/shopkeepers-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/shopkeepers-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalShopkeepers}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
                </div>
              </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-14"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon"style={{color: "#fff"}} />
                    <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                    <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  </div>
                  
                  <h5 className="subtitle">Delivery website</h5>
                  <div className="d-flex flex-row">
                    <a href="http://entregadores.ventunolog.com.br/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                    </a>
                    <a href="#deliveryModalImages" id="deliveryModalInput" onClick={handleShowModalDelivery}>
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                    </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalDelivery} onHide={handleCloseModalDelivery} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Delivery website Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                            <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/delivery-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/delivery-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/delivery-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalDelivery}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
                </div>
              </div>

            <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-15"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                    <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                    <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  </div>
                  
                  <h5 className="subtitle">Consumer delivery website</h5>
                  <div className="d-flex flex-row">
                    <a href="http://entregas.ventunolog.com.br/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                    </a>
                    <a href="#consumerdeliveryModalImages" id="consumerdeliveryModalInput" onClick={handleShowModalConsumerDelivery}>
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                    </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalConsumerDelivery} onHide={handleCloseModalConsumerDelivery} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Consumer delivery website Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                        <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/consumerDelivery-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/consumerDelivery-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/consumerDelivery-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalConsumerDelivery}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
                </div>
              </div>

              <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-16"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  </div>
                  
                  <h5 className="subtitle">Netflix Clone</h5>
                  <div className="d-flex flex-row">
                    <a href="https://netflix-clone-git-master-luigi009.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                    </a>
                    <a href="#netflixCloneModalImages" id="netflixCloneModalInput" onClick={handleShowModalNetflixClone}>
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                    </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalNetflixClone} onHide={handleCloseModalNetflixClone} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Netflix CLone</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                        <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/NetflixClone-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={600}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/NetflixClone-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={600}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/NetflixClone-modal-image-3.jpg'}
                                alt="Third slide"
                                width={800}
                                height={600}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalNetflixClone}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
                </div>
              </div>

              <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-17"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  </div>
                  
                  <h5 className="subtitle">Movies and Series Info</h5>
                  <div className="d-flex flex-row">
                    <a href="https://movies-series.vercel.app/#/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faLink} style={{marginRight: "15px"}} />
                    </a>
                    <a href="#moviesSeriesInfoModalImages" id="moviesSeriesInfoModalInput" onClick={handleShowModalMoviesSeriesInfo}>
                      <FontAwesomeIcon className="jello-horizontal fontAwesomeIcon" icon={faSearchPlus} />
                    </a>
                      {/* <!-- Modal --> */}
                      <Modal show={showModalMoviesSeriesInfo} onHide={handleCloseModalMoviesSeriesInfo} size="lg" centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Netflix CLone</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Carousel>
                        <Carousel.Item>
                              <img
                                src={ prefix + '/img/modalImg/MoviesSeriesInfo-modal-image-1.jpg'}
                                alt="First slide"
                                width={800}
                                height={600}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/MoviesSeriesInfo-modal-image-2.jpg'}
                                alt="Second slide"
                                width={800}
                                height={600}
                              />
                            </Carousel.Item>
                          </Carousel>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseModalMoviesSeriesInfo}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                  </div>
                </div>
              </div>

      </div>

    </div>
    </>
  )
}
