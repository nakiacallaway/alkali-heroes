import { useEffect, useState } from 'react';
import { teamData } from '../data/team';
import '../App.css';

const DashboardPage = () => {
  let spotlight = teamData[Math.floor(Math.random()*teamData.length)];
    // console.log(spotlight);
    // console.log(spotlight.languages)

    return (
      <div id='dashboard-page'>
        <div className='row text-center'>
          <div className='col'>
            <h1 className='my-5'>This is Team Alkali!</h1>
            <h3 className='text-secondary my-3'>Who Are We?</h3>
            <p>When I was little, I would go on Nickelodeon.com all the time and they had this game similar to Club Penguin, except it was called Nicktropolis. And if you forgot your password, a security question you could choose was “What is your eye color?” and if you got it right it’d tell you your password. So I would go to popular locations in Nicktropolis and write down random usernames who were also in those areas, and then I would log out and type in the username as if it were my own and see which of these usernames had a security question set to “What is your eye color?” (Which was most of them, since it was easy and we were all kids). I would then try either brown, blue, or green, and always get in, then I would go to their house and send all of their furniture and decorations to my own accounts. And if I didn’t want it, I could sell it for money.</p>
            <h3 className='mt-5'>Member Spotlight</h3>
          </div>
        </div>
        <div className='row my-4'>
          <div className="col-md-6 offset-md-3">
              <div id="member">
                <div className="col">
                  {/* {card start} */}
                  <div class="card card border-primary">
                    <img 
                      className="th-img-container"
                      src={spotlight.profile_img} 
                      alt={spotlight.lastName} />
                    <div class="card-body">
                      <h5 class="card-title text-primary">{spotlight.firstName} {spotlight.lastName}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{spotlight.position}</h6>
                      <p class="card-text">{spotlight.bio}</p>
                      <a href={spotlight.linkedIn} class="card-link text-info">Connect</a>
                      <a href={spotlight.github} class="card-link text-info">Github</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
      );
};
    

export default DashboardPage;