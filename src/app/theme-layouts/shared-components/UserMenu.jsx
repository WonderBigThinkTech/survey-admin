import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import useAuth from 'src/app/auth/useAuth';
import { darken } from '@mui/material/styles';
import { useAppSelector } from 'app/store/hooks';
import { useState, useEffect } from 'react';

/**
 * The user menu.
 */
function UserMenu() {
	const user = useAppSelector(selectUser);
	const { signOut } = useAuth();
	const [userMenu, setUserMenu] = useState(null);
	const [userData, setUserData] = useState({});
	const userMenuClick = (event) => {
		setUserMenu(event.currentTarget);
	};
	const userMenuClose = () => {
		setUserMenu(null);
	};

	if (!user) {
		return null;
	}
	

	useEffect(() => {
		if(localStorage.getItem('currentUserData')){
			setUserData(JSON.parse(localStorage.getItem('currentUserData')));
		}
	}, []);

	// Get the first letter of the domain
	const firstLetterOfDomain = userData.domain ? userData.domain.charAt(0) : '';

	return (
		<>
			<Button
				className="min-h-40 min-w-40 p-0 md:px-16 md:py-6"
				onClick={userMenuClick}
				color="inherit"
			>
				<div className="mx-4 hidden flex-col items-end md:flex">
					<Typography
						component="span"
						className="flex font-semibold"
					>
						{userData.name}
					</Typography>
					<Typography
						className="text-11 font-medium capitalize"
						color="text.secondary"
					>
						{userData.role?.toString()}
					</Typography>
				</div>

				{user.data.photoURL ? (
					<Avatar
						sx={{
							background: (theme) => theme.palette.background.default,
							color: (theme) => theme.palette.text.secondary
						}}
						className="md:mx-4"
						alt="user photo"
						src={user.data.photoURL}
					/>
				) : (
					<Avatar
						sx={{
							background: (theme) => darken(theme.palette.background.default, 0.05),
							color: (theme) => theme.palette.text.secondary
						}}
						className="md:mx-4"
					>
						{firstLetterOfDomain}
					</Avatar>
				)}
			</Button>

			<Popover
				open={Boolean(userMenu)}
				anchorEl={userMenu}
				onClose={userMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{!localStorage.getItem('currentUserData') ? (
					<>
						<MenuItem
							component={Link}
							to="/sign-in"
							role="button"
						>
							<ListItemIcon className="min-w-40">
								<FuseSvgIcon>heroicons-outline:lock-closed</FuseSvgIcon>
							</ListItemIcon>
							<ListItemText primary="Sign In" />
						</MenuItem>
						<MenuItem
							component={Link}
							to="/sign-up"
							role="button"
						>
							<ListItemIcon className="min-w-40">
								<FuseSvgIcon>heroicons-outline:user-add </FuseSvgIcon>
							</ListItemIcon>
							<ListItemText primary="Sign up" />
						</MenuItem>
					</>
				) : (
					<>
						<MenuItem
							component={Link}
							to="/wbt-profile"
							onClick={userMenuClose}
							role="button"
						>
							<ListItemIcon className="min-w-40">
								<FuseSvgIcon>heroicons-outline:user-circle</FuseSvgIcon>
							</ListItemIcon>
							<ListItemText primary="My Profile" />
						</MenuItem>
						<MenuItem
							onClick={() => {
								signOut();
							}}
						>
							<ListItemIcon className="min-w-40">
								<FuseSvgIcon>heroicons-outline:logout</FuseSvgIcon>
							</ListItemIcon>
							<ListItemText primary="Sign out" />
						</MenuItem>
					</>
				)}
			</Popover>
		</>
	);
}

export default UserMenu;
