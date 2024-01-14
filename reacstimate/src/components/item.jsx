import React from 'react';

const Item = (props) => {
    return ( 
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <input type="text" name="description" value={props.item.description} onChange={evt => props.onItemChange(evt, props.item, "description")} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="number" name="quantité" value={props.item.quantity} onChange={evt => props.onItemChange(evt, props.item, "quantity")} />
                </div>
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default Item;