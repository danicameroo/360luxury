import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import date from '../../Images/calender.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
      Full_Name: '',
      Email: '',
      Description: '',
      addressLine1: '',
      addressLine2: '',
      City: '',
      State: '',
      ZipCode: '',
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      Full_Name: formData.Full_Name,
      Email: formData.Email,
      Description: formData.Description,
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      City: formData.City,
      State: formData.State,
      ZipCode: formData.ZipCode,
      date: selectedDate.toString(),
    };

    // Envía el formulario usando EmailJS
    emailjs.send('service_vw4zizt', 'template_vm44lie', templateParams, 'EEhrbNotEY4A3jsIG')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

    const City = ["Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey"]
    const States = ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"]

    const CustomDatePickerInput = ({ value, onClick }) => (
        <div className={`datepicker-input ${value ? 'has-value' : ''}`} onClick={onClick}>
          {value ? (
            value
          ) : (
            <div className='dateContainer'>
              <div className='containerImgCalender'>
                <img src={date} alt="" className='imgCalender' />
              </div>
              <div className='linesDate'>
                <p className='lines'>/ / /</p>
              </div>
            </div>
          )}
        </div>
      );

      const form = useRef();

  

    return(
        <div>
            <form className='containerForm' ref={form} onSubmit={handleSubmit}>
                <div className='inputsOne'>
                    <input type="text" name="Full_Name" id='name' placeholder="Full Name" className='inputForm' onChange={handleChange} required/>
                    
                    <input type="email" name="Email" placeholder="Email" onChange={handleChange} className='inputForm' required/>
                </div>
                <div className='containerFormTwo'>
                    <div className='containerFormPartOne'>
                        <div>
                            {/* DatePicker */}
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="MM/dd/yyyy"
                                showYearDropdown
                                showMonthDropdown
                                dropdownMode="select"
                                customInput={<CustomDatePickerInput />}
                                name="date"
                                required
                            />
                        </div>
                        <select name="Packages" id="" className='selectsPack' required onChange={handleChange}>
                            <option value="" disabled selected hidden className='options'>
                                &nbsp;  Packages
                            </option>
                            <option value="Basic" className='options'>Basic</option>
                            <option value="Premium" className='options'>Premium</option>
                            <option value="Deluxe" className='options'>Deluxe</option>
                        </select>
                        <input type="text" name="Description" placeholder="Description" className='inputForm description' onChange={handleChange} required/>
                    </div>
                    <div className='containerFormPartTwo'>
                        <input type="text" name="addressLine1" placeholder="Address line 1" className='inputForm' onChange={handleChange} required/>
                        <input type="text" name="addressLine2" placeholder="Address line 2" className='inputForm' onChange={handleChange} required/>
                        <div className='selectsContainer'> 
                            <select name="City" placeholder="City" id="" className='selects' onChange={handleChange} required>
                                <option value="" disabled selected hidden>
                                 &nbsp; City
                                </option>
                                {City.map((item) =>(
                                    <option>{item}</option>
                                ))}
                            </select>
                            <select name="State" placeholder="State" id="" className='selects' onChange={handleChange} required>
                                <option value="" disabled selected hidden>
                                    &nbsp; State
                                </option>
                                {States.map((item) =>(
                                    <option>{item}</option>
                                ))}
                            </select>
                            <input type='number' name="ZipCode" placeholder="Zip Code" className='selects' onChange={handleChange} required/>
                        </div>
                    </div>
                </div>
                <div className='containerButtonBook'>
                    <input type='submit' value='Book' className='buttonBook' />
                </div>
            </form>
        </div>
    )
}

export default Form