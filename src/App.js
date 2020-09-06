import React,{Component} from 'react';
import ProductsTable from './products table.js';
import './App.css';
var Products =[
  {
    Name :'t-shirt',
    Price :'20',
    Category: 'clothes' 
  },
  {
    Name :'iphone',
    Price :'200',
    Category: 'electronics' 
  },
  {
    Name :'smart-tv',
    Price :'1400',
    Category: 'electronics' 
  },
]; 

class App extends Component  {
render () {
return (
  <div className="App">
    <ProductsTable Products={Products} />
    
  </div>
);
}
}
export default App;
