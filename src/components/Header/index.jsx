import styled from "styled-components";

const HeaderBox = styled.header`
  height: 80px;
  width: 100%;
  background: #fff1dc;
  text-align: center;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderBox>
      <a href="/">
        <img
          src="https://res.cloudinary.com/kugoo/image/upload/v1645483046/upload/logo.png"
          alt="logo"
          height="80px"
          width="80px"
        />
      </a>
    </HeaderBox>
  );
};

export default Header;
