import DotGraphWidget from './DotGraphWidget';
import withLocalStorageData from '../../Hoc/withLocalStorageData';

const DotGraphWidgetWithData = withLocalStorageData(DotGraphWidget);

export default DotGraphWidgetWithData;