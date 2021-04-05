import { Link } from 'react-router-dom'

const MemberCard = ({member}) => {
    return (
    <div className="card mb-3">
      
          <div className="card-body">
              <h4 className='card-title'>
              {member.firstName} {member.lastName}</h4>
              <div className='th-card-bg-img' style={{backgroundImage: `url(${member.profile_img})`}}></div>
                <h6 className="text-secondary text-center">{member.position}</h6>
                  
                <div className="my-2 d-flex justify-content-between">
                  <Link to={`/pages/${member.id}`} className="card-link">View Details</Link> <br />
                  <a href={member.linkedin} className='card-link' >Linkedin Profile</a>
                </div>
          </div>
    </div>
    );
};

export default MemberCard;