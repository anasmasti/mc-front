import Link from "next/link"
import homeStyle from '../styles/pages/Home.module.scss';
import Slider from "../components/Slider/Slider";
import  sliderStyle  from "../styles/shared/Slider.module.scss";
import Image from 'next/image'

export default function Home() {


  return (
    <div className={[homeStyle.home_section, 'flex', 'justify-content-start', 'align-items-center', 'h-100'].join(' ')}>
      <div className='row'>
        <div className='col-12 col-lg-6'>

            <Slider />

            <div className={"grid grid-rows-4 grid-flow-col gap-4 my-20 mx-auto " + sliderStyle.cardsContainer}>
              <div className={"row-span-3  bg-red-600 " + sliderStyle.card }>
1
              </div>
              <div className={"col-span-3  bg-red-600 " + sliderStyle.card}>

              </div>
              <div className={"row-span-2 col-span-2  bg-red-600 " + sliderStyle.card }>

              </div>
              {/* <div className={"col-span-2  bg-red-600 grid grid-rows-1  " + sliderStyle.card }>

                <div className={ "  bg-green-600 " }>
                  
                  <Image src="/Imgs/baby.png" className={sliderStyle.image} width={300} height={200} />

                  <h5 className={ "float-right bg-green-800 " + sliderStyle.Title }>Bébés</h5>

                </div>

                {/* <img src="../public/Imgs/baby.png" /> 

              </div> */}

              <div className={ "col-span-2  bg-blue-400 " + sliderStyle.card }>

                <div className={sliderStyle.cardBody }>
                  
                  <Image src="/Imgs/baby.png" className={ sliderStyle.image} width={300} height={200} />

                  <h5 className={ "float-right my-auto " + sliderStyle.Title }>Bébés</h5>

                </div>

                {/* <img src="../public/Imgs/baby.png" /> */}

              </div>

            </div>


            <h1>
              M&C Cotton
            </h1>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
          <div className={homeStyle.btns_section}>
            <Link href='/contact'>
              <a className='main-btn px-3'>
                <strong>
                  Contactez-nous
                </strong>
              </a>
            </Link>
          </div>
        </div>
        <div className='col-12 col-lg-6'>

        </div>
      </div>
  )
}
