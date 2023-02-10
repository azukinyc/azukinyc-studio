import React from "react";
import GlobalState from "../../../GlobalState";
import styles from "../ConfigPanel.module.scss"

interface CanvasProps {
    globalstate: GlobalState,
    setglobalstate: Function
}

function updateSize(props: CanvasProps, width: number, height: number) {
    props.setglobalstate({canvas: {
                size: {
                    width: width,
                    height: height
                }
            }
    })
}

function set8x10(props: CanvasProps) {
    updateSize(props, 8, 10)
}

function set1x1(props: CanvasProps) {
    updateSize(props, 1, 1)
}

export default function Canvas(props: CanvasProps) {
    console.log(props)
    return (
        <div>
            <div><h2>Canvas</h2></div>
            <div>
                <ul>
                    <li>
                        <button onClick={ () => { set8x10(props) } }>
                            <span>8 x 10</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={ () => { set1x1(props) } }>
                            <span>1 x 1</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}