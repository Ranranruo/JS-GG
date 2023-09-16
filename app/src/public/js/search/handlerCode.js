'use strict'
import { IdToName } from './data.js'

function changeHtmlCode(request, userData, moreData) {
  let url = {
    profileicon() {
      let profileicon = document.getElementById('profileicon');
      let url = `http://ddragon.leagueoflegends.com/cdn/13.17.1/img/profileicon/${userData.profileIconId}.png`;
      profileicon.setAttribute('src', url);
    },
    username() {
      let username = document.getElementById('username')
      let namedata = userData.name;
      username.innerText = namedata;
    },
    userlevel() {
      let userlevel = document.getElementById('userlevel')
      let leveldata = `Lv.${userData.level}`;
      userlevel.innerText = leveldata;
    },
    championmastery() {
      let datalength = userData.championmastery.length;
      let championicon
      let championlevel
      let championname
      let championpoint
      
      let iconurl
      let levelurl
      let namedata
      let pointdata
      for (let i = 0; i < datalength; ++i) {
        championicon = document.getElementById(`championicon${i}`);
        championlevel = document.getElementById(`championlevel${i}`);
        championname = document.getElementById(`championname${i}`);
        championpoint = document.getElementById(`championpoint${i}`);

        iconurl = `http://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${IdToName(userData.championmastery[i].championId)}.png`;
        levelurl = (userData.championmastery[i].championLevel > 3) ? `https://raw.communitydragon.org/latest/game/assets/loadouts/summoneremotes/rewards/mastery/em_champ_mastery_0${userData.championmastery[i].championLevel}_selector.png` : '#'
        namedata = IdToName(userData.championmastery[i].championId);
        pointdata = `${userData.championmastery[i].championPoints} 점`;
        
        championicon.setAttribute('src', iconurl);
        championlevel.setAttribute('src', levelurl);
        championname.innerText = namedata;
        championpoint.innerText = pointdata;
      }
    },
    ranked() {
      let datalength = userData.ranked.length;
      let queuetype;
      let soloranked = "RANKED_SOLO_5x5";
      let flexranked = "RANKED_FLEX_SR";

      let sololppiechart = document.getElementById('sololppiechart');
      let soloemblem = document.getElementById('soloemblem');
      let solowincount = document.getElementById('solowincount');
      let solowinrate = document.getElementById('solowinrate');
      let sololp = document.getElementById('sololp');
      let solotier = document.getElementById('solotier');

      let flexlppiechart = document.getElementById('flexlppiechart');
      let flexemblem = document.getElementById('flexemblem');
      let flexwincount = document.getElementById('flexwincount');
      let flexwinrate = document.getElementById('flexwinrate');
      let flexlp = document.getElementById('flexlp');
      let flextier = document.getElementById('flextier');

      let lppiechartdata;
      let emblemurl;
      let wincountdata;
      let winratedata;
      let lpdata;
      let tierdata;
      for (let i = 0; i < datalength; ++i) {
        queuetype = userData.ranked[i].queueType;
        if (queuetype == soloranked) { // 솔로랭크
          lppiechartdata = `conic-gradient(var(--color--blue01) 0% ${userData.ranked[i].leaguePoints}%, var(--color--white03) ${userData.ranked[i].leaguePoints}% 100%)`;
          emblemurl = `./image/home/search/rankedemblem/${userData.ranked[i].tier}.png`;
          wincountdata = `${userData.ranked[i].wins + userData.ranked[i].losses}전 ${userData.ranked[i].wins}승 ${userData.ranked[i].losses}패`
          winratedata = `승률 ${Math.round((userData.ranked[i].wins / (userData.ranked[i].wins + userData.ranked[i].losses)) * 100)}%`;
          lpdata = `${userData.ranked[i].leaguePoints} LP`;
          tierdata = `${userData.ranked[i].tier+" "+userData.ranked[i].rank}`;
          
          sololppiechart.style.background = lppiechartdata;
          soloemblem.setAttribute('src', emblemurl)
          solowincount.innerText = wincountdata;
          solowinrate.innerText = winratedata;
          sololp.innerText = lpdata;
          solotier.innerText = tierdata;
        }
        else if(queuetype == flexranked){
          lppiechartdata = `conic-gradient(var(--color--blue01) 0% ${userData.ranked[i].leaguePoints}%, var(--color--white03) ${userData.ranked[i].leaguePoints}% 100%)`;
          emblemurl = `./image/home/search/rankedemblem/${userData.ranked[i].tier}.png`;
          wincountdata = `${userData.ranked[i].wins + userData.ranked[i].losses}전 ${userData.ranked[i].wins}승 ${userData.ranked[i].losses}패`;
          winratedata = `승률 ${Math.round((userData.ranked[i].wins / (userData.ranked[i].wins + userData.ranked[i].losses)) * 100)}%`;
          lpdata = `${userData.ranked[i].leaguePoints} LP`;
          tierdata = `${userData.ranked[i].tier+" "+userData.ranked[i].rank}`;
          
          flexlppiechart.style.background = lppiechartdata;
          flexemblem.setAttribute('src', emblemurl)
          flexwincount.innerText = wincountdata;
          flexwinrate.innerText = winratedata;
          flexlp.innerText = lpdata;
          flextier.innerText = tierdata;
        }
      }
    },
  }
  url[request]();
}
export { changeHtmlCode };
