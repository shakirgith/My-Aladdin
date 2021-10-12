import React from 'react';
import HomeTabings from '../../MyComponents/HomeTabs';
import HomeDestOwlCarousel from '../DestHome_OwlCarousel';
import MainBannerImage from '../../assets/images/xbg_1.jpg.pagespeed.ic.GQT90DL5zP.webp';




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
              <h2>Top Destinations</h2>
              <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
          </div>

          <HomeDestOwlCarousel />
          </div>
     </section>


     <section id="best-features" class="banner-padding black-features">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="b-feature-block">
                            <span><i class="icofont-dollar"></i></span>
                            <h3>Best Price Guarantee</h3>
                            <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                        </div>
                   </div>
                   
                   <div class="col-md-6 col-lg-3">
                        <div class="b-feature-block">
                            <span><i class="icofont-lock"></i></span>
                            <h3>Safe and Secure</h3>
                            <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                        </div>
                   </div>
                   
                   <div class="col-md-6 col-lg-3">
                        <div class="b-feature-block">
                            <span><i class="icofont-thumbs-up"></i></span>
                            <h3>Best Travel Agents</h3>
                            <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                        </div>
                   </div>
                   
                   <div class="col-md-6 col-lg-3">
                        <div class="b-feature-block">
                            <span><i class="icofont-navigation-menu"></i></span>
                            <h3>Travel Guidelines</h3>
                            <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
                        </div>
                   </div>

                </div>
            </div>
        </section>

	</main>
  );
};
  
export default Home;


