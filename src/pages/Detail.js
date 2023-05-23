import { useNavigate, useParams } from "react-router-dom";
import productList from "../__mock__/products.json";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import priceComma from "../utils/priceComma";
function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const ratingArr = [1, 2, 3, 4, 5];

  const _product = productList.products.find(
    (product) => product.productNumber === params.productNumber
  );
  const [product, setProduct] = useState(_product);

  useEffect(() => {
    console.log(product);
    if (!product) {
      alert("존재하지 않는 상품입니다.");
      return navigate(-1);
    }
  }, [product]);

  const onSubmitReview = (e) => {
    e.preventDefault();
    const newReview = {
      reviewer: e.target.nickname.value,
      review: e.target.content.value,
      rating: e.target.rating.value,
    };
    e.target.nickname.value = "";
    e.target.content.value = "";
    e.target.rating.value = "5";
    setProduct((prev) => {
      const reviewList = [newReview, ...prev.Review];
      return {
        ...prev,
        Review: reviewList,
      };
    });
  };

  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
      {product && (
        <S.Wrapper>
          <h1>상품상세정보</h1>
          <S.ProductBox>
            <S.ProductTitle>상품명: {product.productName}</S.ProductTitle>
          </S.ProductBox>
          <S.ProductInfo>
            <p>상품번호: {product.productNumber}</p>
            <p>가격: {priceComma(product.productPrice)}원</p>
            <p>사이즈: {product.productSize}</p>
            <p>평점: {product.productRating}</p>
            <p>상세정보: {product.productDetail.productDetailInfo}</p>
          </S.ProductInfo>
          <div>
            <form onSubmit={onSubmitReview}>
              <p>
                리뷰 수: <span>{product.Review.length}</span>
              </p>
              <input name="nickname" placeholder="고객명" />
              {ratingArr.map((el) => (
                <label>
                  <input type="radio" name="rating" value={el} defaultChecked />{" "}
                  {el}점
                </label>
              ))}
              <input name="content" placeholder="리뷰 내용" />
              <button>리뷰 작성</button>
            </form>
          </div>
          <S.ReviewList>
            {product.Review.map((review) => (
              <S.ReviewItem>
                <form>
                  <p>
                    작성자: <span>{review.reviewer}</span>
                  </p>
                  <p>
                    별점: <span>{review.rating}</span>
                  </p>
                  <p>
                    리뷰 내용: <span>{review.review}</span>
                  </p>
                </form>
              </S.ReviewItem>
            ))}
          </S.ReviewList>
        </S.Wrapper>
      )}
    </div>
  );
}
export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const ProductTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const ProductContent = styled.p`
  color: #fff;
`;

const ProductInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const ReviewList = styled.ul`
  width: 960px;
`;

const ReviewItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  Wrapper,
  ProductBox,
  ProductTitle,
  ProductContent,
  ProductInfo,
  ReviewList,
  ReviewItem,
};
