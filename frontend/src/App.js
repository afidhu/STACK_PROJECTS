import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavigationType, Route, Routes } from 'react-router-dom'
import Nav from './component/layout.js/nav';
import Product from './component/product';
import Category from './component/category';
import Notfoundpage from './component/layout.js/notfoundpage';
import Home from './component/layout.js/home';
import Addpro from './component/addpro';
import AddCategory from './component/addCategory';
import UpdateProduct from './component/updateProduct';
import ProductDetail from './component/productUpdate';
import Searchresult from './component/searchresult';



function App() {
  return (
    <div className="App">
 <BrowserRouter>
         <Nav/>
                <Routes>
                
                    <Route exact path='/' element={<Home />}  ></Route>
                    <Route exact path='/addproduct' element={<Addpro />}  ></Route>
                    <Route exact path='/product/' element={<Product />}  ></Route>
                    <Route exact path='/product/' element={<Product />}  ></Route>
                    <Route exact path='/search/' element={<Searchresult />}  ></Route>
                    <Route exact path='/updatepro/:pro_id/' element={<UpdateProduct />}  ></Route>
                    <Route exact path='/product/productdetail/:pro_id/' element={<ProductDetail />}  ></Route>
                    <Route exact path='/addcategory/' element={<AddCategory />}  ></Route>
                    <Route exact path='*' element={<Notfoundpage />}  ></Route>
                   

                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
