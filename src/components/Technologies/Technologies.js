import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>技术</SectionTitle>
    <SectionText>
    1. 计算机专业，爱好编程，实现过近二十种在线游戏，并且自制游戏引擎，学习前后端有四年时间
    <br />
    2. 前端技术不限，后端 Node 或者 Python
    <br />
    3. 实习经验快有一年，在此期间，负责公司两个最新上线React 项目（教务和艺术馆）, 前端部分主要由我一人完成
    <br />
    5. 乐观积极向上，喜欢与同事交流合作，解决技术难题

    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>前端</ListTitle>
          <ListParagraph>
            React.js  <br />
            Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>后端</ListTitle>
          <ListParagraph>
            Python <br />
            Node
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>其他</ListTitle>
          <ListParagraph>
            Zeplin <br />
             Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
