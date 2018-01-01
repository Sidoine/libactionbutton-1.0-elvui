import { LuaArray } from "@wowts/lua";
export interface ActionButton {
    GetAttribute(attribute: "action"): number;
}
declare const actionButtons: {
    buttonRegistry: LuaArray<ActionButton>;
};
export default actionButtons;
