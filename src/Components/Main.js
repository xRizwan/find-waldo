import React from 'react';
import main from '../images/main.jpg'
import firebase from '../config/config';
const db = firebase.firestore();

function MainImage(props){

    // states
    let [ seconds, changeSeconds ] = React.useState(0);
    let [ minutes, changeMinutes ] = React.useState(0);
    let [ minny, changeMinny ] = React.useState(false);
    let [ waldo, changeWaldo ] = React.useState(false);
    let [ carry, changeCarry ] = React.useState(false);
    let [ timer, changeTimer ] = React.useState(true);

    // references to elements since too many states
    let panelRef = React.useRef();
    let boxRef = React.useRef();
    let clickRef = React.useRef();
    let modalRef = React.useRef();
    let nameRef = React.useRef();
    let descRef = React.useRef();

    // callback function to check the winner
    let checkWinner = React.useCallback(() => {
            if(minny && waldo && carry){
                modalRef.current.style.display = "block";
                changeTimer(false);
                return true;
            }
            else {
                return false;
            }
        }, [modalRef, minny, waldo, carry]
    )

    React.useEffect(() => {
        const interval = setInterval(() => {
            changeSeconds(seconds => seconds + 1);
            let status = checkWinner();
            if (status){
                console.log('won')
            }
            if(seconds === 60){
                changeMinutes(minutes => minutes + 1);
                changeSeconds(0);
            }
        }, 1000)
        if (timer === false){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds, timer, checkWinner, ])


    // function to move the panel to the clicked spot
    let clickHandler = (e) => {

        // if player has won then quit
        if (checkWinner()){
            return;
        }

        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left; //x position within the element.
        let y = e.clientY - rect.top;  //y position within the element.

        // 1263 is the total width of the image
        // 811 is the total height of the image
        let realXValue = Math.round(x * 1263 / e.target.clientWidth);
        let realYValue = Math.round(y * 811 / e.target.clientWidth);

        //console.log(`X is ${realXValue} & Y is ${realYValue}`);

        // storing the coordinates in the reference
        clickRef.current = {
            x: realXValue,
            y: realYValue,
        }

        // for the user to select the character they found
        panelRef.current.style.left = `${e.pageX - 50}px`;
        panelRef.current.style.top = `${e.pageY - 50}px`;

        // if its visible then hide, else show
        if (panelRef.current.style.display === 'flex'){
            panelRef.current.style.display = 'none';
        } else {
            panelRef.current.style.display = 'flex';
        }

        //let imageWidth = window.getComputedStyle(e.target, null).width;
    }

    function check(e){
        let found = e.target.id;
        // get that value from the database
        db.collection('find').doc(found).get().then((snapshot) => {
            let mainTarget = snapshot.data();

            // x(horizontal) position for calculations
            let xStartSpot = clickRef.current.x - 25;
            let xFinishSpot = clickRef.current.x + 30;

            // y(vertical) position for calculations
            let yStartSpot = clickRef.current.y - 30;
            let yFinishSpot = clickRef.current.y + 50;

            // console.log(`horizontal start ${xStartSpot}, end ${xFinishSpot}`)
            // console.log(`vertical start ${yStartSpot}, end ${yFinishSpot}`)

            // checking if the target is within the user selected box
            let ySpotCheck = mainTarget.posY >= yStartSpot && mainTarget.posY <= yFinishSpot;
            let xSpotCheck = mainTarget.posX >= xStartSpot && mainTarget.posX <= xFinishSpot;

            if (ySpotCheck && xSpotCheck){
                //panelRef.current.classList.add('animate-green');
                //panelRef.current.style.display = 'none';
                panelRef.current.style.borderColor = 'green';
                setTimeout(() => {
                    panelRef.current.style.borderColor = '#00897b';
                    panelRef.current.style.display = 'none';
                }, 500)
                console.log(`found ${found}`)
                if(found === 'minny'){
                    // minny has been found
                    changeMinny(true);
                }
                else if(found === 'waldo'){
                    // waldo has been found
                    changeWaldo(true);
                }
                else{
                    // carry has been found
                    changeCarry(true)
                }
            } else {
                panelRef.current.style.borderColor = 'red';

                setTimeout(() => {
                    panelRef.current.style.borderColor = '#00897b';
                    panelRef.current.style.display = 'none';
                }, 500)
            }
        }).catch(err => {
            alert(err);
        })

        // console.log(e.target.id);
        // console.log(clickRef.current.x, clickRef.current.y);
    }

    const saveDB = (e) => {
        e.preventDefault();
        let totalSeconds = String(seconds).length === 2 ? String(seconds) : `0${seconds}`;
        let totalMinutes = String(minutes).length === 2 ? String(minutes) : `0${minutes}`;
        let totalTime = `${totalMinutes}:${totalSeconds}`

        let name = nameRef.current.value;
        let description = descRef.current.value;
    
        db.collection('winners').add({
            name: name,
            description: description,
            time : totalTime,
        }).then(cred => {
            modalRef.current.style.display = 'none';
            alert('Congratulations You Have Been Added To The LeaderBoard')
        }).catch(() => {
            alert("Sorry Something Went Wrong");
        })
    }

    return(
        <React.Fragment>
            <img alt="mainimage" src={main} className="main-img" onClick={clickHandler}/>
            <div ref={panelRef} className="find-panel">
                <div className="box" ref={boxRef}></div>
                {!minny ? <button className="btn" id="minny" onClick={check}>Minny</button> : null}
                {!waldo ? <button className="btn" id="waldo" onClick={check}>Waldo</button> : null}
                {!carry ? <button className="btn" id="carry" onClick={check}>Carry</button> : null}
            </div>
            <div ref={modalRef} className={`container modal `}>
                <div className="card-panel">
                    <div className="card-content center">Congratulations You Won!</div>
                    <form className="form-control">
                        <div className="input-field">
                            <span className="label">Enter Your Name</span>
                            <input ref={nameRef} type="text" required/>
                            <br />
                            <span className="label">Your Words</span>
                            <input ref={descRef} type="text" required/>
                            <button className="btn right light-blue darken-3" onClick={saveDB}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainImage;