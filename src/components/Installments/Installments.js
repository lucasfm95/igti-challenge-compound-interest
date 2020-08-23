import React from 'react';
import Installment from '../Installment/Installment';
import css from './installments.module.css';
import { formatMoney, formatPercentage } from '../../helpers/formatters';

export default function Installments({ installments }) {
    return (
        <div className={css.container}>
            {installments.map((installment, index) => {
                return <Installment
                    key={index}
                    isPositiveValue={installment.valueAdded >= 0}
                    index={index + 1}
                    value={formatMoney(installment.value)}
                    valueAdded={formatMoney(installment.valueAdded)}
                    percentage={formatPercentage(installment.percentage)}
                />
            })}
        </div>
    )
}
