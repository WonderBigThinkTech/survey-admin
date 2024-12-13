import GlobalStyles from '@mui/material/GlobalStyles';
import WbtManageHeader from './WbtManageHeader';
import WbtManageTable from './WbtManageTable';

/**
 * The products page.
 */
function WbtDashboard() {
	return (
		<>
			<GlobalStyles
				styles={() => ({
					'#root': {
						maxHeight: '100vh'
					}
				})}
			/>
			<div className="w-full h-full container flex flex-col">
				<WbtManageHeader />
				<WbtManageTable />
			</div>
		</>
	);
}

export default WbtDashboard;
