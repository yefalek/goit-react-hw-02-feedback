(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(3),r=n.n(o),s=(n(12),n(4)),u=n(5),i=n(7),d=n(6),l=n(0);function b(){return Object(l.jsxs)("div",{className:"Counter",children:[Object(l.jsx)("button",{type:"button",onClick:this.handleIncrementGood,children:"good"}),Object(l.jsx)("button",{type:"button",onClick:this.handleIncrementNeutral,children:"neutral"}),Object(l.jsx)("button",{type:"button",onClick:this.handleIncrementBad,children:"bad"})]})}n(14);function j(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"Counter__value",children:["Good: ",t]}),";",Object(l.jsxs)("span",{className:"Counter__value",children:["Neutral: ",n]}),";",Object(l.jsxs)("span",{className:"Counter__value",children:["Bad: ",c]}),";",Object(l.jsxs)("span",{className:"Counter__value",children:["Total: ",a]}),";",Object(l.jsxs)("span",{className:"Counter__value",children:["Positive feedback: ",o,"%"]}),";"]})}n(15),n(16),n(17);var h=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrementNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleIncrementGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleIncrementBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return"".concat(t/n*100)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(j,{})]})}}]),n}(c.Component);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.999a5854.chunk.js.map