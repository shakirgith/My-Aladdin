import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';  



function HomeDestOwlCarousel () {
  return (
    <div>
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} autoplay ={true}>  
           <div ><img className="img-fluid" src= {'../assets/images/destination1.jpeg'} alt=""/></div> 
           <div ><img  className="img-fluid" src= {'../assets/images/destination1.jpeg'} alt=""/></div>
           <div ><img  className="img-fluid" src= {'../assets/images/destination1.jpeg'} alt=""/></div>
           <div ><img  className="img-fluid" src= {'../assets/images/destination1.jpeg'} alt=""/></div>
           <div ><img  className="img-fluid" src= {'../assets/images/destination1.jpeg'} alt=""/></div> 
           <div ><img  className="img-fluid" src= {'../assets/images/destination1.jpeg'} alt=""/></div>
          
      </OwlCarousel>  
    </div>
  )
}


export default HomeDestOwlCarousel


// export class HomeDestOwlCarousel extends Component {  

//         render()  
//         {  
//           return (  

//        <div class='container-fluid' > 
       
        
//       </div>  

//           )  
//         }  
//       }  
        
  
// export default HomeDestOwlCarousel