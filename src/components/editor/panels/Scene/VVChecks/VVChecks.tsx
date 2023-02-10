import React, {useEffect} from 'react';
import styles from './VVChecks.module.css'

const url = (id: number): string => {
    return '/assets/images/tinybeans/final-' + id + '.png'
}

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function VVChecks() {
    const arr: string[] = []

    for (let i = 0; i < 80; i++) {
        arr.push(url(randomIntFromInterval(1, 19949)))
    }

    const log = (elem: HTMLElement) => {
        elem.style.opacity = '1'
    }

    return (
        <div className={styles.vvchecks}>
            <div className={styles.frame}>
                <div className={styles.canvas}>
                    {[...Array(80)].map((x, i) =>
                        <div key={i} className={styles.cell}>
                            <img
                                src={arr[i]}
                                onLoad={ (event) => log(event.target as HTMLElement) }
                                className=""
                                alt="check"/>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default VVChecks;
