import React from 'react';
import './Product.css';
import ProductModal from '../ProductModal/ProductModal'

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false
		};
		this.toggleFav = this.toggleFav.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	toggleFav() {
		this.props.toggleFav(this.props.product.number);
		this.setState({
			fav: this.state.fav ? false : true
		})
	}

	openModal() {
		this.setState({modalOpen: true});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	render() {
		return(
			<div className='product-container'>
				<div className='img-container'>
					<img src={this.props.product.img} className='product-img' onClick={this.openModal}/>
				</div>
				<div className='product-text-container'>
					<div>
						<h1 className='product-name' onClick={this.openModal}>{this.props.product.name}</h1>
						{this.props.product.fav ? <i className='product-star fas fa-star' onClick={this.toggleFav} title='Added to Favourites'></i> : <i className='product-star far fa-star' onClick={this.toggleFav} title='Add to Favourites'></i>}
					</div>
					<p className='model-num'>#{this.props.product.number} - {this.props.product.category.toUpperCase()}</p>
					<p className='model-price'>${this.props.product.price}.00</p>
				</div>
				{this.state.modalOpen ? <ProductModal product={this.props.product} handleClose={this.closeModal} toggleFav={this.toggleFav}/> : <div></div>}
			</div>
		);
	}
}

export default Product;