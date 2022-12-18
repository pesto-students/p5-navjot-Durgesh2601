import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer-section">
          <h2>Shortly</h2>
        </section>
        <section className="footer-section actions">
          <div className="sub-section">
            <h4>Features</h4>
            <p>Link Shortning</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div className="sub-section">
            <h4>Resources</h4>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
          <div className="sub-section">
            <h4>Company</h4>
            <p>About</p>
            <p>Our team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </section>
        <section className="footer-section auths-footer">
          <a>Login</a>
          <a>Sign Up</a>
        </section>
      </footer>
    </>
  );
};
