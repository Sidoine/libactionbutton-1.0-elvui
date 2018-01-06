import { LuaMap } from "@wowts/lua";
export interface ActionButton {
    GetAttribute(attribute: "action"): number;
}
declare const actionButtons: {
    buttonRegistry: LuaMap<ActionButton, boolean>;
};
export default actionButtons;
