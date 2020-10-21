import { create } from "jss";
import camelCase from "jss-plugin-camel-case";
import vendorPrefixer from "jss-plugin-vendor-prefixer";

const jss = create();
jss.use(camelCase(), vendorPrefixer());

export default jss;
