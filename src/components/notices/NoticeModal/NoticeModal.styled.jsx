import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0px auto;
  padding: 60px 20px 40px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
`;
const Wrapper = styled.div`
  & + p {
    margin-bottom: 40px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;

  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Category = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  align-items: center;
  min-height: 28px;
  min-width: 158px;
  padding-left: 20px;
  font-size: 12px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  background-color: #ffffff60;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
  word-wrap: break-word;
`;

const List = styled.ul`
  margin-bottom: 28px;
`;

const Item = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const ItemInfo = styled.p`
  min-width: 118px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.Text};
`;

const style = {
  Container,
  Wrapper,
  ImgWrapper,
  Img,
  Category,
  Title,
  List,
  Item,
  ItemInfo,
};

export default style;
