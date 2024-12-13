import WbtCustomer from './WbtCustomer';
import authRoles from '../../auth/authRoles';

const WbtCustomerConfig = {
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
			path: 'wbt-customer',
			element: <WbtCustomer />
		}
	]
};
export default WbtCustomerConfig;
