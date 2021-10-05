import React from 'react';
import HomeTabings from '../../MyComponents/HomeTabs';
import MainBannerImage from '../../assets/images/hills_mountains.jpeg';

// import citysiloutt from '../../assets/images/svg-img/citysiloutt.svg';

  

const Home = () => {
  return (
	  <main id="main">
    <section id="homepage" className="home-banner">
      <div className="main-home-banner" style={{backgroundImage: `url(${MainBannerImage})`}}> 
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
    </section>
	</main>
  );
};
  
export default Home;


