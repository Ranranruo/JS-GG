'use strict';

const homepage = (req, res) =>{
    res.render("home/index");
}
const loginpage = (req,res)=>{
    res.render("home/login");
}

module.exports = {
    homepage,
    loginpage
}