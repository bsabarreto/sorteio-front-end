import { ListPeopleProvider } from '../context/ListPeople'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function MyApp({ Component, pageProps }) {

  

  return <ListPeopleProvider>
    <Component {...pageProps} />
  </ListPeopleProvider>
}

export default MyApp
