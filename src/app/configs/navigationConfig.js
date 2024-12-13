import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { authRoles } from '../auth';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);
/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */


let navigationConfig = [];

if(localStorage.getItem('currentUserData')){
	let userData = JSON.parse(localStorage.getItem('currentUserData'));
	let userRole = userData.role;

	if(userRole === 'admin'){

		navigationConfig = [
			{
				id: 'dashboard',
				title: 'Dashboard',
				subtitle: 'Survey Dashboard',
				type: 'item',
				icon: 'heroicons-outline:home',
				url: '/wbt-dashboard',
			},
			{
				id: 'question',
				title: 'Questionare',
				subtitle: 'Building blocks of the UI & UX',
				type: 'item',
				icon: 'heroicons-outline:collection',
				url: '/wbt-question',
			},
			{
				id: 'manage',
				title: 'Supervisor',
				subtitle: 'Manage all users',
				type: 'item',
				icon: 'heroicons-outline:cube',
				url: '/wbt-manage',
			},
			{
				id: 'customer',
				title: 'Customers',
				subtitle: 'Manage all customers',
				type: 'item',
				icon: 'heroicons-outline:users',
				url: '/wbt-customer',
			}
		];
		

	}
	else if(userRole === 'staff'){

		navigationConfig = [
			{
				id: 'dashboard',
				title: 'Dashboard',
				subtitle: 'Survey Dashboard',
				type: 'item',
				icon: 'heroicons-outline:home',
				url: '/wbt-dashboard',
			},
			{
				id: 'survey',
				title: 'Survey',
				subtitle: 'Survey with all users',
				type: 'item',
				icon: 'heroicons-outline:document',
				url: '/wbt-survey',
			}
		];

	}
}
export default navigationConfig;
