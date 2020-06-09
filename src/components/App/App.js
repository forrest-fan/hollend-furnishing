import React from 'react';
import './App.css';
import Header from '../Header/Header'
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import MobileFilters from '../MobileFilters/MobileFilters';
import ProductList from '../ProductList/ProductList';
import data from './ProductData';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				fav: [],
				category: [],
				material: [],
				colors: []
			},
			filterDisplay: [],
			filterCount: 0,
			allProducts: data,
			renderProducts: data,
			sortMethod: 'popular',
			showFilters: false
		};

		this.updateFilters = this.updateFilters.bind(this);
		this.toggleFav = this.toggleFav.bind(this);
		this.updateSort = this.updateSort.bind(this);
		this.toggleShowFilters = this.toggleShowFilters.bind(this);
	}

	toggleFav(num) {
		let allProducts = this.state.allProducts;
		let renderProducts = this.state.renderProducts;
		let checkFilters = false;
		if (this.state.filters.fav.length !== 0) {
			checkFilters = true;
		}

		allProducts.map(product => {
			if (num === product.number) {
				if (product.fav) {
					product.fav =  false;
					if (checkFilters && renderProducts.includes(product)) {
						renderProducts.splice(renderProducts.indexOf(product), 1);
					}
				} else {
					product.fav =  true;
				}
				if (num === 1209) {
					console.log(product.fav);
				}
			}
		})

		this.setState({
			allProducts: allProducts,
			renderProducts: renderProducts
		});
	}

	updateFilters(filter, action, key) {
		let filters = this.state.filters;
		let filterDisplay = this.state.filterDisplay;
		let filterCount = this.state.filterCount;
		if (action === 'add') {
			filters[key].push(filter);
			filterDisplay.push(filter);
			filterCount += 1;
		} else if (action === 'remove') {
			Object.values(filters).map(filterGroup => {
				for (let i = 0; i < filterGroup.length; i++) {
					if (filterGroup[i] === filter) {
						filterGroup.splice(i, 1);
					}
				}
			});
			for (let i = 0; i < filterDisplay.length; i++) {
				if (filterDisplay[i] === filter) {
					filterDisplay.splice(i, 1);
				}
			}
			filterCount -= 1;
		}
		let renderProducts = [];
		if (filterCount !== 0) {
			this.state.allProducts.map(product => {
				let meetFav = false;
				let meetCat = false;
				let meetMat = false;
				let meetCol = false;

				if (product.fav || filters.fav.length === 0) {
					meetFav = true;
				}

				if (filters.category.length === 0 || Object.values(filters.category).includes(product.category)) {
					meetCat = true;
				}

				if (filters.material.length !== 0) {
					product.material.map(mat => {
						if (Object.values(filters.material).includes(mat)) {
							meetMat = true;
						}
					});
				} else {
					meetMat = true;
				}

				if (filters.colors.length !== 0) {
					product.colors.map(color => {
						if (Object.values(filters.colors).includes(color)) {
							meetCol = true;
						}
					});
				} else {
					meetCol = true;
				}

				if (meetFav && meetCat && meetMat && meetCol) {
					renderProducts.push(product);
				}
			})
		} else {
			renderProducts = this.state.allProducts;
		}

		let sortMethod = this.state.sortMethod;

		if (sortMethod === 'price-asc') {
			renderProducts = renderProducts.sort((a, b) => {
				return a.price - b.price;
			});
		} else if (sortMethod === 'price-dec') {
			renderProducts = renderProducts.sort((a, b) => {
				return b.price - a.price;
			});
		} else if (sortMethod === 'az') {
			renderProducts = renderProducts.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else {
					return 1;
				}
			});
		} else if (sortMethod === 'za') {
			renderProducts = renderProducts.sort((a, b) => {
				if (a.name < b.name) {
					return 1;
				} else {
					return -1;
				}
			});
		} else if (sortMethod === 'popular') {
			renderProducts = renderProducts.sort((a, b) => {
				return a.popularity - b.popularity;
			});
		} else if (sortMethod === 'item-num') {
			renderProducts = renderProducts.sort((a, b) => {
				if (a.name.substring(0, 4) < b.name.substring(0, 4)) {
					return -1;
				} else {
					return 1;
				}
			});
		}

		this.setState({
			filters: filters,
			filterCount: filterCount,
			renderProducts: renderProducts
		});
	}

	updateSort(sortMethod) {
		let renderProducts = this.state.renderProducts;
		if (sortMethod === 'price-asc') {
			renderProducts = renderProducts.sort((a, b) => {
				return a.price - b.price;
			});
		} else if (sortMethod === 'price-dec') {
			renderProducts = renderProducts.sort((a, b) => {
				return b.price - a.price;
			});
		} else if (sortMethod === 'az') {
			renderProducts = renderProducts.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else {
					return 1;
				}
			});
		} else if (sortMethod === 'za') {
			renderProducts = renderProducts.sort((a, b) => {
				if (a.name < b.name) {
					return 1;
				} else {
					return -1;
				}
			});
		} else if (sortMethod === 'popular') {
			renderProducts = renderProducts.sort((a, b) => {
				return a.popularity - b.popularity;
			});
		} else if (sortMethod === 'item-num') {
			renderProducts = renderProducts.sort((a, b) => {
				return a.number - b.number;
			});
		}
		
		this.setState({
			renderProducts: renderProducts,
			sortMethod: sortMethod
		});
	}

	toggleShowFilters() {
		if (this.state.showFilters) {
			this.setState({showFilters: false});
		} else {
			this.setState({showFilters: true});
		}
	}

  	render() {
	  	return (
		    <div className="App">
			    <Header />
			    <MobileFilters updateFilters={this.updateFilters} showFilters={this.state.showFilters} hideFilters={this.toggleShowFilters} filters={this.state.filterDisplay}/>
			    <div style={{display: 'flex'}}>
				    <FilterSidebar updateFilters={this.updateFilters} filters={this.state.filterDisplay}/>
				    <ProductList filterCount={this.state.filterCount} showFilters={this.toggleShowFilters} products={this.state.renderProducts} toggleFav={this.toggleFav} updateSort={this.updateSort}/>
		    	</div>
		    </div>
		);
	}
}

export default App;
