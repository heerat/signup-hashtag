import { Header } from "../header/header"
import { Singup } from "../signup/signup"
import './home.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { useState } from "react"

export const Home = () =>{
    const [type, getType] = useState('fan')
    const setFanType = () => {
        getType('fan')
    }
    const setTalentType = () => {
        getType('talent')
    }

    return(
        
        <div class="home">
        <Header></Header>
        <div className="container" data-spy="scroll"  data-target="#signup-tab" data-offset="0">
            
         <div class="toggle">
        <button class="fan-button" onClick={setFanType} id="defaultOpen">FAN SIGNUP</button>
        <button class="talent-button" onClick={setTalentType}>TALENT SIGNUP</button>
    </div>
  {type === 'fan' ?
                <div id="fan" class="tabcontent">
                    <Singup type="fan"></Singup>
                </div> 
                :
                <div  id="talent" class="tabcontent">
                    <Singup type="talent"></Singup>
                </div> 
  }
          <div class="footer">

          </div>
            </div>
        </div>
    )
}