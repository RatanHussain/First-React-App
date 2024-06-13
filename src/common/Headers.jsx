/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Headers() {
	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<a class='navbar-brand' href='#'>
					Ratan mia
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
					<ul class='navbar-nav me-auto mb-2 mb-lg-0 text-center'>
						<li class='nav-item'>
							<Link className='nav-link active' to={'/'}>
								Home
							</Link>
						</li>
						<li class='nav-item'></li>
						<li class='nav-item dropdown'>
							<Link className='nav-link' to={'/tab-secton'}>
								Tab Section
							</Link>
						</li>
						<li class='nav-item'>
							<Link className='nav-link' to={'/todo-app'}>
								Todo App
							</Link>
						</li>
						<li class='nav-item'>
							<Link className='nav-link' to={'/all-items'}>
								All Items
							</Link>
						</li>
						<li class='nav-item'>
							<Link className='nav-link' to={'/generate-password'}>
								Passowrd
							</Link>
						</li>
						<li class='nav-item'>
							<Link className='btn btn-info nav-item  p-2' to={'/forms'}>
								Log / Sing
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
