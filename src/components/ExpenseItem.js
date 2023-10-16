import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = ({ name, quantity, unitprice }) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: { name },
        });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{Location}{unitprice}</td>
            <td>{Location}{quantity * unitprice}</td>
            <td>
                <FaTimesCircle 
                    size='2.2em' 
                    color="red" 
                    onClick={handleDeleteItem}
                />
            </td>
        </tr>
    );
};

export default ExpenseItem;
