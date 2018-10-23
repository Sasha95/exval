import React from "react";
import styled from "styled-components";
//#region
const Text = styled.div`
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.47;
  letter-spacing: normal;
  font-family: Gravity;
`;
const Title = Text.extend`
  font-size: 36px;
  font-weight: bold;
  color: #0c128f;
  font-family: Gravity;
`;
const Digit = Title.extend`
  font-size: 60px;
`;
//#endregion
export const RulesFereralProgram = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Title
        className="row mx-0"
        style={{ paddingTop: "60px", paddingBottom: "20px" }}
      >
        Общие правила реферальной программы:
      </Title>
      <div className="row">
        <div className="col-4 ">
          <div className="digitBox mx-0">
            <Digit>01</Digit>
          </div>
          <Text>
            Категорически запрещается рассылать СПАМ (в личные сообщения
            социальных сетей, в группах и сообществах магазинов-партнеров, в
            e-mail-рассылках и др.) для привлечения пользователей.
          </Text>
        </div>
        <div className="col-4 p-0">
          <div className="digitBox mx-0">
            <Digit>02</Digit>
          </div>
          <Text>
            Внимание: любое упоминание названия Corridor в рекламных материалах,
            сообщения в группе Corridor или в личных сообщениях подписчикам
            Corridor строго запрещается.
          </Text>
        </div>
        <div className="col-4 p-0">
          <div className="digitBox mx-0">
            <Digit>03</Digit>
          </div>
          <Text>
            Строго запрещается использование названия бренда Corridor и
            магазинов-партнеров в доменных именах сайтов, созданных для
            привлечения трафика по ПП.
          </Text>
        </div>
      </div>
      <div className="row p-0">
        <div className="col-8">
          <div className="digitBox mx-0">
            <Digit>04</Digit>
          </div>
          <Text>
            Строго запрещается любое создание мобильных приложений, расширений и
            групп в социальных сетях от имени сервиса и с использованием
            логотипа Corridor. Также это касается и подтягивания страниц с сайта
            Corridor внутри приложений.
          </Text>
        </div>
        <div className="col-3 p-0">
          <div className="digitBox mx-0">
            <Digit>05</Digit>
          </div>
          <Text>
            Запрещено использовать контекстную рекламу для привлечения
            рефералов.
          </Text>
        </div>
      </div>
    </div>
  );
};
