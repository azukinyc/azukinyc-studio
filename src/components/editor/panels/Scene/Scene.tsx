import styles from './Scene.module.scss'
import GlobalState from "../../GlobalState";
import VVChecks from "./VVChecks/VVChecks";
import Canvas from "./canvas/Canvas";

interface SceneProps {
    globalState: GlobalState
}
export default function Scene(props: SceneProps) {
    return (
        <div className={styles.scene}>
            <h1>Scene</h1>
            <Canvas></Canvas>
            {/*<VVChecks/>*/}
            <p>Canvas width should be {props.globalState.canvas.size.width}</p>
            <p>Canvas height should be {props.globalState.canvas.size.height}</p>
        </div>
    )
}