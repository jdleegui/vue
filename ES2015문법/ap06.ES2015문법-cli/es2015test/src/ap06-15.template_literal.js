/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
    
*/
const string1 = '안녕하세요';
const string2 = '반갑습니다';
const greeting = `${string1}${string2}`;

console.log(greeting);

const product = { name: `도서`, price: `420001` };
const message = `제품 ${product.name} 가격 = ${product.price}`;
console.log(message);

