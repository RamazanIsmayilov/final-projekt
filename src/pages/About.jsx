import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ModeContext } from '../context/ModeContext'
import { LangContext } from '../context/LangContext'

const About = () => {

  const { mode } = useContext(ModeContext)
  const { lang } = useContext(LangContext)


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
              <span className='fw-bold'>{lang ? "Geriyə qayıt" : "Back to home"}</span>
            </Link>
            <h5 className='fs-1 fw-bold'>{lang ? "Haqqımızda" : "About Us"}</h5>
            <p>{lang ? "Oyun sənayesi real və rəqəmsal arasındakı sərhədləri bulandıran virtual reallıq təcrübələri təklif edərək, innovasiyanın sərhədlərini itələməyə davam edir."
              : "The gaming industry continues to push the boundaries of innovation, offering virtual reality experiences that blur the lines between the real and the digital."}</p>
          </div>
        </div>
        
        <div className="about">
          <div className="container">
            <div className="section-one py-5">
              <div className="title">
                <h2 className='fw-bold'>{lang ? "Fantaziya və Reallığın toqquşduğu yerdə" : "Where Fantasy and Reality Collide"}</h2>
              </div>
              <div className="row mt-4">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <p>{lang ? "Sizi kəşf edilməmiş ərazilərə, uzaq qalaktikalara və epik döyüş meydanlarına aparan həyəcanlandıran oyun səyahətlərinə çıxmağa hazırlaşın. Bizim oyun cənnətimiz həyəcan, rəqabət və yoldaşlığın misilsiz qarışığını təqdim edir, bütün səviyyələrdə olan oyunçuları daxili döyüşçülərini üzə çıxarmağa və oyunun həyəcanını qəbul etməyə dəvət edir. Mümkün olanların sərhədlərini aşan ən müasir qrafikaya, valehedici hekayə xətlərinə və dinamik oyuna qərq olun. İldırım sürəti ilə reflekslər tələb edən hərəkətli atıcılardan tutmuş, sizi taleyinizi formalaşdırmağa dəvət edən immersiv rol oynama oyunlarına qədər, bizim oyun kolleksiyamız janrları əhatə edir və sonsuz imkanlar təqdim edir."
                    : "Prepare to embark on thrilling gaming journeys that transport you to uncharted territories, distant galaxies, and epic battlegrounds. Our gaming paradise offers an unparalleled blend of excitement, competition, and camaraderie, inviting players of all levels to unleash their inner warriors and embrace the exhilaration of play. Immerse yourself in cutting-edge graphics, captivating storylines, and dynamic gameplay that push the boundaries of what's possible. From action-packed shooters that demand lightning-fast reflexes to immersive role-playing games that invite you to shape your destiny, our collection of games spans genres and offers endless possibilities."}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <p>{lang ? "İstər təcrübəli peşəkar, istərsə də təcrübəsiz kəşfiyyatçı olmağınızdan asılı olmayaraq, bizim oyun mühitimiz həm rəqabət, həm də əməkdaşlıq üçün yer təmin edir. Dünyanın hər yerindən olan oyunçu yoldaşları ilə əlaqə qurun, ittifaqlar qurun və birlikdə tapşırıqlara başlayın və ya bacarıqlarınızı və strategiyalarınızı sınayan gərgin multiplayer döyüşlərində baş-başa gedin. Ən müasir texnologiyamız və yüksək məhsuldar avadanlıqlarımızla əvvəllər heç vaxt olmadığı kimi oyun təcrübəsini yaşayın. Ən müasir virtual reallıq təcrübələri vasitəsilə özünüzü canlı dünyalara qərq edin və ya ən yüksək səviyyəli oyun aksesuarlarımızın dəqiqliyini və həssaslığını hiss edin."
                    : "Whether you're a seasoned pro or a novice explorer, our gaming environment provides a space for both competition and collaboration. Connect with fellow gamers from around the world, form alliances, and embark on quests together, or go head-to-head in intense multiplayer battles that test your skills and strategies. Experience gaming like never before with our state-of-the-art technology and high-performance equipment. Immerse yourself in vivid worlds through cutting-edge virtual reality experiences or feel the precision and responsiveness of our top-of-the-line gaming accessories."}</p>
                </div>
              </div>
            </div>
            <div className="section-two">
              <div className="title">
                <h2 className='fw-bold d-flex align-items-center justify-content-center'>{lang ? 'İmmersiv Oyun Macəraları: Oyunun Gücünü Sərbəst buraxın' : 'Immersive Gaming Adventures: Unleash the Power of Play'}</h2>
              </div>
              <div className="py-5">
                <div className="row d-flex align-items-center">
                  <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                    <h3 className='fw-bold pb-2'>{lang ? 'Ən Yaxşı Oyun Təcrübəsini araşdırın' : 'Explore the Ultimate Gaming Experience'}</h3>
                    <p>{lang ? 'Biz sizi tamamilə batmağa və sevdiyiniz rəqəmsal aləmlərə qoşulmağa imkan verən rakipsiz oyun təcrübəsi təqdim etməyə çalışırıq. Lakin oyun sadəcə əyləncə deyil; bir icmadır. Müxtəlifliyi qeyd edən və oyunçulara qoşulmaq, rəqabət aparmaq və böyümək üçün güc verən canlı və əhatəli oyun mədəniyyətini inkişaf etdirmək üçün bizə qoşulun. Nailiyyətlərinizi paylaşın, canlı müzakirələrdə iştirak edin və ehtiras və həvəsinizi bölüşən həmfikir oyunçularla davamlı dostluqlar qurun.' :
                      'We re dedicated to providing an unrivaled gaming experience that leaves you fully immersed and connected to the digital realms you love. But gaming is more than just entertainment; its a community. Join us in fostering a vibrant and inclusive gaming culture that celebrates diversity and empowers players to connect, compete, and grow. Share your achievements, engage in lively discussions, and forge lasting friendships with like-minded gamers who share your passion and enthusiasm.'}</p>
                    <p>{lang ? 'Rəqabətli oyunların adrenalini, geniş virtual mənzərələri kəşf etmək və ya mürəkkəb tapmacaları açmaqdan zövq almaqdan asılı olmayaraq, bizim oyun təkliflərimiz hər arzunuza cavab verir. Potensialınızı açın, yaradıcılığınızı üzə çıxarın və sizi saatlarla ovsunlayacaq unudulmaz oyun macəralarına başlayın.' :
                      'Whether you seek the adrenaline rush of competitive gaming, the exploration of vast virtual landscapes, or the joy of unraveling intricate puzzles, our gaming offerings cater to your every desire. Unlock your potential, unleash your creativity, and embark on unforgettable gaming adventures that will keep you captivated for hours on end.'}</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                    <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/abt-1.jpg?v=1671606891" alt="" />
                  </div>
                </div>
                <div className="py-4">
                  <div className="row d-flex align-items-center flex-lg-row-reverse">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-6">
                      <h3 className='fw-bold pb-2'>{lang ? 'Oyun Mükəmməlliyi Dünyasına daxil olun' : 'Dive into the World of Gaming Excellence'}</h3>
                      <p>{lang ? 'Vizual olaraq heyrətamiz mənzərələrə və realizmin sərhədlərini aşan mürəkkəb dizayn dünyalarına dalın. Səliqəli şəkildə hazırlanmış personajlardan nəfəs kəsən mühitlərə qədər, oyunlarımız sizi fantastika və reallıq arasındakı xətti bulandıran immersiv rəqəmsal aləmlərə aparır. Bizim oyun platformamız bir sıra çətinlik parametrləri və fərdiləşdirilə bilən seçimlər təklif edərək, bütün bacarıq səviyyələrində olan oyunçulara xidmət edir. İstər yeni çağırışlar axtaran təcrübəli oyunçu, istərsə də dincəlmək və əylənmək istəyən təsadüfi oyunçu olmağınızdan asılı olmayaraq, növbəti macəranıza başlamaq üçün sizi bir oyun gözləyir.'
                        : 'Dive into the visually stunning landscapes and intricately designed worlds that push the boundaries of realism. From meticulously crafted characters to breathtaking environments, our games transport you to immersive digital realms that blur the line between fiction and reality. Our gaming platform caters to players of all skill levels, offering a range of difficulty settings and customizable options. Whether you re a seasoned gamer seeking a new challenge or a casual player looking to unwind and have fun, there s a game waiting for you to embark on your next adventure.'}</p>
                      <p>{lang ? 'Ehtirasınızı və həvəsinizi bölüşən canlı oyunçular cəmiyyətinə qoşulun. Yeni dostluqlar qurarkən, strategiyalar mübadiləsində və qələbələri birlikdə qeyd edərkən əlaqə qurun, rəqabət aparın və əməkdaşlıq edin. Bizim oyun platformamız təkcə oyunlarla bağlı deyil; bu dinamik dünyada inkişaf edən əlaqələr və yoldaşlıq haqqındadır.'
                        : 'Join a vibrant community of fellow gamers who share your passion and enthusiasm. Connect, compete, and collaborate as you forge new friendships, exchange strategies, and celebrate victories together. Our gaming platform is not just about the games; it s about the connections and camaraderie that thrive within this dynamic world.'}</p>
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
                <h2 className='fw-bold text-center'>{lang ? 'Xidmətlərimiz haqqında' : 'About our services'}</h2>
                <p className='desc text-center my-3'>{lang ? 'Missiyamız fərdləri biliklərlə gücləndirmək və platformamız vasitəsilə mənalı əlaqələri asanlaşdırmaqdır. Biz bu günün sürətli dünyasında etibarlı və müasir məlumatın əhəmiyyətini başa düşürük.'
                  : 'Our mission is to empower individuals with knowledge and facilitate meaningful connections through our platform.We understand the importance of reliable and up-to-date information in today s fast-paced world.'}</p>
              </div>
              <div className="row g-3 mt-5">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="carts px-4 pt-3 pb-2">
                    <div className="carts-title d-flex align-items-center justify-content-between mt-2">
                      <h3 className='fw-bold'>{lang ? 'Sürətli çatdırılma' : 'Fast delivery'}</h3>
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/1_8278e215-a6b4-4abe-8a33-e6cc48f5fdad_24x24.png?v=1671607627" alt="" />
                    </div>
                    <p className='mt-2'>{lang ? 'Xüsusi çatdırılma müddəti göndərmə ünvanından və seçilmiş çatdırılma seçimindən asılı olaraq dəyişəcək. Müştərilər təxmini çatdırılma tarixini görmək üçün sifarişlərini onlayn izləyə bilərlər.'
                      : 'The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online to see the estimated delivery date.'}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="carts px-4 pt-3 pb-2">
                    <div className="carts-title d-flex align-items-center justify-content-between mt-2">
                      <h3 className='fw-bold'>{lang ? 'Çoxlu təkliflər' : 'Many offers'}</h3>
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/2_99357864-c2be-4dd7-a53b-d18e15c99cb9_24x24.png?v=1671607635" alt="" />
                    </div>
                    <p className='mt-2'>{lang ? 'CMS həmçinin provayderlərə və dövlət agentliklərinə Medicare, Medicaid və SCHIP çərçivəsində öz öhdəliklərini yerinə yetirməyə kömək etmək üçün müxtəlif təlim və texniki yardım təklif edir.'
                      : 'CMS also offers a variety of training and technical assistance to help providers and state agencies meet their responsibilities under Medicare, Medicaid, and help to SCHIP.'}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                  <div className="carts px-4 pt-3 pb-2">
                    <div className="carts-title d-flex align-items-center justify-content-between mt-2">
                      <h3 className='fw-bold'>{lang ? '24/7 dəstək' : '24/7 support'}</h3>
                      <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/3_ae0a0760-7aab-4cf4-829a-a170edd317cb_24x24.png?v=1671607645" alt="" />
                    </div>
                    <p className='mt-2'>{lang ? 'CMS Xidməti dəstəyi həftənin 7 günü, günün 24 saatı mövcuddur. Onlarla telefon, e-poçt və ya söhbət vasitəsilə əlaqə saxlaya bilərsiniz. CMS Xidməti dəstəyi üçün əlaqə məlumatları buradadır:'
                      : 'CMS Service support is available 24 hours a day, 7 days a week. You can reach them by phone, email, or chat. Here are the contact information for CMS Service by phone support:'}</p>
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