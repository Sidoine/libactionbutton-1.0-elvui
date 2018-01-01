import { LuaArray } from "@wowts/lua";
export interface ActionButton {
    GetAttribute(attribute: "action"): number;
}
export declare const buttonRegistry: LuaArray<ActionButton>;
