(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),o=a(9),i=a(1),m=a(11),l=a.n(m),u=a(25),v=a(26),p=a(27),d=a(31),E=a(30),_=a(28),f=a.n(_);a(55);var g=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180)," ...")))},y=(a(56),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var b=function(){return r.a.createElement("span",null,"About this page: I built it because I love movies.")};var h=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};a(62);var N=function(){return r.a.createElement(o.a,null,r.a.createElement(h,null),r.a.createElement(i.a,{path:"/",exact:!0,component:y}),r.a.createElement(i.a,{path:"/about",component:b}))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.189319a9.chunk.js.map