import ToolsPanel from "./panels/tools/ToolsPanel";
import ConfigPanel from "./panels/config/ConfigPanel";
import styles from './Editor.module.scss'
import Scene from "./panels/Scene/Scene";
import React, {useState} from "react";

import Canvas from "./panels/config/canvas/Canvas";
import Tool from "./panels/Tool.interface";
import Effects from "./panels/config/effects/Effects";
import BeanPicker from "./panels/config/bean-picker/BeanPicker";
import GlobalState from "./GlobalState";

export default function Editor() {
    const [globalState, setGlobalState] = useState<GlobalState>({
        canvas: {
            size: {
                width: 8,
                height: 10
            }
        }
    })

    const updateGlobalState = (values: any) => {
            return {...globalState, ...values}
    }

    const [toolSelected, setToolSelected] = useState<Tool>({
        name: 'canvas',
        component: Canvas({globalstate: globalState, setglobalstate: setGlobalState})
    })
    const handleToolSelect = (name: string) => {
        switch (name) {
            case "canvas":
                setToolSelected({
                    name: name,
                    component: Canvas({globalstate: globalState, setglobalstate: setGlobalState})
                })
                break
            case "effects":
                setToolSelected({
                    name: name,
                    component: Effects()
                })
                break
            case "beanpicker":
                setToolSelected({
                    name: name,
                    component: BeanPicker()
                })
                break
        }
    }

    return (
        <div className={styles.editor}>
            <ToolsPanel onSelectTool={handleToolSelect}/>
            <Scene globalState={globalState}/>
            <ConfigPanel tool={toolSelected} globalstate={globalState} setglobalstate={updateGlobalState}/>
        </div>
    )
}