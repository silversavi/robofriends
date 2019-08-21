import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className = 'pa2'>

			<input 
				type='search' 
				placeholder='Search robots'
				onChange={searchChange}
				className='pa3 ba b--green bg-lightest-blue' 
			/>
		</div>
		)
}

export default SearchBox;