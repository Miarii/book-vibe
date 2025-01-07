import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/root';
import ErrorPage from './Component/ErrorPage/errorPage';
import Home from './Component/Home/Home';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import PagesToRead from './Component/PagesToRead/PagesToRead';
import BookDetails from './Component/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "listedBooks",  
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "reading",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/books/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json"),
        
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)