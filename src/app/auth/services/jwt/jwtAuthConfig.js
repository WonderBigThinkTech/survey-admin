import { devApiLink } from 'app/configs/urlConfig';


const jwtAuthConfig = {
	signInUrl: `${devApiLink}/user/login`,
	signUpUrl: `${devApiLink}/user/register`,
	forgotPasswordUrl: `${devApiLink}/user/forgot-password`,


	tokenStorageKey: 'jwt_access_token',
	tokenRefreshUrl: 'mock-api/auth/refresh',
	getUserUrl: 'mock-api/auth/user',
	updateUserUrl: 'mock-api/auth/user',
	updateTokenFromHeader: true
};
export default jwtAuthConfig;
