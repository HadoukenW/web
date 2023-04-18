@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");
* {
  padding: 0px;
  margin: 0px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
}

/* Links */
a, a:link, a:visited {
  /* color: inherit; */
  text-decoration: none;
  /* display: inline-block; */
}

a:hover {
  /* color: inherit; */
  text-decoration: none;
}

/* Common */
aside, nav, footer, header, section, main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

ul, ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img, svg {
  max-width: 100%;
  height: auto;
}

/* Form */
input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

:root {
  --primaryColor: #f09d51;
  --mainWhite: #fff;
  --mainBlack: #222;
  --mainGrey: #ececec;
  --mainSpacing: 0.1rem;
  --mainTransition: all 0.3s linear;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: var(--mainBlack);
  background: var(--mainWhite);
  font-family: "Lato", sans-serif;
}

/* --------------- Navbar ---------------- */
.navbar {
  background: var(--mainWhite);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background: rgb(231, 226, 221);
  z-index: 1;
}

.navbar-center {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}

.nav-icon {
  font-size: 1.5rem;
}

.cart-btn {
  position: relative;
  cursor: pointer;
}

.cart-items {
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primaryColor);
  padding: 0 5px;
  border-radius: 30%;
  color: var(--mainWhite);
}

/* --------------- End of Navbar ---------------- */
/* --------------- Hero ---------------- */
.hero {
  min-height: calc(100vh - 60px);
  background: url("./images/hero-bcg.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner {
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding: 2rem;
}

.banner-title {
  font-size: 3.4rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 3rem;
}

.banner-btn {
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  font-size: 1rem;
  background: var(--primaryColor);
  color: var(--mainBlack);
  border: 1px solid var(--primaryColor);
  transition: var(--mainTransition);
  cursor: pointer;
}

.banner-btn:hover {
  background: transparent;
  color: var(--primaryColor);
}

/* --------------- End of Hero ---------------- */
/* --------------- Cart ---------------- */
.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  transition: var(--mainTransition);
  background: rgba(240, 157, 81, 0.5);
  z-index: 2;
  visibility: hidden;
}

.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: var(--mainWhite);
  z-index: 3;
  background: rgb(231, 226, 221);
  padding: 1.5rem;
  transition: var(--mainTransition);
  transform: translateX(100%);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.showCart {
  transform: translateX(0);
}

.transparentBcg {
  visibility: visible;
}

@media screen and (min-width: 768px) {
  .cart {
    width: 30vw;
    min-width: 450px;
  }
}
.close-cart {
  font-size: 1.7rem;
  cursor: pointer;
}

.cart h2 {
  text-transform: capitalize;
  text-align: center;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 2rem;
}

/*---------- Cart Item -------------------- */
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
}

.cart-item img {
  width: 75px;
  height: 75px;
  -o-object-fit: contain;
     object-fit: contain;
}

.cart-item h4 {
  font-size: 0.85rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}

.cart-item h5 {
  margin: 0.5rem 0;
  letter-spacing: var(--mainSpacing);
}

.item-amount {
  text-align: center;
}

.remove-item {
  color: grey;
  cursor: pointer;
}

.fa-chevron-up,
.fa-chevron-down {
  color: var(--primaryColor);
  cursor: pointer;
}

/*---------- End of Cart Item -------------------- */
.cart-footer {
  margin-top: 2rem;
  letter-spacing: var(--mainSpacing);
  text-align: center;
}

.cart-footer h3 {
  text-transform: capitalize;
  margin-bottom: 1rem;
}

/* --------------- End of Cart ---------------- */
/* --------------- Products ---------------- */
.products {
  padding: 4rem 0;
}

.section-title h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
}

.products-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  background: rgb(245, 245, 245);
  padding: 30px;
}
.products-center article {
  display: flex;
  flex-direction: column;
  flex: 0 1 30%;
  align-items: center;
  border: rgb(189, 189, 189) 1px solid;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  max-width: 240px;
  padding-top: 10px;
}
.products-center article:nth-child(1) {
  position: relative;
}
.products-center article:nth-child(1)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(2) {
  position: relative;
}
.products-center article:nth-child(2)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(5) {
  position: relative;
}
.products-center article:nth-child(5)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(7) {
  position: relative;
}
.products-center article:nth-child(7)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(8) {
  position: relative;
}
.products-center article:nth-child(8)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(11) {
  position: relative;
}
.products-center article:nth-child(11)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(14) {
  position: relative;
}
.products-center article:nth-child(14)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}
.products-center article:nth-child(17) {
  position: relative;
}
.products-center article:nth-child(17)::after {
  content: "Хит продаж";
  background-color: rgb(255, 245, 157);
  width: 70px;
  height: 70px;
  position: absolute;
  right: -10px;
  top: -15px;
  border-radius: 100%;
  text-align: center;
  padding: 5px;
  rotate: 25deg;
}

.img-container {
  position: relative;
  overflow: hidden;
}

.bag-btn {
  background: rgb(251, 192, 45);
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  letter-spacing: var(--mainSpacing);
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
}

.fa-shopping-cart {
  margin-right: 0.5rem;
}

.img-container:hover .bag-btn {
  transform: translateX(0);
}

.product-img {
  width: 100%;
  transition: var(--mainTransition);
  -o-object-fit: cover;
     object-fit: cover;
}

.img-container:hover .product-img {
  opacity: 0.5;
}

.product h3 {
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 1rem;
  letter-spacing: var(--mainSpacing);
  text-align: center;
}

.product h4 {
  margin-top: 0.7rem;
  letter-spacing: var(--mainSpacing);
  color: var(--primaryColor);
  text-align: center;
}

.cart__order {
  display: none;
  padding: 1rem 3rem;
  letter-spacing: var(--mainSpacing);
  font-size: 1rem;
  background: var(--primaryColor);
  color: var(--mainBlack);
  border: 1px solid var(--primaryColor);
  transition: var(--mainTransition);
  cursor: pointer;
  margin-top: auto;
}

.cart__order.active {
  display: block;
}

.order-close {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}

.order__wrapper {
  width: 50vw;
  height: 70vh;
  background-color: rgb(209, 181, 152);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 999;
}

.order__wrapper.active {
  display: block;
}

.order__form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.order__form label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-transform: capitalize;
  font-size: 1.1rem;
  letter-spacing: var(--mainSpacing);
}

.order__form label input {
  max-width: 350px;
  padding: 15px 10px;
  outline: none;
  border: 1px solid black;
  font-size: 1.3rem;
}

.order__send-btn {
  margin-top: 10px;
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  font-size: 1rem;
  background: var(--primaryColor);
  color: var(--mainBlack);
  border: 1px solid var(--primaryColor);
  transition: var(--mainTransition);
  cursor: pointer;
}

.swiper {
  width: 600px;
  height: 300px;
}

.fg-price {
  margin-bottom: 15px;
}/*# sourceMappingURL=style.css.map */
