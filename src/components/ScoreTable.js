import React from "react";

export default function ScoreTable() {
  return (
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
  );
}
