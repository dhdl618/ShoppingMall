import React, { useState } from "react";
import cart from "./img/cart-120.png";
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
    
    console.log(open)
    if (open === true) {
      document.querySelector(".outer-container").style.filter = "brightness(70%)";
    } else if (open === false) {
      document.querySelector(".outer-container").style.filter = "brightness(100%)";
    }
    
    setOpen(!open);
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
      [Shopping Mall]
    </div>
  );
};

export default App;
