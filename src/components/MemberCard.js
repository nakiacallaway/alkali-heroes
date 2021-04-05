import { Link } from 'react-router-dom'

const MemberCard = ({member}) => {
    return (
    <div className="card mb-3">
          <h4 className='card-title text-center'>
              {member.firstName} {member.lastName}</h4>
              <div className="card-header"></div>
              <div className='th-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div> 
                <h5 className="text-secondary text-center">{member.position}</h5>
                
                <div className="d-flex justify-content-between my-3">
                  <Link to={`/pages/${member.id}`} className="card-link">View Details</Link> <br />
                  <a href={member.linkedin} className='card-link' >Linkedin Profile</a>
                </div>
        
    </div>
    );
};

export default MemberCard;