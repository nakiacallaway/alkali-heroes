import { Link } from 'react-router-dom'

const MemberCard = ({member}) => {
    return (
    <div className="card">
          <h4 className='card-title text-center my-3'>
              {member.firstName} {member.lastName}</h4>
              <div className="card-header"></div>
              <div className='th-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div> 
                <h5 className="text-secondary text-center">{member.position}</h5>
                
                <div className="d-flex justify-content-between my-3">
                  <Link to={`/member/${member.id}`} className="card-link">View Details</Link> <br />
                  
                  <a href={member.linkedIn} className="card-link text-info" target='_blank'rel='noreferrer'>LinkedIn</a>
                </div>
        
    </div>
    );
};

export default MemberCard;