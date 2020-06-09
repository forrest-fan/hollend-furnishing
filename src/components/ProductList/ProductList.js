import React from 'react';
import './ProductList.css';
import Product from '../Product/Product';

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sortBy: 'popular'
		}
		this.sortChange = this.sortChange.bind(this);
		this.toggleFav = this.toggleFav.bind(this);
	}

	toggleFav(num) {
		this.props.toggleFav(num);
	}

	sortChange(e) {
		const sortMethod = e.target.value;
		this.props.updateSort(sortMethod);
		this.setState({
			sortBy: sortMethod
		})
	}

	render() {
		return(
			<div className='productList-container'>
				<div>
					<h1 className='productList-heading'>Search Results<span className='result-count'>{this.props.products.length} Results</span></h1>
					<div className='sortBy-container'>
						<p>Sort by: </p>
						<select name="sortBy" id="sortBy" onChange={this.sortChange} value={this.state.sortBy}>
							<option value='popular'>Most Popular</option>
							<option value='item-num'>Item #</option>
						    <option value="az">Name: A to Z</option>
						    <option value="za">Name: Z to A</option>
						    <option value="price-asc">Price: Low to High</option>
						    <option value="price-dec">Price: High to Low</option>
						</select>
					</div>
					{this.props.filterCount === 0 ? <p className='mobile-addFilters' onClick={this.props.showFilters}>Add Filters</p> : <p className='mobile-addFilters' onClick={this.props.showFilters}>Change Filters ({this.props.filterCount})</p>}
				</div>
				<div className='list-container'>
					{this.props.products.length !== 0 ? this.props.products.map(product => {return (<Product product={product} toggleFav={this.toggleFav}/>);}) : <div className='no-results'>Sorry! We could not find what you were looking for. Please try updating the filters to broaden your search.</div>}
				</div>
			</div>
		);
	}
}

export default ProductList