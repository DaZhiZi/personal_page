import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillCodepenCircle, AiFillWechat, AiOutlineQq } from 'react-icons/ai';
import { DiProlog } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <AiOutlineQq size="3rem" /> <span>魔法师</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>项目</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>技术</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>关于</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillWechat size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillCodepenCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
