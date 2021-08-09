
import Link from "next/link"
import homeStyle from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={[homeStyle.home_section, 'flex', 'justify-content-start', 'align-items-center', 'h-100'].join(' ')}>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <div>
            <h1>
              Qualité Rapidité Fluidité
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
    </div>

  )
}
