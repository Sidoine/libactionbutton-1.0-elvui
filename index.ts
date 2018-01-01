import { LuaArray } from "@wowts/lua";

export interface ActionButton {
    GetAttribute(attribute: "action"): number;
}

const actionButtons = {
    buttonRegistry: [] as LuaArray<ActionButton>,
};

export default actionButtons;
