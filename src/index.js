/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/Styles/home.css';
import './pages/Styles/tab.css';
import './pages/Styles/Header.css';
import './pages/Styles/footer.css';
import './pages/Styles/todo.css';
import './pages/Styles/AllItems.css';
import './pages/Styles/itemDetails.css';
import './pages/Styles/error404.css';
import Tab from './pages/components/Tab';
import Todo from './pages/components/Todo';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/components/Home';
import Items from './pages/components/Items';
import ItemDetails from './pages/components/ItemDetails';
import Error404 from './pages/components/Error404';
import Form from './pages/components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allrouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'tab-secton',
      element: <Tab/>
    },
    {
      path: 'todo-app',
      element: <Todo/>
    },
    {
      path: 'all-items',
      element: <Items/>
    },
    {
      path: 'ItemDetails/:id',
      element: <ItemDetails/>
    },
    {
      path: '*',
      element: <Error404/>
    },
    {
      path: 'forms',
      element: <Form/>
    }
  ]
)

root.render(
	<React.StrictMode>
    <RouterProvider router={allrouter}/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
