import React from 'react'

export default function Scores() {
    const [matches,setMatches] = React.useState()
    return (
        <div className='container d-flex'>
        
                    <div>
                            <table className='table table-dark'>
                                <thead>
                                <tr>
                                    <th scope='col'>Player Name</th>
                                    <th scope='col'>Score</th>
                                    <th scope='col'>Wickets</th>
                                    <th scope='col'> Overs</th>
                                </tr>
                                </thead>
                            </table>
                    </div>

                    <div>
                            <table className='table table-dark'>
                                <thead>
                                <tr>
                                    <th scope='col'>Player Name</th>
                                    <th scope='col'>Score</th>
                                    <th scope='col'>Wickets</th>
                                    <th scope='col'> Overs</th>
                                </tr>
                                </thead>
                            </table>
                    </div>
                </div>
             
            
     
    )
}
