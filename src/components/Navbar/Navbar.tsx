import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <div className="logo">
          <a className="navbar-brand logo" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              fill="currentColor"
              viewBox="0 0 24 24"
              className="logo-icon"
            >
              <path d="M16.91 2.29a.996.996 0 0 0-1.41 0l-1.59 1.59-1.09-1.09a.996.996 0 0 0-1.41 0l-2.3 2.3c-.19.19-.29.44-.29.71s.11.52.29.71L12.6 10l-2.59 2.59L6.52 9.1a.996.996 0 0 0-1.41 0l-2.3 2.3a.996.996 0 0 0 0 1.41L3.9 13.9l-1.59 1.59a.996.996 0 0 0 0 1.41l4.8 4.8c.2.2.45.29.71.29s.51-.1.71-.29l1.59-1.59 1.09 1.09c.2.2.45.29.71.29s.51-.1.71-.29l2.3-2.3c.19-.19.29-.44.29-.71s-.11-.52-.29-.71l-3.49-3.49 2.59-2.59 3.49 3.49c.2.2.45.29.71.29s.51-.1.71-.29l2.3-2.3a.996.996 0 0 0 0-1.41l-1.09-1.09 1.59-1.59a.996.996 0 0 0 0-1.41l-4.8-4.8ZM7.8 19.59 4.41 16.2l.89-.89 3.39 3.39zm4.1-.5L4.91 12.1l.89-.89 6.99 6.99zm6.3-6.3L11.21 5.8l.89-.89 6.99 6.99zm-2-8.37 3.39 3.39-.89.89-3.39-3.39z"></path>
            </svg>

            <span>GYMFIT</span>
          </a>
        </div>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/trainers">Trainers</a>
        <a href="/prices">Prices</a>
        <a href="/schedule">Schedule</a>
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;
