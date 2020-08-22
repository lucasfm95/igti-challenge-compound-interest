import React from 'react';
import ProcessedData from '../ProcessedData/ProcessedData';
import Inputs from '../Inputs/Inputs';
import css from './compound-interest.module.css';

export default function CompoundInterest() {
    return (
        <div className={css.mainContainer}>
            <h1 className={css.textAlign}>Compound Interest</h1>
            <Inputs />
            <ProcessedData />
        </div>
    )
}
