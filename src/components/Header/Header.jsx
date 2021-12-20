import "./Header.scss";
const Header = ({ title, children }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1 className="header__name">{title}</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
