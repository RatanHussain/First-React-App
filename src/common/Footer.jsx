/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='footer'>
			<hr />
			<h1>MD RATAN MIA</h1>
			<ul className='navBar'>
				<li className='btn btn-outline-info'>
					<Link className='link' to={'/'}>
						Home
					</Link>
				</li>
				<li className='btn btn-outline-info'>
					<Link className='link' to={'/tab-secton'}>
						Tab Section
					</Link>
				</li>
				<li className='btn btn-outline-info'>
					<Link className='link' to={'/todo-app'}>
						Todo App
					</Link>
				</li>
				<li className='btn btn-outline-info'>
					<Link className='link' to={'/all-items'}>
						All Items
					</Link>
				</li>
			</ul>
		</div>
	);
}

function nav() {
	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<a class='navbar-brand' href='#'>
					Navbar
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<a class='nav-link active' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li class='nav-item'></li>
						<li class='nav-item dropdown'>
							<a
								class='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Dropdown
							</a>
						</li>
						<li class='nav-item'>
							<a
								class='nav-link disabled'
								href='#'
								tabindex='-1'
								aria-disabled='true'>
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
