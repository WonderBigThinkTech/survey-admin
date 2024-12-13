import { createSelector } from '@reduxjs/toolkit';
import { apiService as api } from 'app/store/apiService';

export const addTagTypes = ['project_dashboard_widgets', 'project_dashboard_projects'];
const WbtDashboardApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getProjectDashboardWidgets: build.query({
				query: () => ({ url: `/mock-api/dashboards/project/widgets` }),
				providesTags: ['project_dashboard_widgets']
			}),
			getProjectDashboardProjects: build.query({
				query: () => ({ url: `/mock-api/dashboards/project/projects` }),
				providesTags: ['project_dashboard_projects']
			})
		}),
		overrideExisting: false
	});
export default WbtDashboardApi;
export const { useGetProjectDashboardWidgetsQuery, useGetProjectDashboardProjectsQuery } = WbtDashboardApi;
export const selectProjectDashboardWidgets = createSelector(
	WbtDashboardApi.endpoints.getProjectDashboardWidgets.select(),
	(results) => results.data
);
export const selectWidget = (id) =>
	createSelector(selectProjectDashboardWidgets, (widgets) => {
		return widgets?.[id];
	});
