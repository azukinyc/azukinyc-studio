import styles from "./Canvas.module.scss"
import {useEffect, useRef} from "react";
import bubble from "./bubble.svg"
import {act} from "react-dom/test-utils";

export default function Canvas() {
    let canvas = useRef<HTMLCanvasElement>(null);
    const canvasWidth = 680 //640 actual grid
    const canvasHeight = 840
    //340 428

    useEffect(() => {

        function fillCanvasBackground(ctx: CanvasRenderingContext2D) {
            ctx.beginPath();
            ctx.rect(0, 0, canvasWidth, canvasHeight);
            ctx.fillStyle = "rgb(17,17,17)";
            ctx.fill();
            ctx.closePath()
        }
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
            ctx.strokeStyle = "rgb(34,34,34)"
            ctx.stroke();
            ctx.closePath()
        }

        function drawBean(ctx: CanvasRenderingContext2D, padding = 20, row = 1, column = 1) {
            const image = new Image(80, 80)
            image.onload = (event: any) => {
                ctx.save()
                ctx.beginPath();
                ctx.translate(padding + 20 + (column * 80), padding + 20 + (row * 80));
                ctx.scale(0.666,0.666)
                const path = new Path2D("M58.8,30.6c0-4.4-2.4-8.2-5.9-10c0.4-1.2,0.7-2.5,0.7-3.9c0-6.1-4.7-11.1-10.6-11.1c-1.3,0-2.5,0.2-3.7,0.7  c-1.7-3.7-5.3-6.2-9.5-6.2S22,2.7,20.3,6.4c-1.1-0.5-2.4-0.7-3.7-0.7C10.8,5.7,6,10.7,6,16.8c0,1.4,0.2,2.7,0.7,3.9  c-3.5,1.8-5.9,5.6-5.9,10c0,4.1,2.2,7.7,5.4,9.6C6.1,40.7,6,41.2,6,41.7c0,6.1,4.7,11.1,10.6,11.1c1.3,0,2.5-0.2,3.7-0.7  c1.7,3.7,5.3,6.2,9.5,6.2c4.2,0,7.8-2.5,9.5-6.2c1.1,0.5,2.4,0.7,3.7,0.7c5.8,0,10.6-5,10.6-11.1c0-0.5,0-1-0.1-1.4  C56.7,38.4,58.8,34.7,58.8,30.6L58.8,30.6z")
                ctx.closePath()
                ctx.clip(path)
                ctx.drawImage(event.target, 0, 0, 60, 60)
                ctx.restore()
            }
            image.src = 'https://azuki.nyc/assets/images/tinybeans/final-3652.png'
        }

        function drawBean2(ctx: CanvasRenderingContext2D, padding = 20) {
            const image = new Image(80, 80)
            image.onload = (event: any) => {
                ctx.save()
                ctx.beginPath();
                ctx.translate(padding + 20 + 80, padding + 20 + 80  );
                ctx.scale(0.666,0.666)
                const path = new Path2D("M58.8,30.6c0-4.4-2.4-8.2-5.9-10c0.4-1.2,0.7-2.5,0.7-3.9c0-6.1-4.7-11.1-10.6-11.1c-1.3,0-2.5,0.2-3.7,0.7  c-1.7-3.7-5.3-6.2-9.5-6.2S22,2.7,20.3,6.4c-1.1-0.5-2.4-0.7-3.7-0.7C10.8,5.7,6,10.7,6,16.8c0,1.4,0.2,2.7,0.7,3.9  c-3.5,1.8-5.9,5.6-5.9,10c0,4.1,2.2,7.7,5.4,9.6C6.1,40.7,6,41.2,6,41.7c0,6.1,4.7,11.1,10.6,11.1c1.3,0,2.5-0.2,3.7-0.7  c1.7,3.7,5.3,6.2,9.5,6.2c4.2,0,7.8-2.5,9.5-6.2c1.1,0.5,2.4,0.7,3.7,0.7c5.8,0,10.6-5,10.6-11.1c0-0.5,0-1-0.1-1.4  C56.7,38.4,58.8,34.7,58.8,30.6L58.8,30.6z")
                ctx.closePath()
                ctx.clip(path)
                ctx.drawImage(event.target, 0, 0, 60, 60)
                ctx.restore()
            }
            image.src = 'https://azuki.nyc/assets/images/tinybeans/final-3652.png'
        }

        function drawCells(ctx: CanvasRenderingContext2D, padding = 20, columns = 8, rows = 10) {
            ctx.beginPath();
            const actualContentWidth = canvasWidth - (padding * 2)
            const actualContentHeight = canvasHeight - (padding * 2)
            const sqW = actualContentWidth / columns
            const sqH = actualContentHeight / rows

            if (sqW !== sqH) {
                throw Error('cell width and height do not match')
            }

            for (let i = padding; i <= canvasWidth - padding; i += sqW) {
                ctx.moveTo(i, padding)
                ctx.lineTo(i, canvasHeight - padding)
            }

            for (let i = padding; i <= canvasHeight - padding; i += sqH) {
                ctx.moveTo(padding, i)
                ctx.lineTo(canvasWidth - padding, i)
            }

            ctx.strokeStyle = "rgb(34,34,34)"
            ctx.stroke();
            ctx.closePath()
        }

        if (canvas.current !== null) {
            const ctx = canvas.current.getContext("2d")!
            fillCanvasBackground(ctx)
            drawBorder(ctx)
            drawCells(ctx)

            const columns = 8;
            const rows = 10;
            for (let column = 0; column < columns; column++) {
                for (let row = 0; row < rows; row++) {
                    drawBean(ctx, 20, row, column)
                }
            }
        }

        // function render() {
        //     if (canvas.current !== null) {
        //         console.log('rendering')
        //         const ctx = canvas.current.getContext("2d")!
        //         drawCells(ctx)
        //     }
        //     requestAnimationFrame(render.bind(this))
        // }
        //
        // requestAnimationFrame(render.bind(this))

    }, [])

    return (
        <div className={styles.checks}>
            <canvas width={canvasWidth} height={canvasHeight} ref={canvas}></canvas>
        </div>
    )
}