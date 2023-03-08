import styled from 'styled-components';

export const Nav = styled.nav`

display: flex;
justify-content: space-between;
align-items: center;

.logo {
  height: 6em;
  width: 100px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

nav .navigation {
  justify-content: space-around;

}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

`;
