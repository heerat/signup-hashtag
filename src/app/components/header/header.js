import './header.css'
export const Header = () => {

    const gotToSignup = (event) => {
        console.log(event)
    }
    const gotToLogin = (event) => {
        console.log(event)
    }

    return( 
        <>
        <div className="header">
            <div className="left">
            <figure class="footer__logo">
                    <img src="../../images/Fanconvo-header-logo.png" alt="logo" class="img-fluid" />
            </figure>
                <span>A market place for conversation, mentorships and performances.</span>
                <div className="search-wrapper">
                    <span>Search New Talent</span>
                   <div class="search-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="206" height="16" fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16">
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                 </div>
                    
                   
                </div>
            </div>
            <div className="right">
                <span className="signup" onClick={gotToSignup}>Sign Up</span>
                <span className="login" onClick={gotToLogin}>login</span>
            </div>
        </div>
        </>
    )
}