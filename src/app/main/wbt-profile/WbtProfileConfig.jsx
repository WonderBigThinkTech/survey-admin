import { lazy } from 'react';
import authRoles from '../../auth/authRoles';

const WbtProfile = lazy(() => import('./WbtProfile'));
/**
 * The Profile app config.
 */
const WbtProfileConfig = {
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
			path: 'wbt-profile',
			element: <WbtProfile />
		}
	]
};
export default WbtProfileConfig;
