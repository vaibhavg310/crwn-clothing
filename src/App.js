import Home from './routes/home/home.component';
import {Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';


const Shop = () => {
  return (
    <div>
      <h1>I am the Shop page</h1>
    </div>
  );
}  

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
       <Route index  element ={ <Home/>} />
       <Route path='Shop' element={<Shop/>} />
      </Route>
    </Routes>
  ) 
 
};

export default App;
