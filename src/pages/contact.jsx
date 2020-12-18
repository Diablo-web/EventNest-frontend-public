import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	},
	image: {
		backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(3),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '90%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		padding: '20px',
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ContactUs() {
	const classes = useStyles();

	return (
		<Grid className={classes.root} component="main" container>
			<CssBaseline />
			<Grid className={classes.image} item md={7} sm={4} xs={false} />
			<Grid component={Paper} elevation={0} item md={5} sm={8} square xs={12}>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<EmailIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						CONTACT US
					</Typography>
					<form action={"mailto:" + process.env.REACT_APP_CONTACT_EMAIL} className={classes.form} method="GET" encType="multipart/form-data" >
						<TextField
							autoComplete="fname"
							autoFocus
							fullWidth
							id="name"
							label="Name"
							margin="normal"
							name="name"
							variant="outlined"
						/>
						<TextField

							autoComplete="email"
							fullWidth
							id="email"
							label="Email Address"
							margin="normal"
							name="email"
							variant="outlined"

						/>
						<TextField
							fullWidth
							id="subject"
							label="Subject"
							margin="normal"
							name="subject"
							// onChange={handleChange}
							// value={details.subject}
							variant="outlined"
						/>
						<TextField
							fullWidth
							id="body"
							label="Write us a message"
							margin="normal"
							multiline
							name="body"
							rows={4}
							variant="outlined"
						/>
						<Button
							className="submit"
							color="primary"
							fullWidth
							type="submit"
							variant="outlined"
						>
							Send Message
						</Button>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}


