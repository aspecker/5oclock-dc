import React, { Component } from 'react'
import './SubmitForm.css'
import API from '../../utils/API'
import neighborhoods from '../../data/neighborhoods'

class SubmitForm extends Component{
    constructor(props){
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        API.barNew(this.state);
    }

    convertPhone(number){
        let numArr = [...number];
        
        console.log(numArr);
    }

    componentDidMount(number = '(202) 555-5555'){
        this.convertPhone(number);
    }

    render () {
        return (
    <div className='container'>
        <form className='form' onSubmit={this.handleSubmit}>
        <div className='form-group'>
            <label htmlFor='name'> Restaurant Name *</label>
            <input 
                name='name' 
                type='text' 
                placeholder='Enter restaurant name...' 
                onChange={this.handleInputChange}
                value= {this.state.name}
                required/>
        </div>

        <div className='form-group'>
            <label htmlFor='address'> Address *</label>
            <input 
                name='address' 
                type='text' 
                placeholder='Enter restaurant street address...' 
                onChange={this.handleInputChange}
                value={this.state.address}
                required/>
        </div>

        <div className='form-group'>
            <label htmlFor='city'> City *</label>
            <input 
                name='city' 
                type='text' 
                placeholder='Washington...' 
                onChange={this.handleInputChange}
                value={this.state.city}
                required/>
        </div>
        
        <div className='form-group'>
            <label htmlFor='ZIP'> ZIP *</label>
            <input 
                name='ZIP' 
                type='text' 
                placeholder='20008...' 
                onChange={this.handleInputChange}
                value={this.state.ZIP}
                required/>
        </div>

        <div className="input-group">
            <select 
                name='neighborhood'
                value={this.state.neighborhood} 
                onChange={this.handleInputChange} 
                className="form-control custom-select no-radius" 
                id="hood-name"
                required>
                <option defaultValue>Choose a Neighborhood</option>
                {neighborhoods.map(neighborhood =>
                    <option  value={neighborhood.name} key={neighborhood.name}>{neighborhood.name}</option>
                )}
            </select>
        </div>
        
        <div className='form-group'>
            <label htmlFor='startTime'> Happy Hour Start Time *</label>
            <input 
                name='startTime' 
                type='text' 
                onChange={this.handleInputChange}
                value={this.state.startTime}
                required/>
        </div>
        
        <div className='form-group'>
            <label htmlFor='endTime'> Happy Hour End Time *</label>
            <input 
                name='endTime' 
                type='text' 
                onChange={this.handleInputChange}
                value={this.state.endTime}
                required/>
        </div>
        
        <div className='form-group'>
            <label htmlFor='price'> Price Point *</label>
            <select 
                name = 'price' 
                onChange={this.handleInputChange}
                value={this.state.price}
                required>
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
            </select>
        </div>

        <div className='form-group'>
            <label htmlFor='phone'> Phone Number *</label>
            <input 
                name = 'phone' 
                type = 'tel' 
                onChange={this.handleInputChange}
                value={this.state.phone}
                required/>
        </div>

        <div className='form-group'>
            <label htmlFor='cuisine'> Cuisine Style</label>
            <select 
                name ='cuisine'
                onChange={this.handleInputChange}
                value={this.state.cuisine}>
                <option value='Fusion'>Asian Fusion</option>
                <option value='Caribbean'>Caribbean</option>
                <option value='Chinese'>Chinese</option>
                <option value='Ethiopian'>Ethiopian</option>
                <option value='European'>European</option>
                <option value='French'>French</option>
                <option value='German'>German</option>
                <option value='Indian'>Indian</option>
                <option value='Irish'>Irish</option>
                <option value='Italian'>Italian</option>
                <option value='Japanese'>Japanese</option>
                <option value='Korean'>Korean</option>
                <option value='Mediterranean'>Mediterranean</option>
                <option value='Mexican'>Mexican</option>
                <option value='Pub'>Pub Fare</option>
                <option value='Tapas'>Tapas</option>
                <option value='Thai'>Thai Food</option>
                <option value='Seafood'>Seafood</option>
                <option value='Soul'>Soul Food</option>
                <option value='Sushi'>Sushi</option>
            </select>
        </div>

        <div className='form-group'>
            <label htmlFor='image'> Image Link</label>
            <input 
                name = 'image'
                onChange={this.handleInputChange}
                value={this.state.image} 
                type='text'/>
        </div>

        <div className='form-group'>
            <label htmlFor='menuLink'>Menu Link</label>
            <input 
                name = 'menuLink' 
                type ='text'
                value={this.state.menuLink}
                onChange={this.handleInputChange}/>
        </div>

        <div className='form-group'>
            <label htmlFor='website'>Website</label>
            <input 
                name = 'website' 
                type ='text'
                value={this.state.website}
                onChange={this.handleInputChange}/>
        </div>
        
        <input 
        type = 'submit' 
        value='Submit'
         />
        </form>
    </div>

        )
    }

}

export default SubmitForm;