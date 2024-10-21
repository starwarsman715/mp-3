import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Root from './components/Root'; 

const router = createBrowserRouter(
  [
    {path:'*', Component: Root},
  ]
 );

function App() {
  return (
    <>
      <Header />
      <div className="layout-container">
        <div className="content-container">
          <RouterProvider router={router} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
