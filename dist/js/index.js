!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var r,a=function(){return function(e,t,n,r,a,o,i){this.name=e,this.appid=t,this.thumbnail=n,this.launcher=r,this.launcherID=a,this.isInstalled=o,this.localPath=i}}();!function(e){e[e.LocalOnly=0]="LocalOnly",e[e.Steam=1]="Steam"}(r||(r={}))},function(e,t,n){"use strict";n.r(t),n.d(t,"setup",function(){return l});var r,a,o=n(0),i=n(2),s=n(4).ipcRenderer,c=5,u=0;function l(){c=5,r=null,u=0,[],a=null,c=0,r=document.querySelector(".carousel"),$.getJSON("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid="+Object(i.a)()+"&format=json",JSON,function(e){if(0!=e.response.total_count)for(var t=[],n=0;n<e.response.total_count;n++){var r=e.response.games[n];t[n]=new f(r.appid,r.name,r.img_logo_url),n+1==e.response.total_count&&d(t)}else console.log("no recent played games")})}function d(e){for(var t=document.getElementsByClassName("carousel__cell"),n=0;n<t.length;n++)n<e.length?(t[n].src="https://steamcdn-a.akamaihd.net/steam/apps/"+e[n].AppId+"/header.jpg",t[n].dataset.game=JSON.stringify(new o.a(null,e[n].AppId,t[n].srcn,o.b.Steam,null,null,null)),t[n].id=n.toString(),t[n].addEventListener("click",function(){p(event.target,!1)})):t[n].classList.add("disabled");var r=document.createElement("Useless-div");r.id=Math.round(e.length/2).toString(),p(r,!1),r.remove}function p(e,t){null==a&&(a=e),a!=e&&a.classList.remove("higlight"),u=40*(c-e.id)+u,c!=e.id||0!=t?(e.classList.add("higlight"),r.style.transform="translateZ(-1000px) rotateY("+u+"deg)",c=e.id,a=e):s.send("LaunchGame",e.dataset.game)}var f=function(){return function(e,t,n){this.AppId=e,this.name=t,this.thumb=n}}()},function(e,t,n){"use strict";function r(){var e=navigator.userAgent.toLowerCase();if(console.log("Agent: "+e),e.indexOf(" electron/")>-1){var t=new(n(3))("account").get("steam");return null!=t?t:"76561198196430655"}return console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW"),"76561198196430655"}n.d(t,"a",function(){return r})},function(e,t,n){const r=n(4),a=n(8),o=n(9);e.exports=class{constructor(e){this.path=a.join((r.app||r.remote.app).getPath("userData"),e+".json"),this.data=function(e){try{return JSON.parse(o.readFileSync(e))}catch{return{}}}(this.path)}get(e){return this.data[e]}set(e,t){this.data[e]=t,o.writeFileSync(this.path,JSON.stringify(this.data))}}},function(e,t){e.exports=require("electron")},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n(3);function i(){var e;e=r.a(),$.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid="+e+"&include_appinfo=1&include_played_free_games=1&appids_filter=&format=json",function(e){for(var t=[],n=0;n<e.response.game_count;n++){var r=e.response.games[n],i="https://steamcdn-a.akamaihd.net/steam/apps/"+r.appid+"/header.jpg";t[n]=new a.a(r.name,r.appid,i,a.b.Steam,null,!0,null)}var s=new o("Games");s.set("games",t)})}n.d(t,"populateGrid",function(){return c});var s=n(4).ipcRenderer;function c(){var e,t=(e=n(3),navigator.userAgent.toLowerCase().indexOf(" electron/")>-1?new e("Games").get("games"):(console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW"),null));i();for(var r=document.getElementById("library"),a=function(){var e=t[o],n="<img src='"+e.thumbnail+"'/> <p>"+e.name+"</p>",a=document.createElement("div");a.className="game",a.onclick=function(){var t;t=e,s.send("LaunchGame",t)},e.isInstalled&&(n+='<img src="../../dist/drawables/installed.svg" style="position: absolute; top: 0; right: 0; padding: 5px;"/>'),a.innerHTML=n,null!=r&&r.appendChild(a)},o=0;o<t.length;o++)a()}},function(e,t,n){n(7),e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(5);function o(){$("#content").load("fragments/home.html",function(){Object(r.setup)(),Object(a.populateGrid)()}),document.getElementById("title").innerHTML="EAU"}$(function(){o(),document.getElementById("title").onclick=function(){o()},document.getElementById("searchBtn").onclick=function(){var e;(e=document.getElementById("searchInput")).value="",e.focus()},document.getElementById("settingsBtn").onclick=function(){$("#content").load("fragments/settings.html",function(){}),document.getElementById("title").innerHTML="<i class='icon fas fa-arrow-left'></i>  Settings"}}),n(5),n(1)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0Nhcm91c2VsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Ub2tlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0dhbWVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0xpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIkdhbWUiLCJsYXVuY2hlciIsImFwcGlkIiwidGh1bWJuYWlsIiwibGF1bmNoZXJJRCIsImlzSW5zdGFsbGVkIiwibG9jYWxQYXRoIiwidGhpcyIsInNldHVwIiwiY2Fyb3VzZWwiLCJsYXN0c2VsZWN0ZWQiLCJfR2FtZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX1Rva2VuTWFuYWdlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiaXBjUmVuZGVyZXIiLCJzZWxlY3RlZEluZGV4IiwiYW5nbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkIiwiZ2V0SlNPTiIsIkpTT04iLCJkYXRhIiwicmVzcG9uc2UiLCJ0b3RhbF9jb3VudCIsIlNlbGVjdGVkUmVjZW50R2FtZXMiLCJnYW1lIiwiZ2FtZXMiLCJHYW1lTWV0YSIsImltZ19sb2dvX3VybCIsImluaUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwic3JjIiwiQXBwSWQiLCJkYXRhc2V0Iiwic3RyaW5naWZ5Iiwic3JjbiIsIlN0ZWFtIiwiaWQiLCJ0b1N0cmluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3RhdGVDYXJvdXNlbCIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlIiwiYnlwYXNzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZW5kIiwidGh1bWIiLCJnZXRTdGVhbVRva2VuIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwidGtuIiwiZWxlY3Ryb24iLCJwYXRoIiwiZnMiLCJbb2JqZWN0IE9iamVjdF0iLCJqb2luIiwiYXBwIiwicmVtb3RlIiwiZ2V0UGF0aCIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicmVhZEZpbGUiLCJ3cml0ZUZpbGVTeW5jIiwicmVxdWlyZSIsIlN0b3JlIiwiVXBkYXRlR2FtZXNKU09OIiwic3RlYW1Ub2tlbiIsIlRva2VuTWFuYWdlciIsImdhbWVfY291bnQiLCJnYW1lRGF0YSIsInN0b3JlIiwic2V0IiwicG9wdWxhdGVHcmlkIiwiZ3JpZCIsImdldEVsZW1lbnRCeUlkIiwiX2xvb3BfMSIsImdyaWRIdG1sIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsIm9uY2xpY2siLCJnYW1lQ2xpY2tlZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiX0Nhcm91c2VsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfTGlicmFyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiaG9tZSIsImxvYWQiLCJpbnB1dCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQVgsT0FBQVksT0FBQSxNQUdBLEdBRkExQixFQUFBa0IsRUFBQU8sR0FDQVgsT0FBQUMsZUFBQVUsRUFBQSxXQUF5Q1QsWUFBQSxFQUFBSyxVQUN6QyxFQUFBRSxHQUFB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WEFyRSxFQUFBcEIsY0FDQXFGLEdBQUEsK0dBQ0FDLEVBQUFJLFVBQUFMLEVBQ0EsTUFBQUgsR0FDQUEsRUFBQVMsWUFBQUwsSUFFQTVILEVBQUEsRUFBbUJBLEVBQUEyRCxFQUFBUSxPQUFrQm5FLElBQ3JDMEgsd0VDbkJBOUgsRUFBQWtCLEVBQUFrQixHQUFBLElBQUFrRyxFQUFBdEksRUFBQSxHQUFBdUksRUFBQXZJLEVBQUEsR0FTQSxTQUFBd0ksSUFDQWpGLEVBQUEsWUFBQWtGLEtBQUEsaUNBQ1EzSCxPQUFBd0gsRUFBQSxNQUFBeEgsR0FDQUEsT0FBQXlILEVBQUEsYUFBQXpILEtBRVJ1QyxTQUFBd0UsZUFBQSxTQUFBTyxVQUFBLE1BWEE3RSxFQUFBLFdBQ0FpRixJQUNBbkYsU0FBQXdFLGVBQUEsU0FBQUssUUFBQSxXQUE0RE0sS0FDNURuRixTQUFBd0UsZUFBQSxhQUFBSyxRQUFBLFdBVUEsSUFDQVEsS0FBQXJGLFNBQUF3RSxlQUFBLGdCQUNBeEcsTUFBQSxHQUNBcUgsRUFBQUMsU0FaQXRGLFNBQUF3RSxlQUFBLGVBQUFLLFFBQUEsV0FlQTNFLEVBQUEsWUFBQWtGLEtBQUEsd0NBRUFwRixTQUFBd0UsZUFBQSxTQUFBTyxVQUFBLHNEQUVBcEksRUFBUSxHQUNSQSxFQUFRLGtCQzNCUkcsRUFBQUQsUUFBQWdILFFBQUEsdUJDQUEvRyxFQUFBRCxRQUFBZ0gsUUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsInZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdhbWUobmFtZSwgYXBwaWQsIHRodW1ibmFpbCwgbGF1bmNoZXIsIGxhdW5jaGVySUQsIGlzSW5zdGFsbGVkLCBsb2NhbFBhdGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hcHBpZCA9IGFwcGlkO1xuICAgICAgICB0aGlzLnRodW1ibmFpbCA9IHRodW1ibmFpbDtcbiAgICAgICAgdGhpcy5sYXVuY2hlciA9IGxhdW5jaGVyO1xuICAgICAgICB0aGlzLmxhdW5jaGVySUQgPSBsYXVuY2hlcklEO1xuICAgICAgICB0aGlzLmlzSW5zdGFsbGVkID0gaXNJbnN0YWxsZWQ7XG4gICAgICAgIHRoaXMubG9jYWxQYXRoID0gbG9jYWxQYXRoO1xuICAgIH1cbiAgICByZXR1cm4gR2FtZTtcbn0oKSk7XG5leHBvcnQgeyBHYW1lIH07XG5leHBvcnQgdmFyIGxhdW5jaGVyO1xuKGZ1bmN0aW9uIChsYXVuY2hlcikge1xuICAgIGxhdW5jaGVyW2xhdW5jaGVyW1wiTG9jYWxPbmx5XCJdID0gMF0gPSBcIkxvY2FsT25seVwiO1xuICAgIGxhdW5jaGVyW2xhdW5jaGVyW1wiU3RlYW1cIl0gPSAxXSA9IFwiU3RlYW1cIjtcbn0pKGxhdW5jaGVyIHx8IChsYXVuY2hlciA9IHt9KSk7XG4iLCIvL2ltcG9ydCB7R2FtZX0gZnJvbSBcIi4vTGlicmFyeVwiXG5pbXBvcnQgeyBHYW1lLCBsYXVuY2hlciB9IGZyb20gXCIuL0dhbWVcIjtcbmltcG9ydCB7IGdldFN0ZWFtVG9rZW4gfSBmcm9tIFwiLi9Ub2tlbk1hbmFnZXJcIjtcbnZhciBpcGNSZW5kZXJlciA9IHJlcXVpcmUoJ2VsZWN0cm9uJykuaXBjUmVuZGVyZXI7XG52YXIgc2VsZWN0ZWRJbmRleCA9IDU7XG52YXIgY2Fyb3VzZWw7XG52YXIgYW5nbGUgPSAwO1xudmFyIFNlbGVjdGVkUmVjZW50R2FtZXMgPSBbXTtcbnZhciBsYXN0c2VsZWN0ZWQ7XG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgc2VsZWN0ZWRJbmRleCA9IDU7XG4gICAgY2Fyb3VzZWwgPSBudWxsO1xuICAgIGFuZ2xlID0gMDtcbiAgICBTZWxlY3RlZFJlY2VudEdhbWVzID0gW107XG4gICAgbGFzdHNlbGVjdGVkID0gbnVsbDtcbiAgICBzZWxlY3RlZEluZGV4ID0gMDtcbiAgICAvL0dldCByZWNlbnQgcGxheWVkIGdhbWUgZnJvbSBzdGVhbS8vXG4gICAgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuICAgICQuZ2V0SlNPTihcImh0dHA6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JUGxheWVyU2VydmljZS9HZXRSZWNlbnRseVBsYXllZEdhbWVzL3YwMDAxLz9rZXk9N0MyMThFOEQxMzQ3QzNDRDZDQjgxMTdFNUVENTMzQkMmc3RlYW1pZD1cIiArIGdldFN0ZWFtVG9rZW4oKSArIFwiJmZvcm1hdD1qc29uXCIsIEpTT04sIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnRvdGFsX2NvdW50ID09IDApIHsgLy8gbnVsbCBjaGVjayB0byBwcmV2ZW50IGVycm9yIHRoZXJlIGlzIG5vIHJlY2VudCBnYW1lXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHJlY2VudCBwbGF5ZWQgZ2FtZXNcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFNlbGVjdGVkUmVjZW50R2FtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJlc3BvbnNlLnRvdGFsX2NvdW50OyBpKyspIC8vT2JqZWN0LmtleXMoZGF0YS5yZXNwb25zZS5nYW1lc1swXSkgY29tcHRlIGxlIG5vbWJyZSBkZSBjbMOpIGEgcGFydGlyIGRlIDBcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBnYW1lID0gZGF0YS5yZXNwb25zZS5nYW1lc1tpXTtcbiAgICAgICAgICAgIFNlbGVjdGVkUmVjZW50R2FtZXNbaV0gPSBuZXcgR2FtZU1ldGEoZ2FtZS5hcHBpZCwgZ2FtZS5uYW1lLCBnYW1lLmltZ19sb2dvX3VybCk7XG4gICAgICAgICAgICBpZiAoaSArIDEgPT0gZGF0YS5yZXNwb25zZS50b3RhbF9jb3VudCkge1xuICAgICAgICAgICAgICAgIGluaUNhbGxiYWNrKFNlbGVjdGVkUmVjZW50R2FtZXMpO1xuICAgICAgICAgICAgfSAvL2xhdW5jaCBzY3JpcHQgdXNlciB2YXJpYWJsZSBhZnRlciBhbGwgY2FsbGJhY2tzIGFyZSBmaW5pc2hlZFxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbmlDYWxsYmFjayhTZWxlY3RlZFJlY2VudEdhbWVzKSB7XG4gICAgLy9BZGQgcmVjZW50IHBsYXllZCBnYW1lIHRvIGNhcm91c2VsLy9cbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJvdXNlbF9fY2VsbFwiKTsgLy9hcyBhbnkgYmVjYXVzZSB3ZSB3YW50IGEgSFRNTGltYWdlIGNvbGxlY3Rpb24gYW5kIGh0bWxlbGVtZW50IGlzIG5vdCBnZW5lcmljXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSAvL2xvb3AgaW50byBjYXJvdXNlbF9jZWxsIHRvIGFkZCBldmVudCBsaXN0ZW5lciArIHRodW1iXG4gICAgIHtcbiAgICAgICAgaWYgKGkgPCBTZWxlY3RlZFJlY2VudEdhbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlzdFtpXS5zcmMgPSBcImh0dHBzOi8vc3RlYW1jZG4tYS5ha2FtYWloZC5uZXQvc3RlYW0vYXBwcy9cIiArIFNlbGVjdGVkUmVjZW50R2FtZXNbaV0uQXBwSWQgKyBcIi9oZWFkZXIuanBnXCI7XG4gICAgICAgICAgICBsaXN0W2ldLmRhdGFzZXQuZ2FtZSA9IEpTT04uc3RyaW5naWZ5KG5ldyBHYW1lKG51bGwsIFNlbGVjdGVkUmVjZW50R2FtZXNbaV0uQXBwSWQsIGxpc3RbaV0uc3JjbiwgbGF1bmNoZXIuU3RlYW0sIG51bGwsIG51bGwsIG51bGwpKTtcbiAgICAgICAgICAgIGxpc3RbaV0uaWQgPSBpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJvdGF0ZUNhcm91c2VsKGV2LCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RbaV0uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VzZWxlc3MtZGl2Jyk7XG4gICAgZWwuaWQgPSBNYXRoLnJvdW5kKFNlbGVjdGVkUmVjZW50R2FtZXMubGVuZ3RoIC8gMikudG9TdHJpbmcoKTsgLy8gdHJpY2sgdGhlIGNhcm91c2Vscm9hdGUgdG8gd29yayBldmVuIHdpaG91dCBhIFRhcmdldEV2ZW50IHJlZmVyZW5jZVxuICAgIHJvdGF0ZUNhcm91c2VsKGVsLCBmYWxzZSk7XG4gICAgZWwucmVtb3ZlO1xufVxuZnVuY3Rpb24gcm90YXRlQ2Fyb3VzZWwodGFyZ2V0LCBieXBhc3MpIHtcbiAgICBpZiAobGFzdHNlbGVjdGVkID09IG51bGwpIHtcbiAgICAgICAgbGFzdHNlbGVjdGVkID0gdGFyZ2V0O1xuICAgIH1cbiAgICBpZiAobGFzdHNlbGVjdGVkICE9IHRhcmdldCkge1xuICAgICAgICBsYXN0c2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2xpZ2h0XCIpO1xuICAgIH1cbiAgICBhbmdsZSA9IChzZWxlY3RlZEluZGV4IC0gdGFyZ2V0LmlkKSAqIDQwICsgYW5nbGU7IC8vKjQwIHRvIGNvbnZlcnQgaW4gYW5nbGUgc3RlcFxuICAgIC8vTGF1bmNoIHRoZSBnYW1lIG9uIHRoZSBmcm9udCBvZiB0aGUgY2Fyb3VzZWxcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PSB0YXJnZXQuaWQgJiYgYnlwYXNzID09IGZhbHNlKSAvLyB0aGUgYnlwYXNzIGlzIGZvciBpbmlcbiAgICAge1xuICAgICAgICBpcGNSZW5kZXJlci5zZW5kKCdMYXVuY2hHYW1lJywgdGFyZ2V0LmRhdGFzZXQuZ2FtZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWdsaWdodFwiKTsgLy8gbWFrZSB0aGUgY2VudHJhbCBjZWxsIGJpZ2dlclxuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWigtMTAwMHB4KSByb3RhdGVZKFwiICsgYW5nbGUgKyBcImRlZylcIjtcbiAgICBzZWxlY3RlZEluZGV4ID0gdGFyZ2V0LmlkO1xuICAgIGxhc3RzZWxlY3RlZCA9IHRhcmdldDtcbn1cbnZhciBHYW1lTWV0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lTWV0YShBcHBJZCwgbmFtZSwgdGh1bWIpIHtcbiAgICAgICAgdGhpcy5BcHBJZCA9IEFwcElkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRodW1iID0gdGh1bWI7XG4gICAgfVxuICAgIHJldHVybiBHYW1lTWV0YTtcbn0oKSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3RlYW1Ub2tlbigpIHtcbiAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiQWdlbnQ6IFwiICsgdXNlckFnZW50KTtcbiAgICB2YXIgaXNFbGVjdHJvbiA9IHVzZXJBZ2VudC5pbmRleE9mKFwiIGVsZWN0cm9uL1wiKSA+IC0xO1xuICAgIGlmIChpc0VsZWN0cm9uKSB7XG4gICAgICAgIHZhciBTdG9yZSA9IHJlcXVpcmUoXCIuLi9qcy9zdG9yZVwiKTtcbiAgICAgICAgdmFyIHRrblN0b3JlID0gbmV3IFN0b3JlKFwiYWNjb3VudFwiKTtcbiAgICAgICAgdmFyIHRrbiA9IHRrblN0b3JlLmdldChcInN0ZWFtXCIpO1xuICAgICAgICByZXR1cm4gdGtuICE9IG51bGwgPyB0a24gOiBcIjc2NTYxMTk4MTk2NDMwNjU1XCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFHRU5UIElTIE5PVCBFTEVDVFJPTiwgTk8gSEFORExJTkcgRk9SIE5PV1wiKTtcbiAgICAgICAgcmV0dXJuIFwiNzY1NjExOTgxOTY0MzA2NTVcIjsgLy9BIGRlZmF1bHQgc3RlYW0gY2xpZW50IGlkIChmb3IgdGVzdGluZyBvbmx5KVxuICAgIH1cbn1cbiIsImNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbmNsYXNzIFN0b3JlXG57ICAgIFxuICAgIGNvbnN0cnVjdG9yKG5hbWUpXG4gICAge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoLmpvaW4oKGVsZWN0cm9uLmFwcCB8fCBlbGVjdHJvbi5yZW1vdGUuYXBwKS5nZXRQYXRoKFwidXNlckRhdGFcIiksIG5hbWUgKyBcIi5qc29uXCIpO1xuICAgICAgICB0aGlzLmRhdGEgPSByZWFkRmlsZSh0aGlzLnBhdGgpO1xuICAgIH1cblxuICAgIGdldChrZXkpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2tleV07XG4gICAgfVxuXG4gICAgc2V0KGtleSwgdmFsdWUpXG4gICAge1xuICAgICAgICB0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHRoaXMucGF0aCwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWFkRmlsZShwYXRoKVxue1xuICAgIHRyeVxuICAgIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGgpKTtcbiAgICB9XG4gICAgY2F0Y2hcbiAgICB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwidmFyIFN0b3JlID0gcmVxdWlyZShcIi4uL2pzL3N0b3JlXCIpO1xuaW1wb3J0ICogYXMgVG9rZW5NYW5hZ2VyIGZyb20gXCIuL1Rva2VuTWFuYWdlclwiO1xuaW1wb3J0IHsgR2FtZSwgbGF1bmNoZXIgfSBmcm9tIFwiLi9HYW1lXCI7XG5leHBvcnQgZnVuY3Rpb24gTG9hZEdhbWVzKCkge1xuICAgIHZhciBTdG9yZSA9IHJlcXVpcmUoXCIuLi9qcy9zdG9yZVwiKTtcbiAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBpc0VsZWN0cm9uID0gdXNlckFnZW50LmluZGV4T2YoXCIgZWxlY3Ryb24vXCIpID4gLTE7XG4gICAgaWYgKGlzRWxlY3Ryb24pIHtcbiAgICAgICAgdmFyIHN0b3JlID0gbmV3IFN0b3JlKFwiR2FtZXNcIik7XG4gICAgICAgIHJldHVybiBzdG9yZS5nZXQoXCJnYW1lc1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUdFTlQgSVMgTk9UIEVMRUNUUk9OLCBOTyBIQU5ETElORyBGT1IgTk9XXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlR2FtZXNKU09OKCkge1xuICAgIEFkZFN0ZWFtR2FtZXMoKTtcbn1cbi8vI3JlZ2lvbiBTdGVhbVJlcXVlc3RzXG5mdW5jdGlvbiBBZGRTdGVhbUdhbWVzKCkge1xuICAgIHZhciBzdGVhbVRva2VuID0gVG9rZW5NYW5hZ2VyLmdldFN0ZWFtVG9rZW4oKTtcbiAgICAkLmdldChcImh0dHBzOi8vYXBpLnN0ZWFtcG93ZXJlZC5jb20vSVBsYXllclNlcnZpY2UvR2V0T3duZWRHYW1lcy92MS9cIiArXG4gICAgICAgIFwiP2tleT03QzIxOEU4RDEzNDdDM0NENkNCODExN0U1RUQ1MzNCQ1wiICtcbiAgICAgICAgXCImc3RlYW1pZD1cIiArIHN0ZWFtVG9rZW4gK1xuICAgICAgICBcIiZpbmNsdWRlX2FwcGluZm89MVwiICtcbiAgICAgICAgXCImaW5jbHVkZV9wbGF5ZWRfZnJlZV9nYW1lcz0xXCIgK1xuICAgICAgICBcIiZhcHBpZHNfZmlsdGVyPSZmb3JtYXQ9anNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZ2FtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJlc3BvbnNlLmdhbWVfY291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGdhbWVEYXRhID0gZGF0YS5yZXNwb25zZS5nYW1lc1tpXTtcbiAgICAgICAgICAgIHZhciB0aHVtYm5haWwgPSBcImh0dHBzOi8vc3RlYW1jZG4tYS5ha2FtYWloZC5uZXQvc3RlYW0vYXBwcy9cIiArIGdhbWVEYXRhLmFwcGlkICsgXCIvaGVhZGVyLmpwZ1wiO1xuICAgICAgICAgICAgZ2FtZXNbaV0gPSBuZXcgR2FtZShnYW1lRGF0YS5uYW1lLCBnYW1lRGF0YS5hcHBpZCwgdGh1bWJuYWlsLCBsYXVuY2hlci5TdGVhbSwgbnVsbCwgdHJ1ZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9TaG91bGQgdXNlIGEgY29va2llIGlmIHRoZSB1c2VyIGlzIGluIHRoZSBicm93c2VyXG4gICAgICAgIHZhciBzdG9yZSA9IG5ldyBTdG9yZShcIkdhbWVzXCIpO1xuICAgICAgICBzdG9yZS5zZXQoXCJnYW1lc1wiLCBnYW1lcyk7IC8vU0hPVUxETidUIERPIElUIExJS0UgVEhBVCwgSXQgb3ZlcnJpZGUgZXZlcnkgZ2FtZXMgaW4gdGhlIGpzb24uXG4gICAgfSk7XG59XG4vLyNlbmRyZWdpb25cbiIsImltcG9ydCB7IExvYWRHYW1lcywgVXBkYXRlR2FtZXNKU09OIH0gZnJvbSBcIi4vR2FtZUxvYWRlclwiO1xudmFyIGlwY1JlbmRlcmVyID0gcmVxdWlyZSgnZWxlY3Ryb24nKS5pcGNSZW5kZXJlcjtcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUdyaWQoKSB7XG4gICAgdmFyIGdhbWVzID0gTG9hZEdhbWVzKCk7XG4gICAgVXBkYXRlR2FtZXNKU09OKCk7XG4gICAgdmFyIGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpYnJhcnlcIik7XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBnYW1lID0gZ2FtZXNbaV07XG4gICAgICAgIHZhciBncmlkSHRtbCA9IFwiPGltZyBzcmM9J1wiICsgZ2FtZS50aHVtYm5haWwgKyBcIicvPiA8cD5cIiArIGdhbWUubmFtZSArIFwiPC9wPlwiO1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJnYW1lXCI7XG4gICAgICAgIGVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHsgb25HYW1lQ2xpY2soZ2FtZSk7IH07XG4gICAgICAgIGlmIChnYW1lLmlzSW5zdGFsbGVkKVxuICAgICAgICAgICAgZ3JpZEh0bWwgKz0gJzxpbWcgc3JjPVwiLi4vLi4vZGlzdC9kcmF3YWJsZXMvaW5zdGFsbGVkLnN2Z1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyBwYWRkaW5nOiA1cHg7XCIvPic7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZ3JpZEh0bWw7XG4gICAgICAgIGlmIChncmlkICE9IG51bGwpXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfbG9vcF8xKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25HYW1lQ2xpY2soZ2FtZUNsaWNrZWQpIHtcbiAgICBpcGNSZW5kZXJlci5zZW5kKCdMYXVuY2hHYW1lJywgZ2FtZUNsaWNrZWQpO1xufVxuIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiOyAvL1VzaW5nIGdsb2JhbCBzY29wZSBqcXVlcnkgaW5zdGVhZCBiZWFjYXVzZSBpdCBtYWtlIGEgaHVnZSBmaWxlIGlmIHdlIHVzZSB0aGlzLlxuaW1wb3J0IHsgc2V0dXAgfSBmcm9tIFwiLi9DYXJvdXNlbFwiO1xuaW1wb3J0IHsgcG9wdWxhdGVHcmlkIH0gZnJvbSBcIi4vTGlicmFyeVwiO1xuJChmdW5jdGlvbiAoKSB7XG4gICAgaG9tZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikub25jbGljayA9IGZ1bmN0aW9uICgpIHsgaG9tZSgpOyB9O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IG9wZW5TZWFyY2goKTsgfTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IG9wZW5TZXR0aW5ncygpOyB9O1xufSk7XG5mdW5jdGlvbiBob21lKCkge1xuICAgICQoXCIjY29udGVudFwiKS5sb2FkKFwiZnJhZ21lbnRzL2hvbWUuaHRtbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldHVwKCk7XG4gICAgICAgIHBvcHVsYXRlR3JpZCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikuaW5uZXJIVE1MID0gXCJFQVVcIjtcbn1cbmZ1bmN0aW9uIG9wZW5TZWFyY2goKSB7XG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnB1dFwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgaW5wdXQuZm9jdXMoKTtcbn1cbmZ1bmN0aW9uIG9wZW5TZXR0aW5ncygpIHtcbiAgICAkKFwiI2NvbnRlbnRcIikubG9hZChcImZyYWdtZW50cy9zZXR0aW5ncy5odG1sXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ljb24gZmFzIGZhLWFycm93LWxlZnQnPjwvaT4gIFNldHRpbmdzXCI7XG59XG5yZXF1aXJlKFwiLi9MaWJyYXJ5XCIpO1xucmVxdWlyZShcIi4vQ2Fyb3VzZWxcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=