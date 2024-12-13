import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import Error404Page from '../main/404/Error404Page';
import ForgotPasswordConfig from '../main/forgot-password/ForgotPasswordConfig';
import WbtManageConfig from '../main/wbt-manage/WbtManageConfig';
import WbtDashboardConfig from '../main/wbt-dashboard/WbtDashboardConfig';
import WbtQuestionConfig from '../main/wbt-question/WbtQuestionConfig';
import WbtSurveyConfig from '../main/wbt-survey/WbtSurveyConfig';
import WbtProfileConfig from '../main/wbt-profile/WbtProfileConfig';
import Wbt404Config from 'app/main/wbt-404/Wbt404Config';
import WbtCustomerConfig from 'app/main/wbt-customer/WbtCustomerConfig';


const routeConfigs = [
	
	SignInConfig,
	SignUpConfig,
	ForgotPasswordConfig,
	WbtManageConfig,
	WbtDashboardConfig,
	WbtQuestionConfig,
	WbtSurveyConfig,
	WbtProfileConfig,
	Wbt404Config,
	WbtCustomerConfig
	
];
const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
	{
		path: '/',
		element: <Navigate to="/sign-in" />,
		auth: settingsConfig.defaultAuth
	},
	{
		path: 'loading',
		element: <FuseLoading />
	},
	{
		path: '*',
		element: <Navigate to="404" />
	}
];
export default routes;
