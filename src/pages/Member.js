import {useEffect, useState} from 'react';
import {teamData} from '../data/team';
import {useParams} from 'react-router-dom';

const langs = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'React-Native',
  'NodeJS',
  'Java',
  'Python',
  'MongoDB', 
  'C++',
  'Express',
  'Oz',
  'Haskell',
];

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
    languages: ''
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
            <div className='th-card-header d-flex justify-content-between'> 
     
            <h3>{member.firstName} {member.lastName}</h3> <br/>
            
            <h3>{member.position}</h3>
            </div>
            
            <div className='th-card-details'> 
 
            <div className='details'>
            <h2 className='text-secondary'>About</h2>
            <p className='hero-about'>{member.bio}</p>
            </div>

            <div className='detail'>
                      <h4 className='text-secondary'>Langs</h4>
                      <p className='ml-5'>
                        {teamData.languages?.map((langs, i) => {
                          return (
                            <span
                              className='badge badge-pill badge-primary my-1'
                              key={i}>
                              {langs}
                            </span>
                          );
                        })}
                      </p>
                    </div>

            <div className='detail'>
            <h2 className='text-secondary'>Portfolio:</h2>
            <p>{member.github}</p>

            </div>
            </div>
                    
          </div>
        </div>
        </div>
         </div>
        </div>
        
        
        </div>
        
        
        
  );
};

export default MemberPage;