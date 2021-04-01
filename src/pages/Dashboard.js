import { useEffect, useState } from 'react';
// import MemberCard from '../components/MemberCard';
import { teamData } from '../data/team';
import '../App.css';

const DashboardPage = () => {
    const [team, setTeam] = useState([]);
    // console.log(heroData);
  
    //useEffect hook to render and hold filtered data
    useEffect(() => { //renders upon page load
      let featured = teamData[Math.floor(Math.random()*teamData.length)];
      console.log(featured);
      setTeam(featured);
    }, []);  //second param defines conditions in which it can render again (Line 8)

    return (
        <div id='dashboard-page'>
          <div className='row text-center'>
            <div className='col'>
              <h1 className='my-5'>This is Team Alkali!</h1>
              <h3 className='text-secondary my-3'>Who Are We?</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, similique perferendis mollitia distinctio, illum aperiam adipisci tempore corrupti placeat provident, odio officiis necessitatibus pariatur exercitationem ex. Vel, dolores quam. Aut, explicabo illo tempore illum debitis sunt, nesciunt aspernatur placeat iure rerum quo in officia quos laborum dolorem! Explicabo deserunt nulla mollitia totam alias, porro architecto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, similique perferendis mollitia distinctio, illum aperiam adipisci tempore corrupti placeat provident, odio officiis necessitatibus pariatur exercitationem ex. Vel, dolores quam. Aut, explicabo illo tempore illum debitis sunt, nesciunt aspernatur placeat iure rerum quo in officia quos laborum dolorem!</p>
              <h3 className='mt-5 mb-4'>Member Spotlight</h3>
            </div>
          </div>
          <div className='row'>
            {teamData.map((member, index) => {
              return (
                <div className='col-sm-12 d-flex justify-content-center' key={member.id}>
                  <p>Team Member</p>
                  {/* <MemberCard member={member} updateFeatured={updateFeatured} /> */}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    

export default DashboardPage;