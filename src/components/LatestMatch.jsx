import React, { useState, useEffect } from 'react'
import './AllCss.css'
import { useParams } from 'react-router-dom'



function LatestMatch() {
    const [LatestMatches, setLatestMatches] = useState({});

    const params = useParams();

    const { id } = params;


    useEffect(() => {
        fetchLatestMatches();
    }, []);

    console.log(LatestMatches)
    const fetchLatestMatches = async () => {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json();
        console.log(data);
        setLatestMatches(data);
        console.log(id)
    }



    return (
        <div className="lm-container">
            <div>
                <ul>
                    <div>

                        <h5>{ LatestMatches.umpires }</h5>
                        <h5>{ LatestMatches.result }</h5>
                        <h5>{ LatestMatches.man_of_the_match }</h5>
                        <h5>{ LatestMatches.date }</h5>
                        <h5>{ LatestMatches.venue }</h5>

                    </div>
                    <div className='team-logo'>
                        <img src={ LatestMatches.competing_team_logo } className="lm-img" alt='avtar img' />
                    </div>
                    <div>
                        <h5>{ LatestMatches.competing_team }</h5>
                        <h5>{ LatestMatches.first_innings }</h5>
                        <h5>{ LatestMatches.second_innings }</h5>
                        <h5>{ LatestMatches.match_status }</h5>


                    </div>
                </ul >
            </div>
        </div >
    )
}

export default LatestMatch
