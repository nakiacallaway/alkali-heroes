import {useEffect, useState} from 'react';
import {teamData} from '../data/team';
import JumpLinks from '../components/Jumplinks';
import {useParams} from 'react-router-dom';


const MemberPage = () => {
  let {memberId} = useParams();
  const [member, setMember] = useState({
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    linkedIn: '',
    github: '',
    bio: '',
    profile_img: '',
    languages: []
  });

  useEffect(() => {
      let foundMember = teamData.find(m => m.id === +memberId);
      setMember(foundMember);
  }, [member, memberId]);



    return (


<div id='member' className='text-center'>
        <div className='row mt-4'> 
          <div className='col'>
          <div className='card'>
          <div className='row no-gutters'> 
          <div className='col-md-5 th-img-containter'  >
          <div className='mem-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div>
            </div>
          <div className='col-md-7 text-center th-card-body'>
            <div className='th-card-header d-flex justify-content-center my-3'> 
              <h1>{member.firstName} {member.lastName}</h1> 
            </div>
            
            <div className='th-card-details'> 
              <h3>{member.position}</h3>
            <div className='details my-3'>
            <h4 className='text-secondary'>About</h4>
            <p className='hero-about'>{member.bio}</p>
            </div>

            <div className='detail'>
                      <h4 className='text-secondary'>Languages:</h4>
                      <p className='my-2'>
                        {member.languages?.map((langs, i) => {
                          return (
                            <span className='badge badge-pill badge-primary my-1' key={i}> <h5 className='my-1'> {langs} </h5></span>
                        )})}
                      </p>
                    </div>

            <div className='detail'>
            <h4 className='text-secondary'>Contact:</h4>
            <a href={member.linkedIn} className="card-link text-info" target='_blank'rel='noreferrer'>LinkedIn</a>
            <a href='mailto:{member.email}' className='card-link' >Email</a>
            <a href={member.github} className='card-link' target='_blank'rel='noreferrer'>Github Portfolio</a>


            </div>
            </div>
                    
          </div>
        </div>
        </div>
         </div>
        </div>
        
        <div className="container">
  <div className="row mt-5">
    <div className="col">
    
    </div>
  </div>
</div>
<div className='row mt-5'>
      {teamData.map((member, index) => {
        return (
          <div className='col-1'>

          <JumpLinks member={member} />

          </div>
        );
        })}
      </div>
        </div>
        
        
        
  );
};



export default MemberPage;