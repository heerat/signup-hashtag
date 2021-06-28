import { Header } from "../header/header"
import { Singup } from "../signup/signup"
import './home.css'

export const Home = () =>{

    return(
        <>
        <Header></Header>
        <div id="signup-tab" class="d-flex align-items-center">
                <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" href="#fan-singup">FAN SIGNUP</a>
                            <a class="nav-link" href="#talent-signup">TALENT SIGNUP</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="content" data-spy="scroll"  data-target="#signup-tab" data-offset="0">
                <div id="fan">
                    <Singup type="fan"></Singup>
                </div>
                <div  id="talent">
                    <Singup type="talent"></Singup>
                </div> 
            </div>
        </>
    )
}