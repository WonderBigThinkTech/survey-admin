import GlobalStyles from '@mui/material/GlobalStyles';
import WbtCustomerHeader from './WbtCustomerHeader';
import WbtCustomerTable from './WbtCustomerTable';

/**
 * The products page.
 */
function WbtCustomer() {
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
				<WbtCustomerHeader />
				<WbtCustomerTable />
			</div>
		</>
	);
}

export default WbtCustomer;
