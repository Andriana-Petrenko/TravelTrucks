import { Helmet } from 'react-helmet-async'
import MainInfo from '../../components/MainInfo/MainInfo'
const HomePage = () => {
    return (
      <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <MainInfo/>
      </>
  )
}

export default HomePage