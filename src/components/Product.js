import React, { Component } from 'react';



 class Product extends Component {
  render() {
    return (
      <div>
       <h1>This is Product #{this.props.match.params.id}</h1>
      </div>
    )
  }
}

export default Product;
