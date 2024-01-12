import React, { Component } from 'react';

class EstimateForm extends Component {
    state = { 
        id: '',
        title: '',
        customerFirstName: '',
        customerLastName: '',
        items: {}
        // items: {
        //     1: {quantity: 1, descriptions: 'UC centrale'},
        //     2: {quantity: 2, descriptions: 'écrans'},
        //     3: {quantity: 1, descriptions: 'aze'},
        // }
     };

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

    render() { 
        return (
            <React.Fragment>
            <div>Nouveau devis</div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="id" id='id' placeholder='ID' value={this.state.id} onChange={evt => this.handleChange(evt, 'id')} /> <br/>
            <input type="text" name="title" id='title' placeholder='titre du devis' value={this.state.title} onChange={evt => this.handleChange(evt, 'title')} /> <br/>
            <input type="text" name="customerFirstName" id='customerFirstName' placeholder='prénom' value={this.state.customerFirstName} onChange={evt => this.handleChange(evt, 'customerFirstName')} /> <br/>
            <input type="text" name="customerLastName" id='customerLastName' placeholder='nom' value={this.state.customerLastName} onChange={evt => this.handleChange(evt, 'customerLastName')} /> <br/>
                <button type='submit' >Générer le devis</button>
            </form>
            </React.Fragment>
        );
    }
}
 
export default EstimateForm;