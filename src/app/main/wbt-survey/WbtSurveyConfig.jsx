import WbtSurvey from './WbtSurvey';
import authRoles from '../../auth/authRoles';

const WbtSurveyConfig = {
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
			path: 'wbt-survey',
			element: <WbtSurvey />
		}
	]
};
export default WbtSurveyConfig;
