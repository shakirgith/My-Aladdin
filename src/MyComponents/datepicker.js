import React from 'react';
import '../assets/css/mobiscroll.javascript.min.css';
import '../assets/js/mobiscroll.javascript.min.js';
// import '../assets/js/main.js';

const RangeDatePicker = () => {



    return (

             <div mbsc-page class="demo-date-range">
                        <div id="demo-start-end"></div>
                        <div class="mbsc-grid mbsc-no-padding">
                        <div class="mbsc-row">
                            <div class="mbsc-col-6">
                                <label>
                                    Start
                                    <input id="demo-start" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="MM/DD/YYYY" />
                                </label>
                            </div>
                            <div class="mbsc-col-6">
                                <label>
                                    End
                                    <input id="demo-end" mbsc-input data-input-style="outline" data-label-style="stacked" placeholder="MM/DD/YYYY" />
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
      
    )
}
export default RangeDatePicker;
