import '../styles/globals.css'
import '../styles/login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../componen/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>)
}

export default MyApp
