import React from "react";
// import { render } from "react-dom";

export default class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    if (this.state.clicks < 1) {
      this.setState({
        clicks: 0
      });
    } else {
      this.setState({
        clicks: this.state.clicks - 1
      });
    }
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange(event) {
    this.setState({ clicks: Number(event.target.value) });
  }

  render() {
    return (
                  <div className="guest-qty-section">
                                <div className="room-qty qty-field">
                                    <div className="label-wrap">
                                        <span className="title">Rooms</span>
                                        <span className="desc">Min 1 Room</span>
                                    </div>

                                    <div className="count-wrap">
                                        <i className="icofont-minus" onClick={this.DecreaseItem}></i>
                                        <input className="count-value" type="number"
                                          name="clicks" 
                                          value={Number(this.state.clicks).toString()}
                                          onChange={this.handleChange.bind(this)} maxLength="4" placeholder="1" />
                                        <i className="icofont-plus" onClick={this.IncrementItem}></i>
                                        
                                      </div>
                                </div>

                                <div className="adults-qty qty-field">
                                    <div className="label-wrap">
                                        <span className="title">Adults</span>
                                        <span className="desc">17 Onward</span>
                                    </div>

                                    <div className="count-wrap">

                                      <i className="icofont-minus" onClick={this.DecreaseItem}></i>
                                        <input className="count-value" type="number"
                                          name="clicks" 
                                          value={Number(this.state.clicks).toString()}
                                          onChange={this.handleChange.bind(this)} maxLength="4" placeholder="1" />
                                        <i className="icofont-plus" onClick={this.IncrementItem}></i>

                                        {/* <i className="icofont-minus"></i>
                                        <input type="text" name="adults" className="count-value" min="1" value="1" />
                                        <i className="icofont-plus"></i> */}
                                    </div>
                                </div>

                                <div className="children-qty qty-field children-age-field-container">
                                    <div className="label-wrap">
                                        <span className="title">Children</span>
                                        <span className="desc">Ages 2-17</span>
                                    </div>

                                    <div className="count-wrap">
                                        <i className="icofont-minus" onClick={this.DecreaseItem}></i>
                                        <input className="count-value" type="number"
                                          name="clicks" 
                                          value={Number(this.state.clicks).toString()}
                                          onChange={this.handleChange.bind(this)} maxLength="4" placeholder="1" />
                                        <i className="icofont-plus" onClick={this.IncrementItem}></i>

                                        {/* <i className="icofont-minus"></i>
                                        <input type="text" name="kids" className="count-value" min="0" value="0" />
                                        <i className="icofont-plus"></i>								 */}
                                    </div>
                                    <input type="hidden" name="child_ages[]" value="2" />
                                </div>
                              {/* ) : (
                                          " "
                                        )} */}
                             </div>



      // <div>
      //   <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
      //   <button onClick={this.IncrementItem}>Click to increase by 1</button>

      //   {/* <button onClick={this.ToggleClick}>
      //     {this.state.show ? "Hide number" : "Show number"}
      //   </button> */}
      //   {this.state.show ? (
      //     <input
      //       type="number"
      //       name="clicks"
      //       value={Number(this.state.clicks).toString()}
      //       onChange={this.handleChange.bind(this)}
      //     />
      //   ) : (
      //     " "
      //   )}
      // </div>
    );
  }
}

