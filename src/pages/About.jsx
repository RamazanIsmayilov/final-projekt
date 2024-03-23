import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModeContext } from '../context/ModeContext'

const About = () => {

  const { mode } = useContext(ModeContext)


  return (
    <div className={`${mode ? 'light' : 'dark'}`}>
      <div className="aboutus">
        <div className="heading py-5">
          <div className="container d-flex flex-column gap-4">
            <Link to="/" className='d-flex align-items-center gap-3'>
              <span className="svg-ic d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5791 2.28954C10.5791 2.53299 10.3818 2.73035 10.1383 2.73035L1.52698 2.73048L2.5628 3.73673C2.73742 3.90636 2.74146 4.18544 2.57183 4.36005C2.40219 4.53467 2.12312 4.53871 1.9485 4.36908L0.133482 2.60587C0.0480403 2.52287 -0.000171489 2.40882 -0.000171488 2.2897C-0.000171486 2.17058 0.0480403 2.05653 0.133482 1.97353L1.9485 0.210321C2.12312 0.0406877 2.40219 0.044729 2.57183 0.219347C2.74146 0.393966 2.73742 0.673036 2.5628 0.842669L1.52702 1.84888L10.1383 1.84875C10.3817 1.84874 10.5791 2.04609 10.5791 2.28954Z" fill="white"></path>
                </svg>
              </span>
              <span className='fw-bold'>Back to home</span>
            </Link>
            <h5 className='fs-1 fw-bold'>About Us</h5>
            <p>The gaming industry continues to push the boundaries of innovation,
              offering virtual reality experiences that blur the lines between the real and the digital.</p>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="section-one py-5">
              <div className="title">
                <h2 className='fw-bold'>Where Fantasy and Reality Collide</h2>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Prepare to embark on thrilling gaming journeys that transport you to uncharted territories,
                    distant galaxies, and epic battlegrounds. Our gaming paradise offers an unparalleled blend of excitement,
                    competition, and camaraderie, inviting players of all levels to unleash their inner warriors and embrace the exhilaration of play.
                    Immerse yourself in cutting-edge graphics, captivating storylines, and dynamic gameplay that push the boundaries of what's possible.
                    From action-packed shooters that demand lightning-fast reflexes to immersive role-playing games that invite you to shape your destiny,
                    our collection of games spans genres and offers endless possibilities.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Whether you're a seasoned pro or a novice explorer, our gaming environment provides a space for
                    both competition and collaboration. Connect with fellow gamers from around the world, form alliances,
                    and embark on quests together, or go head-to-head in intense multiplayer battles that test your skills
                    and strategies. Experience gaming like never before with our state-of-the-art technology and high-performance
                    equipment. Immerse yourself in vivid worlds through cutting-edge virtual reality experiences or feel the precision
                    and responsiveness of our top-of-the-line gaming accessories.</p>
                </div>
              </div>
            </div>
            <div className="section-two">
              <div className="title">
                <h2 className='fw-bold d-flex align-items-center justify-content-center'>Immersive Gaming Adventures: Unleash the Power of Play</h2>
              </div>
              <div className="py-5">
                <div className="row d-flex align-items-center">
                  <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                    <h3 className='fw-bold pb-2'>Explore the Ultimate Gaming Experience</h3>
                    <p>We're dedicated to providing an unrivaled gaming experience that leaves you fully immersed and
                      connected to the digital realms you love. But gaming is more than just entertainment; it's a community.
                      Join us in fostering a vibrant and inclusive gaming culture that celebrates diversity and empowers players
                      to connect, compete, and grow. Share your achievements, engage in lively discussions, and forge lasting
                      friendships with like-minded gamers who share your passion and enthusiasm.</p>
                    <p>Whether you seek the adrenaline rush of competitive gaming, the exploration of vast virtual landscapes,
                      or the joy of unraveling intricate puzzles, our gaming offerings cater to your every desire. Unlock your
                      potential, unleash your creativity, and embark on unforgettable gaming adventures that will keep you captivated for hours on end.</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                    <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/abt-1.jpg?v=1671606891" alt="" />
                  </div>
                </div>
                <div className="py-4">
                  <div className="row d-flex align-items-center flex-lg-row-reverse">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                      <h3 className='fw-bold pb-2'>Dive into the World of Gaming Excellence</h3>
                      <p>Dive into the visually stunning landscapes and intricately designed worlds that push the boundaries of
                        realism. From meticulously crafted characters to breathtaking environments, our games transport you to
                        immersive digital realms that blur the line between fiction and reality. Our gaming platform caters to
                        players of all skill levels, offering a range of difficulty settings and customizable options. Whether
                        you're a seasoned gamer seeking a new challenge or a casual player looking to unwind and have fun, there's
                        a game waiting for you to embark on your next adventure.</p>
                      <p>Join a vibrant community of fellow gamers who share your passion and enthusiasm. Connect, compete, and
                        collaborate as you forge new friendships, exchange strategies, and celebrate victories together. Our gaming
                        platform is not just about the games; it's about the connections and camaraderie that thrive within this
                        dynamic world.</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/abt-2.jpg?v=1671606911" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services pb-5">
              <div className="title">
                <h2 className='fw-bold text-center'>About our services</h2>
                <p className='text-center my-3'>Our mission is to empower individuals with knowledge and facilitate meaningful connections
                  through our platform.We understand the importance <br /> of reliable and up-to-date information in today's
                  fast-paced world.</p>
              </div>
              <div className="row g-3 mt-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="carts px-4 pt-3 pb-2">
                    <div className="carts-title d-flex align-items-center justify-content-between mt-2">
                      <h3 className='fw-bold'>Fast  delivery</h3>
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/1_8278e215-a6b4-4abe-8a33-e6cc48f5fdad_24x24.png?v=1671607627" alt="" />
                    </div>
                    <p className='mt-2'>The specific delivery time will vary depending on the shipping address and the selected delivery option.
                      Customers can track their order online to see the estimated delivery date.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="carts px-4 pt-3 pb-2">
                    <div className="carts-title d-flex align-items-center justify-content-between mt-2">
                      <h3 className='fw-bold'>Many offers</h3>
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/2_99357864-c2be-4dd7-a53b-d18e15c99cb9_24x24.png?v=1671607635" alt="" />
                    </div>
                    <p className='mt-2'>CMS also offers a variety of training and technical assistance to help providers and state
                      agencies meet their responsibilities under Medicare, Medicaid, and <br /> SCHIP.</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="carts px-4 pt-3 pb-2">
                    <div className="carts-title d-flex align-items-center justify-content-between mt-2">
                      <h3 className='fw-bold'>24/7 support</h3>
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/3_ae0a0760-7aab-4cf4-829a-a170edd317cb_24x24.png?v=1671607645" alt="" />
                    </div>
                    <p className='mt-2'>CMS Service support is available 24 hours a day, 7 days a week. You can reach them by phone,
                      email, or chat. Here are the contact information for CMS Service <br /> support:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About