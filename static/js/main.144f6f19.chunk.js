(this.webpackJsonppomodoro_clock=this.webpackJsonppomodoro_clock||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),s=(n(14),n(4)),l=n(5),i=n(6),u=n(8),m=n(7),h=(n(15),n(2),function(e){var t=e.title.toLowerCase();return c.a.createElement("div",{className:"timer-container"},c.a.createElement("h1",{id:"".concat(t,"-label")},e.title," length"),c.a.createElement("div",null,c.a.createElement("button",{id:"".concat(t,"-decrement"),onClick:e.handleDecrease},c.a.createElement("i",{className:"fas fa-minus"})),c.a.createElement("span",{id:"".concat(t,"-length")},e.count),c.a.createElement("button",{id:"".concat(t,"-increment"),onClick:e.handleIncrease},c.a.createElement("i",{className:"fas fa-plus"}))))}),d=document.getElementById("beep"),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1},a.handlePlayPause=function(){a.state.isPlaying?(clearInterval(a.loop),a.setState({isPlaying:!1})):(a.setState({isPlaying:!0}),a.loop=setInterval((function(){var e=a.state,t=e.clockCount,n=e.currentTimer,c=e.breakCount,o=e.sessionCount;0===t?(a.setState({currentTimer:"Session"===n?"Break":"Session",clockCount:"Session"===n?60*c:60*o}),d.play()):a.setState({clockCount:t-1})}),1e3))},a.handleReset=function(){a.setState({breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1}),clearInterval(a.loop),d.pause(),d.currentTimer=0},a.convertToTime=function(e){var t=Math.floor(e/60),n=e%60;return n=n<10?"0"+n:n,"".concat(t=t<10?"0"+t:t,":").concat(n)},a.handleLengthChange=function(e,t){var n,c=a.state,o=c.sessionCount,r=c.breakCount,l=c.isPlaying,i=c.currentTimer;(n="session"===t?o+e:r+e)>0&&n<61&&!l&&(a.setState(Object(s.a)({},"".concat(t,"Count"),n)),i.toLowerCase()===t&&a.setState({clockCount:60*n}))},a.loop=void 0,a}return Object(i.a)(n,[{key:"componentWillMount",value:function(){clearInterval(this.loop)}},{key:"render",value:function(){var e=this,t=this.state,n=t.breakCount,a=t.sessionCount,o=t.clockCount,r=t.currentTimer,s=t.isPlaying,l={title:"Break",count:n,handleDecrease:function(){return e.handleLengthChange(-1,"break")},handleIncrease:function(){return e.handleLengthChange(1,"break")}},i={title:"Session",count:a,handleDecrease:function(){return e.handleLengthChange(-1,"session")},handleIncrease:function(){return e.handleLengthChange(1,"session")}};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"flex actions-wrapper"},c.a.createElement(h,l),c.a.createElement(h,i)),c.a.createElement("div",{className:"clock-container"},c.a.createElement("h1",{id:"timer-label"},r),c.a.createElement("span",{id:"time-left"},this.convertToTime(o)),c.a.createElement("div",{className:"flex"},c.a.createElement("button",{id:"start_stop",onClick:this.handlePlayPause},c.a.createElement("i",{className:"fas fa-".concat(s?"pause":"play")})),c.a.createElement("button",{id:"reset",onClick:this.handleReset},c.a.createElement("i",{className:"fas fa-sync"})))))}}]),n}(c.a.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.144f6f19.chunk.js.map