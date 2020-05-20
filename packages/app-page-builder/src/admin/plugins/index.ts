import header from "./pageDetails/header";
import revisionContent from "./pageDetails/revisionContent";
import previewContent from "./pageDetails/previewContent";
import pageRevisions from "./pageDetails/pageRevisions";
import menuItems from "./menuItems";
import globalSearch from "./globalSearch";
import settings from "./settings";
import routes from "./routes";
import menus from "./menus";
import install from "./install";
import scopesList from "./scopesList";
import appTemplatePlugins from "./appTemplatePlugins";

export default () => [
    header,
    revisionContent,
    previewContent,
    pageRevisions,
    menuItems,
    globalSearch,
    settings,
    routes,
    menus,
    scopesList,
    install,
    appTemplatePlugins
];
