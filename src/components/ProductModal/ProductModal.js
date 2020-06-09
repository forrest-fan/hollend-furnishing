import React from 'react';
import './ProductModal.css';
import './ProductModalMobile.css';

class ProductModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.props.product.colors[0],
			material: this.props.product.material[0],
			modalImage: this.props.product.img,
			fav: this.props.product.fav
		};
		this.toggleFav = this.toggleFav.bind(this);
	}

	toggleFav() {
		if (this.props.product.fav) {
			this.setState({fav: false});
			this.props.toggleFav();
		} else {
			this.setState({fav: true});
			this.props.toggleFav();
		}
	}

	render() {
		return(
			<div className='modal-container'>
				<div className='modal-content'>
					<div className='exit' onClick={this.props.handleClose}>
						×
					</div>
					<div className='modal-slideshow-container'>
						<img src={this.state.modalImage} className='modal-img' />
					</div>
					<div className='modal-text'>
						<h1 className='modal-name'>{this.props.product.name} - {this.state.material}, {this.state.color}</h1>
						<p className='model-num'>Product #{this.props.product.number}</p>
						<p className='modal-price'>${this.props.product.price}.00<span className='quantity'> / unit</span></p>
						<div className='modal-color-container'>
							<p className='modal-color-label'>Colors:</p>
							{this.props.product.colors.map(color => {
								const colorClass = color.charAt(0).toLowerCase() + color.substring(1) + '-block modal-color';
								const colorClassActive = colorClass + ' active-color';
								if (this.state.color === color) {
									return(<div className={colorClassActive} title={color}></div>);
								} else {
									return(<div className={colorClass} title={color} onClick={() => {
										var imageName = 'img' + color;
										this.setState({
											color: color,
											modalImage: this.props.product[imageName]
										});
									}}></div>);
								}
							})}
						</div>
						<div className='modal-mat-container'>
							<p className='modal-mat-label'>Materials:</p>
							{this.props.product.material.map(mat => {
								if (this.state.material === mat) {
									return(
										<div className='mat-block active-mat'>{mat}</div>
									);
								} else {
									return(
										<div className='mat-block' onClick={() => {
											this.setState({material: mat});
										}}>{mat}</div>
									);
								}
							})}
						</div>	
						<div>
							
							<p className='modal-cat'>This product is part of the <strong>{this.props.product.category}</strong> collection.</p>
							{this.state.fav ? <button className='fav-btn-true' onClick={this.toggleFav}><i className='fas fa-star' style={{marginRight: '10px'}}></i>Added to Favourites</button> : <button className='fav-btn-false' onClick={this.toggleFav}><i className='far fa-star' style={{marginRight: '10px'}}></i>Add to Favourites</button>}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductModal;