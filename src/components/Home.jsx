import React, { useState, useEffect } from 'react'
import './AllCss.css';
import TeamCard from './TeamCard';
import Loader from './Loader'
import TeamMatch from './TeamMatch';


const Home = () => {


    const iplUrl = "https://apis.ccbp.in/ipl";
    const [iplTeams, setIplTeams] = useState([]);
    // const [loader, setLoader] = useState(false);

    const [teams, setTeams] = useState([])

    const FetchTeams = async (apiUrl) => {
        // setLoader(true);
        const response = await fetch(apiUrl);
        const { teams } = await response.json();
        console.log(teams);
        setIplTeams(teams);
        // setLoader(false);
    };


    useEffect(() => {
        FetchTeams(iplUrl);
    }, []);


    return (
        <div>
            { (iplTeams.map(teams => (
                <TeamMatch teamDetails={ teams } key={ teams.id } />
            ))) }
        </div>
    )




    // return (
    // <div className='home-route-container'>

    //     <div className='ipl-dashboard-heading'>IPL DashBoard</div>
    //     <div>
    //         <ul className='teams-list-container' >
    //             { iplTeams.map((eachTeam) => {
    //                 const { id, name, team_image_url } = eachTeam;
    //                 return (
    //                     <li key={ id } className='teams-list'>

    //                         <h1 className='team-title'>{ name }</h1>
    //                         <div className=''>
    //                             <img className='ipl-logo' src={ team_image_url } alt={ name } />
    //                         </div>
    //                     </li>
    //                 )
    //             }) }
    //         </ul>
    //     </div>


    // </div >
    // )
}

export default Home;
