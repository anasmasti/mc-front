import Link from 'next/link'
import headerStyle from '../../styles/shared/Header.module.scss'



let categories = [
    {
        id: 1,
        title: 'Homme',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#'
    },
    {
        id: 2,
        title: 'Femme',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#'
    },
    {
        id: 3,
        title: 'Enfant',
        description: "Your customers' data will be safe and secure.",
        href: '#'
    },

]
let callsToAction = [
    {
        id: 1,
        action: 'Voir tout',
        href: '#'
    },
    {
        id: 2,
        action: 'Contactez nous',
        href: '#'
    },
]

let mobileMenu = [
    {
        id: 1,
        title: 'Acceil',
        href: '#'
    },
    {
        id: 2,
        title: 'A propos',
        href: '#'
    },
    {
        id: 3,
        title: 'Contact',
        href: '#'
    },
]

const NavBar = () => {
    return (
        <div className={[headerStyle.header_box, "relative bg-white"].join(' ')} >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="#">
                            <a>
                                <span className="sr-only">M&C</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open menu</span>

                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link href="#">

                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Accueil
                            </a>
                        </Link>

                        <div className="relative">


                            <button type="button" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                                <span>Categories</span>

                                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>



                            <div className="hidden z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        {
                                            categories.map((categorie) => {

                                                return (
                                                    <Link href="#" key={categorie.id}>
                                                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">

                                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    {categorie.title}
                                                                </p>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {categorie.description}
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                )
                                            })

                                        }
                                    </div>
                                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                        {
                                            callsToAction.map((action) => {

                                                return (
                                                    <div key={action.id} className="flow-root">
                                                        <Link href="#">
                                                            <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">

                                                                <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span className="ml-3">{action.action}</span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        <Link href="#">
                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Produits
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Contact
                            </a>
                        </Link>

                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link href="#">
                            <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                S'identifier
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="ml-5 flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-2  rounded-full tracking-wide font-semibold  shadow cursor-pointer transition ease-in duration-500">
                                S'inscrire
                            </a>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                            </div>
                            <div className="-mr-2">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">


                                {
                                    categories.map((categorie) => {

                                        return (
                                            <Link href="#" key={categorie.id}>
                                                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        {categorie.title}
                                                    </span>
                                                </a>
                                            </Link>
                                        )
                                    })

                                }
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {
                                mobileMenu.map((link) => {

                                    return (
                                        <Link href="#" key={link.id}>
                                            <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                {link.title}
                                            </a>
                                        </Link>
                                    )
                                })

                            }
                        </div>
                        <div>
                            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                S'inscrire
                            </a>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Vous êtes déjà client??
                                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                    S'identifier
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar;
