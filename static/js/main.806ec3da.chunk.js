(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/hint.d4efbfb6.png"},30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(17),r=a.n(i),c=(a(35),a(9)),s=a(10),l=a(13),m=a(11),u=a(14),p=a(7),d=a(8),b=Object(d.f)(function(e){return o.a.createElement("nav",{className:"nav-wrapper blue darken-3"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"right"},o.a.createElement("li",null,o.a.createElement(p.b,{to:"/flowroom/home"},"Home")),o.a.createElement("li",null,o.a.createElement(p.b,{to:"/flowroom/about"},"About")),o.a.createElement("li",null,o.a.createElement(p.c,{to:"/flowroom/contact"},"Contact"))," ")))}),h=a(27),E=a.n(h),f=a(12),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.posts,t=e.length?e.map(function(e){return o.a.createElement("div",{className:"post card",key:e.id},o.a.createElement("img",{src:E.a,alt:"an insightful bulb"}),o.a.createElement("div",{className:"card-content"},o.a.createElement(p.b,{to:"/"+e.id}," ",o.a.createElement("span",{className:"card-title"},e.title)),o.a.createElement("p",null,e.body)))}):o.a.createElement("div",{className:"center"},"No posts Yet");return o.a.createElement("div",{className:"container home"},o.a.createElement("h4",{className:"center"},"Home"),t)}}]),t}(n.Component),g=Object(f.b)(function(e){return{posts:e.posts}})(v),N=function(e){var t=["red","pink","orange","blue","green","black"],a=t[Math.floor(Math.random()*t.length)%6]+"-text";return function(t){return o.a.createElement("div",{className:a},o.a.createElement(e,t))}}(function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h4",{className:"center"},"About"),o.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dicta odit quibusdam maiores, nostrum labore eum aperiam quaerat voluptatem natus itaque sint enim sequi quidem eos ratione ex ipsum reiciendis!"))}),q=function(e){return console.log(e),o.a.createElement("div",{className:"container"},o.a.createElement("h4",{className:"center"},"Contact"),o.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dicta odit quibusdam maiores, nostrum labore eum aperiam quaerat voluptatem natus itaque sint enim sequi quidem eos ratione ex ipsum reiciendis!"))},w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){a.props.deletePost(a.props.post.id),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.post?o.a.createElement("div",{className:"post"},o.a.createElement("h4",{className:"center"},this.props.post.title),o.a.createElement("p",null,this.props.post.body),o.a.createElement("div",{className:"center"},o.a.createElement("button",{className:"btn grey",onClick:this.handleClick},"DELETE"))):o.a.createElement("div",{className:"center"},"Loading post...");return o.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),O=Object(f.b)(function(e,t){var a=t.match.params.post_id;return{post:e.posts.find(function(e){return e.id===parseInt(a)})}},function(e){return{deletePost:function(t){e(function(e){return{type:"DELETE_POST",id:e}}(t))}}})(w),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("h3",{className:"brand-logo center cover"},"FlowRoom"),o.a.createElement(b,null),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/flowroom/home",component:g}),o.a.createElement(d.a,{path:"/flowroom/about",component:N}),o.a.createElement(d.a,{path:"/flowroom/contact",component:q}),o.a.createElement(d.a,{path:"/flowroom/:post_id",component:O})," ")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(19),k=a(29),x={posts:[{id:1,title:"Workshop : Components Reutilisables",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit."},{id:2,title:"Workshop : GraphQL : Connect API to React via GraphQL schema",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit."},{id:3,title:"Workshop : Introduction to docker",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime exercitationem officia, tempora magnam, quaerat amet quis consequuntur eius iusto laudantium incidunt, quasi laborum explicabo laboriosam libero illo ea velit."}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if("DELETE_POST"===t.type){var a=e.posts.filter(function(e){return t.id!==e.id});return Object(k.a)({},e,{posts:a})}return e},L=Object(y.b)(C);r.a.render(o.a.createElement(f.a,{store:L},o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.806ec3da.chunk.js.map