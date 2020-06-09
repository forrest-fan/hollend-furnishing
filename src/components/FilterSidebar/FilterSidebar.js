import React from 'react';
import './FilterSidebar.css';

class FilterSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.collapseCategories = this.collapseCategories.bind(this);
		this.collapseMaterials = this.collapseMaterials.bind(this);
		this.collapseColors = this.collapseColors.bind(this);
	}

	collapseFavs() {
		var filter = document.getElementById('favs')
		var icon = document.getElementById('favs-collapse');
		if (filter.style.maxHeight === '0px') {
			filter.style.maxHeight = '60px';
			icon.className = 'collapse fas fa-minus';
		} else {
			filter.style.maxHeight = '0px';
			icon.className = 'collapse fas fa-plus';
		}
	}

	collapseCategories() {
		var filter = document.getElementById('categories')
		var icon = document.getElementById('categories-collapse');
		if (filter.style.maxHeight === '0px') {
			filter.style.maxHeight = '150px';
			icon.className = 'collapse fas fa-minus';
		} else {
			filter.style.maxHeight = '0px';
			icon.className = 'collapse fas fa-plus';
		}
	}

	collapseMaterials() {
		var filter = document.getElementById('materials')
		var icon = document.getElementById('materials-collapse');
		if (filter.style.maxHeight === '0px') {
			filter.style.maxHeight = '150px';
			icon.className = 'collapse fas fa-minus';
		} else {
			filter.style.maxHeight = '0px';
			icon.className = 'collapse fas fa-plus';
		}
	}

	collapseColors() {
		var filter = document.getElementById('colors')
		var icon = document.getElementById('colors-collapse');
		if (filter.style.maxHeight === '0px') {
			filter.style.maxHeight = '200px';
			icon.className = 'collapse fas fa-minus';
		} else {
			filter.style.maxHeight = '0px';
			icon.className = 'collapse fas fa-plus';
		}
	}

	render() {
		return(
			<div className='sidebar-container'>
				<div className='sidebar-border'></div>
				<h1>Filters</h1>
				<div className='selected-filters'>
					{this.props.filters.map(filter => {
						return(
							<div className='selected' onClick={() => {
								this.props.updateFilters(filter, 'remove');
							}}>
								{filter}<span style={{marginLeft: '10px'}}>×</span>
							</div>
						);
					})}
				</div>
				<div className='filter'>
					<div className='filter-header-container' onClick={this.collapseFavs}>
						<h2 className='filter-header'>FAVOURITES</h2>
						<i className='collapse fas fa-minus' id='favs-collapse'></i>
					</div>
					<div id='favs' className='filter-content' style={{maxHeight: '60px'}}>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Favourites')) {
								this.props.updateFilters('Favourites', 'add', 'fav');
							}
						}}>Show Favourites</p>
					</div>
				</div>
				<div className='filter'>
					<div className='filter-header-container' onClick={this.collapseCategories}>
						<h2 className='filter-header'>CATEGORIES</h2>
						<i className='collapse fas fa-minus' id='categories-collapse'></i>
					</div>
					<div id='categories' className='filter-content' style={{maxHeight: '150px'}}>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Lounge')) {
								this.props.updateFilters('Lounge', 'add', 'category');
							}
						}}>Lounge</p>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Ergonomic Chairs')) {
								this.props.updateFilters('Ergonomic Chairs', 'add', 'category');
							}
						}}>Ergonomic Chairs</p>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Classroom Chairs')) {
								this.props.updateFilters('Classroom Chairs', 'add', 'category');
							}
						}}>Classroom Chairs</p>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Bar Stools')) {
								this.props.updateFilters('Bar Stools', 'add', 'category');
							}
						}}>Bar Stools</p>
					</div>
				</div>
				<div className='filter'>
					<div className='filter-header-container' onClick={this.collapseMaterials}>
						<h2 className='filter-header'>MATERIAL</h2>
						<i className='collapse fas fa-minus' id='materials-collapse'></i>
					</div>
					<div id='materials' className='filter-content' style={{maxHeight: '150px'}}>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Leather')) {
								this.props.updateFilters('Leather', 'add', 'material');
							}
						}}>Leather</p>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Fusion')) {
								this.props.updateFilters('Fusion', 'add', 'material');
							}
						}}>Fusion</p>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Hudson')) {
								this.props.updateFilters('Hudson', 'add', 'material');
							}
						}}>Hudson</p>
						<p className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Waterfall')) {
								this.props.updateFilters('Waterfall', 'add', 'material');
							}
						}}>Waterfall</p>
					</div>
				</div>
				<div className='filter'>
					<div className='filter-header-container' onClick={this.collapseColors}>
						<h2 className='filter-header'>COLOUR</h2>
						<i className='collapse fas fa-minus' id='colors-collapse'></i>
					</div>
					<div id='colors' className='filter-content' style={{maxHeight: '200px'}}>
						<div className='filter-select' onClick={() => {
							if (!this.props.filters.includes('White')) {
								this.props.updateFilters('White', 'add', 'colors');
							}
						}}>
							<div className='color-block white-block'></div><p className='color-text' style={{marginTop: '1em'}}>White</p>
						</div>
						<div className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Black')) {
								this.props.updateFilters('Black', 'add', 'colors');
							}
						}}>
							<div className='color-block black-block'></div><p className='color-text'>Black</p>
						</div>
						<div className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Beige')) {
								this.props.updateFilters('Beige', 'add', 'colors');
							}
						}}>
							<div className='color-block beige-block'></div><p className='color-text'>Beige</p>
						</div>
						<div className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Red')) {
								this.props.updateFilters('Red', 'add', 'colors');
							}
						}}>
							<div className='color-block red-block'></div><p className='color-text'>Red</p>
						</div>
						<div className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Blue')) {
								this.props.updateFilters('Blue', 'add', 'colors');
							}
						}}>
							<div className='color-block blue-block'></div><p className='color-text'>Blue</p>
						</div>
						<div className='filter-select' onClick={() => {
							if (!this.props.filters.includes('Green')) {
								this.props.updateFilters('Green', 'add', 'colors');
							}
						}}>
							<div className='color-block green-block'></div><p className='color-text'>Green</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FilterSidebar;