import {useEffect, useState} from 'react';
import {teamData} from '../data/team';
import {useParams} from 'react-router-dom';
import {FaStar, FaRegStar} from 'react-icons/fa';

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

  const [alert, setAlert] = useState(false);

  useEffect(() => {
      let foundMember = teamData.find(h => m.id === +memberId);
      setMember(foundMember);
  }, [member]);

  const updateFeatured = (individualId) => {
    let foundMember = teamData.find(s => s.id === +individualId);
    foundMember.featured = !foundMember.featured;
    showAlert();
  }

  const showAlert = () => {
  setAlert(true);
  setTimeout(() => {
    setAlert(false);
  }, 2000)
}
    return (
      <div id='hero' className='text-center'>
        <div className='row mt-4'> 
          <div className='col'>
          <div className='card'>
          <div className='row no-gutters'> 
          <div className='col-md-5 th-img-containter'  >
          <div className='th-hero-img' style={{ backgroundImage: `url(${member.profile_img})` }}>
          </div>
            </div>
          <div className='col-md-7 text-center th-card-body'>
            <div className='th-card-header d-flex justify-content-between'> 
            <span>
              <a href='javascript:void(0)' onClick={() => updateFeatured(member.id)}>
              {member.featured ? <FaStar /> : <FaRegStar />}
              </a>
            </span>
            <span>{member.firstName}</span>
            </div>
            <div className='th-card-name my-3'> 
            <h3>
              <span>
                {member.lastName}, 
              </span>
              <em> aka {member.position}</em>
            </h3>
            </div>
            
            <div className='th-card-details'> 
            
            <div className='details'>
            <h4 className='text-secondary'>languages:</h4>
            <p>{member.languages?.map((ch, i) => {
              return (
              <span key={i}>
                {ch}
                {i === member.languages.length - 1 ? '' : ', ' }
                </span>
              );
              })}</p>

            </div>
            <div className='details'>
            <h2 className='text-secondary'>About</h2>
            <p className='hero-about'>{member.bio}</p>
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