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
                <div className="portfolio-img-background" id="project-17"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper d-flex">
                    <svg height="45px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 316450" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                      <path d="M230965 221006c12301-1273 21633-11878 21209-24604-423-12725-11029-22906-23754-22906h-848c-13151 424-23331 11453-22906 24603 424 6363 2969 11878 6786 15695-14422 28422-36479 49207-69565 66599-22482 11878-45811 16120-69141 13151-19089-2546-33935-11029-43269-25029-13573-20785-14845-43268-3392-65750 8060-16120 20784-27997 28844-33936-1696-5515-4242-14846-5514-21633-61507 44541-55143 104776-36480 133197 13998 21211 42418 34361 73807 34361 8483 0 16966-849 25450-2969 54296-10606 95442-42845 118771-90779zm74656-52600c-32238-37754-79746-58539-134042-58539h-6786c-3818-7635-11878-12727-20785-12727h-849c-13148 424-23328 11453-22905 24604 424 12725 11028 22906 23754 22906h848c9332-425 17392-6363 20785-14423h7635c32238 0 62779 9332 90352 27573 21208 13999 36479 32239 44962 54297 7211 17817 6787 35208-849 50056-11876 22482-31813 34784-58112 34784-16967 0-33086-5091-41570-8909-4665 4242-13150 11028-19088 15272 18241 8483 36905 13150 54720 13150 40722 0 70839-22483 82292-44965 12301-24604 11452-67023-20361-103079zM90137 228216c424 12726 11029 22906 23754 22906h849c13150-423 23330-11453 22905-24603-423-12726-11029-22906-23754-22906h-848c-849 0-2122 0-2969 423-17392-28845-24603-60234-22057-94170 1695-25452 10180-47510 25026-65751 12301-15695 36055-23331 52174-23754 44962-849 64050 55144 65323 77628 5515 1272 14846 4242 21210 6363C246659 35633 204241 0 163521 0c-38177 0-73384 27573-87383 68296-19512 54297-6786 106472 16968 147620-2120 2969-3393 7635-2969 12302v-1z" fill="#fff"/>
                    </svg>
                    <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                    <svg xmlns="http://www.w3.org/2000/svg" height="45px" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                      <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" fill="#fff"/>
                      <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" fill="#fff"/>
                    </svg>
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
                          <Modal.Title>Movies and Series Images</Modal.Title>
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

              <div className="portfolio-item-wrapper" data-aos="fade-down">
                <div className="portfolio-img-background" id="project-16"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <svg style={{marginRight: "15px"}} height="65px" viewBox="0 0 512 309" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                      <g>
                        <path d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z" fill="#fff" fillRule="nonzero"/>
                      </g>
                    </svg>
                    <svg height="45px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29">
                      <path className="cls-1" d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z" fill="#fff"/>
                    </svg>
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
                          <Modal.Title>Netflix Clone</Modal.Title>
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
                <div className="portfolio-img-background" id="project-13"></div>

                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                    <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                    <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                    <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  </div>
                  
                  <h5 className="subtitle">Shopkeeper's website</h5>
                  <div className="d-flex flex-row">
                    <a href="http://lojista.storevenu.com.br/" target="_blank" rel="noopener noreferrer">
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
              <div className="portfolio-img-background" id="project-12"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Logistics website</h5>
                <div className="d-flex flex-row">
                  <a href="http://rotas.ventunolog.com.br/" target="_blank" rel="noopener noreferrer">
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
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/logistics-modal-image-4.jpg'}
                                alt="Third slide"
                                width={800}
                                height={500}
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                src={prefix + '/img/modalImg/logistics-modal-image-5.jpg'}
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
              <div className="portfolio-img-background" id="project-11"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  <FontAwesomeIcon icon={faHtml5} className="fontAwesomeIcon" style={{color: "#fff"}} />
                  <FontAwesomeIcon icon={faCss3Alt} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px", marginLeft: "15px"}} />
                  <FontAwesomeIcon icon={faJsSquare} className="fontAwesomeIcon" style={{color: "#fff"}} />
                </div>
                
                <h5 className="subtitle">Ecommerce Site</h5>
                <div className="d-flex flex-row">
                  <a href="http://storevenu.com.br/" target="_blank" rel="noopener noreferrer">
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
              <div className="portfolio-img-background" id="project-10"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper d-flex">
                  <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px"}} />
                  <svg xmlns="http://www.w3.org/2000/svg" height="45px" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                      <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" fill="#fff"/>
                      <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" fill="#fff"/>
                    </svg>
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
              <div className="portfolio-img-background" id="project-9"></div>

              <div className="img-text-wrapper">
                <div className="logo-wrapper d-flex">
                  <FontAwesomeIcon icon={faReact} className="fontAwesomeIcon" style={{color: "#fff", marginRight: "15px"}} />
                  <svg xmlns="http://www.w3.org/2000/svg" height="45px" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                      <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" fill="#fff"/>
                      <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" fill="#fff"/>
                    </svg>
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

      </div>

    </div>
    </>
  )
}
