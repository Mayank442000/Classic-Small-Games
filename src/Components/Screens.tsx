import { Component, createUniqueId, JSXElement } from "solid-js";

const MainScreen: Component<ScreenProps> = (props) => {
    const prop_style = props.style || {};
    let _style = {
        width: "100%",
        height: "100%",
        "background-color": "#f006",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        "flex-direction": "column",
        flex: 1,
    };
    const className = props.class || "";
    // console.log("MainScreen", "\nprop_style:", prop_style);
    _style = Object.assign(_style, prop_style);
    return (
        <div id="MainScreen" style={_style} class={className}>
            {props.children}
        </div>
    );
};

const SubScreen: Component<ScreenProps> = (props) => {
    const prop_style = props.style || {};
    let _style = {
        width: "*",
        height: "*",
        "background-color": "#0f06",
        display: "flex",
        "justify-content": "center",
        // alignItems: "center",
        "flex-direction": "row",
        flex: 1,
    };
    const id = props.id || "";
    const className = props.class || "";
    // console.log("SubScreen", "\nprop_style:", prop_style);
    _style = Object.assign(_style, prop_style);
    console.log("SubScreen", "\nprop_style:", prop_style, "\nprops:", props, "\nclass:", className);
    return (
        <div id="MainScreen" style={_style} id={id} class={className}>
            {props.children}
        </div>
    );
};

const Screen: Component<ScreenProps> = (props) => {
    const prop_style = props.style || {};
    const id = props.id || "";
    const className = props.class || "";
    let _style = {
        width: "*",
        height: "*",
        "background-color": "#00f6",
        display: "flex",
        // flex: 1,
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column",
    };
    _style = Object.assign(_style, prop_style);
    console.log("Screen", "\nprop_style:", prop_style, "\nprops:", props, "\nclass:", className);
    return (
        <div style={_style} id={id} class={className}>
            {props.children}
        </div>
    );
};

type ScreenProps = { style?: Object; children?: JSXElement; id?: string; class?: string };

export { MainScreen, SubScreen, Screen };
