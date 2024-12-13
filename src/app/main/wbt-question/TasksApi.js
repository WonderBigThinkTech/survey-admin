import { apiService as api } from 'app/store/apiService';
import { showMessage } from '@fuse/core/FuseMessage/fuseMessageSlice';

export const addTagTypes = ['tasks_list', 'tasks_item', 'tasks_tags'];
const TasksApi = api
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getTasks: build.query({
				query: () => ({ url: `/mock-api/tasks` }),
				providesTags: ['tasks_list']
			}),
			reorderTasks: build.mutation({
				query: ({ startIndex, endIndex }) => ({
					url: `/mock-api/tasks/reorder`,
					method: 'POST',
					data: { startIndex, endIndex }
				}),
				invalidatesTags: ['tasks_list'],
				async onQueryStarted(_, { dispatch, queryFulfilled }) {
					try {
						await queryFulfilled;
						dispatch(
							showMessage({
								message: 'List Order Saved',
								autoHideDuration: 2000,
								anchorOrigin: {
									vertical: 'top',
									horizontal: 'right'
								}
							})
						);
					} catch (err) {
						dispatch(showMessage({ message: 'Error saving list order' }));
					}
				}
			}),
			createTasksItem: build.mutation({
				query: (task) => ({
					url: `/mock-api/tasks`,
					method: 'POST',
					data: task
				}),
				invalidatesTags: ['tasks_list']
			}),
			getTasksItem: build.query({
				query: (taskId) => ({ url: `/mock-api/tasks/${taskId}` }),
				providesTags: ['tasks_item']
			}),
			deleteTasksItem: build.mutation({
				query: (taskId) => ({
					url: `/mock-api/tasks/${taskId}`,
					method: 'DELETE'
				}),
				invalidatesTags: ['tasks_list']
			}),
			updateTasksItem: build.mutation({
				query: (task) => ({
					url: `/mock-api/tasks/${task.id}`,
					method: 'PUT',
					data: task
				}),
				invalidatesTags: ['tasks_item', 'tasks_list']
			}),
			getTasksTags: build.query({
				query: () => ({ url: `/mock-api/tasks/tags` }),
				providesTags: ['tasks_tags']
			}),
			createTasksTag: build.mutation({
				query: (tag) => ({
					url: `/mock-api/tasks/tags`,
					method: 'POST',
					data: tag
				}),
				invalidatesTags: ['tasks_tags']
			})
		}),
		overrideExisting: false
	});
export { TasksApi };
export const {
	useGetTasksQuery,
	useCreateTasksItemMutation,
	useGetTasksItemQuery,
	useDeleteTasksItemMutation,
	useUpdateTasksItemMutation,
	useGetTasksTagsQuery,
	useCreateTasksTagMutation,
	useReorderTasksMutation
} = TasksApi;
