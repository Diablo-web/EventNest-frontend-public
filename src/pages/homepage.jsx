import React from 'react';
import EventImage from '../assets/blocks.jpg';
import { Button, Grid, Link, StylesProvider, Typography } from '@material-ui/core';

import '../sass/homepage.scss';
import EventPanel from '../components/EventPanel';

export default function Homepage() {

	return (
		<StylesProvider injectFirst>
			<Grid className="welcome-container" container>
				<Grid className="title-container" container direction="column" item lg={6} xs={12}>
					<Typography className="homepage-title" justify="center" variant="h3">
						Welcome to EventNest
					</Typography>
					<Typography className="subtitle" justify="center" variant="subtitle1">
						Your online destination for hosting and exploring events across the globe, at your fingertips.
					</Typography>
					<Link className="button-link" href="#events">
						<Button className="button button-shadow" color="primary" variant="contained">
							Explore Events
						</Button>
					</Link>
				</Grid> 
				<Grid alignItems="center" container item justify="center" lg={6} xs={12}>
					<img alt="Festival Image" className={'event-image'} src={EventImage} />
				</Grid>
			</Grid>
			<div className="events" id="events">
				<EventPanel />
			</div>
		</StylesProvider>
	);
}