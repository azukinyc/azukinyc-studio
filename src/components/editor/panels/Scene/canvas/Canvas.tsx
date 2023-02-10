import styles from "./Canvas.module.scss"
import {useEffect, useRef} from "react";
export default function Canvas() {
    let canvas = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 680
    const canvasHeight = 856
    //340 428

    useEffect(() => {
        function drawBorder(ctx: CanvasRenderingContext2D, padding = 20) {
            ctx.beginPath(); // Start a new path
            // left Edge
            ctx.moveTo(padding, padding); // Move pen
            ctx.lineTo(padding, canvasHeight - padding); // Draw a line
            // bottom edge
            ctx.lineTo(canvasWidth - padding, canvasHeight - padding);
            // right edge
            ctx.lineTo(canvasWidth - padding, padding);
            // top edge
            ctx.lineTo(padding, padding);

            ctx.stroke();
        }
        if (canvas.current !== null) {
            const ctx = canvas.current.getContext("2d")!
            drawBorder(ctx)
        }

    }, [])

    return (
        <div className={styles.checks}>
            <canvas width={canvasWidth} height={canvasHeight} ref={canvas}></canvas>
        </div>
    )
}