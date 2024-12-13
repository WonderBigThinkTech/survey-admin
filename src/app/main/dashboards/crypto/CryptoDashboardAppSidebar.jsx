import Paper from '@mui/material/Paper';
import FuseLoading from '@fuse/core/FuseLoading';
import WatchlistItem from './widgets/WatchlistItem';
import BuySellForm from './widgets/BuySellForm';
import { useGetCryptoDashboardWidgetsQuery } from './CryptoDashboardApi';

/**
 * The crypto dashboard app sidebar.
 */
function CryptoDashboardAppSidebar() {
	const { data: widgets, isLoading } = useGetCryptoDashboardWidgetsQuery();

	if (isLoading) {
		return <FuseLoading />;
	}

	const watchlist = widgets?.watchlist;

	if (!watchlist) {
		return null;
	}

	return (
		<>
			<Paper
				elevation={0}
				square
			>
				{watchlist?.map((item) => (
					<WatchlistItem
						key={item.iso}
						item={item}
					/>
				))}
			</Paper>
			<BuySellForm />
		</>
	);
}

export default CryptoDashboardAppSidebar;
