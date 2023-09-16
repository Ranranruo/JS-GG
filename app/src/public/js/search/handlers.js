import { changeHtmlCode } from './handlerCode.js'
function handlerHtml(userData){
    return new Promise((res, rej)=>{
        console.log(userData);
        changeHtmlCode('profileicon', userData);
        changeHtmlCode('username', userData);
        changeHtmlCode('userlevel', userData);
        changeHtmlCode('championmastery', userData); 
        changeHtmlCode('ranked', userData);    
    })
}
export { handlerHtml };
