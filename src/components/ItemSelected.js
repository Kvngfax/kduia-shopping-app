import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('Shirt');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('Add');

    const handleNameChange = (event) => {
        const selectedName = event.target.value;
        console.log("Selected item:", selectedName);  // Add this line
        setName(selectedName);
    };

    const submitEvent = () => {
        const item = {
            name: name,
            quantity: parseInt(quantity, 10),
        };

        const actionType = action === "Reduce" ? 'RED_QUANTITY' : 'ADD_QUANTITY';

        console.log("Dispatching:", { type: actionType, payload: item });  // <-- Add this line

        dispatch({
            type: actionType,
            payload: item,
        });
    };


    return (
        <>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        value={name}
                        onChange={handleNameChange}
                    >
                        <option value="Shirt">Shirt</option>
                        <option value="Dress">Dress</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Dinner set">Dinner set</option>
                        <option value="Bags">Bags</option>
                    </select>

                    <p>Selected Item: {name}</p>


                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Action</label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect02"
                        value={action}
                        onChange={(event) => setAction(event.target.value)}
                    >
                        <option value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
                    </div>

                    <input
                        required
                        type='number'
                        id='quantity-input'
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />

                    <button
                        className="btn btn-primary"
                        onClick={submitEvent}
                        style={{ marginLeft: '2rem' }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    );
};

export default ItemSelected;

