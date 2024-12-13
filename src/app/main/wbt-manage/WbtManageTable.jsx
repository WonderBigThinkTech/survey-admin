/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from 'react';
import DataTable from 'app/shared-components/data-table/DataTable';
import FuseLoading from '@fuse/core/FuseLoading';
import { Chip, ListItemIcon, MenuItem, Paper } from '@mui/material';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react';
import { useDeleteECommerceProductsMutation, useGetECommerceProductsQuery } from 'app/main/apps/e-commerce/ECommerceApi';
import { devApiLink } from 'app/configs/urlConfig';
import axios from 'axios';

function WbtManageTable() {
	const { data: products, isLoading } = useGetECommerceProductsQuery();
	const [removeProducts] = useDeleteECommerceProductsMutation();
	
	const columns = useMemo(
		() => [
			{
				accessorKey: 'domain',
				header: 'Domain Name',
				accessorFn: (row) => `${row.domain}`
			},
			{
				accessorKey: 'email',
				header: 'Email ',
				accessorFn: (row) => `${row.email}`
			},
			{
				accessorKey: 'name',
				header: 'Name',
				accessorFn: (row) => `${row.name}`
			},
			{
				accessorKey: 'official',
				header: 'Official ID',
				accessorFn: (row) => `${row.official}`
			},
			{
				accessorKey: 'phone',
				header: 'Phone Number',
				accessorFn: (row) => `${row.phone}`
			},
			{
				accessorKey: 'birthday',
				header: 'Birthday',
				accessorFn: (row) => `${row.birthday}`
			}
		],
		[]
	);

	const [allUsersData, setAllUsersData] = useState([]);

	const fetchAllUsersData = () => {
		axios.post(`${devApiLink}/user/get/alluser`).then((response) => {
			setAllUsersData(response.data);
		});
	};

	useEffect(() => {
		
		fetchAllUsersData();
	}, []);

	if (isLoading) {
		return <FuseLoading />;
	}

	//Delete users

	const deleteSeletedUsers = (emails) => {
		console.log('deleted all', emails);
		axios.post(`${devApiLink}/user/deletes`, {emails : emails}
		).then((response) => {
			console.log(response);
			setAllUsersData(allUsersData.filter((user) => !emails.includes(user.email)));
		});
	}

	const deleteSeletedUser = (email) => {
		axios.post(`${devApiLink}/user/delete`, {
			email: email
		}).then((response) => {
			console.log(response);
			setAllUsersData(allUsersData.filter((user) => user.email !== email));
		});
	}


	return (
		<Paper
			className="flex flex-col flex-auto shadow-3 rounded-t-16 overflow-hidden rounded-b-0 w-full h-full"
			elevation={0}
		>
			<DataTable
				data={allUsersData}
				columns={columns}
				renderRowActionMenuItems={({ closeMenu, row, table }) => [
					<MenuItem
						key={0}
						onClick={() => {
							deleteSeletedUser(row.original.email);
						}}
					>
						<ListItemIcon>
							<FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
						</ListItemIcon>
						Delete User
					</MenuItem>
				]}
				renderTopToolbarCustomActions={({ table }) => {
					const { rowSelection } = table.getState();
					const selectedRows = Object.keys(rowSelection).map(id => table.getRow(id)); 
					if (Object.keys(rowSelection).length === 0) {
						return null;
					}

					return (
						<Button
							variant="contained"
							size="small"
							onClick={() => {
								const emails = selectedRows.map(row => row.original.email); // Get selected emails
                                deleteSeletedUsers(emails);
							}}
							className="flex shrink min-w-40 ltr:mr-8 rtl:ml-8"
							color="secondary"
						>
							<FuseSvgIcon size={16}>heroicons-outline:trash</FuseSvgIcon>
							<span className="hidden sm:flex mx-8">Delete selected users</span>
						</Button>
					);
				}}
			/>
		</Paper>
	);
}

export default WbtManageTable;
