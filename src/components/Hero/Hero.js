import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          欢迎来到 <br />
          魔法师的个人主页
        </SectionTitle>
        <SectionText>
          明日程序员是未来的魔法师
        </SectionText>
        <Button onClick={props.handleClick}>
          <a href="http://davizi.gitee.io/" target="_blank">
           更多
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;