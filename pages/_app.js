import 'styles/globals.scss'
import Layout from 'components/layout'

//Font Awesome設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
)}

export default MyApp
