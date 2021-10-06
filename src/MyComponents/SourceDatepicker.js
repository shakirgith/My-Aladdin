import React from 'react';
import '../../node_modules/@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Input, Page, setOptions } from '../../node_modules/@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});


const SourceDatepicker = props => {



    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);

    return (
        <Page>
            <Datepicker
                controls={['calendar']}
                select="range"
                calendarType="month"
                pages={2}
                display="inline"
            />
            
            <Datepicker
                controls={['date']}
                select="range"
                display="inline"
            />
            
            <Datepicker
                controls={['calendar']}
                select="preset-range"
                display="inline"
                pages={2}
                firstSelectDay={2}
                selectSize={10}
            />
            
            <Datepicker
                controls={['calendar']}
                select="range"
                inputProps={{
                    label: 'Range',
                    labelStyle: 'stacked',
                    inputStyle: 'outline',
                    placeholder: 'Please Select...'
                }}
            />
            
            <Datepicker
                controls={['calendar']}
                select="range"
                startInput={start}
                endInput={end}
            />
            <div className="mbsc-grid mbsc-no-padding">
                <div className="mbsc-row">
                    <div className="mbsc-col-6">
                        <Input
                            ref={startRef}
                            label="Start"
                            labelStyle="stacked"
                            inputStyle="outline"
                            placeholder="Please Select...">
                        </Input>
                    </div>
                    <div className="mbsc-col-6">
                        <Input
                            ref={endRef}
                            label="End"
                            labelStyle="stacked"
                            inputStyle="outline"
                            placeholder="Please Select...">
                        </Input>
                    </div>
                </div>
            </div>
        </Page>
    ); 
}


export default SourceDatepicker;