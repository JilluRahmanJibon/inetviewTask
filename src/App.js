import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Result from './components/Result';

export const ResultContext = createContext()
function App() {
  const [name, setName] = useState(null);
  const [sector, setSector] = useState(null);
  const [condition, setCondition] = useState(false);
  const info = {
    name, setName, sector, setSector, condition, setCondition
  }
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/result', element: <Result /> }
  ])

  return (
    <div className=" ">
      <ResultContext.Provider value={info}>
        <RouterProvider router={router} />
      </ResultContext.Provider>
    </div>
  );
}

export default App;
