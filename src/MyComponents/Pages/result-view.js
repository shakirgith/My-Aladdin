import React from 'react';
import RangeDatePicker from '../../MyComponents/datepicker';
import Click from '../../MyComponents/adults';

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
                            <div class="list-item-block">
                                <div class="firstblock">
                                    <div class="profile-img">
                                        <img className="img-fluid" src={require("../../assets/images/destination1.jpeg").default} alt="Hotel Profile Image" /> 
                                    </div>
                                </div>

                                <div class="secondblock">
                                    <div class="cntnt-block">
                                        <div class=""></div>
                                        <h2>Hotel Royal Orchid Jaipur</h2>

                                        <div class="review-rating">
                                            <div class="five-stars-container">
                                                <span class="five-stars"></span>
                                            </div>
                                            <span class="review-nums">2 reviews</span>
                                        </div>
                                        <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                                    </div>
                                </div>
                                <div class="thirdblock">
                                    <div class="price-block">
                                            asdfasdfasdfasd
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
