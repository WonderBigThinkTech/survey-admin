/**
 * The authRoles object defines the authorization roles for the Fuse application.
 */
const authRoles = {
	/**
	 * The admin role grants access to users with the 'admin' role.
	 */
	// admin: ['admin'],
	admin: [],
	/**
	 * The staff role grants access to users with the 'admin' or 'staff' role.
	 */
	// staff: ['admin', 'staff'],
	staff: [],
	/**
	 * The user role grants access to users with the 'admin', 'staff', or 'user' role.
	 */
	// user: ['admin', 'staff', 'user'],
	user: [],
	/**
	 * The onlyGuest role grants access to unauthenticated users.
	 */
	onlyGuest: []
};
export default authRoles;
