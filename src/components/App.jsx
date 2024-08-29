import './App.css'
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() { 
  return  (<>
      <Layout>
       <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/catalog' element={<CatalogPage/>}></Route>
          <Route path='/catalog/:id/*' element={<DetailsPage/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>     
          </Routes>
    </Layout>
      
  </>
  )
}

export default App