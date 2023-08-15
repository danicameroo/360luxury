import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import date from '../../Images/calender.png'
import './Form.css'

const Form = () => {
    const [selectedDate, setSelectedDate] = useState(null);

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
            <form action="/action.php" className='containerForm'>
                <div className='inputsOne'>
                    <input type="text" name="Full Name" id='name' placeholder="Full Name" className='inputForm' required/>
                    <input type="email" name="Email" placeholder="Email" className='inputForm' required/>
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
                            required
                        />
                        </div>
                        <select name="Packages" id="" className='selectsPack' required>
                            <option value="" disabled selected hidden className='options'>
                                &nbsp;  Packages
                            </option>
                            <option value="">Basic</option>
                            <option value="">Premium</option>
                            <option value="">Deluxe</option>
                        </select>
                        <input type="text" name="Description" placeholder="Description" className='inputForm description' required/>
                    </div>
                    <div className='containerFormPartTwo'>
                        <input type="text" name="addressLine1" placeholder="Address line 1" className='inputForm' required/>
                        <input type="text" name="Addressline2" placeholder="Address line 2" className='inputForm' required/>
                        <div className='selectsContainer'> 
                            <select name="City" placeholder="City" id="" className='selects' required>
                                <option value="" disabled selected hidden>
                                 &nbsp; City
                                </option>
                                {City.map((item) =>(
                                    <option>{item}</option>
                                ))}
                            </select>
                            <select name="State" placeholder="State" id="" className='selects' required>
                                <option value="" disabled selected hidden>
                                    &nbsp; State
                                </option>
                                {States.map((item) =>(
                                    <option>{item}</option>
                                ))}
                            </select>
                            <input type='number' name="ZipCode" placeholder="Zip Code" className='selects' required/>
                        </div>
                    </div>
                </div>
                <div className='containerButtonBook'>
                    <button className='buttonBook'><p className='textButtonBook'>Book</p></button>
                </div>
            </form>
        </div>
    )
}

export default Form