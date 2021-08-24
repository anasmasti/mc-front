import Header from '../components/layout/header/Header'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout