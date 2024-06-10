/** @format */

import React from 'react';
import Headers from '../../common/Headers';
import Footer from '../../common/Footer';
import { rowItem } from '../data/ItemsData';
import { Link } from 'react-router-dom';

export default function Items() {
	let item = rowItem.map((value, index) => {
		return (
			<div className='item' key={index}>
        <h3>{ value.title}</h3>
        <p>{ value.body }</p>
				<button><Link to={`/ItemDetails/${value.id}`}>Watch more...</Link></button>
			</div>
		);
	});

	return (
		<div>
			<Headers />
      <div className='items'>
        {item}
      </div>
			<Footer />
		</div>
	);
}
