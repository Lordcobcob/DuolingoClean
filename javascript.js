
function expandMenu(){


  var sidebar = document.querySelector("#root > div._1R67g._3YKTw");
  var menu = document.querySelector("#root > div._1R67g._3YKTw > div > div._1JSRd._3SuOC > div._3bTT7");

  // Reload page if its inside a lesson and the logout button is still there
  if (window.location.href.indexOf('/lesson') !== -1){
    if (document.body.innerHTML.indexOf('<div class="_1JSRd _3SuOC logout">') !== -1){
      location.reload();
    }
    return;
  }

  // Exit function if the Stories button is already there to not keep re-adding it
  if (document.body.innerHTML.indexOf('<span class="_1lJDk">Stories</span>') !== -1){
      return;
  }



  console.log("Storys Tab Re-Added!");
  menu.innerHTML += '<div class="_3LfJs _2ulLR"><a class="_3zmPR" href="https://www.duolingo.com/stories" rel="noopener noreferrer noopener" target="/stories" tabindex="0"><span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ"><div class="AMXUp"><img class="ZFBAG" src="https://static.wikia.nocookie.net/duolingo/images/9/9a/Stories-new.svg"></div><span class="_1lJDk">Stories</span></span></a></div>';
  if (window.location.href.indexOf('/stories') !== -1) {
  
      var anchors = document.querySelectorAll("a");
      anchors.forEach(a => {
        if (window.location.href.indexOf('/stories') !== -1) {
          var stories = document.querySelector("#root > div._1R67g._3YKTw > div > div._1JSRd._3SuOC > div._3bTT7 > div:nth-child(7)");
          stories.classList.add("_2-Cde");
        }
        if (window.location.href.indexOf('/stories') !== -1) {
          var storiesSpan = document.querySelector("#root > div._1R67g._3YKTw > div > div._1JSRd._3SuOC > div._3bTT7 > div:nth-child(7) > a > span");
          storiesSpan.classList.remove("_3BxbA");
          storiesSpan.classList.remove("_2q30B");
          storiesSpan.classList.remove("_23V08");
          storiesSpan.classList.remove("_1R__D");
          storiesSpan.classList.remove("_1eTnJ");
          storiesSpan.classList.add("_3BxbA");
          storiesSpan.classList.add("_2q30B");
          storiesSpan.classList.add("_23V08");
          storiesSpan.classList.add("_2BPAp");
          storiesSpan.classList.add("_1R__D");

        }


      });
    }

    console.log("Tips Tab Testing");
    console.log(window.location.href.indexOf('/guidebook'));
    menu.innerHTML += '<div class="_3LfJs _2ulLR"><a class="_3zmPR" href="/guidebook/es/1" rel="noopener noreferrer noopener" target="/guidebook/es/1" tabindex="0"><span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ"><div class="AMXUp"><img class="ZFBAG" src="https://static.wikia.nocookie.net/duolingo/images/4/40/Story-Drawing_in_the_Park.svg/"></div><span class="_1lJDk">Tips</span></span></a></div>';
    console.log(window.location.href.indexOf('/guidebook'));

    if (window.location.href.indexOf('/guidebook') != -1) {
      console.log(window.location.href.indexOf('/guidebook'));

      var tips;
      var tipsSpan;
      var learnSpan;
/*
      document.querySelectorAll("span").forEach(span => {
        if (span.innerText == "Tips"){
          tips = span;
        }
      });

      if (tips !== null){
        tips.classList.add("_2-Cde");

      }
*/
      var spans = document.querySelectorAll("span");
      for (var i = 0, element; element = spans[i]; i++) {
        if (element.innerHTML.indexOf("Tips") !== -1){
          tipsSpan = element;
          break;
        }
      }

      for (var i = 0, element; element = spans[i]; i++) {
        if (element.innerHTML.indexOf("Learn") !== -1){
          learnSpan = element;
          break;
        }
      }

      console.log(learnSpan);
      console.log(tipsSpan);


      tipsSpan.classList.remove("_2q30B");
      tipsSpan.classList.remove("_23V08");
      tipsSpan.classList.remove("_1R__D");
      tipsSpan.classList.remove("_1eTnJ");
      tipsSpan.classList.add("_3BxbA");
      tipsSpan.classList.add("_2q30B");
      tipsSpan.classList.add("_23V08");
      tipsSpan.classList.add("_2BPAp");
      tipsSpan.classList.add("_1R__D");


      learnSpan.setAttributeNS(null, 'class', '_3BxbA _2q30B _23V08 _1R__D _1eTnJ');
      learnSpan.classList.add("_3BxbA");
      learnSpan.classList.add("_2q30B");
      learnSpan.classList.add("_23V08");
      learnSpan.classList.add("_1R__D");
      learnSpan.classList.add("_1eTnJ");

  }

    var logout = `
    <div class="_1JSRd _3SuOC help">
          <a class="_3zmPR" href="https://support.duolingo.com/hc/en-us" rel="noopener noreferrer noopener" target="_blank" tabindex="0">
            <span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ">
              <div class="AMXUp"><img class="ZFBAG" src="https://static.wikia.nocookie.net/duolingo/images/f/f7/Story-The_Hacker.svg/"></div>
              <span class="_1lJDk">Support</span>
            </span>
          </a>
    </div>
    
    <div class="_1JSRd _3SuOC settings">
          <a class="_3zmPR" href="https://www.duolingo.com/settings/account" rel="noopener noreferrer noopener" target="_blank" tabindex="0">
            <span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ">
              <div class="AMXUp"><img class="ZFBAG" src="https://d35aaqx5ub95lt.cloudfront.net/images/super/88cab8339223a143898e0704f480b875.svg"></div>
              <span class="_1lJDk">Settings</span>
            </span>
          </a>
    </div>


    <div class="_1JSRd _3SuOC logout">
          <a class="_3zmPR" href="https://www.duolingo.com/logout" rel="noopener noreferrer noopener" target="_blank" tabindex="0">
            <span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ">
              <div class="AMXUp"><img class="ZFBAG" src="https://i.imgur.com/LAr4CQ9.png"></div>
              <span class="_1lJDk">Logout</span>
            </span>
          </a>
    </div>`;

    


    sidebar.insertAdjacentHTML("beforeend", logout);

}

setInterval(function() {
  expandMenu();
}, 1000);

function getTips(){

  var req = new XMLHttpRequest();
  req.open('GET', document.location, false);
  req.send(null);
  var headers = req.getAllResponseHeaders().toLowerCase();

  // Convert the header string into an array
  // of individual headers
  const arr = headers.trim().split(/[\r\n]+/);

  // Create a map of header names to values
  const headerMap = {};
  arr.forEach((line) => {
  const parts = line.split(': ');
  const header = parts.shift();
  const value = parts.join(': ');
  headerMap[header] = value;
  });

  const userID = headerMap["x-uid"];

  var reqTips = new XMLHttpRequest();
  reqTips.open("GET", "https://www.duolingo.com/2017-06-30/users/" + userID + "?fields=currentCourse");
  reqTips.send();
  console.log(userID)
  var tips = '<div class="_3cZIJ _2di58"><a class="_2xq2g _1QkXc" href="/learn"><div data-test="back-arrow" class="-qc09"><div class="_2sPx0 _2jNpf _1G1lu _3LXZ7"></div><div class="_2rUPd">Home</div></div></a></div><div>';
  reqTips.onload = () => {
     console.log(reqTips);
     if (reqTips.status == 200){
        console.log(JSON.parse(reqTips.response))
        var skills = JSON.parse(reqTips.response).currentCourse.skills;
        skills.forEach(skill => {
          if((skill[0].tipsAndNotes) != null) {
             tips += "</div>";
             tips += skill[0].tipsAndNotes;
          };
       });
        tips += "</div>";
     
        var text = document.querySelector("#root > div._1R67g._3YKTw > div > div:nth-child(2) > div._2rYrl > div._33Mo9 > div");
        text.innerHTML = tips;
     
     } else {
        console.log("error");
     }
  }
}


var images = document.querySelectorAll("img._2SLh1");
images.forEach(i => {
  i.src = "https://svgur.com/i/oQW.svg";
})


var images = document.querySelectorAll("img._2G02F");
images.forEach(i => {
  i.src = "https://svgur.com/i/oRX.svg";
})

if (window.location.href.indexOf('/guidebook/') !== -1) {
  getTips();
}


  
