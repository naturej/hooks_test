/**
 * 숫자를 입력받아 숫자 3자리마다(천단위) 콤마(,)를 찍어서 문자열로 반환해주는 함수
 * @param {number} price
 * @returns {string}
 */
const priceComma = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default priceComma;
