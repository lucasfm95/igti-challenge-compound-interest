import React from 'react';
import css from './input-number.module.css';

export default function InputNumber({ label, step, value, min, max, onChangeInput }) {

    const handleInputChange = (event) => {
        onChangeInput(+event.target.value);
    }

    return (
        <div className={css.inputNumber}>
            <span>{label}:</span>
            <input type="number" step={step} value={value} onChange={handleInputChange} min={min} max={max} />
        </div>
    )
}
