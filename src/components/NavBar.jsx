import React from 'react'
import {Menu} from 'antd';
import { useNavigate } from "react-router-dom";

const items = [
    {
      label: 'Home',
      key:"home",
    },
    {
      label: 'Products',
      key:"products",
    },
    {
      label: 'About',
      key:"about",
    },
    {
      label: 'Contact Us',
      key:"contactUs",
    }
  ];

export default function NavBar() {
    let navigate = useNavigate();
    const [current, setCurrent] = React.useState('home');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    switch(e.key){
        case 'home':
            navigate('/');
            break;
        case 'products':
            navigate('/products');
            break;
        case 'about':
            navigate('/about');
            break;
        case 'contactUs':
            navigate('/contact_us');
            break;
    }
  };
  return <Menu contentEditable={false} theme='light' style={{justifyContent:"center"}} onClick={onClick} selectedKeys={[current]} tabIndex={-1} mode="horizontal" items={items} />;
}