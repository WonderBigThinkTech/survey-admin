import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import { useEffect, useLayoutEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ThemePreview from '@fuse/core/FuseThemeSelector/ThemePreview';
import { useAppDispatch } from 'app/store/hooks';
import { changeFuseTheme } from '@fuse/core/FuseSettings/fuseSettingsSlice';
import { showMessage } from '@fuse/core/FuseMessage/fuseMessageSlice';
import themesConfig from 'app/configs/themesConfig';


/**
 * The header change dark / bright mode
 */
function DarkModeToggle() {


	const [darkModeStatus, setDarkModeStatus] = useState(false);
	const dispatch = useAppDispatch();

	
	function handleThemeSelect(_theme) {
		dispatch(changeFuseTheme(_theme?.section)).then(() => {
			dispatch(showMessage({ message: (darkModeStatus ? "Bright mode is set" : "Dark mode is set"), type: "success" }));
		});
	}

	const setBrightMode = () => {
		handleThemeSelect(
			{
				id: 'Default ',
				section: {
					main: themesConfig.default,
					navbar: themesConfig.defaultDark,
					toolbar: themesConfig.default,
					footer: themesConfig.defaultDark
				}
			}
		)
	}

	const setDarkMode = () => {
		handleThemeSelect(
			{
				id: 'Default Dark',
				section: {
					main: themesConfig.defaultDark,
					navbar: themesConfig.defaultDark,
					toolbar: themesConfig.defaultDark,
					footer: themesConfig.defaultDark
				}
			}
		);
	}
	const toggleDarkMode = () => {
		if(darkModeStatus){
			setBrightMode();
			setDarkModeStatus(false);
			localStorage.setItem('darkModeStatus', 'false');
		}
		else {
			setDarkMode();
			setDarkModeStatus(true);
			localStorage.setItem('darkModeStatus', 'true');
		}
	}

	return (
		<Tooltip
			title="Fullscreen toggle"
			placement="bottom"
		>
			<IconButton
				onClick={toggleDarkMode}
				size="large"
			>
				
				{
					darkModeStatus ?
						<FuseSvgIcon>heroicons-outline:sun</FuseSvgIcon>
						:
						<FuseSvgIcon>heroicons-outline:moon</FuseSvgIcon>
				}
			</IconButton>
		</Tooltip>
	);
}

export default DarkModeToggle;
