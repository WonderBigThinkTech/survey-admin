import authRoles from '../../auth/authRoles';
import { lazy } from 'react';

const WbtDashboard = lazy(() => import('./WbtDashboard'));

const WbtDashboardConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: true
				},
				toolbar: {
					display: true
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: true
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: 'wbt-dashboard',
			element: <WbtDashboard />
		}
	]
};
export default WbtDashboardConfig;
