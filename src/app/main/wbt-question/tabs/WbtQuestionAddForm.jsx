import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useAppDispatch } from 'app/store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import _ from '@lodash';
import { Controller, useForm } from 'react-hook-form';
import Box from '@mui/system/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import Radio from '@mui/material/Radio';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import IconButton from '@mui/material/IconButton';
import { useDeepCompareEffect } from '@fuse/hooks';
import { showMessage } from '@fuse/core/FuseMessage/fuseMessageSlice';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TaskPrioritySelector from './TaskPrioritySelector';
import { devApiLink } from 'app/configs/urlConfig';
import FormActionsMenu from './FormActionsMenu';
import {
	useCreateTasksItemMutation,
	useGetTasksItemQuery,
	useGetTasksTagsQuery,
	useUpdateTasksItemMutation
} from '../TasksApi';
import SectionModel from '../models/SectionModel';
import TaskModel from '../models/TaskModel';
import ContactEmailSelector from './Option/ContactEmailSelector';
import ContactModel from '../models/ContactModel';
import axios from 'axios';
/**
 * Form Validation Schema
 */
const subTaskSchema = z.object({
	id: z.string().nonempty(),
	title: z.string().nonempty(),
	completed: z.boolean()
});
const schema = z.object({
	id: z.string().optional(),
	type: z.string().nonempty(),
	title: z.string().nonempty('You must enter a title'),
	notes: z.string().nullable().optional(),
	completed: z.boolean(),
	dueDate: z.string().nullable().optional(),
	priority: z.number(),
	tags: z.array(z.string()),
	assignedTo: z.string().nullable().optional(),
	subTasks: z.array(subTaskSchema).optional(),
	order: z.number()
});

/**
 * The task form.
 */
function WbtQuestionAddForm() {
	const routeParams = useParams();
	const taskId = routeParams?.id;
	const taskType = routeParams?.type;
	const { data: task, isError } = useGetTasksItemQuery(routeParams.id, {
		skip: !taskId || taskId === 'new'
	});
	const { data: tags } = useGetTasksTagsQuery();
	const [updateTask] = useUpdateTasksItemMutation();
	const [createTask] = useCreateTasksItemMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [questionData, setQuestionData] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [heading, setHeading] = useState('');
	const [title, setTitle] = useState('');
	const [tagType, setTagType] = useState('Text');


	// const { control, watch, reset, handleSubmit, formState } = useForm({
	// 	mode: 'onChange',
	// 	resolver: zodResolver(schema)
	// });


    const { control, watch, reset, handleSubmit, formState } = useForm({
		mode: 'all',
		resolver: zodResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;
	const form = watch();


    const tagsData = [
        {
            id: 1,
            title : 'Text'
        },
        {
            id: 2,
            title : 'Radio'
        },
        {
            id : 3,
            title : 'Checkbox'
        }
    ]
	/**
	 * Update Task
	 */
	useDeepCompareEffect(() => {
		if (!(!isValid || _.isEmpty(form) || !task || routeParams.id === 'new') && !_.isEqual(task, form)) {
			onSubmit(form);
		}
	}, [form, isValid]);
	useEffect(() => {
		if (taskId === 'new') {
			if (taskType === 'section') {
				reset(SectionModel({}));
			}

			if (taskType === 'task') {
				reset(TaskModel({}));
			}
		} else {
			reset({ ...task });
		}
	}, [task, reset, taskId, taskType]);


	const fetchSurveyData = async () => {
		try {
			const response = await fetch('/survey.json');
			if(!response.ok){
				throw new Error ('Network response was not ok');
			}
			const data = await response.json();
			setQuestionData(data);
		}
		catch(error){
			console.log("failed error ", error);
		}
	}

    useEffect(() => {
		reset(ContactModel({}));
		fetchSurveyData();
	}, []);

	/**
	 * Form Submit
	 */
	function onSubmit(data) {

		console.log(data);
		alert('first');
		
	}

	function onSubmitNew(data) {
		alert('first');
		console.log("data : ", data);
		createTask(data)
			.unwrap()
			.then(() => {
				alert('success');
			})
			.catch((rejected) => {
				dispatch(showMessage({ message: `Error creating task item ${rejected}`, variant: 'error' }));
			});
	}

	if (isError && taskId !== 'new') {
		setTimeout(() => {
			navigate('/wbt-question');
			dispatch(showMessage({ message: 'NOT FOUND' }));
		}, 0);
		return null;
	}

	if (_.isEmpty(form)) {
		return <FuseLoading />;
	}

	const addQuestionFormFunc = () => {
		const tempLabelData = watch('emails');
		let tempDataType;

		if(tagType === 'Text'){
			tempDataType = 'inputSmallText';
		}
		else if(tagType === 'Radio'){
			tempDataType = 'verticalRadio';
		}
		else if(tagType === 'Checkbox'){
			tempDataType = 'verticalCheckbox';
		}

		const middleTempLabelData = tempLabelData?.map(data => data.label) || [];

		const createQuestionData = {
			heading: heading,
			dataType: tempDataType,
			dataTitle : title,
			required : true,
			dataContent : middleTempLabelData
		}
	
		axios
			.post(`${devApiLink}/questionare/create`, {page : currentPage, content : createQuestionData})
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => console.log(err));



	}

	return (
		<>
			<div className="relative flex flex-col flex-auto items-center px-24 sm:px-48">
				<div className="flex items-center justify-between border-b-1 w-full py-24 mt-16 mb-32">
					<Controller
						control={control}
						name="completed"
						render={({ field: { value, onChange } }) => (
							<Button
								className="font-semibold"
								onClick={() => onChange(!value)}
							>
							</Button>
						)}
                        style={{visibility: 'visible'}}
					/>
					<div className="flex items-center">
						{routeParams?.id !== 'new' && <FormActionsMenu taskId={task?.id} />}
						<IconButton
							component={NavLinkAdapter}
							to="/wbt-question"
							size="large"
						>
							<FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
						</IconButton>
					</div>
				</div>

				<div className="flex w-full space-x-16 mt-32 mb-16 items-center">

                    <Controller
                        control={control}
                        name="current"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                id="current"
                                className="w-full"
                                value={currentPage}
                                onChange={(event) => {
									onChange(event.target.value);
									setCurrentPage(event.target.value);
									setTitle('');
									setHeading('');
									setTagType('Text');
                                }}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Input Type"
                                        placeholder="Input Type"
                                    />
                                )}
                            >

								{
									questionData.map((_, index) => {
										return (
											<MenuItem key={index} value={index}>
												Page {index + 1}
											</MenuItem>
										);
									})
								}
								<MenuItem key={questionData.length} value={questionData.length}>
									Page {questionData.length + 1} (New)
								</MenuItem>

                            </Select>
                        )}
                    />
				</div>

				{
					questionData.length.toString() === currentPage.toString() &&

					<Controller
						control={control}
						name="heading"
						render={({ field }) => (
							<TextField
								className="mt-32 max-h-auto"
								{...field}
								label={`Question Heading`}
								placeholder="Question Heading"
								id="heading"
								variant="outlined"
								fullWidth
								multiline
								minRows={3}
								maxRows={10}
								value={heading}
								onChange={(event) => {
									setHeading(event.target.value);
								}}
							/>
						)}
					/>

				}


				<Controller
					control={control}
					name="title"
					render={({ field }) => (
						<TextField
							className="mt-32 max-h-auto"
							{...field}
							label={`Question title`}
							placeholder="Question title"
							id="title"
							variant="outlined"
							fullWidth
							multiline
							minRows={3}
							maxRows={10}
							value={title}
							onChange={(event) => {
								setTitle(event.target.value);
							}}
						/>
					)}
				/>
                
				
				<div className="flex w-full space-x-16 mt-32 mb-16 items-center">

                    <Controller
                        control={control}
                        name="tags"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                id="tags"
                                className="w-full"
                                value={tagType}
                                onChange={(event) => {
                                    onChange(event.target.value);
                                    setTagType(event.target.value);
                                }}
                                fullWidth
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Input Type"
                                        placeholder="Input Type"
                                    />
                                )}
                            >
                                {tagsData.map((tag) => (
                                    <MenuItem key={tag.id} value={tag.title}>
                                        {tag.title}
                                    </MenuItem>
                                ))}

                            </Select>
                        )}
                    />

				</div>

                <Controller
					control={control}
					name="emails"
					render={({ field }) => (
						<ContactEmailSelector
							className="mt-32"
							{...field}
							value={field?.value}
							onChange={(val) => field.onChange(val)}
                            tagType={tagType}
						/>
					)}
				/>

			</div>
			{routeParams.id === 'new' && (
				<Box
					className="flex items-center mt-40 py-14 pr-16 pl-4 sm:pr-48 sm:pl-36 border-t"
					sx={{ backgroundColor: 'background.default' }}
				>
					<Button
						onClick={() => {
							navigate(-1);
						}}
						className="ml-auto"
					>
						Cancel
					</Button>
					<Button
						className="ml-8"
						variant="contained"
						color="secondary"
						onClick={addQuestionFormFunc}
					>
						Create
					</Button>
				</Box>
			)}
		</>
	);
}

export default WbtQuestionAddForm;
