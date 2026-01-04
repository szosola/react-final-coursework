import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Estate Agent</p>
        <p className="footer-sub">Client-side React application</p>
      </div>
    </footer>
  );
}

export default Footer;