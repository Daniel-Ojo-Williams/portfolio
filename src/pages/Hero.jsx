


const Hero = () => {

  return (

    <div className="hero_container_full">
      <div className="hero_container">
      <div className="hero">
        <div className="hero_image image_md">
            <img src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966" alt="" />
        </div>
          <p className="hero_header_lg">Hi, I'm <br /> <span className="daniel">Daniel</span> Ojo-Williams</p>
        {/* <p className="hero_header_lg">Hi, I'm <br /> Daniel Ojo-Williams</p> */}
        <p className="hero_header">Hi, I'm Daniel Ojo-Williams</p>
          <p className="header_description">I'm a <span>Backend Software Engineer.</span> Crafting scalable solutions using with innovation at the core | Eager learner and Dedicated to continuous Growth</p>
      </div>
      <div className="hero_socials_lg">
          <a href="https://github.com/Daniel-Ojo-Williams" target="_blank" className="social-link"> <i className="fi fi-brands-github"></i> Github </a>
          <a href="https://www.x.com/ojowilliamsdan1/" target="_blank" className="social-link"><i className="fi fi-brands-twitter"></i> Twitter </a>
          <a href="https://www.linkedin.com/in/daniel-ojo-williams/" target="_blank" className="social-link"><i className="fi fi-brands-linkedin"></i> Linkedin </a>
        <a href="mailto:ojowilliamsdaniel@gmail.com" target="_blank" className="social-link"><i className="fi fi-sr-envelope"></i> Email </a>
      </div>
      <div className="hero_socials">
          <a href="https://github.com/Daniel-Ojo-Williams" target="_blank" className="social-link"> <i className="fi fi-brands-github"></i></a>
          <a href="https://www.x.com/ojowilliamsdan1/" target='_blank' className="social-link"><i className="fi fi-brands-twitter"></i></a>
          <a href="https://www.linkedin.com/in/daniel-ojo-williams/" target="_blank" className="social-link"><i className="fi fi-brands-linkedin"></i></a>
          <a href="mailto:ojowilliamsdaniel@gmail.com" target="_blank" className="social-link"><i className="fi fi-sr-envelope"></i></a>
      </div>
      <small className="hero_inspire">Inspired by <a href="https://www.kadet.dev" target="_blank">Kadet.dev</a></small>
      </div>
    </div>
  )
}

export default Hero