import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <h1>MD RATAN MIA</h1>
			<ul className='navBar'>
				<li>
					<Link className='link' to={'/'}>Home</Link>
				</li>
				<li>
					<Link className='link' to={'/tab-secton'}>Tab Section</Link>
				</li>
				<li>
					<Link className='link' to={'/todo-app'}>Todo App</Link>
				</li>
				<li>
					<Link className='link' to={'/all-items'}>All Items</Link>
				</li>
			</ul>
    </div>
  )
}
