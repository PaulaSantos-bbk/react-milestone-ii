(this["webpackJsonpreact-milestone-ii"]=this["webpackJsonpreact-milestone-ii"]||[]).push([[0],{10:function(t,e,o){t.exports=o(17)},15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(7),i=o.n(r),c=o(5),l=o(1),d=o(2),s=o(4),p=o(3),u=function(t){Object(s.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:m},"X")))}}]),o}(n.Component),m={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},h=u,f=function(t){Object(s.a)(o,t);var e=Object(p.a)(o);function o(){return Object(l.a)(this,o),e.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(h,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(n.Component),g=o(8),b=function(t){Object(s.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(g.a)({},e.target.name,e.target.value))},t}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add more ingredients",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component),v=(o(15),o(9)),y=o.n(v);var k={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},j={width:"100%",height:"auto",size:"cover"},E=function(){return a.a.createElement("header",null,a.a.createElement("h1",{style:k},"Shopping List"),a.a.createElement("img",{style:j,src:y.a,alt:"Logo"}))},O=o(16).v4;O();var x=function(t){Object(s.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:O(),title:"200g walnuts",completed:!1},{id:O(),title:"150g caster sugar",completed:!1},{id:O(),title:"25g cocoa",completed:!1},{id:O(),title:"250g mascarpone",completed:!1},{id:O(),title:"4 medium eggs",completed:!1},{id:O(),title:"2 tsp vanilla extract",completed:!1},{id:O(),title:"200g dark chocolate",completed:!1},{id:O(),title:"100g white chocolate",completed:!1}]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var o={id:O(),title:e,completed:!1};t.setState({todos:[].concat(Object(c.a)(t.state.todos),[o])})},t}return Object(d.a)(o,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(E,null),a.a.createElement(b,{addTodo:this.addTodo}),a.a.createElement(f,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,o){t.exports=o.p+"static/media/cake.5414f47a.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.7e85d65f.chunk.js.map