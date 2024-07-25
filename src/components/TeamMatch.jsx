import React from 'react'
import { Link } from 'react-router-dom';
import './AllCss.css'

function TeamMatch(props) {
    const { teamDetails } = props;
    return (

        <Link to={ `/ipl/${teamDetails.id}` }>
            <div className='home-route-container'>

                <div>
                    <ul className='teams-list-container'>
                        <li className='teams-list'>
                            <h1 className='team-title'>{ teamDetails.name }</h1>
                            <div>
                                <img className='ipl-logo' src={ teamDetails.team_image_url } alt={ teamDetails.name } />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </Link>
    )
}

export default TeamMatch;
