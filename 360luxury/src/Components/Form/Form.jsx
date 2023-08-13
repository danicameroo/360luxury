import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import date from '../../Images/calender.png'
import './Form.css'

const Form = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const CustomDatePickerInput = ({ value, onClick }) => (
        <div className="custom-datepicker-input" onClick={onClick}>
          {value ? value : <div className='dateContainer'>
            <div className='containerImgCalender'><img src={date} alt="" className='imgCalender' /></div>
            <div className='linesDate'><p className='lines'>/ / /</p>
            </div>
            </div>}
        </div>
      );

    return(
        <div>
            <form action="/action.php" className='containerForm'>
                <div className='inputsOne'>
                    <input type="text" name="Full Name" placeholder="Full Name" className='inputForm' />
                    <input type="text" name="Email" placeholder="Email" className='inputForm' />
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
                        />
                        </div>
                        <select name="Packages" id="" className='selectsPack'>
                            <option value="" disabled selected hidden className='options'>
                                &nbsp;  Packages
                            </option>
                        </select>
                        <input type="text" name="Description" placeholder="Description" className='inputForm description'/>
                    </div>
                    <div className='containerFormPartTwo'>
                        <input type="text" name="addressLine1" placeholder="Address line 1" className='inputForm'/>
                        <input type="text" name="Addressline2" placeholder="Address line 2" className='inputForm' />
                        <div className='selectsContainer'> 
                            <select name="City" placeholder="City" id="" className='selects'>
                                <option value="" disabled selected hidden>
                                 &nbsp; City
                                </option>
                            </select>
                            <select name="State" placeholder="State" id="" className='selects'>
                                <option value="" disabled selected hidden>
                                    &nbsp; State
                                </option>
                            </select>
                            <input type="text" name="ZipCode" placeholder="Zip Code" className='selects'/>
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