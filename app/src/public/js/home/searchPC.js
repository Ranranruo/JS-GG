import { changeUserData } from '../search/changeUserData.js'
changeUserData();
const SEARCH_BTN = document.querySelector('#search-input');
SEARCH_BTN.addEventListener("keydown", (event)=>{
  if(event.keyCode == 13){
    window.location.assign(`/search:${SEARCH_BTN.value}`);
  }
});
