import { makeInstaller } from "@strive-ui/utils";
import components from "./components";
import '@strive-ui/theme/index.css';
const installer = makeInstaller(components);

export * from "@strive-ui/components";
export default installer;