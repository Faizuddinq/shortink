
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Link from './pages/Link'
import RedirectLink from './pages/RedirectLink'
import UrlProvider from './context/Context'
import RequireAuth from './components/RequireAuth'

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element: <LandingPage/>
      },
      {
        path:'/auth',
        element: 
          // (<RequireAuth>
            <Auth/>
          // </RequireAuth>)
      
      },
      {
        path:'/dashboard',
        element: 
        (<RequireAuth>
          <Dashboard/>
        </RequireAuth>)
        },
      {
        path:'/link/:id',
        element:   
        (<RequireAuth>
          <Link/>
        </RequireAuth>)
      },
      {
        path:'/:id',
        element: <RedirectLink/>
      },
    ]
  }
])

function App() {
  

  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  )
}

export default App
