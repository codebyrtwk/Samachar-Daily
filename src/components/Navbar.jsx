import React, { Component }  from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      enableMode: "Enable Dark Mode ",
      text : "text-dark"
    };
}

  

  //set navbar dark on click of checkbox
  setDark = () => {
    if (this.state.mode === "light"){
      this.setState({
        mode: "dark",
        enableMode : "Disable Dark Mode",
        text : "text-light"
        
      });
      document.querySelector('body').style.background = '#6B6B6B';
      // document.getElementsByClassName("news-item").style.backgroundColor = '#6B6B6B';
      
    }else{
      this.setState({
        mode: "light" , 
        enableMode : "Enable Dark Mode",
        text : "text-dark"
        
      });
      document.querySelector('body').style.background = ' \linear-gradient(to right, #EAECC6, #2BC0E4)';
    }
   
  };
  
     


    render() {
     
        return (
            
            
            <nav className= {`container fixed navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode} my-3`}>
            <div className="container">
              <b><Link className="navbar-brand " id = "brand" to="/">SAMACHAR DAILY</Link></b>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0" >
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">Health</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">Sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">Technology</Link>
                  </li>
                           
                </ul>
               
              </div>
              <div class="form-check form-switch">
              <input class="form-check-input" onClick= {this.setDark}type="checkbox"  />
  <label class={`form-check-label ${this.state.text}`}  htmlFor="flexSwitchCheckChecked">{this.state.enableMode}</label>
</div>
             
          </div>
          </nav>
        );
                  
             
                  
         
        
    };
}
