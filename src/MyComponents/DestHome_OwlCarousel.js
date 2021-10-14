  //Owl Carousel Libraries and Module
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import desImage from '../assets/images/destination1.jpeg';
 

//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dot: true,
  autoplay: true,
  navText: ["<i className='icofont-simple-left'></i>", "<i className='icofont-simple-right'></i>"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      768: {
          items: 3,
      },
      1000: {
        items: 4,
    }
     
  }
};
class HomeDestOwlCarousel extends React.Component {
  render() {
   
    return (
<div>
<OwlCarousel className="slider-items owl-carousel" {...options}>
                    <div className="item">
                        <div className="item-single mb-30">
                            <div className="image">
                               <img className="img-fluid" alt="Destination" src={desImage} />

                            </div>
                            <div className="content">
                                <span className="location"><i class="bx bx-map"></i>Navi, Mumbai</span>
                                <h3><a href="/">Royal Palace Hotel</a></h3>
                                <div className="review">
                                <i class="icofont-nerd-smile"></i>
                                  <span>8.5</span>
                                  <span>Superb</span>
                                </div>
                            <p>
                            A wonderful little cottage right on the seashore - perfect for exploring.
                            </p>
                            <hr />
                            <ul className="list">
                            <li><i class="icofont-clock-time"></i>3 Days</li>
                            <li><i class="icofont-ui-user-group"></i>160+</li>
                            <li>$500</li>
                            </ul>
                         </div>
                      <div className="spacer"></div>
                 </div>
              </div> 

              <div className="item">
                        <div className="item-single mb-30">
                            <div className="image">
                               <img className="img-fluid" alt="Destination" src={desImage} />

                            </div>
                            <div className="content">
                                <span className="location"><i class="bx bx-map"></i>Navi, Mumbai</span>
                                <h3><a href="/">Royal Palace Hotel</a></h3>
                                <div className="review">
                                <i class="icofont-nerd-smile"></i>
                                  <span>8.5</span>
                                  <span>Superb</span>
                                </div>
                            <p>
                            A wonderful little cottage right on the seashore - perfect for exploring.
                            </p>
                            <hr />
                            <ul className="list">
                            <li><i class="icofont-clock-time"></i>3 Days</li>
                            <li><i class="icofont-ui-user-group"></i>160+</li>
                            <li>$500</li>
                            </ul>
                         </div>
                      <div className="spacer"></div>
                 </div>
              </div> 


              <div className="item">
                        <div className="item-single mb-30">
                            <div className="image">
                               <img className="img-fluid" alt="Destination" src={desImage} />

                            </div>
                            <div className="content">
                                <span className="location"><i class="bx bx-map"></i>Navi, Mumbai</span>
                                <h3><a href="/">Royal Palace Hotel</a></h3>
                                <div className="review">
                                <i class="icofont-nerd-smile"></i>
                                  <span>8.5</span>
                                  <span>Superb</span>
                                </div>
                            <p>
                            A wonderful little cottage right on the seashore - perfect for exploring.
                            </p>
                            <hr />
                            <ul className="list">
                            <li><i class="icofont-clock-time"></i>3 Days</li>
                            <li><i class="icofont-ui-user-group"></i>160+</li>
                            <li>$500</li>
                            </ul>
                         </div>
                      <div className="spacer"></div>
                 </div>
              </div> 

              <div className="item">
                        <div className="item-single mb-30">
                            <div className="image">
                               <img className="img-fluid" alt="Destination" src={desImage} />

                            </div>
                            <div className="content">
                                <span className="location"><i class="bx bx-map"></i>Navi, Mumbai</span>
                                <h3><a href="/">Royal Palace Hotel</a></h3>
                                <div className="review">
                                <i class="icofont-nerd-smile"></i>
                                  <span>8.5</span>
                                  <span>Superb</span>
                                </div>
                            <p>
                            A wonderful little cottage right on the seashore - perfect for exploring.
                            </p>
                            <hr />
                            <ul className="list">
                            <li><i class="icofont-clock-time"></i>3 Days</li>
                            <li><i class="icofont-ui-user-group"></i>160+</li>
                            <li>$500</li>
                            </ul>
                         </div>
                      <div className="spacer"></div>
                 </div>
              </div> 

              <div className="item">
                        <div className="item-single mb-30">
                            <div className="image">
                               <img className="img-fluid" alt="Destination" src={desImage} />

                            </div>
                            <div className="content">
                                <span className="location"><i class="bx bx-map"></i>Navi, Mumbai</span>
                                <h3><a href="/">Royal Palace Hotel</a></h3>
                                <div className="review">
                                <i class="icofont-nerd-smile"></i>
                                  <span>8.5</span>
                                  <span>Superb</span>
                                </div>
                            <p>
                            A wonderful little cottage right on the seashore - perfect for exploring.
                            </p>
                            <hr />
                            <ul className="list">
                            <li><i class="icofont-clock-time"></i>3 Days</li>
                            <li><i class="icofont-ui-user-group"></i>160+</li>
                            <li>$500</li>
                            </ul>
                         </div>
                      <div className="spacer"></div>
                 </div>
              </div> 

              <div className="item">
                        <div className="item-single mb-30">
                            <div className="image">
                               <img className="img-fluid" alt="Destination" src={desImage} />

                            </div>
                            <div className="content">
                                <span className="location"><i class="bx bx-map"></i>Navi, Mumbai</span>
                                <h3><a href="/">Royal Palace Hotel</a></h3>
                                <div className="review">
                                <i class="icofont-nerd-smile"></i>
                                  <span>8.5</span>
                                  <span>Superb</span>
                                </div>
                            <p>
                            A wonderful little cottage right on the seashore - perfect for exploring.
                            </p>
                            <hr />
                            <ul className="list">
                            <li><i class="icofont-clock-time"></i>3 Days</li>
                            <li><i class="icofont-ui-user-group"></i>160+</li>
                            <li>$500</li>
                            </ul>
                         </div>
                      <div className="spacer"></div>
                 </div>
              </div> 
                  </OwlCarousel>
</div>
)
};
}
export default HomeDestOwlCarousel;
