import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import '../assets/css/mobiscroll.javascript.min.css';
// import '../assets/js/mobiscroll.javascript.min.js';
// import '../assets/js/main.js';

const RangeDatePicker = () => {
    // Range Date Picker
    // const [dateRange, setDateRange] = useState([null, null]);
    // const [startDate, endDate] = dateRange;


    // Single Date Picker
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date()); 

      
    


    return (


                    <>

                        {
                        // Range Date Picker
                        /* <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => {
                            setDateRange(update);
                            }}
                            isClearable={true}
                        /> */}

                        {// Single Date Picker
                        /* <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            isClearable
                            placeholderText="MM/DD/YYYY"
                        />  */}


                   


                    <div class="field-section date-in">
                        <i class="icofont-calendar"></i>
                       
                        <span class="date-value form-control"> 
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            isClearable
                            placeholderText="MM/DD/YYYY"
                        /> 

                        </span> 
                    </div>

                <div class="field-section date-out">
                    <i class="icofont-calendar"></i>
                    <span class="date-value form-control">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            isClearable
                            placeholderText="MM/DD/YYYY"
                        /> 
                        
                    </span>
                </div>  


                   




             </>




    )
}
export default RangeDatePicker;

