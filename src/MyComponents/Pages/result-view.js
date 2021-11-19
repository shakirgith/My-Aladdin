import React, { Component } from 'react';
import RangeDatePicker from '../../MyComponents/datepicker';
import Click from '../../MyComponents/adults';
// import PriceRangeSlider from '../../MyComponents/PriceRange-slider';


const ResultListView = () => {





    function guestdropbtn() {
        var x = document.getElementById("guestdrop");
        if (x.style.display === "none") {
        x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }


        window.onload = () => { 
            // const = () => {
            var pslider = document.getElementById("priceRange");
            var output = document.getElementById("valuedemo");
            output.innerHTML = pslider.value;
    
            pslider.oninput = function() {
            output.innerHTML = this.value;
            } 
        }


        
   



return (
    <main id="main" class="interearbg">
        


        <section id="listview" className="result-page">
            <div className="container">

                <div class="modified-search">
                    <div class="headtop">
                    <span class="result-txt"><strong>Your Search:</strong> Mumbai, 1 Room, 2 Person, 1 Child </span>
                    <a class="search-again-btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Modify Search </a>
                    </div>
 
                        <div class="search-form collapse" id="collapseExample">
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

                                    <RangeDatePicker/>

                                </div>
                            </div>

                            <div class="guest-wrap">
                                <label class="form-label">Guests</label>

                                <div class="field-section">
                                <i class="icofont-user-alt-7"></i>
                                    <span onClick={guestdropbtn} class="guest-value form-control">Who's going?</span>
                                </div>

                                <div id="guestdrop" class="guest-dropdown-info" style={{display:`none`}}>
                                <Click />
                                    
                                    <p class="guest-description">3 guests maximum. Infants don’t count toward the number of guests.</p>
                                </div> 
                            </div>

                            <div class="form-submit">
                                <button type="submit" class="btn submit-btn">Search</button>
                            </div>


                            </form> 

                        </div>
                </div>




                <div class="row">
                        <div className="sorting">
                            <h1><span>Mumbai</span> <i class="icofont-long-arrow-right"></i> 140 Hotel Found</h1>
                            <div className="sort-select">
                                <label for="sort">Sort by:</label>
                                <select name="sort" id="sort">
                                    <option value="low">Sort By</option>
                                    <option value="low">Low To High</option>
                                    <option value="high">High To Low</option>
                                </select>
                            </div>
                        </div>

                    <div class="col-md-3">
                        <div class="filter-section">
                            <h2 class="">Filter</h2>


                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Price Range
                                    </button>
                                    </h5>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li>
                                                  <div class="slidecontainer">
                                                <input type="range" min="500" max="10000" value="1999" class="pslider" id="priceRange" />
                                                <p><i class="icofont-rupee"></i> <span id="valuedemo"></span></p>
                                                </div>
                                                {/* <PriceRangeSlider/>    */}


                                                {/* <label for="customRange1" class="form-label">Example range</label> 
                                                <input type="range" class="form-range" min="500" max="10000" value="1999" id="priceRanges"></input>
                                                <p><i class="icofont-rupee"></i> <span id="valuedemoss"></span></p> */}
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        Star Rating
                                    </button>
                                    </h5>
                                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                            <ul class="star-rating">
                                                <li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                        <i class="icofont-star"></i> 
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        </label>
                                                    </div>     
                                                    
                                                
                                                </li>
                                                <li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                        <i class="icofont-star"></i> 
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                        <i class="icofont-star"></i> 
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li class="gray">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                        <i class="icofont-star"></i> 
                                                        <i class="icofont-star"></i>
                                                        </label>
                                                    </div>
                                                </li>
                                                <li class="gray">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                        <i class="icofont-star"></i> 
                                                        </label>
                                                    </div>
                                                
                                                </li>
                                            </ul>
                                         </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        Amenities
                                    </button>
                                    </h5>
                                    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                            <ul>
                                                <li> 
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                            Parking
                                                        </label>
                                                    </div>      
                                                </li>
                                                <li> <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                            Room Service
                                                        </label>
                                                    </div>          
                                                </li>
                                                <li> <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" />
                                                        <label class="form-check-label" for="">
                                                            Swimingpol
                                                        </label>
                                                    </div>        
                                                </li>
                                            </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                          </div>
                    </div>
                    {/* end left panel */}

                    <div class="col-md-9">
                        <div className="right-result-wrap">

                            <div className="list-item-block">
                                <div className="firstblock">
                                    <div className="profile-img">
                                        <img className="img-fluid" src={require("../../assets/images/destination1.jpeg")} alt="Hotel Profile Image" /> 
                                    </div>
                                </div>
                                <div className="secondblock">
                                    <div className="cntnt-block">
                                        <h4>ITC Rajputana, A Luxury Collection Hotel</h4>
                                            <p><i class="icofont-location-pin"></i> Bani Park, Jaipur</p>
                                            <ul className="include-list">
                                                <li><i class="icofont-tea"></i> Free Breakfast</li>
                                                <li><i className="icofont-wifi"></i> Free WiFi</li>
                                                <li><i class="icofont-swimmer"></i> Swimming pool</li>
                                            </ul>
                                            <div className="review-rating">
                                                <i class="icofont-star"></i> 
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star gray"></i>
                                                <span className="review-nums">
                                                <a href="#">
                                                    <span className="ratingbeige"><strong>7.9/10</strong> (Good)</span>
                                                    839 Reviews
                                                    </a>
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                <div className="thirdblock">
                                    <div className="price-block">
                                        <div className="price"><i className="icofont-rupee"></i>6489</div>
                                        <span className="taxes">+ <i className="icofont-rupee"></i> 1,608 taxes & fees <br />Per Night</span>
                                        <p>Free cancellation eligable </p>
                                        <div className="viewrooms">
                                            <a href="#" className="view-btn">Choose Rooms</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* end list-item-block */}

                            <div className="list-item-block">
                                <div className="firstblock">
                                    <div className="profile-img">
                                        <img className="img-fluid" src={require("../../assets/images/destination1.jpeg")} alt="Hotel Profile Image" /> 
                                    </div>
                                </div>
                                <div className="secondblock">
                                    <div className="cntnt-block">
                                        <h4>ITC Rajputana, A Luxury Collection Hotel</h4>
                                            <p><i class="icofont-location-pin"></i> Bani Park, Jaipur</p>
                                            <ul className="include-list">
                                                <li><i class="icofont-tea"></i> Free Breakfast</li>
                                                <li><i className="icofont-wifi"></i> Free WiFi</li>
                                                <li><i class="icofont-swimmer"></i> Swimming pool</li>
                                            </ul>
                                            <div className="review-rating">
                                                <i class="icofont-star"></i> 
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star gray"></i>
                                                <span className="review-nums">
                                                <a href="#">
                                                    <span className="ratingbeige"><strong>7.9/10</strong> (Good)</span>
                                                    839 Reviews
                                                    </a>
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                <div className="thirdblock">
                                    <div className="price-block">
                                        <div className="price"><i className="icofont-rupee"></i>6489</div>
                                        <span className="taxes">+ <i className="icofont-rupee"></i> 1,608 taxes & fees <br />Per Night</span>
                                        <p>Free cancellation eligable </p>
                                        <div className="viewrooms">
                                            <a href="#" className="view-btn">Choose Rooms</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* end list-item-block */}

                            <div className="list-item-block">
                                <div className="firstblock">
                                    <div className="profile-img">
                                        <img className="img-fluid" src={require("../../assets/images/destination1.jpeg")} alt="Hotel Profile Image" /> 
                                    </div>
                                </div>
                                <div className="secondblock">
                                    <div className="cntnt-block">
                                        <h4>ITC Rajputana, A Luxury Collection Hotel</h4>
                                            <p><i class="icofont-location-pin"></i> Bani Park, Jaipur</p>
                                            <ul className="include-list">
                                                <li><i class="icofont-tea"></i> Free Breakfast</li>
                                                <li><i className="icofont-wifi"></i> Free WiFi</li>
                                                <li><i class="icofont-swimmer"></i> Swimming pool</li>
                                            </ul>
                                            <div className="review-rating">
                                                <i class="icofont-star"></i> 
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star gray"></i>
                                                <span className="review-nums">
                                                <a href="#">
                                                    <span className="ratingbeige"><strong>7.9/10</strong> (Good)</span>
                                                    839 Reviews
                                                    </a>
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                <div className="thirdblock">
                                    <div className="price-block">
                                        <div className="price"><i className="icofont-rupee"></i>6489</div>
                                        <span className="taxes">+ <i className="icofont-rupee"></i> 1,608 taxes & fees <br />Per Night</span>
                                        <p>Free cancellation eligable </p>
                                        <div className="viewrooms">
                                            <a href="#" className="view-btn">Choose Rooms</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* end list-item-block */}

                            <div className="list-item-block">
                                <div className="firstblock">
                                    <div className="profile-img">
                                        <img className="img-fluid" src={require("../../assets/images/destination1.jpeg")} alt="Hotel Profile Image" /> 
                                    </div>
                                </div>
                                <div className="secondblock">
                                    <div className="cntnt-block">
                                        <h4>ITC Rajputana, A Luxury Collection Hotel</h4>
                                            <p><i class="icofont-location-pin"></i> Bani Park, Jaipur</p>
                                            <ul className="include-list">
                                                <li><i class="icofont-tea"></i> Free Breakfast</li>
                                                <li><i className="icofont-wifi"></i> Free WiFi</li>
                                                <li><i class="icofont-swimmer"></i> Swimming pool</li>
                                            </ul>
                                            <div className="review-rating">
                                                <i class="icofont-star"></i> 
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star gray"></i>
                                                <span className="review-nums">
                                                <a href="#">
                                                    <span className="ratingbeige"><strong>7.9/10</strong> (Good)</span>
                                                    839 Reviews
                                                    </a>
                                                </span>
                                            </div>
                                    </div>
                                </div>
                                <div className="thirdblock">
                                    <div className="price-block">
                                        <div className="price"><i className="icofont-rupee"></i>6489</div>
                                        <span className="taxes">+ <i className="icofont-rupee"></i> 1,608 taxes & fees <br />Per Night</span>
                                        <p>Free cancellation eligable </p>
                                        <div className="viewrooms">
                                            <a href="#" className="view-btn">Choose Rooms</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* end list-item-block */}

                          

                        </div> 
                        
                    </div>
                    {/* end right panel */}

                </div>

            </div>






        </section>
     </main>

  );
};
  
export default ResultListView;
