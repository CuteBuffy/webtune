
export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar__wrapper">
            <div className="navbar__left">
              <div className="navbar__logo">
                <p className="navbar__brand">WebTune</p>
                <p className="navbar__small">Web Development & Digital Marketing</p>
              </div>
              <p className="navbar__phone-num">+38 (068) 916 70 37</p>
            </div>
            <div className="navbar__right">
              <ul className="navbar__links">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Портфолио</a></li>
                <li><a href="#">Статьи</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
              <span className="navbar__lang">
                <p>ua</p>
                <p>ru</p>
              </span>
              <div className="navbar__menu-btn">
                <span className="navbar__menu">Меню</span>
                <img src="./menu.svg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}