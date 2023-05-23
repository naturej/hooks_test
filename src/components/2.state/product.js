import styled from "styled-components";
import priceComma from "../../utils/priceComma";

function ProductCard({ product, onNavigate }) {
  const {
    productName,
    productPrice,
    productNumber,
    productSize,
    productRating,
    Review,
  } = product;
  return (
    <S.Item onClick={() => onNavigate(productNumber)}>
      <h4>{productName}</h4>
      <p>상품번호: {productNumber}</p>
      <p>가격: {priceComma(productPrice)}원</p>
      <p>사이즈: {productSize}</p>
      <p>평점: {productRating}</p>
      <p>리뷰: {Review.length}</p>
    </S.Item>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
