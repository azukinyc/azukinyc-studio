import React from "react";
import styles from './ConfigPanel.module.scss'
import Tool from "../Tool.interface";
import GlobalState from "../../GlobalState";

interface ConfigPanelProps {
    tool: Tool,
    globalstate: GlobalState,
    setglobalstate: Function
}
export default function ConfigPanel(props: ConfigPanelProps) {
    console.log(props.globalstate)
    return (
        <div className={styles.configs}>
            {/*<h1>Configs</h1>*/}
            <div>
                {React.cloneElement(props.tool.component, {props})}
            </div>
        </div>
    )
}