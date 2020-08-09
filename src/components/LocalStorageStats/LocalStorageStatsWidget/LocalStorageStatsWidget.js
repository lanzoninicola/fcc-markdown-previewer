import DotGraphWidget from '../../DotGraphWidget/DotGraphWidget';
import LocalStorageStatsViewWithData from '../LocalStorageStatsView/LocalStorageStatsView';
import withLocalStorageData from '../../../Hoc/withLocalStorageData/withLocalStorageData';
import withContextMenu from '../../../Hoc/withContextMenu/withContextMenu';

const LocalStorageWidget = withLocalStorageData(DotGraphWidget);
const LocalStorageStatsWidget = withContextMenu(LocalStorageStatsViewWithData, { spaceBetween: 'large' })(LocalStorageWidget);

export default LocalStorageStatsWidget;