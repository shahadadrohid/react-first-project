import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Orders from './component/Orders/Orders';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Shipment from './component/Shipment/Shipment';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}
        ></Route>
        <Route path="/shop" element={<Shop></Shop>}
        ></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/shipping" element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;