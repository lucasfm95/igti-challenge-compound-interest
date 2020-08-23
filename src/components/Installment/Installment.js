import React from 'react';
import css from './installment.module.css';

export default function Installment({ index, isPositiveValue, value, valueAdded, percentage }) {
    return (
        <div className={css.container}>
            <div className={css.index}>
                <span className={css.span}>{index}</span>
            </div>
            <div className={css.info} >
                <span className={isPositiveValue ? css.infoGreen : css.infoRed}>{value}</span>
                <span className={isPositiveValue ? css.infoGreen : css.infoRed}>{valueAdded}</span>
                <span className={isPositiveValue ? css.infoBlue : css.infoOrange}>{percentage}</span>
            </div>
        </div>
    )
}
