import {Link} from "react-router-dom"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-2">
        <div className="hero-content">
           <h1>Organize Your Notes with Scribly</h1>
          <p>
          Capture ideas, create study notes, and keep everything organized in
          one place. Simple, fast, and accessible anytime.
          </p>
          <button><Link to="/notes">Create Your First Note</Link></button>
        </div>

        <div className="hero-image">
          <img
          src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Notebook and pen on desk"
            />
        </div>
      </div>
      <div className="highlights" >
        <div className="hero-card">
          <img src="/markdown.svg"width="100px" alt="" />
          <h3>Markdown Support:</h3>
          <p>Write in your favourite format.</p>
        </div>
        <div className="hero-card">
          <img src="/cloud-arrow-up.svg"width="100px" alt="" />
          <h3>Cloud Sync:</h3>
          <p>Access your notes from any device.</p>
        </div>
        <div className="hero-card">
          <img src="/pencil-square.svg"width="100px" alt="" />
          <h3>Updating & Editing:</h3>
          <p>Update or edit your notes at any time.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;