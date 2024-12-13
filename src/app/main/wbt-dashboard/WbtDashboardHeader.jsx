import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import _ from '@lodash';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { darken } from '@mui/material/styles';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import { useAppSelector } from 'app/store/hooks';
import { useGetProjectDashboardProjectsQuery } from './WbtDashboardApi';

/**
 * The WbtDashboardHeader page.
 */
function WbtDashboardHeader() {
	const { data: projects, isLoading } = useGetProjectDashboardProjectsQuery();
	const user = useAppSelector(selectUser);
	const [selectedProject, setSelectedProject] = useState({
		id: 1,
		menuEl: null
	});
	const [userData, setUserData] = useState({});

	useEffect(() => {
		if (!localStorage.getItem('currentUserData')) {
			window.location.href = '/sign-in';
		}
		setUserData(JSON.parse(localStorage.getItem('currentUserData')));
	}, [])

	function handleChangeProject(id) {
		setSelectedProject({
			id,
			menuEl: null
		});
	}

	function handleOpenProjectMenu(event) {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: event.currentTarget
		});
	}

	function handleCloseProjectMenu() {
		setSelectedProject({
			id: selectedProject.id,
			menuEl: null
		});
	}

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<div className="flex flex-col w-full px-24 sm:px-32">
			<div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
				<div className="flex flex-auto items-center min-w-0">
					<Avatar
						sx={{
							background: (theme) => darken(theme.palette.background.default, 0.05),
							color: (theme) => theme.palette.text.secondary
						}}
						className="flex-0 w-64 h-64"
						alt="user photo"
						src={user?.data?.photoURL}
					>
						{userData.domain?.[0]}
					</Avatar>
					<div className="flex flex-col min-w-0 mx-16">
						<Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
							{`Welcome back , `}<a style={{color : 'dodgerblue', textDecoration : 'none'}} href='/wbt-profile'> {userData.domain}!</a>
						</Typography>

						{/* <div className="flex items-center">
							<FuseSvgIcon
								size={20}
								color="action"
							>
								heroicons-solid:bell
							</FuseSvgIcon>
							<Typography
								className="mx-6 leading-6 truncate"
								color="text.secondary"
							>
								You have 2 new messages and 15 new tasks
							</Typography>
						</div> */}
					</div>
				</div>
				<div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
					<Button
						className="whitespace-nowrap"
						variant="contained"
						color="primary"
						startIcon={<FuseSvgIcon size={20}>heroicons-solid:pencil</FuseSvgIcon>}
						href='/wbt-profile'
					>
						Show Profile
					</Button>
					<Button
						className="whitespace-nowrap"
						variant="contained"
						color="secondary"
						startIcon={<FuseSvgIcon size={20}>heroicons-solid:document</FuseSvgIcon>}
						href='/wbt-question'
					>
						Show Questionare
					</Button>
				</div>
			</div>
			<div className="flex items-center">
				<Button
					className="flex items-center border border-solid border-b-0 rounded-t-xl rounded-b-0 h-40 px-16 text-13 sm:text-16"
					sx={{
						backgroundColor: (theme) => theme.palette.background.default,
						borderColor: (theme) => theme.palette.divider
					}}
				>
					{_.find(projects, ['id', selectedProject.id])?.name}
				</Button>
				<Menu
					id="project-menu"
					anchorEl={selectedProject.menuEl}
					open={Boolean(selectedProject.menuEl)}
					onClose={handleCloseProjectMenu}
				>
					{projects &&
						projects.map((project) => (
							<MenuItem
								key={project.id}
								onClick={() => {
									handleChangeProject(project.id);
								}}
							>
								{project.name}
							</MenuItem>
						))}
				</Menu>
			</div>
		</div>
	);
}

export default WbtDashboardHeader;
