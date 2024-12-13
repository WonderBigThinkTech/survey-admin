import WbtManage from './WbtManage';
import authRoles from '../../auth/authRoles';

const WbtManageConfig = {
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
			path: 'wbt-manage',
			element: <WbtManage />
		}
	]
};
export default WbtManageConfig;
