const Projects = ({ projects }) => {
  return projects.map(({title, logo, author, description, link, id}) => {
    return <div className='oss-card column' key={id}>
      <div className='header'>
        <div className='pull-left'> {title}
        </div>
        <img src={logo} className='logo pull-right' />
      </div>
      <hr className='colors' />
      <div className='creator'>
        by <a href={author.handle} className='creator-id'>
          <span className=''>{author.name} </span>
        </a>
      </div>
      <div className='about'>
        <p>{description}</p>
        <div className='link'>
          <a href={link} className=''>
            <i className='ion ion-social-github' />
          </a>
        </div>
      </div>
    </div>
  })
}

export default Projects
