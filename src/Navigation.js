import React , { useContext} from 'react';
import{Link} from 'react-router-dom';
import AppContext from './AppContext';

const Navigation = (prop)=>{  //equals function Navigation (){  .... return(...)   }

const [globalState, setGlobalState]= useContext(
  AppContext
)
const logOut = ()=>{
  setGlobalState(
    {
      ...globalState,
      loggedIn: false
    }
  )
}
const loggedIn = ()=>{
  setGlobalState({  
    ...globalState,
  loggedIn: true
}
  )


}
return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"> </a>
  <button className="navbar-toggler" type="button" navbardata-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">

        <Link className="nav-link" to="/">{prop.home} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="http://localhost:3000/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {prop.menuName}
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item"  to="/contact">{prop.menuItemOne}</Link>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="http://localhost:3000/#">{prop.menuItemTwo} </a>
         
          <a className="dropdown-item" href="http://localhost:3000/#">{prop.menuItemThree}
        </a>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="http://localhost:3000/#">{prop.link}</Link>
      </li>
      
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {prop.LogIn}
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <input className="form-control mr-sm-2" type="User Name" placeholder="User Name" aria-label="User Name"/>
          <div className="dropdown-divider"></div>
          <input className="form-control mr-sm-2" type="Password" placeholder="Password" aria-label="Password"/>
          <div className="dropdown-divider"></div>
          <button className="btn btn-outline-success my-5 my-sm-0" type="submit">Log In</button>
        </div>
      </li>


      <li className="nav-item">
        <Link className="nav-link disabled" to="http://localhost:3000/#" tabindex="-1" aria-disabled="true">{prop.logOut} </Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      
      
    </form>
    
  </div>
  {
    globalState.loggedIn === false &&
    <button onClick={loggedIn} className="btn btn-primary"> Log In</button>
  }
  {
    globalState.loggedIn === true &&
    <button onClick={logOut} className=" btn btn-primary"> Log Out</button>
  }
</nav>
)}



export default Navigation;