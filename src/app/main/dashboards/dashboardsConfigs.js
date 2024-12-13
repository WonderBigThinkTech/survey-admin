import AnalyticsDashboardAppConfig from './analytics/AnalyticsDashboardAppConfig';
import WbtDashboardConfig from './project/WbtDashboardConfig';
import FinanceDashboardAppConfig from './finance/FinanceDashboardAppConfig';
import CryptoDashboardAppConfig from './crypto/CryptoDashboardAppConfig';
/**
 * Dashboards
 */
const dashboardsConfigs = [
	WbtDashboardConfig,

	AnalyticsDashboardAppConfig,
	FinanceDashboardAppConfig,
	CryptoDashboardAppConfig
];
export default dashboardsConfigs;
