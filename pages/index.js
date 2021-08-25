import Link from "next/link"
import homeStyle from '../styles/pages/Home.module.scss';
import Slider from "../components/Slider/Slider";
import  sliderStyle  from "../styles/shared/Slider.module.scss";
import Image from 'next/image'

export default function Home() {


  return (
    <div className={[homeStyle.home_section, 'flex', 'justify-content-start', 'align-items-center', 'h-100' ].join(' ')}>
      <div className='row w-full'>
        <div className='col-12 col-lg-6'>

            <Slider />


            {/* Categories */}
            <div className={"grid grid-rows-4 grid-flow-col gap-4 my-20 mx-auto " + sliderStyle.cardsContainer}>

                {/* Women */}
                <div className={"row-span-3  bg-indigo-300  " + sliderStyle.cardWomen }>
                    <div className={"w-full h-full text-center  " }>

                      <Image src="/Imgs/Women-removebg.png" className={ sliderStyle.ImageCategorie + " hidden" } width={200} height={350} />
                      <strong className={ "float-right mx-auto  text-center " + sliderStyle.TitleWomen }>Femmes</strong>

                    </div>
                </div>

                {/* Men */}
                <div className={"col-span-3  bg-indigo-500 " + sliderStyle.cardMen}>
                    <div className={"w-full h-full text-center flex justify-between " }>

                      <Image src="/Imgs/Men.png" className={ sliderStyle.ImageCategorie } width={250} height={250} />
                      <strong className={ "float-right my-auto text-center  " + sliderStyle.TitleMen }>Hommes</strong>

                    </div>
                </div>

                {/* Kid */}
                <div className={"row-span-2 col-span-2  bg-blue-200   " + sliderStyle.card }>
                  
                  <div className={" pl-5 h-full " }>

                    <Image src="/Imgs/children.png" className={sliderStyle.imageKid + " " + sliderStyle.ImageCategorie} width={350} height={300} />
                    <strong className={ "float-right my-auto pb-40 absolute bottom-0 right-0 " + sliderStyle.TitleKid }>Enfants</strong>

                  </div>

                </div>
                
                {/* Baby */}
                <div className={ "col-span-2  bg-blue-400 " + sliderStyle.card }>

                <div className={ "w-full h-full text-center flex justify-between pl-20" }>
                  
                  <Image src="/Imgs/baby.png" className={ sliderStyle.ImageCategorie } width={300} height={200} />

                  <strong className={ "float-right my-auto " + sliderStyle.Title }>Bébés</strong>

                </div>

              </div>

            </div>

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
      </div>
  )
}
