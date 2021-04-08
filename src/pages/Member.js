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
          <div className='card px-5 py-4 mt-5'>
          <div className='row no-gutters'> 
          <div className='col-md-5 th-img-containter'  >
          <div className='mem-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div>
            </div>
          <div className='col-md-7 text-center th-card-body'>
            <div className='th-card-header d-flex justify-content-center mt-5'> 
              <h1>{member.firstName} {member.lastName}</h1> 
            </div>
            
            <div className='th-card-details px-5'> 
              <h4 className="text-secondary">{member.position}</h4>
            <div className='details my-3'>
            <h5 className='mt-4'>About</h5>
            <p className='hero-about'>{member.bio}</p>
            </div>

            <div className='detail'>
                      <h5 className='mt-4'>Languages:</h5>
                      <p className='my-2'>
                        {member.languages?.map((langs, i) => {
                          return (
                            <span className='badge badge-pill badge-info mx-1 my-3 px-4' key={i}> <h5 className='my-1'> {langs} </h5></span>
                        )})}
                      </p>
                    </div>

            <div className='detail'>
            <h5 className='mt-4'>Contact:<br/><br/>
            <a href={member.linkedin} className='card-link text-info' >Linkedin Profile</a>
            <a href={member.email} className='card-link text-info' >Email</a>
            <a href={member.github} className='card-link text-info' >Github Portfolio</a>
            </h5>


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
<div className="row mt-5 text-secondary small">
  <div className="col-2">
    See the rest of the team:
  </div>
</div>
<div className='row mb-5'>
      {teamData.map((member, index) => {
        return (
          <div className='col-1 mr-2'>

          <JumpLinks member={member} />

          </div>
        );
        })}
      </div>
        </div>
        
        
        
  );
};



export default MemberPage;