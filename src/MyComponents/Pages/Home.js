import React from 'react';
import HomeTabings from '../../MyComponents/HomeTabs';
import HomeDestOwlCarousel from '../DestHome_OwlCarousel';
import MainBannerImage from '../../assets/images/hills_mountains.jpeg';




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

          <HomeDestOwlCarousel />
          </div>
     </section>

	</main>
  );
};
  
export default Home;


