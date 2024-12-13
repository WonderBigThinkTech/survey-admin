import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneNumberInput from '../phone-number-selector/PhoneNumberInput';
import {
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormGroup,
    Checkbox,
    FormHelperText,
    Button,
	InputAdornment,
	IconButton
} from '@mui/material';

const schema = z.object({
	email: z.string().optional(),
	label: z.string().optional()
});
const defaultValues = {
	email: '',
	label: ''
};

/**
 * The email input.
 */
function EmailInput(props) {
	const { value, hideRemove, onChange, onRemove, tagType } = props;
	const { control, formState, handleSubmit, reset } = useForm({
		mode: 'all',
		defaultValues,
		resolver: zodResolver(schema)
	});
	useEffect(() => {
		reset(value);
	}, [reset, value]);
	const { errors } = formState;

	function onSubmit(data) {
		onChange(data);
	}

	return (
		<form
			className="flex space-x-16 mb-16"
			onChange={handleSubmit(onSubmit)}
		>
			
			{
				tagType === 'Radio' &&
					<FormControl component="fieldset" error={!!errors.options}>
						<RadioGroup value={value} onChange={onChange}>
							<Controller
								control={control}
								name="options" // Change to the name you want to use for your radio group
								render={({ field: { onChange, value } }) => (
									<FormControlLabel
										key={'option'}
										value={'option'}
										control={<Radio />}
										onChange={onChange}
									/>
								)}
							/>
						</RadioGroup>
						{errors?.options && <FormHelperText>{errors.options.message}</FormHelperText>}
					</FormControl>
			}


			{
				tagType === 'Checkbox' &&
					<Controller
						control={control}
						name="checkboxOptions" // Change to the name you want to use for your checkbox group
						render={({ field: { onChange, value } }) => (
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											checked={value ? value.includes(option) : false}
												// Check if the option is included in the selected values
											onChange={(event) => {
												const checked = event.target.checked;

												// Update the value based on the checkbox being checked or unchecked
												if (checked) {
													onChange([...value, option]); // Add the option
												} else {
													onChange(value.filter((v) => v !== option)); // Remove the option
												}
											}}
										/>
									}
								/>
							</FormGroup>
						)}
					/>
			}


			<Controller
				control={control}
				name="label"
				render={({ field }) => (
					<TextField
						{...field}
						label={tagType === 'Text' ? "Placeholder" :"Label"}
						placeholder="Label"
						variant="outlined"
						fullWidth
						error={!!errors.label}
						helperText={errors?.label?.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<FuseSvgIcon size={20}>heroicons-solid:tag</FuseSvgIcon>
								</InputAdornment>
							)
						}}
					/>
				)}
			/>


				


			{!hideRemove && (
				<IconButton
					onClick={() => {
						onRemove(value);
					}}
				>
					<FuseSvgIcon size={20}>heroicons-solid:trash</FuseSvgIcon>
				</IconButton>
			)}
		</form>
	);
}

PhoneNumberInput.defaultProps = {
	hideRemove: false
};
export default EmailInput;
