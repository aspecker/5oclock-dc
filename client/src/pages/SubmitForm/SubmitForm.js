import React, { Component } from 'react'
import './SubmitForm.css'
import API from '../../utils/API'
import neighborhoods from '../../data/neighborhoods'
import Logo from '../../Components/Logo'

class SubmitForm extends Component{
    constructor(props){
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.convertPhone = this.convertPhone.bind(this);
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
        let formattedPhone = this.convertPhone(this.state.phone);
        let barObj = {...this.state,phone: formattedPhone};
        console.log(barObj);
        API.barNew(barObj);
    }

    convertPhone(number){
        let numArr = [...number]
        let adjArr = [
            '(',
            ...numArr.slice(0,3),
            ')',
            ' ',
            ...numArr.slice(3,6),
            '-',
            ...numArr.slice(6)
        ]
        let adjPhone = adjArr.join('');
        return adjPhone;
    }

    // componentDidMount(number = '1234567890'){
    //     this.convertPhone(number);
    // }

    render () {
        return (
    <div className='container'>
      <Logo />
        <form className='form' onSubmit={this.handleSubmit}>
        <div className='form-group form-restaurant'>
            <label htmlFor='name'> Restaurant Name *</label>
            <input
                name='name'
                type='text'
                placeholder='Enter restaurant name...'
                onChange={this.handleInputChange}
                value= {this.state.name}
                required/>
        </div>

        <div className='form-group form-address'>
            <label htmlFor='address'> Address *</label>
            <input
                name='address'
                type='text'
                placeholder='Enter restaurant street address...'
                onChange={this.handleInputChange}
                value={this.state.address}
                required/>
        </div>

        <div className='form-group form-city'>
            <label htmlFor='city'> City *</label>
            <input
                name='city'
                type='text'
                placeholder='Washington...'
                onChange={this.handleInputChange}
                value={this.state.city}
                required/>
        </div>

        <div className='form-group form-zip'>
            <label htmlFor='ZIP'> ZIP *</label>
            <input
                name='ZIP'
                type='text'
                placeholder='20008...'
                onChange={this.handleInputChange}
                value={this.state.ZIP}
                required/>
        </div>

        <div className="input-group form-neighborhood">
        <label htmlFor='neighborhood'> Choose a Neighborhood *</label>
            <select
                name='neighborhood'
                value={this.state.neighborhood}
                onChange={this.handleInputChange}
                className="form-control custom-select no-radius submitSelect"
                id="hood-name"
                required>
                <option defaultValue>Choose a Neighborhood</option>
                {neighborhoods.map(neighborhood =>
                    <option  value={neighborhood.name} key={neighborhood.name}>{neighborhood.name}</option>
                )}
            </select>
        </div>

        <div className='form-group form-start'>
            <label htmlFor='startTime'> Happy Hour Start Time *</label>
            <input
                name='startTime'
                placeholder='1600'
                type='text'
                onChange={this.handleInputChange}
                value={this.state.startTime}
                required/>
        </div>

        <div className='form-group form-end'>
            <label htmlFor='endTime'> Happy Hour End Time *</label>
            <input
                name='endTime'
                placeholder='1900'
                type='text'
                className='submitSelect'
                onChange={this.handleInputChange}
                value={this.state.endTime}
                required/>
        </div>

        <div className='form-group form-price'>
            <label htmlFor='price'> Price Point *</label>
            <select
                name = 'price'
                className='submitSelect'
                onChange={this.handleInputChange}
                value={this.state.price}
                required>
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
            </select>
        </div>

        <div className='form-group form-phone'>
            <label htmlFor='phone'> Phone Number *</label>
            <input
                name = 'phone'
                type = 'tel'
                placeholder='2025556789 (no spaces or dashes)'
                onChange={this.handleInputChange}
                value={this.state.phone}
                required/>
        </div>

        <div className='form-group form-cuisine'>
            <label htmlFor='cuisine'> Cuisine Style</label>
            <select
                name ='cuisine'
                className='submitSelect'
                onChange={this.handleInputChange}
                value={this.state.cuisine}>
                <option defaultValue>Choose a Cuisine Type</option>
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

        <div className='form-group form-image'>
            <label htmlFor='image'> Image Link</label>
            <input
                name = 'image'
                placeholder='https://'
                onChange={this.handleInputChange}
                value={this.state.image}
                type='text'/>
        </div>

        <div className='form-group form-menu'>
            <label htmlFor='menuLink'>Menu Link</label>
            <input
                name = 'menuLink'
                type ='text'
                placeholder='https://'
                value={this.state.menuLink}
                onChange={this.handleInputChange}/>
        </div>

        <div className='form-group form-website'>
            <label htmlFor='website'>Website</label>
            <input
                name = 'website'
                type ='text'
                placeholder='https://'
                value={this.state.website}
                onChange={this.handleInputChange}/>
        </div>
        <div className='submitDiv'>
          <input
          type = 'submit'
          value='Submit'
          className='formSubmit'
           />
         </div>
        </form>
    </div>

        )
    }

}

export default SubmitForm;
