import React, { useState, useEffect } from 'react'
import './AllCss.css'
import { useParams } from 'react-router-dom'
import LatestMatch from './LatestMatch';

function TeamCard() {


    const [teams, setTeams] = useState({});

    const params = useParams();

    const { id } = params;


    useEffect(() => {
        fetchTeam();
    }, []);


    const fetchTeam = async () => {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
        const data = await response.json();
        console.log(data);
        setTeams(data);
        console.log(id)
    }

    return (
        <div className="tc-container">
            <div>
                <div className='banner-img'>
                    <img src={ teams.team_banner_url } className="tc-img" alt='avtar img' />
                </div>
            </div>
            <div>
                { <LatestMatch /> }
            </div>
        </div >
    )

}

export default TeamCard
