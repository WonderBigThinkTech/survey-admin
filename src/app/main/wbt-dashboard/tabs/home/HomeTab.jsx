import { motion } from 'framer-motion';
import SummaryWidget from './widgets/SummaryWidget';
import OverdueWidget from './widgets/OverdueWidget';
import IssuesWidget from './widgets/IssuesWidget';
import FeaturesWidget from './widgets/FeaturesWidget';
import GithubIssuesWidget from './widgets/GithubIssuesWidget';
import TaskDistributionWidget from './widgets/TaskDistributionWidget';
import ScheduleWidget from './widgets/ScheduleWidget';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

/**
 * The HomeTab component.
 */
function HomeTab() {
	const container = {
		show: {
			transition: {
				staggerChildren: 0.04
			}
		}
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	const carouselItems = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];

	const CarouselItem = ({name, description}) => {
		return (
			<Paper>
				<h2>{name}</h2>
				<p>{description}</p>
				<Button>more info...</Button>
			</Paper>
		);
	}

	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
			variants={container}
			initial="hidden"
			animate="show"
		>

			{/* first 4 objects */}

			<motion.div variants={item}>
				<SummaryWidget />
			</motion.div>
			<motion.div variants={item}>
				<OverdueWidget />
			</motion.div>
			<motion.div variants={item}>
				<IssuesWidget />
			</motion.div>
			<motion.div variants={item}>
				<FeaturesWidget />
			</motion.div>

			{/* second objects */}

			{/* <motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4"
			>
				<Carousel>
					{
						carouselItems.map((item, index) => {
							return (
								<CarouselItem key={index} {...item}/>
							);
						})
					}
				</Carousel>
				
			</motion.div> */}
			{/* second objects */}

			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4"
			>
				<GithubIssuesWidget />
			</motion.div>


			{/* third 2 objects */}

			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4 lg:col-span-2"
			>
				<TaskDistributionWidget />
			</motion.div>
			<motion.div
				variants={item}
				className="sm:col-span-2 md:col-span-4 lg:col-span-2"
			>
				<ScheduleWidget />
			</motion.div>
		</motion.div>
	);
}

export default HomeTab;
