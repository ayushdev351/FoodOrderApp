import React from "react";
import styled from "styled-components";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <HeaderContainer>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderButton>
          <span className="icon"><i class="fas fa-shopping-cart"></i></span>
          <span>Your Cart</span>
          <span className="badge">3</span>
        </HeaderButton>
      </header>
      <div>
        <img src={mealsImage} alt="food" />
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }

  .main-image {
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;


const HeaderButton = styled.button`
  
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;


:hover,
:active {
  background-color: #2c0d00;
}

.icon {
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
}

.badge {
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
}

:hover .badge,
:active .badge {
  background-color: #92320c;
}

.bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
`;