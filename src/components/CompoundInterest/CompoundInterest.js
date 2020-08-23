import React, { useState } from 'react';
import Installments from '../Installments/Installments';
import Form from '../Form/Form';
import css from './compound-interest.module.css';

export default function CompoundInterest() {

    const [valuesCalculated, setValuesCalculated] = useState([]);

    const handleOnChangeInputs = (value, interest, period) => {
        calculeValues(value, interest, period);
    }

    const calculeValues = (value, interest, period) => {
        let result = [];
        let lastValue = value;
        let lastValueAdded = 0;

        for (let index = 0; index < period; index++) {

            let valueToAdd = (lastValue * (interest / 100)) + lastValueAdded;
            let valueCalculed = value + valueToAdd;
            let percentageCalculed = ((valueToAdd / value) * 100);

            let obj = {
                value: valueCalculed,
                valueAdded: valueToAdd,
                percentage: percentageCalculed
            }

            result.push(obj);

            lastValue = valueCalculed;
            lastValueAdded = valueToAdd;
        }

        setValuesCalculated(result);
    }

    return (
        <div className={css.mainContainer}>
            <h1 className={css.textAlign}>Compound Interest</h1>
            <Form onChange={handleOnChangeInputs} />
            <Installments installments={valuesCalculated} />
        </div>
    )
}
