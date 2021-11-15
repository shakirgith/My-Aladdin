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
                                                ssss
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Star Rating
                                    </button>
                                    </h5>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                            <ul class="rating">
                                                <li><i class="icofont-star"></i></li>
                                                <li><i class="icofont-star"></i></li>
                                                <li><i class="icofont-star"></i></li>
                                                <li><i class="icofont-star"></i></li>
                                                <li class="gray"><i class="icofont-star"></i></li>
                                            </ul>
                                         </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Amenities
                                    </button>
                                    </h5>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
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

                    <div class="col-md-3">
                        <div className="section-title">
                            <h2>Top Destinations</h2>
                            <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>

                            

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
