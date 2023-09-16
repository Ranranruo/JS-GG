'use strict';

const homepage = (req, res) =>{
    res.render("home/indexPC");
}
const searchPC = (req,res)=>{
    res.render("home/searchPC");
}
const findparty = (req,res)=>{
    res.render("home/findpartyPC")
}

module.exports = {
    homepage,
    searchPC,
    findparty,
}