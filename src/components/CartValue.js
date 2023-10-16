import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);

    // Debug: Log the context values
    useEffect(() => {
        console.log("Expenses from context:", expenses);
        console.log("Location from context:", Location);
    }, [expenses, Location]);

    const totalExpenses = expenses.reduce((total, item) => total + item.unitprice * item.quantity, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;
