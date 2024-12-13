import WbtQuestion from './WbtQuestion';
import authRoles from '../../auth/authRoles';
import WbtQuestionAddForm from './tabs/WbtQuestionAddForm';

const WbtQuestionConfig = {
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
			path: 'wbt-question',
			element: <WbtQuestion />,
			children: [
				{
					path: ':id',
					element: <WbtQuestionAddForm />
				},
				{
					path: ':id/:type',
					element: <WbtQuestionAddForm />
				}
			]
		}
	]
};
export default WbtQuestionConfig;
