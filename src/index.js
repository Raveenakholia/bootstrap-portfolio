/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional, for global styles
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import { store } from './redux/store';
import Contact from './components/Contact';
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import Achievements from './components/Achievements';
import Projetcs from './components/Projets';
import Projects from './components/Projets';
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/achievements',
        element: <Achievements />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
