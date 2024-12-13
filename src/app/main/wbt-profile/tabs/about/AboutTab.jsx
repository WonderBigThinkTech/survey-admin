import {useState, useEffect} from 'react';
import { Typography, Card, CardContent, Avatar, Button, List, ListItem, ListItemSecondaryAction, ListItemText, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { useGetProfileAboutQuery } from '../../WbtProfileApi';

/**
 * The about tab.
 */
function AboutTab() {
	const { data: profile, isLoading } = useGetProfileAboutQuery();
	const [userData, setUserData] = useState({});

	if (isLoading) {
		return <FuseLoading />;
	}

	 // Ensure this is outside of any conditional logic
	//  useEffect(() => {
    //     let currentUserData = localStorage.getItem('currentUserData');
    //     if (currentUserData) {
    //         setUserData(JSON.parse(currentUserData));
    //     }
    // }, []); // This effect runs once for fetching localStorage data

	const { general, work, contact, groups, friends } = profile;
	const container = {
		show: {
			transition: {
				staggerChildren: 0.04
			}
		}
	};
	const item = {
		hidden: { opacity: 0, y: 40 },
		show: { opacity: 1, y: 0 }
	};
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="w-full"
		>
			<div className="md:flex">
				<div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
					<Card
						component={motion.div}
						variants={item}
						className="w-full mb-32"
					>
						<div className="px-32 pt-24">
							<Typography className="text-2xl font-semibold leading-tight">
								General Information
							</Typography>
						</div>

						<CardContent className="px-32 py-24">
							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Gender</Typography>
								MALE
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Birthday</Typography>
								<Typography>{userData.birthday}</Typography>
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Country</Typography>
								USA
							</div>
							
							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Official ID</Typography>
								{userData.official}
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Phone</Typography>
								{userData.phone}
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">About Me</Typography>
								<Typography>{general.about}</Typography>
							</div>
						</CardContent>
					</Card>

					<Card
						component={motion.div}
						variants={item}
						className="w-full mb-32"
					>
						<div className="px-32 pt-24">
							<Typography className="text-2xl font-semibold leading-tight">Work</Typography>
						</div>

						<CardContent className="px-32 py-24">
							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Occupation</Typography>
								<Typography>{work.occupation}</Typography>
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Skills</Typography>
								<Typography>{work.skills}</Typography>
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Jobs</Typography>
								<table>
									<tbody>
										{work.jobs.map((job) => (
											<tr key={job.company}>
												<td>
													<Typography>{job.company}</Typography>
												</td>
												<td className="px-16">
													<Typography color="text.secondary">{job.date}</Typography>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>

					<Card
						component={motion.div}
						variants={item}
						className="w-full mb-32"
					>
						<div className="px-32 pt-24">
							<Typography className="text-2xl font-semibold leading-tight">Contact</Typography>
						</div>

						<CardContent className="px-32 py-24">
							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Address</Typography>
								<Typography>{contact.address}</Typography>
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Tel.</Typography>

								{contact.tel.map((tel) => (
									<div
										className="flex items-center"
										key={tel}
									>
										<Typography>{tel}</Typography>
									</div>
								))}
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Website</Typography>

								{contact.websites.map((website) => (
									<div
										className="flex items-center"
										key={website}
									>
										<Typography>{website}</Typography>
									</div>
								))}
							</div>

							<div className="mb-24">
								<Typography className="font-semibold mb-4 text-15">Emails</Typography>

								{contact.emails.map((email) => (
									<div
										className="flex items-center"
										key={email}
									>
										<Typography>{email}</Typography>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="flex flex-col md:w-320">
					<Card
						component={motion.div}
						variants={item}
						className="w-full mb-32"
					>
						<div className="flex items-center px-32 pt-24">
							<Typography className="flex flex-1 text-2xl font-semibold leading-tight">
								Friends
							</Typography>

							<Button
								className="-mx-8"
								size="small"
							>
								See 454 more
							</Button>
						</div>

						<CardContent className="flex flex-wrap px-32">
							{friends.map((friend) => (
								<Avatar
									key={friend.id}
									className="w-64 h-64 rounded-12 m-4"
									src={friend.avatar}
									alt={friend.name}
								/>
							))}
						</CardContent>
					</Card>

					<Card
						component={motion.div}
						variants={item}
						className="w-full mb-32 rounded-16 shadow"
					>
						<div className="px-32 pt-24 flex items-center">
							<Typography className="flex flex-1 text-2xl font-semibold leading-tight">
								Joined Groups
							</Typography>
							<div className="-mx-8">
								<Button
									color="inherit"
									size="small"
								>
									See 6 more
								</Button>
							</div>
						</div>
						<CardContent className="px-32">
							<List className="p-0">
								{groups.map((group) => (
									<ListItem
										key={group.id}
										className="px-0 space-x-8"
									>
										<Avatar alt={group.name}>{group.name[0]}</Avatar>
										<ListItemText
											primary={
												<div className="flex">
													<Typography
														className="font-medium"
														color="secondary.main"
														paragraph={false}
													>
														{group.name}
													</Typography>

													<Typography
														className="mx-4 font-normal"
														paragraph={false}
													>
														{group.category}
													</Typography>
												</div>
											}
											secondary={group.members}
										/>
										<ListItemSecondaryAction>
											<IconButton size="large">
												<FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
								))}
							</List>
						</CardContent>
					</Card>
				</div>
			</div>
		</motion.div>
	);
}

export default AboutTab;
