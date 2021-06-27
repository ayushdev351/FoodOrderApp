import React from "react";
import styled from "styled-components";

function MealItem(props) {
  return (
    <li>
      <Card
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          width: "600px",
          margin: "5px auto"
        }}
      >
        <div>
          <h3>{props.name}</h3>
          <div>{props.description}</div>
          <div>$ {props.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default MealItem;

const Card = styled.div`
  > div {
    margin: 10px 5px;

    > div {
      margin: 10px 2px;
    }
  }
`;
