import withPopUpBox from "../../Hoc/withPopUpBox/withPopUpBox";
import AppSettingsList from "../AppSettingsList/AppSettingsList";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const AppGlobalSettings = withPopUpBox(AppSettingsList, {
  spaceBetween: "large",
})(HamburgerMenu);
// })(HamburgerMenu, { iconColor: "#006d77" });

export default AppGlobalSettings;
