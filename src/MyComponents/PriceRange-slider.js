// import React, { Component } from 'react'
// import Slider from 'react-rangeslider'


// class Horizontal extends Component {
//   constructor (props, context) {
//     super(props, context)
//     this.state = {
//       value: 10
//     }
//   }

//   handleChangeStart = () => {
//     console.log('Change event started')
//   };

//   handleChange = value => {
//     this.setState({
//       value: value
//     })
//   };

//   handleChangeComplete = () => {
//     console.log('Change event completed')
//   };

//   render () {
//     const { value } = this.state
//     return (
//       <div className='slider'>
//         <Slider
//           min={500}
//           max={50000}
//           value={value}
//           onChangeStart={this.handleChangeStart}
//           onChange={this.handleChange}
//           onChangeComplete={this.handleChangeComplete}
//         />
//         <div className='value'>Rs. {value}</div>
//       </div>
//     )
//   }
// }

// export default Horizontal

import React, { Component } from 'react'

export default class PriceRangeSlider extends Component {

  componentDidMount ()
  {
    var pslider = document.getElementById("priceRange");
    var output = document.getElementById("valuedemo");
    output.innerHTML = pslider.value;

    pslider.oninput = function() {
    output.innerHTML = this.value;

    }
  }

  render() {
    return (
      <div>
         {/* <div class="slidecontainer">
                                                <input type="range" min="500" max="10000" value="1999" class="pslider" id="priceRange" />
                                                <p><i class="icofont-rupee"></i> <span id="valuedemo"></span></p>
                                                </div> */}

<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="priceRange" />
                                                <p><i class="icofont-rupee"></i> <span id="valuedemos"></span></p>
      </div>
    )
  }
}


