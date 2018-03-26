import React, { Component } from 'react';
import FeaturedProduct from './FeaturedProduct';
import { Link } from 'react-router-dom';

class FeaturedProducts extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products,
      dataLoaded: false
    }
    this.createProducts = this.createProducts.bind(this)
  }

  componentDidMount(){
    if(this.state.products){
      this.setState({
        dataLoaded: true
      })
    }
    // console.log(this.props.products, 'HELLO PROPS');
  }
  createProducts(products){
    return products.map((product) => {
      if (product.featured){
        return(
          <FeaturedProduct key={product.id} name={product.name} description={product.description} image={product.image} />
        )
      }
    })
  }
  render() {
    return (
      <div className='Featured'>
        <div className='featured-tagline'>
          ~ Lookbook ~
        </div>
        <div className='featured-text'>
          Featured Products
        </div>
        <div>
          <Link to="/products">
            <button className='content-button'>
              See All
            </button>
          </Link>
        </div>
        { this.state.dataLoaded ?
          <div className='FeaturedList'>
             {this.createProducts(this.state.products)}

          </div>
          :
          ''
        }
      </div>
    );
  }
}

export default FeaturedProducts;
