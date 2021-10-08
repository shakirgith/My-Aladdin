import React from 'react';
import HomeTabings from '../../MyComponents/HomeTabs';
// import HomeDestOwlCarousel from '../DestHome_OwlCarousel';
import MainBannerImage from '../../assets/images/hills_mountains.jpeg';
import desImage from '../../assets/images/destination1.jpeg';



const Home = () => {


  return (
	  <main id="main">
    <section id="homepage" className="home-banner">
      <div className="main-home-banner" style={{backgroundImage: `url(${MainBannerImage})`}}> 
        <div className="bg-gradient2">
        <div className="container">

          <div className="hero-section-wrap">
                <div className="hero-banner-content">
                  <span className="sub-title">Amazing Places</span>
                  <h1>Find a better way to travel</h1>
                  <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                </div> 
          </div>

			<HomeTabings />	
        </div> 
        </div> 
      </div>
    </section>


    <section id="feature" className="feature-section">
        <div className="container">

          <div className="section-title">
              <h2>Destinations</h2>
              <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
          </div>

          {/* <HomeDestOwlCarousel /> */}

            <div className="row">
                  <div className="col-12 col-xs-6 col-md-4">
                      <div className="item-single mb-30">
                            <div className="image">
                                {/* <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/images/destination1.jpeg'} alt="logo" /> */}
                               {/* <img className="img-fluid" alt="Destination" src={'../../assets/images/destination1.jpeg'} />  */}
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
                </div>{/* end col-12 col-xs-6 col-md-4 */}

                <div className="col-12 col-xs-6 col-md-4">
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
                </div>{/* end col-12 col-xs-6 col-md-4 */}

                <div className="col-12 col-xs-6 col-md-4">
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
                </div>{/* end col-12 col-xs-6 col-md-4 */}







            </div>{/* end row */}
          </div>
     </section>

   





	</main>
  );
};
  
export default Home;


