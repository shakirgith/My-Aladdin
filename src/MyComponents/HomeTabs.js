import React, { useState } from 'react';
import Toggle from 'react-toggle';
// import HomeSearchEngine from '../../MyComponents/HomeSearchEngine';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { resetIdCounter } from 'react-tabs';


const HomeTabings = () => {
    const [tabIndex, setTabIndex] = useState(1);

    // function myFunction() {
    //     var element = document.getElementById("mystyle");
    //     element.classList.toggle("mystyle1");
    //   }

    // function myFunction() {
    //     var x = document.getElementById("mystyle");
    //     if (x.style.display === "block") {
    //       x.style.display = "none";
    //     } else {
    //       x.style.display = "block";
    //     }
    //   }

    // document.getElementById("RootNode").onclick = function(){
    //     var element = document.getElementById("myDIV");
    //     element.classList.toggle("mystyle");

    // }


      
    return (
      
            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList>
                    <Tab value={0} label="flights">Flights</Tab>
                    <Tab value={1} label="hotels">Hotels</Tab>
                    <Tab value={2} label="flight+hotel">Flight + Hotel</Tab>
                </TabList>
                
                <div className="main-form-wrap">        
				    <div className="search-engine-home">

                    <TabPanel>
                        <h2>Flight</h2>
                    </TabPanel>

                    <TabPanel>
                    <form id="hotel-form" method="get" className="search-hotel-form">

                    <div class="direction-wrap">
                        <label class="form-label">Where</label>

                        <div class="field-section">
                        <i class="icofont-google-map"></i>
                            <input type="text" class="form-control" name="city" placeholder="Direction" />
                        </div>
                    </div>

                    <div class="check-in-out-wrap">
                        <div class="label-section">
                            <label class="form-label">Check In</label>
                            <label class="form-label">Check Out</label>	
                        </div>

                        <div class="field-sections">
                            <div class="field-section date-in">
                                <i class="icofont-calendar"></i>
                                <span class="date-value form-control">MM/DD/YYYY</span>
                            </div>

                            <div class="field-section date-out">
                                <i class="icofont-calendar"></i>
                                <span class="date-value form-control">MM/DD/YYYY</span>
                            </div>
                        </div>
                    </div>

                    <div class="guest-wrap">
                        <label class="form-label">Guests</label>

                        <div class="field-section">
                        <i class="icofont-user-alt-7"></i>
                            <span onClick="myFunction();" class="guest-value form-control">Who's going?</span>
                        </div>

                         <div id="mystyle" class="guest-dropdown-info">
                            <div class="guest-qty-section">
                                <div class="room-qty qty-field">
                                    <div class="label-wrap">
                                        <span class="title">Rooms</span>
                                        <span class="desc">Min 1 Room</span>
                                    </div>

                                    <div class="count-wrap">
                                        <i class="fas fa-minus"></i>
                                        <input type="text" name="rooms" class="count-value" min="1" value="1" />
                                        <i class="fas fa-plus"></i>
                                    </div>
                                </div>

                                <div class="adults-qty qty-field">
                                    <div class="label-wrap">
                                        <span class="title">Adults</span>
                                        <span class="desc">17 Onward</span>
                                    </div>

                                    <div class="count-wrap">
                                        <i class="fas fa-minus"></i>
                                        <input type="text" name="adults" class="count-value" min="1" value="1" />
                                        <i class="fas fa-plus"></i>
                                    </div>
                                </div>

                                <div class="children-qty qty-field children-age-field-container">
                                    <div class="label-wrap">
                                        <span class="title">Children</span>
                                        <span class="desc">Ages 2-17</span>
                                    </div>

                                    <div class="count-wrap">
                                        <i class="fas fa-minus"></i>
                                        <input type="text" name="kids" class="count-value" min="0" value="0" />
                                        <i class="fas fa-plus"></i>									
                                    </div>
                                    <input type="hidden" name="child_ages[]" value="2" />
                                </div>

                            </div>
                            <p class="guest-description">3 guests maximum. Infants don’t count toward the number of guests.</p>
                        </div> 
                    </div>
                    
                    <div class="form-submit">
                        <button type="submit" class="btn submit-btn">Search</button>
                    </div>
            
                                
                            </form> 
                    </TabPanel>
                    </div>
              </div>	
            </Tabs>

         
       
    )
}

export default HomeTabings;
