(this["webpackJsonpquiz-answers"]=this["webpackJsonpquiz-answers"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"Question":"When did the first world cup occur?","a":"1932","b":"1940","c":"1950","d":"1939","answer":"1932"},{"id":2,"Question":"Who is the current coach for Chelsea?","a":"Mourinho","b":"Lampard","c":"Pep","d":"Pele","answer":"Lampard"},{"id":3,"Question":"Which country has won many World Cup Trophies?","a":"Italy","b":"German","c":"Brazil","d":"France","answer":"Brazil"},{"id":4,"Question":"Which is the capital city of Morrocco?","a":"Djamena","b":"Niamey","c":"Rabat","d":"Casablanca","answer":"Rabat"},{"id":5,"Question":"Which is the capital city of Spain?","a":"Barcelona","b":"Madrid","c":"Lisbon","d":"Rome","answer":"Madrid"},{"id":6,"Question":"Who scored the wining goal in the 2010 World Cup at the finals?","a":"Morata","b":"Villa","c":"Fabregas","d":"Iniesta","answer":"Iniesta"},{"id":7,"Question":"Who discovered the force of gravity?","a":"Einstein","b":"Newton","c":"Byles","d":"Charlse","answer":"Newton"},{"id":8,"Question":"Who was the father of Jacob in the Bible?","a":"Abraham","b":"Isaac","c":"Lot","d":"David","answer":"Isaac"},{"id":9,"Question":"How many verses are there in the Holy Bible?","a":"16,345","b":"20,300","c":"31,102","d":"21,349","answer":"31,102"},{"id":10,"Question":"How many people enter the Ark in the Bible?","a":"5","b":"6","c":"2","d":"8","answer":"8"}]')},18:function(e,t,s){},19:function(e,t,s){},24:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(1),c=s.n(i),a=s(9),r=s.n(a),o=(s(18),s(19),s(4)),l=s(5),d=s(7),h=s(6),u=s(10),b=s(37),p=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={correctAnswer:"",totalScore:0},e}return Object(l.a)(s,[{key:"answerQuestion",value:function(e){if(this.props.answer===e){console.log("Correct!"),this.setState({correctAnswer:"correct"});var t=parseInt(localStorage.getItem("totalScore"))+10;console.log(t),localStorage.setItem("totalScore",t)}else console.log("Wrong!"),this.setState({correctAnswer:"wrong"})}},{key:"componentDidMount",value:function(){localStorage.setItem("totalScore",0)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:Object(n.jsxs)(b.a,{className:"question-card",children:[Object(n.jsxs)("h4",{children:["(",this.props.id,") . ",this.props.Question]}),Object(n.jsx)("div",{className:this.state.correctAnswer,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{margin:"10px",display:"flex"},children:[Object(n.jsxs)("div",{style:{flex:.8},children:["A. ",this.props.a," "]}),Object(n.jsx)("button",{style:{flex:.1},className:"select-button",onClick:function(){return e.answerQuestion(e.props.a)},children:"select"})]}),Object(n.jsxs)("div",{style:{margin:"10px",display:"flex"},children:[Object(n.jsxs)("div",{style:{flex:.8},children:["B. ",this.props.b]})," ",Object(n.jsx)("button",{style:{flex:.1},className:"select-button",onClick:function(){return e.answerQuestion(e.props.b)},children:"select"})]}),Object(n.jsxs)("div",{style:{margin:"10px",display:"flex"},children:[Object(n.jsxs)("div",{style:{flex:.8},children:["C. ",this.props.c]})," ",Object(n.jsx)("button",{style:{flex:.1},className:"select-button",onClick:function(){return e.answerQuestion(e.props.c)},children:"select"})]}),Object(n.jsxs)("div",{style:{margin:"10px",display:"flex"},children:[Object(n.jsxs)("div",{style:{flex:.8},children:["D. ",this.props.d," "]}),Object(n.jsx)("button",{style:{flex:.1},className:"select-button",onClick:function(){return e.answerQuestion(e.props.d)},children:"select"})]})]})})]})})}}]),s}(i.Component),j=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={questions:[],score:0,showDivClass:"scorediv"},e.getQuestions=function(){e.setState({questions:u})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"showScore",value:function(){console.log(localStorage.getItem("totalScore")),this.setState({score:parseInt(localStorage.getItem("totalScore")),showDivClass:"scoredivshow"})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"top-div",style:{display:"flex"},children:[Object(n.jsx)("h2",{style:{flex:.5,marginLeft:"40px"},children:"Knowledge Quiz"}),"  ",Object(n.jsx)("button",{className:"score-btn",style:{flex:.1},onClick:this.showScore.bind(this),children:"View Score"}),"  ",Object(n.jsxs)("h1",{className:this.state.showDivClass,style:{flex:.3},children:[Object(n.jsx)("span",{children:"Score : "}),this.state.score,"/100"]})]}),this.state.questions.map((function(t){return Object(n.jsx)("div",{style:{paddingLeft:"60px",paddingRight:"60px"},children:Object(n.jsx)(p,{handleScore:function(){return e.handleScore.bind(e)},id:t.id,Question:t.Question,a:t.a,b:t.b,c:t.c,d:t.d,answer:t.answer})},t.id)}))]})}}]),s}(i.Component);var f=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j,{})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.faf54694.chunk.js.map