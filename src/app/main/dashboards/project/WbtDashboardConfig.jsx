import { lazy } from 'react';
import authRoles from '../../../auth/authRoles';

const WbtDashboard = lazy(() => import('./WbtDashboard'));
/**
 * The WbtDashboard configuration.
 */
const WbtDashboardConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'wbt-dashboard',
			element: <WbtDashboard />
		}
	]
};
export default WbtDashboardConfig;
