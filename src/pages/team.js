import { useState, useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import { teamData } from '../data/team';

const TeamPage = () => {
  const [team, setTeam] = useState([]);
  const [searchTerm, setSearchTerm] = useState ('');
  
  useEffect( () => {
    const foundTeam = teamData.filter(td => {
      return (
      td.firstName.toLowerCase().includes(searchTerm.toLowerCase()) + 
      td.lastName.toLowerCase().includes(searchTerm.toLowerCase()) 
      
      );
    } );
    setTeam(teamData);
    searchTerm === '' ? setTeam(teamData) : setTeam(foundTeam);
  }, [searchTerm] );
  
 const handleChange = event => {
  setSearchTerm(event.target.value);
  }
  
  return (
    <div id="team">
      <div className="row text-center">
        <div className="col">
          <h2>Welcome to Team Alkali!</h2>
        </div>
      </div>
      <div className='row'>
        <div className="col">
          { alert ? (
          <div className='alert alert-success text-center' role='alert'>
            Task Finished!
          </div> ) : (<div></div>)
          }
          </div>
        </div>
      <div className='row'>
        <div className="col">
          <div className="form-group">
            <input type='text' id='member-search' className="form-control" placeholder='Find a member' value={searchTerm} onChange={handleChange} />
          </div>
        </div>
      </div>
      <div className='row'>
      {team.map((member, index) => {
        return (
          <div className='col-3'>
          <MemberCard member={member} />
          </div>
        );
        })};
      </div>
    </div>
  );
};


export default TeamPage;
