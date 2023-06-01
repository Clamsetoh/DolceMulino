import './App.css';
import Body from './componentes/body/Body';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
  <>
  <Body/>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>      
      <Route/>      
      <Route/>      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App
