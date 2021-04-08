import { Link } from 'react-router-dom'

const MemberCard = ({member}) => {
    return (
    <div className="card mb-4">
          <h4 className='card-title text-center pt-2'>
              {member.firstName} {member.lastName}</h4>
              <div className="card-header"></div>
              <div className='th-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div> 
                <h5 className="text-secondary text-center mt-3">{member.position}</h5>
                
                <div className="d-flex justify-content-around my-3">
                  <Link to={`/member/${member.id}`} className="card-link text-info">View Details</Link> <br />
                  
                  <a href={member.linkedIn} className="card-link text-info" target='_blank'rel='noreferrer'>LinkedIn</a>
                </div>
        
    </div>
    );
};

export default MemberCard;