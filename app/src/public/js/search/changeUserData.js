import { fetchAll } from './fetchData.js';
import { handlerHtml } from './handlers.js';
function changeUserData(){
    fetchAll().then((data)=>{handlerHtml(data)});
}
export { changeUserData };