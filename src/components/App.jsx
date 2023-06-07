import { lazy, Suspense } from 'react';
import { Routes, Route} from "react-router-dom";
import { BallTriangle} from  'react-loader-spinner'
import {  AppBar } from "./AppBar/AppBar";
import {  Container} from "./App.styled";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import("../page/HomePage/HomePage"));
const ShopsPage = lazy(() => import("../page/ShopsPage/ShopsPage"));
const ShoppingCartPage = lazy(() => import("../page/ShoppingCartPage/ShoppingCartPage"));
export const App = () => {
  return (
    <div>
      <AppBar/>
      <main>
        <ToastContainer />
        <Container>
      <Suspense fallback={<BallTriangle color="#a1776c" height={80} width={80} />}>
        <Routes>
          <Route path="/DeliveryApp" element={<HomePage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/shoppingCart" element={<ShoppingCartPage />} />
        </Routes>
      </Suspense>
        </Container>
      </main>
    </div>
  );
};
