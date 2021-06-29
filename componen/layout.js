import Navigation from '../componen/navigation'
import Footer from '../componen/footer'
import Head from 'next/head'

const Layout = ({ children }) =>{
    return (
        <div>
            <Head>
                <title>Projek Desy</title>
            </Head>
            <Navigation />
            { children }
            <Footer />            
        </div>
    )
}

export default Layout