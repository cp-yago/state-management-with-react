import { Route, Routes as RouterDomRoutes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Settings } from '../pages/Settings'
import PrivateRoute from './PrivateRoute'

export const Routes = () => {
  return (
    <RouterDomRoutes>
      <Route path='/login' element={<Login />} />
      <Route
        path='/home'
        element={(
          <Home />
          // <PrivateRoute>
          // </PrivateRoute>
        )}
      />
      <Route
        path='/settings'
        element={(
          <Settings />
          // <PrivateRoute>
          // </PrivateRoute>
        )}
      />
    </RouterDomRoutes>
  )
}