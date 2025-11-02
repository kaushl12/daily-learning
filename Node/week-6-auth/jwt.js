const jwt=require('jsonwebtoken')

const JWT_SECERT="bsjgkc"
let user="kaushal"

const data=jwt.verify("eyJhbGciOiJIUzI1NiJ9.a2F1c2hhbA.dLppZ1gfhYclLG0mLVxUJCRQKRZJPjZJR3dCNSFN2PE",JWT_SECERT)
console.log(data);
// eyJhbGciOiJIUzI1NiJ9.a2F1c2hhbA.swLunEPht8o4adUNeRK0uSEKGJFIvzdrYCCvtTOPpyw