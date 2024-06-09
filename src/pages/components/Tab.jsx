/** @format */

import React, { useState } from 'react';
import Headers from '../../common/Headers';
import { TabData } from '../data/TabData';
import Footer from '../../common/Footer';

export default function Tab() {
	let [activetab, setActiverab] = useState(0);
	let [activeContent, setActiveContent] = useState(TabData[0]);

	let tabmake = (index) => {
		setActiverab(index);
		setActiveContent(TabData[index]);
	};
	return (
		<div className='wow'>
			<Headers />
			<h1>Tabbing section is here...</h1>
			<ul>
				{TabData.map((value, index) => {
					return (
						<li>
							<button
								className={activetab == index ? 'buttonn' : ''}
								onClick={() => tabmake(index)}>
								{value.title}
							</button>
						</li>
					);
				})}
			</ul>

			{activeContent !== undefined ? <p>{activeContent.describtion}</p> : ''}
			<Footer/>
		</div>
	);
}
