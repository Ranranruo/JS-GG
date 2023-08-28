'use strict';

const homepage = (req, res) =>{
    res.render("home/indexPC");
}
const loginpage = (req,res)=>{
    res.render("home/login");
}

module.exports = {
    homepage,
    loginpage
}