import ToolsPanel from "./panels/tools/ToolsPanel";
import ConfigPanel from "./panels/config/ConfigPanel";
import styles from './Editor.module.scss'
import Scene from "./panels/Scene/Scene";

export default function Editor() {
    return (
        <div className={styles.editor}>
            <ToolsPanel/>
            <Scene/>
            <ConfigPanel/>
        </div>
    )
}