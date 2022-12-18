import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <section className="navbar-sections">
          <h2>Shortly</h2>
        </section>
        <section className="navbar-sections navigators">
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
        </section>
        <section className="navbar-sections navigators auths">
          <a>Login</a>
          <a>Sign Up</a>
        </section>
      </nav>
    </>
  );
};
