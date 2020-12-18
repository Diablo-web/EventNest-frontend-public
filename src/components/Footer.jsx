import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../sass/footer.scss';

export default function Footer() {
	return (
		<div className="footer-container">
			<Typography align="center" className="footer-text" color="textSecondary" variant="body2">
				{'Copyright © '}
				<Link className="links" to='/'>
                    EventNest
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
				<div className="dot">
					{'  •  '}
				</div>
				<Link className="links footer-link" to='/aboutus'>
                    About us
				</Link>{' '}
				<div className="dot">
					{'  •  '}
				</div>
				<Link className="links footer-link" to='/contactus'>
                    Contact us
				</Link>{' '}
			</Typography>
		</div>
	);
}