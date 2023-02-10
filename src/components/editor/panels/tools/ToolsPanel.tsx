import styles from './ToolsPanel.module.scss'

interface toolsPanelProps {
    onSelectTool: Function
}
export default function ToolsPanel(props: toolsPanelProps) {
    return (
        <div className={styles.tools}>
            <div>
                <span>Tools</span>
            </div>
            <div>
                <ul>
                    <li>
                        <button onClick={ () => props.onSelectTool('canvas')}>Canvas</button>
                    </li>
                    <li>
                        <button onClick={ () => props.onSelectTool('effects')}>Effects</button>
                    </li>
                    <li>
                        <button onClick={ () => props.onSelectTool('beanpicker')}>Beanz Selector</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}