import React,{Component} from 'react';
import PropTypes from'prop-types'; 
import './style products.css';

var arrayHeaderStyle ={
background : 'aliceblue',
color :'blueviolet'
};
class ProductsTable extends Component  {
  
render (props) {
  return (
    <div>
<table>
<thead>
<tr style={arrayHeaderStyle}>
  <th>Name</th>
  <th>Category</th>
  <th>Price</th>
</tr>
</thead>
<tbody>
{ this.props.Products.map( function (product, key){
    
return  <tr key={key}>
        <td>{product.Name}</td>
        <td >{product.Category}</td>
        <td>{product.Price}</td>
      </tr>
}
)}
</tbody>
</table>
      
    </div>
  );
}
}
ProductsTable.propTypes ={
  Products : PropTypes.array
};

export default ProductsTable;