import React from 'react';
// import './App.css';
import Card from './Card.js';
import CardLayout from './CardLayout.js';
import Navigation from './Navigation'
import Banner from './Banner.js';
import About from './About.js';
// import Services from './Services.js';
import Download from './Download.js';
function App() {
  return (



    <div className="App">
      
      <Navigation
     home="Home"
     link ="Your Profile"
     menuName=" Menu"
     menuItemOne="About"
     menuItemTwo="Privacy Settings"
     menuItemThree="Report"
     LogIn = "Log In"
     logOut="Log Out"
     UserName="User Name"
     Password="Password"
     />

      <Banner
      bannerImgOne ="https://images.unsplash.com/photo-1522041350204-22285237eeca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      bannerImgTwo="https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      bannerImgThree="https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      hOne="Gas Cylinders"
      pOne=" We connect service providers with consumers"
      hTwo="Carpenters & Handy men"
      pTwo="We connect service providers with consumers"
      hThree="Plumbers"
      pThree="We connect service providers with consumers"
      />  
      
      <br/>

      <CardLayout>
      <Card
       title ="Carpenters"
       image="https://images.unsplash.com/photo-1560846389-e4e6d764cd61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
       description=" Need a Carpenter?!"
       button=" Hire me now "
       /> 
       <Card
       title ="Plumbers"
       image ="https://images.unsplash.com/photo-1454988501794-2992f706932e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80"
       description=" Need a Plumber?!"
       button=" Hire me now  "
       /> 
       <Card
       title ="Gas Delivery "
       image="https://images.unsplash.com/photo-1547093349-4e4cb714769c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
       description="Need gas cylinders?!"
       button=" Order Now  "
       /> 
       {/* <Card
       title ="Bikes "
       image="https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
       description="Ride Along"
       button=" Hobby! "
       /> 
       <Card
       title ="Work Place "
       image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
       description="This is the place"
       button=" Join us! "
       /> 
       <Card
       title ="Photography "
       image="https://images.unsplash.com/photo-1567939210268-e299695d8b6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
       description="Nature Nature Nature"
       button=" Show your talent "
       />  */}
      </CardLayout>
<br/>
<Download
header="We are also on Google Play and App Store"
button="Download Now!"
/>

<br/>
      <About
      btn="Get Started"
      />
       
   
    </div>
  );
}

export default App;
