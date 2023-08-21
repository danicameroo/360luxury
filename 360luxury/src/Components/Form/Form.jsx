import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import date from '../../Images/calender.png'
import './Form.css'
import emailjs from '@emailjs/browser';

const Form = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        Full_Name: '',
        Email: '',
        addressLine1: '',
        addressLine2: '',
        ZipCode: '',
        Description: ''
    });
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isOpenThree, setIsOpenThree] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpenTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const toggleOpenThree = () => {
    setIsOpenThree(!isOpenThree);
  };

  const handleOptionPackagesClick = (option) => {
    setSelectedPackages(option);
    setIsOpen(false);
  }

  const handleOptionCityClick = (option) => {
    setSelectedCity(option);
    setIsOpenTwo(false);
  }

  const handleOptionStateClick = (option) => {
    setSelectedState(option);
    setIsOpenThree(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      Full_Name: formData.Full_Name,
      Email: formData.Email,
      addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        City: selectedCity.toString(),
        State: selectedState.toString(),
        ZipCode: formData.ZipCode,
        Description: formData.Description,
        Packages: selectedPackages.toString(),
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
  

    return(
        <div>
            <form className='containerForm' onSubmit={handleSubmit}>
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
                        <div name="Packages" className={`selectPackages ${isOpen ? 'openPack' : ''}`}>
                          <div className={`selectedOptionPackages ${isOpen ? 'openPack' : ''}`} onClick={toggleOpen}>
                            {selectedPackages ? selectedPackages : 'Packages'}
                          </div>
                          {isOpen && (
                            <ul className="optionsPackages">
                              <li onClick={() => handleOptionPackagesClick('Basic')}>Basic</li>
                              <li onClick={() => handleOptionPackagesClick('Premium')}>Premium</li>
                              <li onClick={() => handleOptionPackagesClick('Deluxe')}>Deluxe</li>
                            </ul>
                          )}
                        </div>
                        <input type="text" name="Description" placeholder="Description" className='inputForm description' onChange={handleChange} required/>
                    </div>
                    <div className='containerFormPartTwo'>
                        <input type="text" name="addressLine1" placeholder="Address line 1" className='inputForm' onChange={handleChange} required/>
                        <input type="text" name="addressLine2" placeholder="Address line 2" className='inputForm' onChange={handleChange} required/>
                        <div className='selectsContainer'> 
                            <div name="City" className={`selectPackages ${isOpenTwo ? 'open' : ''}`}>
                              <div className={`selectedOptionCity ${isOpenTwo ? 'open' : ''}`} onClick={toggleOpenTwo}>
                                {selectedCity ? selectedCity : 'City'}
                              </div>
                              {isOpenTwo && (
                                <ul className="optionsCity">
                                  {City.map((item) =>(
                                    <li onClick={() => handleOptionCityClick(item)}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            <div name="State" className={`selectPackages ${isOpenThree ? 'open' : ''}`}>
                              <div className={`selectedOptionCity ${isOpenThree ? 'open' : ''}`} onClick={toggleOpenThree}>
                                {selectedState ? selectedState : 'State'}
                              </div>
                              {isOpenThree && (
                                <ul className="optionsCity">
                                  {States.map((item) =>(
                                    <li onClick={() => handleOptionStateClick(item)}>{item}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
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