const Projects = ({ projects }) => {
  return projects.map(({title, author, description, link, id}) => {
    return <div className='oss-card column' key={id}>
      <div className='header'>
        <div className="title" > {title} </div>
        <img src={author.avatar} className='logo pull-right' />
      </div>
      <hr className='colors' />
      <div className='creator'>
        by <a href={author.url} className='creator-id' target="_blank">
          <span className="author">{author.handle} </span>
        </a>
      </div>
      <div className='about'>
        <p>{description}</p>
        <div className='link'>
          <a href={link} targer="_blank">
            <i className='ion ion-social-github' />
          </a>
        </div>
      </div>
    </div>
  })
}

export default Projects
