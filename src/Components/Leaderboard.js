import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../config/config';

export default function Leaderboard(){
    let [scores, changeScores] = useState([]);
    let [loader, changeLoader] = useState(true);

    useEffect(() => {
        let db = firebase.firestore();
        // db.collection('winners').onSnapshot(snapshot => {
        //     let changes = snapshot.docChanges();
        //     changeScores(changes);
        //     changeLoader(false);
        // })
        let arr = [];

        db.collection('winners').get().then(snapshot => {
            snapshot.docs.forEach(snap => {
                arr.push(snap)
            })
        }).then(() => {
            changeScores(arr)
            changeLoader(false);
        })
    }, [])

    return(
        <div>
            <h3 className="center">LeaderBoard</h3>
            {loader ? <div className="loader center"></div> : null }
            <div className="row">
                {scores.map(score => {
                    return(
                        <div className="col s12 m6 l4 animate" key={score.id}>
                            <div className="card">
                                <div 
                                    className="indigo darken-3 white-text center card-title"
                                    >{score.data().name}
                                </div>
                                <div
                                    className="card-content center indigo white-text">
                                    <span>Words From The Player:</span>
                                    <br />
                                    {score.data().description}
                                </div>
                                <div className="center">
                                    Completed In   {score.data().time} minutes!
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="center">
                <Link to="/">
                    <button className="btn white-text">
                        Go Back To Main Game Page
                    </button>
                </Link>
            </div>
        </div>
    )
}