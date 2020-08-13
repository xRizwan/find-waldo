import React from 'react';
import { Link } from 'react-router-dom';
import find1 from '../images/ss3.png';
import find2 from '../images/ss2.png';
import find3 from '../images/ss4.png';

function Header(props){
    let modalRef = React.useRef();

    let makeVisible = (e) => {
        if(modalRef.current.style.display === 'block'){
            modalRef.current.style.display = 'none';
            e.target.style.color = "white";
        } else {
            modalRef.current.style.display = 'block';
            e.target.style.color = "dodgerblue";
        }
    }

    return(
        <React.Fragment>
            <nav className="pink lighten-2">
                <div className="navwrapper">
                    <Link to="/">
                        <a href="/" className="brand-logo center teal-text text-darken-4">Where's Waldo!?</a>
                    </Link>
                </div>
                <div className="right">
                    <button
                        className="btn waves-effect light-blue darken-3"
                        onClick={makeVisible}>
                            Instructions
                    </button>
                    <button
                        className="btn waves-effect pulse light-blue darken-3 btn2">
                            <Link to="/leaderboards">Leaderboard</Link>
                    </button>
                </div>
                <div className="left people">
                    <span className="person">
                        <span>Minny</span>
                        <span><img alt="find1" className="responsive-image find" src={find1} /></span>
                    </span>
                    <span className="person">
                        <span>Waldo</span>
                        <span><img alt="find2" className="responsive-image find" src={find2} /></span>
                    </span>
                    <span className="person">
                        <span>Carry</span>
                        <span><img alt="find3" className="responsive-image find" src={find3} /></span>
                    </span>
                </div>
            </nav>
            <div ref={modalRef} className="container modal indigo white-text">
                <h3 className='center'>Intructions</h3>
                <div className="center">Your Task Is To Find:</div>
                <div className="center">
                    <span>Minny</span>
                    <img src={find1} alt="minny" className="inst-pic" />
                </div>
                <div className="center">
                    <span>Waldo</span>
                    <img src={find2} alt="waldo" className="inst-pic"/>
                </div>
                <div className="center">
                    <span>Carry</span>
                    <img src={find3} alt="carry" className="inst-pic"/>
                </div>
                <div className="center">GOODLUCK!</div>
            </div>
        </React.Fragment>
    )
}

export default Header;