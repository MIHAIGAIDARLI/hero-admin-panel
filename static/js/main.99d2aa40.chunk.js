(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),s=r.n(c),i=r(4),o=r(18),l=r(22),u=r(9),d=r(20),b=r(5),h=Object(d.a)({reducerPath:"api",baseQuery:Object(b.d)({baseUrl:"http://localhost:3001"}),tagTypes:["Heroes"],endpoints:function(e){return{getHeroes:e.query({query:function(){return"heroes"},providesTags:["Heroes"]}),createHero:e.mutation({query:function(e){return{url:"/heroes",method:"POST",body:e}},invalidatesTags:["Heroes"]}),deleteHero:e.mutation({query:function(e){return{url:"/heroes/".concat(e),method:"DELETE"}},invalidatesTags:["Heroes"]})}}}),j=h.useGetHeroesQuery,f=h.useCreateHeroMutation,m=h.useDeleteHeroMutation,g=r(2),O=function(e){var t,r=e.name,n=e.description,a=e.element,c=e.onDelete;switch(a){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(g.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(g.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h3",{className:"card-title",children:r}),Object(g.jsx)("p",{className:"card-text",children:n})]}),Object(g.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(g.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close",onClick:c})})]})},p=function(){return Object(g.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(g.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},x=function(){var e=j(),t=e.data,r=void 0===t?[]:t,a=e.isLoading,c=e.isError,s=m(),d=Object(u.a)(s,1)[0],b=Object(i.e)((function(e){return e.filters.activeFilter})),h=Object(n.useMemo)((function(){var e=r.slice();return"all"===b?e:e.filter((function(e){return e.element===b}))}),[r,b]),f=Object(n.useCallback)((function(e){d(e)}),[]);if(a)return Object(g.jsx)(p,{});if(c)return Object(g.jsx)("h5",{className:"text-center mt-5",children:"Loading error"});var x,v=0===(x=h).length?Object(g.jsx)("h5",{className:"text-center mt-5",children:"No heroes yet"}):x.map((function(e){var t=e.id,r=Object(l.a)(e,["id"]);return Object(g.jsx)(O,Object(o.a)(Object(o.a)({},r),{},{onDelete:function(){return f(t)}}),t)}));return Object(g.jsx)("ul",{children:v})},v=r(37),N=r(13),y=r(1),w=r(8),S=r.n(w),C=r(11),F=r(7),L=function(){return{request:function(){var e=Object(C.a)(S.a.mark((function e(t){var r,n,a,c,s,i=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:r,body:n,headers:a});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(c.status));case 9:return e.next=11,c.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},k=Object(y.d)(),q=k.getInitialState({heroesLoadingStatus:"idle"}),H=Object(y.c)("heroes/fetchHeroes",Object(C.a)(S.a.mark((function e(){var t,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L(),r=t.request,e.next=3,r("http://localhost:3001/heroes");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),D=Object(y.e)({name:"heroes",initialState:q,reducers:{heroCreated:function(e,t){k.addOne(e,t.payload)},heroDeleted:function(e,t){k.removeOne(e,t.payload)}},extraReducers:function(e){e.addCase(H.pending,(function(e){e.heroesLoadingStatus="loading"})).addCase(H.fulfilled,(function(e,t){e.heroesLoadingStatus="idle",k.setAll(e,t.payload)})).addCase(H.rejected,(function(e){e.heroesLoadingStatus="error"})).addDefaultCase((function(){}))}}),E=D.actions,T=D.reducer,I=k.getSelectors((function(e){return e.heroes})).selectAll,_=(Object(F.a)((function(e){return e.filters.activeFilter}),I,(function(e,t){return"all"===e?t:t.filter((function(t){return t.element===e}))})),E.heroesFetching,E.heroesFetched,E.heroesFetchingError,E.heroCreated,E.heroDeleted,Object(y.d)()),A=_.getInitialState({filtersLoadingStatus:"idle",activeFilter:"all"}),M=Object(y.c)("filters/fetchFilters",Object(C.a)(S.a.mark((function e(){var t,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L(),r=t.request,e.next=3,r("http://localhost:3001/filters");case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),P=Object(y.e)({name:"filters",initialState:A,reducers:{filtersChanged:function(e,t){e.activeFilter=t.payload}},extraReducers:function(e){e.addCase(M.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(M.fulfilled,(function(e,t){e.filtersLoadingStatus="idle",_.setAll(e,t.payload)})).addCase(M.rejected,(function(e){e.filtersLoadingStatus="error"})).addDefaultCase((function(){}))}}),G=P.actions,J=P.reducer,Q=_.getSelectors((function(e){return e.filters})).selectAll,R=(G.filtersFetching,G.filtersFetched,G.filtersFetchingError,G.filtersChanged),W=function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},B=Object(y.a)({reducer:Object(N.a)({heroes:T,filters:J},h.reducerPath,h.reducer),middleware:function(e){return e().concat(W,h.middleware)},devTools:!1}),U=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),o=s[0],l=s[1],d=Object(n.useState)(""),b=Object(u.a)(d,2),h=b[0],j=b[1],m=f(),O=Object(u.a)(m,2),p=O[0],x=(O[1].isLoading,Object(i.e)((function(e){return e.filters})).filtersLoadingStatus),N=Q(B.getState());return Object(g.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t={id:Object(v.a)(),name:r,description:o,element:h};p(t).unwrap(),a(""),l(""),j("")},children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"Name of the new hero"}),Object(g.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"What is my name?",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"Description"}),Object(g.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"What can I do?",style:{height:"130px"},value:o,onChange:function(e){return l(e.target.value)}})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"element",className:"form-label",children:"Select hero element"}),Object(g.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:h,onChange:function(e){return j(e.target.value)},children:[Object(g.jsx)("option",{value:"",children:"I own the element..."}),function(e,t){return"loading"===t?Object(g.jsx)("option",{children:"Loading Items"}):"error"===t?Object(g.jsx)("option",{children:"Loading error"}):e&&e.length>0?e.map((function(e){var t=e.name,r=e.label;if("all"!==t)return Object(g.jsx)("option",{value:t,children:r},t)})):void 0}(N,x)]})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})]})},z=r(21),K=r.n(z),V=function(){var e=Object(i.e)((function(e){return e.filters})),t=e.filtersLoadingStatus,r=e.activeFilter,a=Q(B.getState()),c=Object(i.d)(),s=L().request;if(Object(n.useEffect)((function(){c(M(s))}),[]),"loading"===t)return Object(g.jsx)(p,{});if("error"===t)return Object(g.jsx)("h5",{className:"text-center mt-5",children:"Loading error"});var o,l=0===(o=a).length?Object(g.jsx)("h5",{className:"text-center mt-5",children:"Filters not found"}):o.map((function(e){var t=e.name,n=e.className,a=e.label,s=K()("btn",n,{active:t===r});return Object(g.jsx)("button",{id:t,className:s,onClick:function(){return c(R(t))},children:a},t)}));return Object(g.jsx)("div",{className:"card shadow-lg mt-4",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("p",{className:"card-text",children:"Filter heroes by elements"}),Object(g.jsx)("div",{className:"btn-group",children:l})]})})},X=(r(33),function(){return Object(g.jsx)("main",{className:"app",children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(x,{}),Object(g.jsxs)("div",{className:"content__interactive",children:[Object(g.jsx)(U,{}),Object(g.jsx)(V,{})]})]})})});r(34);s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{store:B,children:Object(g.jsx)(X,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.99d2aa40.chunk.js.map