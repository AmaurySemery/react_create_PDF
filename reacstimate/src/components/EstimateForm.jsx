import React, { Component } from 'react';
import Item from './item'

class EstimateForm extends Component {
    state = { 
        id: '',
        title: '',
        customerFirstName: '',
        customerLastName: '',
        items: {}
     };

     /*
     Items: {
        "12345": {
            id: "34567",
            description: "Unité centrale",
            quantity: "1",
            taxe: 0.2,
            amount: 1400
        },
        "12345": {
            id: "34567",
            description: "Ecran",
            quantity: "2",
            taxe: 0.2,
            amount: 350
        }
     }
     */

    handleSubmit = evt => {
        evt.preventDefault();
        console.log('généré');
    }

    handleChange = (evt, name) => {
        const value = evt.currentTarget.value;
        console.log(JSON.stringify({name: value}));
        console.log(JSON.stringify({[name]: value}));
        this.setState({
            [name]: value
        });
    }

    addItem = () => {
        const id = Date.now().toString();
        const items = {...this.state.items};
        console.log(this, items);
        items[id] = {
            id: id,
            description: "description",
            quantity: "1",
            taxe: 0.2,
            amount: 0
        };
        this.setState({ items });
    }

    handleItemChange = (evt, item, field) => {
        console.log(evt.currentTarget.value, item, field);
    }

    render() { 
        return (
            <React.Fragment>
            <div>Nouveau devis</div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="id" id='id' placeholder='ID' value={this.state.id} onChange={evt => this.handleChange(evt, 'id')} /> <br/>
            <input type="text" name="title" id='title' placeholder='titre du devis' value={this.state.title} onChange={evt => this.handleChange(evt, 'title')} /> <br/>
            <input type="text" name="customerFirstName" id='customerFirstName' placeholder='prénom' value={this.state.customerFirstName} onChange={evt => this.handleChange(evt, 'customerFirstName')} /> <br/>
            <input type="text" name="customerLastName" id='customerLastName' placeholder='nom' value={this.state.customerLastName} onChange={evt => this.handleChange(evt, 'customerLastName')} /> <br/>
            <button onClick={this.addItem}>Ajouter une ligne</button>
            {Object.keys(this.state.items).map((itemId, index) => (
                <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange} />
            ))}
            <button type='submit' >Générer le devis</button>
            </form>
            </React.Fragment>
        );
    }
}
 
export default EstimateForm;