import './App.css'
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout'
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const FavouritePage = lazy(() => import('../pages/FavouritePage/FavouritePage'));

function App() { 
  return (
    <>
      <Suspense fallback={<Loader />}>
       <Routes>
         <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage/>}></Route>
          <Route path='/catalog/:id/*' element={<DetailsPage />}></Route>
          <Route path='/favourites' element={<FavouritePage/>}></Route>  
          <Route path='*' element={<NotFoundPage />}></Route>
        </Route>     
          </Routes>
    </Suspense> 
  </>
  )
}

export default App