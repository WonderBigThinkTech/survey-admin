import Wbt404Page from './Wbt404';
import authRoles from '../../auth/authRoles';

const Wbt404Config = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
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
			path: '404',
			element: <Wbt404Page />
		}
	]
};
export default Wbt404Config;
