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
            <p>"Bitwise Industries creates a bridge between humans from marginalized communities and stories of systemic poverty to skills and resources necessary to access opportunities in the tech industry. By leveraging public-private partnerships, Bitwise provides paid apprenticeships to students to learn tech skills, connects them to meaningful tech opportunities, and builds vibrant buildings in underestimated cities to house their work. By upskilling disenfranchised humans, it empowers them to change their own lives—which ignites and transforms the regional economies of the cities in which Bitwise serves." - <a href="https://bitwiseindustries.com/" alt="bitwise homepage">Bitwise</a></p>
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