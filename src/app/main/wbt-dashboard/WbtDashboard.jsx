import FusePageSimple from '@fuse/core/FusePageSimple';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FuseLoading from '@fuse/core/FuseLoading';
import WbtDashboardHeader from './WbtDashboardHeader';
import HomeTab from './tabs/home/HomeTab';
import TeamTab from './tabs/team/TeamTab';
import { useGetProjectDashboardWidgetsQuery } from './WbtDashboardApi';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`
	}
}));

/**
 * The WbtDashboard page.
 */
function WbtDashboard() {
	const { isLoading } = useGetProjectDashboardWidgetsQuery();
	const [tabValue, setTabValue] = useState(0);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<Root
			header={<WbtDashboardHeader />}
			content={
				<div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
					<Tabs
						value={tabValue}
						onChange={handleChangeTab}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons={false}
						className="w-full px-24 -mx-4 min-h-40"
						classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
						TabIndicatorProps={{
							children: (
								<Box
									sx={{ bgcolor: 'text.disabled' }}
									className="w-full h-full rounded-full opacity-20"
								/>
							)
						}}
					>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Home"
						/>
						<Tab
							className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
							disableRipple
							label="Our Team"
						/>
					</Tabs>
					{tabValue === 0 && <HomeTab />}
					{tabValue === 1 && <TeamTab />}
				</div>
			}
		/>
	);
}

export default WbtDashboard;
