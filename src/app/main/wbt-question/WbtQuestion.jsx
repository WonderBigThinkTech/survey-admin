import FusePageSimple from '@fuse/core/FusePageSimple';
import WbtQuestionHeader from './WbtQuestionHeader';
import WbtQuestionTable from './WbtQuestionTable';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TasksSidebarContent from './TasksSidebarContent';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { styled } from '@mui/material/styles';


const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper
	}
}));

/**
 * The products page.
 */
function WbtQuestion() {
	
	const routeParams = useParams();
	const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	useEffect(() => {
		setRightSidebarOpen(Boolean(routeParams.id));
	}, [routeParams]);

	return (
		<Root
			header={<WbtQuestionHeader />}
			content={<WbtQuestionTable />}
			rightSidebarContent={<TasksSidebarContent />}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => setRightSidebarOpen(false)}
			rightSidebarWidth={640}
			scroll={isMobile ? 'normal' : 'content'}
		/>
	);
}

export default WbtQuestion;
