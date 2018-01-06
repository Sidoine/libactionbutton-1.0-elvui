import { LuaMap } from "@wowts/lua";

export interface ActionButton {
    GetAttribute(attribute: "action"): number;
}

const actionButtons = {
    buttonRegistry: {} as LuaMap<ActionButton, boolean>,
};

export default actionButtons;
