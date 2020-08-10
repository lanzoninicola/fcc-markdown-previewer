import DotChart from '../../DotChart/DotChart';
import LocalStorageStatsViewWithData from '../LocalStorageStatsView/LocalStorageStatsView';
import withLocalStorageData from '../../../Hoc/withLocalStorageData/withLocalStorageData';
import withContextMenu from '../../../Hoc/withContextMenu/withContextMenu';

const LocalStorageWidget = withLocalStorageData(DotChart);
const LocalStorageStatsWidget = withContextMenu(LocalStorageStatsViewWithData, { spaceBetween: 'large' })(LocalStorageWidget);

export default LocalStorageStatsWidget;