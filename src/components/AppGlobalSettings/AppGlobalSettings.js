import withContextMenu from '../../Hoc/withContextMenu/withContextMenu';
import AppSettingsList from '../AppSettingsList/AppSettingsList';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';


const AppGlobalSettings = withContextMenu(AppSettingsList, { spaceBetween: 'large' })(HamburgerMenu, { iconColor: '#ffffff' });

export default AppGlobalSettings;