function expandMenu(){
  console.log("Storys Tab Re-Added!");
  var menu = document.querySelector("#root > div._1R67g._3YKTw > div > div._1JSRd._3SuOC > div._3bTT7");
  menu.innerHTML += '<div class="_3LfJs _2ulLR"><a class="_3zmPR" href="./stories" rel="noopener noreferrer noopener" target="/stories" tabindex="0"><span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ"><div class="AMXUp"><img class="ZFBAG" src="https://static.wikia.nocookie.net/duolingo/images/9/9a/Stories-new.svg"></div><span class="_1lJDk">Stories</span></span></a></div>';
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

    var sidebar = document.querySelector("#root > div._1R67g._3YKTw");

    var logout = `
    <div class="_1JSRd _3SuOC logout">
          <a class="_3zmPR" href="https://www.duolingo.com/logout" rel="noopener noreferrer noopener" target="_blank" tabindex="0">
            <span class="_3BxbA _2q30B _23V08 _1R__D _1eTnJ">
              <div class="AMXUp"><img class="ZFBAG" src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg"></div>
              <span class="_1lJDk">Logout</span>
            </span>
          </a>
    </div>`;

    sidebar.insertAdjacentHTML("beforeend", logout);

}

expandMenu()