import React from 'react';
import './MobileFilters.css';

class MobileFilters extends React.Component {
	render() {
		return(
			<div>
				{this.props.showFilters ? <div className='sidebar-overlay' onClick={this.props.hideFilters}></div> : <div></div>}
				<div className='mobile-filter-container' style={this.props.showFilters ? {transform: 'translateX(0)'} : {transform: 'translateX(-300px)'}}>
					<div className='close-sidebar'><i className='fas fa-times' onClick={this.props.hideFilters}></i></div>
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
						<h2 className='filter-header'>FAVOURITES</h2>
						<div className='filter-content'>
							<p className='filter-select' onClick={() => {
								if (!this.props.filters.includes('Favourites')) {
									this.props.updateFilters('Favourites', 'add', 'fav');
								}
							}}>Show Favourites</p>
						</div>
					</div>
					<div className='filter'>
						<h2 className='filter-header'>CATEGORIES</h2>
						<div className='filter-content'>
							<p className='filter-select' onClick={() => {
								if (!this.props.filters.includes('Lounge')) {
									this.props.updateFilters('Lounge', 'add', 'category');
								}
							}}>Lounge</p>
							<p className='filter-select' onClick={() => {
								let filters = this.state.filters;
								if (!this.props.filters.includes('Ergonomic Chairs')) {
									filters.push('Ergonomic Chairs');
									this.setState({filters: filters});
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
						<h2 className='filter-header'>MATERIAL</h2>
						<div className='filter-content'>
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
						<h2 className='filter-header'>COLOUR</h2>
						<div className='filter-content'>
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
			</div>
		);
	}
}

export default MobileFilters;