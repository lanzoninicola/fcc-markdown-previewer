import withContextMenu from '../../Hoc/withContextMenu/withContextMenu';
import AppSettingsList from '../AppSettingsList/AppSettingsList';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const EditorPanelSettings = withContextMenu(AppSettingsList)(HamburgerMenu);

export default EditorPanelSettings