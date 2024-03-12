const jwt=require('jsonwebtoken');
const secret='cardmovie@123$';

function setUserLogin(user){
    user=user[0];
    console.log('user1:',user); 

return jwt.sign({
    _id:user._id,
    email:user.email,
},secret)
}

module.exports={setUserLogin}