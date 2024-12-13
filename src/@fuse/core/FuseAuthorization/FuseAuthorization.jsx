import { Component } from 'react';
import { matchRoutes } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import AppContext from 'app/AppContext';
import withRouter from '@fuse/core/withRouter';
import history from '@history';
import {
	getSessionRedirectUrl,
	resetSessionRedirectUrl,
	setSessionRedirectUrl
} from '@fuse/core/FuseAuthorization/sessionRedirectUrl';
import FuseLoading from '@fuse/core/FuseLoading';

function isUserGuest(role) {
	return !role || (Array.isArray(role) && role?.length === 0);
}

/**
 * FuseAuthorization is a higher-order component that wraps its child component which handles the authorization logic of the app.
 * It checks the provided Auth property from FuseRouteItemType (auth property) against the current logged-in user role.
 */
class FuseAuthorization extends Component {
	constructor(props, context) {
		super(props);
		const { routes } = context;
		this.state = {
			accessGranted: true,
			routes
		};
	}

	componentDidMount() {
		const { accessGranted } = this.state;

		if (!accessGranted) {
			this.redirectRoute();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		const { accessGranted } = this.state;
		return nextState.accessGranted !== accessGranted;
	}

	componentDidUpdate() {
		const { accessGranted } = this.state;

		if (!accessGranted) {
			this.redirectRoute();
		}
	}

	redirectRoute() {
		const { userRole, loginRedirectUrl = '/' } = this.props;
		const redirectUrl = getSessionRedirectUrl() || loginRedirectUrl;

		/*
        User is guest
        Redirect to Login Page
        */
		if (isUserGuest(userRole)) {
			setTimeout(() => history.push('/sign-in'), 0);
		} else {
			/*
          User is member
          User must be on unAuthorized page or just logged in
          Redirect to dashboard or loginRedirectUrl
            */
			setTimeout(() => history.push(redirectUrl), 0);
			resetSessionRedirectUrl();
		}
	}

	render() {
		const { accessGranted } = this.state;
		const { children } = this.props;
		return accessGranted ? children : <FuseLoading />;
	}
}
FuseAuthorization.contextType = AppContext;
export default withRouter(FuseAuthorization);
