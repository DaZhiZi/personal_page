import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillCodepenCircle, AiFillWechat } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>电话</LinkTitle>
          <LinkItem href="tel: +86 15927762230">+86 15927762230</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>邮箱</LinkTitle>
          <LinkItem href="grammyli@outlook.com">
            grammyli@outlook.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>明日的程序员是未来的魔法师</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://google.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillWechat size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillCodepenCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
