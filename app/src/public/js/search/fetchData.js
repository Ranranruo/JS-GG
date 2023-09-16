import { urlData } from './data.js';
import { userData } from './data.js';

function fetchFromUrl(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('오류 발생:', error);
        });
}
function fetchSummoner(userData) {
    return new Promise((res,rej)=>{
        fetchFromUrl(urlData('summoner'))
        .then(data=>{
            userData.name = data.name;
            userData.level = data.summonerLevel;
            userData.profileIconId = data.profileIconId;
            userData.puuid = data.puuid;
            userData.id = data.id;
        })
        .then(() => {res(userData);})      
    })
}
function fetchChampionMastery(userData){
    return new Promise((res,rej)=>{
        fetchFromUrl(urlData('championMastery', userData))
        .then((data)=>{
            userData.championmastery = data;
        })
        .then((data)=>{res(userData);})        
    })
}
function fetchRanked(userData){
    return new Promise((res, rej)=>{
        fetchFromUrl(urlData('ranked', userData))
        .then((data)=>{
            userData.ranked = data;
        })
        .then((data)=>{res(userData);})
    })
}
function fetchAll(){
    return new Promise((res, rej)=>{
        fetchSummoner(userData)
        .then((data)=> {return fetchChampionMastery(data)})
        .then((data)=> {return fetchRanked(data)})
        .then((data)=>{res(data)})
        .catch(error => {
            console.error('오류 발생:', error);
        })
    })
}
export { fetchAll };