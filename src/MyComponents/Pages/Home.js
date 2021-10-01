import React from 'react';
// import HomeBanner from './MyComponents/HomeBanner';
import MainBannerImage from '../../assets/images/hills_mountains.jpeg';
  

const Home = () => {
  return (
    <section id="homepage" className="home-banner">
      <div className="main-home-banner" style={{backgroundImage: `url(${MainBannerImage})`}}> 
        <div className="container">

          <div className="hero-section-content">
                <div className="hero-banner-content">
                  <span className="sub-title">Amazing Places</span>
                  <h1>Find a better way to travel</h1>
                  <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                </div> 
          </div>

        <div className="main-form-wrap">
              <div className="bottomimg">
                adsfasdfa
              </div>
        </div>
          
        {/* <div class="hero-section-content">
							<div class="container form-wrapper">
								<div class="title-txt">
<div class="title-wrap"><span class="primary-bg">Nature Awaits</span></div>
<div class="title-wrap"><span class="secondary-bg">Explore the World With Us!</span></div>
</div>
<div class="main-form-wrap">		
		<div id="trav-search-form-79566156df769524b" c  lass="search-box ">
			<form role="search" method="get" action="https://travelo.c-themes.com/" class="acc-searchform hero-search-form">
				<input type="hidden" name="post_type" value="accommodation">

				<div class="direction-wrap">
					<label class="form-label">Where</label>

					<div class="field-section">
						<i class="fas fa-map-marker-alt"></i>
						<input type="text" class="form-control" name="s" placeholder="Direction">
					</div>
				</div>

				<div class="check-in-out-wrap">
					<div class="label-section">
						<label class="form-label">Check In</label>
						<label class="form-label">Check Out</label>	
					</div>

					<div class="field-sections">
						<div class="field-section date-in">
							<i class="far fa-calendar-alt"></i>
							<span class="date-value form-control">MM/DD/YYYY</span>
						</div>

						<div class="field-section date-out">
							<i class="far fa-calendar-alt"></i>
							<span class="date-value form-control">MM/DD/YYYY</span>
						</div>

						<input type="text" name="datetimes" class="hidden-field" format="MM/DD/YYYY">
						<input type="hidden" name="date_from">
						<input type="hidden" name="date_to">
					</div>
				</div>

				<div class="guest-wrap">
					<label class="form-label">Guests</label>

					<div class="field-section">
						<i class="fas fa-user"></i>
						<span class="guest-value form-control">Who's going?</span>
					</div>

					<div class="guest-dropdown-info">
						<div class="guest-qty-section">
							<div class="room-qty qty-field">
								<div class="label-wrap">
									<span class="title">Rooms</span>
									<span class="desc">Min 1 Room</span>
								</div>

								<div class="count-wrap">
									<i class="fas fa-minus"></i>
									<input type="text" name="rooms" class="count-value" min="1" value="1">
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
									<input type="text" name="adults" class="count-value" min="1" value="1">
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
									<input type="text" name="kids" class="count-value" min="0" value="0">
									<i class="fas fa-plus"></i>									
								</div>
								<input type="hidden" name="child_ages[]" value="2">
							</div>

						</div>
						<p class="guest-description">3 guests maximum. Infants don’t count toward the number of guests.</p>
					</div>
				</div>
				
				<div class="form-submit">
					<button type="submit" class="submit-btn">Search</button>
				</div>
			</form>
		</div>
	
	</div>
<p class="description-txt">Book from over 72,369 Hotels and 236,698 Tours available.</p>
							</div>
						</div> */}





        </div> 
      </div>
    </section>

  );
};
  
export default Home;


