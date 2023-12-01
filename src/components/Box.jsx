

const Box = ({ title, description, live, code, linkLive, linkCode }) => {
  return (
    <div className="box_container">
      <div className="box">
        <div className="project_description">
          <p>{title}</p>
          <small className="small_txt">{description}</small>
        </div>
        <div className="project_links">
          {
            linkLive 
            && 
            <a href={linkLive} target='_blank' className="small_txt"><i className="fi fi-br-link"></i> Live</a>
          }
          { 
            linkCode 
            && 
            <a href={linkCode} target='_blank' className="small_txt"><i className="fi fi-rr-code-branch"></i> Code</a>
          }
        </div>
      </div>
    </div>
  )
}

export default Box