import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import _ from '@lodash';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import useJwtAuth from 'src/app/auth/services/jwt/useJwtAuth';
/**
 * Form Validation Schema
 */
const schema = z
	.object({
		domain: z.string().nonempty('You must enter your domain name'),
		email: z.string().email('You must enter a valid email').nonempty('You must enter an email'),
		name: z.string().nonempty('You must enter your displayName'),
		official: z.string().nonempty('You must enter your official ID'),
		phone: z.string().nonempty('You must enter your phone number'),
		birthday: z.string().nonempty('You must enter your birthday'),
		password: z
			.string()
			.nonempty('Please enter your password.')
			.min(8, 'Password is too short - should be 8 chars minimum.'),
		passwordConfirm: z.string().nonempty('Password confirmation is required'),
		acceptTermsConditions: z.boolean().refine((val) => val === true, 'The terms and conditions must be accepted.')
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: 'Passwords must match',
		path: ['passwordConfirm']
	});
const defaultValues = {
	name: '',
	email: '',
	domain: '',
	official: '',
	phone: '',
	birthday: '',
	password: '',
	passwordConfirm: '',
	acceptTermsConditions: false
};

function JwtSignUpForm() {
	const { signUp } = useJwtAuth();
	const { control, formState, handleSubmit, setError } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: zodResolver(schema)
	});
	const { isValid, dirtyFields, errors } = formState;

	function onSubmit(formData) {
		const { name, email, password, domain, official, phone, birthday } = formData;
		signUp({
			domain : domain,
			name : name,
			password : password,
			official : official,
			phone : phone,
			birthday : birthday,
			email : email
		})
			.then(() => {
				// No need to do anything, registered user data will be set at app/auth/AuthRouteProvider
			})
			.catch((_errors) => {
				_errors.forEach(({ message, type }) => {
					setError(type, { type: 'manual', message });
				});
			});
	}

	return (
		<form
			name="registerForm"
			noValidate
			className="mt-32 flex w-full flex-col justify-center"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Controller
				name="domain"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Domain"
						autoFocus
						type="text"
						error={!!errors.domain}
						helperText={errors?.domain?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Email"
						type="email"
						error={!!errors.email}
						helperText={errors?.email?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Display name"
						autoFocus
						type="text"
						error={!!errors.name}
						helperText={errors?.name?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			<Controller
				name="official"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Official ID"
						autoFocus
						type="text"
						error={!!errors.official}
						helperText={errors?.official?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			<Controller
				name="phone"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Phone"
						autoFocus
						type="tel"
						error={!!errors.phone}
						helperText={errors?.phone?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			
			
			<Controller
				name="birthday"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Birthday"
						autoFocus
						type="date"
						error={!!errors.birthday}
						helperText={errors?.birthday?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Password"
						type="password"
						error={!!errors.password}
						helperText={errors?.password?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			<Controller
				name="passwordConfirm"
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						className="mb-24"
						label="Password (Confirm)"
						type="password"
						error={!!errors.passwordConfirm}
						helperText={errors?.passwordConfirm?.message}
						variant="outlined"
						required
						fullWidth
					/>
				)}
			/>

			<Controller
				name="acceptTermsConditions"
				control={control}
				render={({ field }) => (
					<FormControl
						className="items-center"
						error={!!errors.acceptTermsConditions}
					>
						<FormControlLabel
							label="I agree to the Terms of Service and Privacy Policy"
							control={
								<Checkbox
									size="small"
									{...field}
								/>
							}
						/>
						<FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
					</FormControl>
				)}
			/>

			<Button
				variant="contained"
				color="secondary"
				className="mt-24 w-full"
				aria-label="Register"
				disabled={_.isEmpty(dirtyFields) || !isValid}
				type="submit"
				size="large"
			>
				Create your free account
			</Button>
		</form>
	);
}

export default JwtSignUpForm;
