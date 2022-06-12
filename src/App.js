import React, { useState } from "react";
import cart from "./img/cart-120.png";
import beigeCap from "./img/beige-cap.jpg";
import LACap from "./img/LA-cap.jpg";
import redCap from "./img/red-cap.jpg";
import banner_1 from "./img/banner-1.jpg";
import banner_2 from "./img/banner-2.jpg";
import banner_3 from "./img/banner-3.jpg";
import banner_4 from "./img/banner-4.jpg";

import "./App.css";
import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Chevron } from "./icons/chevron.svg";
import { ReactComponent as Bag } from "./icons/bag.svg";
import { ReactComponent as Login } from "./icons/login.svg";
import { ReactComponent as Logout } from "./icons/logout.svg";
import { ReactComponent as Search } from "./icons/search.svg";

const Menu = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  );
};

const MenuItem = (props) => {
  const [open, setOpen] = useState(false);

  const blockDropdown = () => {
    console.log(open);
    setOpen(!open);

    if (open === false) {
      document.querySelector(".outer-container").style.filter =
        "brightness(70%)";
    } else if (open === true) {
      document.querySelector(".outer-container").style.filter =
        "brightness(100%)";
    }
  };

  return (
    <li className="nav-item">
      <a href="#" alt="" className="icon-button" onClick={blockDropdown}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

const DropdownMenu = () => {
  const DropdownItem = (props) => {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown">
      <DropdownItem>Menu</DropdownItem>

      <DropdownItem leftIcon={<Plus />} rightIcon="{<Plus />}" />
    </div>
  );
};

const Man = () => {
  return (
    <div>
      <button>남성</button>
    </div>
  );
};

const Woman = () => {
  return (
    <div>
      <button>여성</button>
    </div>
  );
};

const D = () => {
  return <b className="text-D">D</b>;
};

const Nav = () => {
  return (
    <div>
      <Menu>
        <MenuItem icon={<Search />} />
        <MenuItem icon={<Login />} />
        <MenuItem icon={<Bag />} />
        <MenuItem icon={<Chevron />}>
          <DropdownMenu />
        </MenuItem>
      </Menu>
      <Logo />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="outer-container">
      <a className="img-logo-link" href="https://www.google.co.kr">
        <img className="img-logo" alt="" src={cart} />
      </a>
      <Title />
    </div>
  );
};

const Title = () => {
  return (
    <div className="title">
      <D />a <D />
      am
      <D />a
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card-entire-container">
      <div className="card-img-container">
        <a href="#" alt="" className="card-link">
          <img className="beige-cap" alt="" src={props.img} />
        </a>
      </div>
      <div className="card-title">
        <p>{props.title}</p>
      </div>
      <div className="card-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div></div>
  )
}

const Banner = () => {

  const btn1 = () => {
    document.querySelector('.banner-container').style.transform = 'translate(0vmax)';
  }
  const btn2 = () => {
    document.querySelector('.banner-container').style.transform = 'translate(-100vmax)';
  }
  const btn3 = () => {
    document.querySelector('.banner-container').style.transform = 'translate(-200vmax)';
  }
  const btn4 = () => {
    document.querySelector('.banner-container').style.transform = 'translate(-300vmax)';
  }

  return (
    <div>
      <div style={{overflow: "hidden"}}>
        <div className="banner-container">
          <div className="banner-img">
            <img src={banner_1}></img>
          </div>
          <div className="banner-img">
            <img src={banner_2}></img>
          </div>
          <div className="banner-img">
            <img src={banner_3}></img>
          </div>
          <div className="banner-img">
            <img src={banner_4}></img>
          </div>
        </div>
      </div>
      <div className="banner-btn-container">
        <button className="btn" onClick={btn1}></button>
        <button className="btn" onClick={btn2}></button>
        <button className="btn" onClick={btn3}></button>
        <button className="btn" onClick={btn4}></button>
      </div>
    </div>
)
}
// 초기형태 (컴포넌트 나누기 전)
// const Nav = () => {
//   return (
//     <div className='outer-container'>
//       <div className='first-inner-container'>
//       <Menu>
//         <MenuItem icon={<Search />} />
//         <MenuItem icon={<Login />} />
//         <MenuItem icon={<Bag />} />
//         <MenuItem icon={<Chevron />} >
//           <DropdownMenu />
//         </MenuItem>
//       </Menu>
//         <div>
//           <a className='img-logo-link' href="https://www.google.co.kr">
//             <img className='img-logo' alt='' src={cart} />
//           </a>
//         </div>
//         <div className='title'>
//           <D />a <D />am<D />a
//         </div>

//         <Man />
//         <Woman />
//       </div>
//       <div className='second-inner-container'>
//        right
//       </div>
//     </div>
//   )
// }

const App = () => {
  return (
    <div className="main-container">
      <Nav></Nav>
      <div className="card-div">
        <Card
          title="Jeep Beige CAP"
          content="A warmth beige Cap"
          img={beigeCap}
        />
        <Card 
          title="LA Blue CAP" 
          content="A refreshing blue Cap" 
          img={LACap} 
        />
        <Card 
          title="Simple Red CAP" 
          content="A Strong red Cap" 
          img={redCap} 
        />
      </div>
      <Banner />
    </div>
  );
};

export default App;
