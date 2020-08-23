import React, { useState, useEffect } from 'react'
import InputNumber from '../InputNumber/InputNumber'
import css from './form.module.css';

export default function Form({ onChange }) {
    const [valueInitial, setValueInitial] = useState(1000);
    const [valueInterest, setValueInterest] = useState(1);
    const [valuePeriod, setValuePeriod] = useState(1);

    useEffect(() => {
        onChange(valueInitial, valueInterest, valuePeriod);
    }, [valueInitial, valueInterest, valuePeriod])

    const handleChangeValueInitial = (value) => {
        setValueInitial(value);
    }

    const handleChangeValueInterest = (value) => {
        setValueInterest(value);
    }

    const handleChangeValuePeriod = (value) => {
        setValuePeriod(value);
    }

    return (
        <div className={css.container}>
            <InputNumber label="Value Initial" value={valueInitial} step={100} min={100} max={100000} onChangeInput={handleChangeValueInitial} />
            <InputNumber label="Interest Per Month" value={valueInterest} step={1} min={-12} max={12} onChangeInput={handleChangeValueInterest} />
            <InputNumber label="Period (Month)" value={valuePeriod} step={1} min={1} max={36} onChangeInput={handleChangeValuePeriod} />
        </div>
    )
}
