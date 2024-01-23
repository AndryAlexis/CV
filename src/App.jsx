// Import necessary dependencies
import { createHashRouter, RouterProvider } from 'react-router-dom';

// Components for different routes
import CurriculumVitae from './routes/cv';
import Home from './routes/home';

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/cv',
    element: <CurriculumVitae/>
  }
])

// Configure the router in your main component
const App = _ => <RouterProvider router={router}/>

export default App