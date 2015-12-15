// Compiled by ClojureScript 1.7.170 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
var last_id_6672 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_6672){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_6672,(cljs.core._deref.call(null,last_id_6672) + (1)));
});})(last_id_6672))
;
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.collect = (function rum$core$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.core.call_all = (function rum$core$call_all(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6676 = arguments.length;
var i__5727__auto___6677 = (0);
while(true){
if((i__5727__auto___6677 < len__5726__auto___6676)){
args__5733__auto__.push((arguments[i__5727__auto___6677]));

var G__6678 = (i__5727__auto___6677 + (1));
i__5727__auto___6677 = G__6678;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.core.call_all.cljs$lang$maxFixedArity = (2);

rum.core.call_all.cljs$lang$applyTo = (function (seq6673){
var G__6674 = cljs.core.first.call(null,seq6673);
var seq6673__$1 = cljs.core.next.call(null,seq6673);
var G__6675 = cljs.core.first.call(null,seq6673__$1);
var seq6673__$2 = cljs.core.next.call(null,seq6673__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__6674,G__6675,seq6673__$2);
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"classes","classes",-616631259,null))))].join('')));
}

var init = rum.core.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.core.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.core.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__6680_SHARP_,p2__6679_SHARP_){
return p2__6679_SHARP_.call(null,p1__6680_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.core.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.core.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.core.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6682_SHARP_,p2__6681_SHARP_){
return p2__6681_SHARP_.call(null,old_state,p1__6682_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__4668__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6683_SHARP_){
return p1__6683_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__6686 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__6686,(0),null);
var next_state = cljs.core.nth.call(null,vec__6686,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6684_SHARP_){
return p1__6684_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.core.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.core.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
});
rum.core.schedule = (function (){var or__4668__auto__ = (function (){var and__4656__auto__ = typeof window !== 'undefined';
if(and__4656__auto__){
var or__4668__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4668__auto____$1)){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4668__auto____$2)){
return or__4668__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return ((function (or__4668__auto__){
return (function (p1__6687_SHARP_){
return setTimeout(p1__6687_SHARP_,(16));
});
;})(or__4668__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__6694 = cljs.core.seq.call(null,queue);
var chunk__6696 = null;
var count__6697 = (0);
var i__6698 = (0);
while(true){
if((i__6698 < count__6697)){
var comp = cljs.core._nth.call(null,chunk__6696,i__6698);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6700 = seq__6694;
var G__6701 = chunk__6696;
var G__6702 = count__6697;
var G__6703 = (i__6698 + (1));
seq__6694 = G__6700;
chunk__6696 = G__6701;
count__6697 = G__6702;
i__6698 = G__6703;
continue;
} else {
var G__6704 = seq__6694;
var G__6705 = chunk__6696;
var G__6706 = count__6697;
var G__6707 = (i__6698 + (1));
seq__6694 = G__6704;
chunk__6696 = G__6705;
count__6697 = G__6706;
i__6698 = G__6707;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6694);
if(temp__4425__auto__){
var seq__6694__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6694__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6694__$1);
var G__6708 = cljs.core.chunk_rest.call(null,seq__6694__$1);
var G__6709 = c__5471__auto__;
var G__6710 = cljs.core.count.call(null,c__5471__auto__);
var G__6711 = (0);
seq__6694 = G__6708;
chunk__6696 = G__6709;
count__6697 = G__6710;
i__6698 = G__6711;
continue;
} else {
var comp = cljs.core.first.call(null,seq__6694__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6712 = cljs.core.next.call(null,seq__6694__$1);
var G__6713 = null;
var G__6714 = (0);
var G__6715 = (0);
seq__6694 = G__6712;
chunk__6696 = G__6713;
count__6697 = G__6714;
i__6698 = G__6715;
continue;
} else {
var G__6716 = cljs.core.next.call(null,seq__6694__$1);
var G__6717 = null;
var G__6718 = (0);
var G__6719 = (0);
seq__6694 = G__6716;
chunk__6696 = G__6717;
count__6697 = G__6718;
i__6698 = G__6719;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6725 = arguments.length;
var i__5727__auto___6726 = (0);
while(true){
if((i__5727__auto___6726 < len__5726__auto___6725)){
args__5733__auto__.push((arguments[i__5727__auto___6726]));

var G__6727 = (i__5727__auto___6726 + (1));
i__5727__auto___6726 = G__6727;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__6723){
var vec__6724 = p__6723;
var props = cljs.core.nth.call(null,vec__6724,(0),null);
var props__$1 = (function (){var or__4668__auto__ = props;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq6720){
var G__6721 = cljs.core.first.call(null,seq6720);
var seq6720__$1 = cljs.core.next.call(null,seq6720);
var G__6722 = cljs.core.first.call(null,seq6720__$1);
var seq6720__$2 = cljs.core.next.call(null,seq6720__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__6721,G__6722,seq6720__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6732 = arguments.length;
var i__5727__auto___6733 = (0);
while(true){
if((i__5727__auto___6733 < len__5726__auto___6732)){
args__5733__auto__.push((arguments[i__5727__auto___6733]));

var G__6734 = (i__5727__auto___6733 + (1));
i__5727__auto___6733 = G__6734;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__6730){
var vec__6731 = p__6730;
var key = cljs.core.nth.call(null,vec__6731,(0),null);
var key__$1 = (function (){var or__4668__auto__ = key;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__6731,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__6731,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__6731,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__6731,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__6731,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__6731,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq6728){
var G__6729 = cljs.core.first.call(null,seq6728);
var seq6728__$1 = cljs.core.next.call(null,seq6728);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__6729,seq6728__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_6735 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__6736 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6736,(0),null);
var next_state = cljs.core.nth.call(null,vec__6736,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__6737_6749 = cljs.core.seq.call(null,old_reactions);
var chunk__6738_6750 = null;
var count__6739_6751 = (0);
var i__6740_6752 = (0);
while(true){
if((i__6740_6752 < count__6739_6751)){
var ref_6753 = cljs.core._nth.call(null,chunk__6738_6750,i__6740_6752);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6753)){
} else {
cljs.core.remove_watch.call(null,ref_6753,key);
}

var G__6754 = seq__6737_6749;
var G__6755 = chunk__6738_6750;
var G__6756 = count__6739_6751;
var G__6757 = (i__6740_6752 + (1));
seq__6737_6749 = G__6754;
chunk__6738_6750 = G__6755;
count__6739_6751 = G__6756;
i__6740_6752 = G__6757;
continue;
} else {
var temp__4425__auto___6758 = cljs.core.seq.call(null,seq__6737_6749);
if(temp__4425__auto___6758){
var seq__6737_6759__$1 = temp__4425__auto___6758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6737_6759__$1)){
var c__5471__auto___6760 = cljs.core.chunk_first.call(null,seq__6737_6759__$1);
var G__6761 = cljs.core.chunk_rest.call(null,seq__6737_6759__$1);
var G__6762 = c__5471__auto___6760;
var G__6763 = cljs.core.count.call(null,c__5471__auto___6760);
var G__6764 = (0);
seq__6737_6749 = G__6761;
chunk__6738_6750 = G__6762;
count__6739_6751 = G__6763;
i__6740_6752 = G__6764;
continue;
} else {
var ref_6765 = cljs.core.first.call(null,seq__6737_6759__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6765)){
} else {
cljs.core.remove_watch.call(null,ref_6765,key);
}

var G__6766 = cljs.core.next.call(null,seq__6737_6759__$1);
var G__6767 = null;
var G__6768 = (0);
var G__6769 = (0);
seq__6737_6749 = G__6766;
chunk__6738_6750 = G__6767;
count__6739_6751 = G__6768;
i__6740_6752 = G__6769;
continue;
}
} else {
}
}
break;
}

var seq__6741_6770 = cljs.core.seq.call(null,new_reactions);
var chunk__6742_6771 = null;
var count__6743_6772 = (0);
var i__6744_6773 = (0);
while(true){
if((i__6744_6773 < count__6743_6772)){
var ref_6774 = cljs.core._nth.call(null,chunk__6742_6771,i__6744_6773);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6774)){
} else {
cljs.core.add_watch.call(null,ref_6774,key,((function (seq__6741_6770,chunk__6742_6771,count__6743_6772,i__6744_6773,ref_6774,comp,old_reactions,vec__6736,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6735){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6741_6770,chunk__6742_6771,count__6743_6772,i__6744_6773,ref_6774,comp,old_reactions,vec__6736,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6735))
);
}

var G__6775 = seq__6741_6770;
var G__6776 = chunk__6742_6771;
var G__6777 = count__6743_6772;
var G__6778 = (i__6744_6773 + (1));
seq__6741_6770 = G__6775;
chunk__6742_6771 = G__6776;
count__6743_6772 = G__6777;
i__6744_6773 = G__6778;
continue;
} else {
var temp__4425__auto___6779 = cljs.core.seq.call(null,seq__6741_6770);
if(temp__4425__auto___6779){
var seq__6741_6780__$1 = temp__4425__auto___6779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6741_6780__$1)){
var c__5471__auto___6781 = cljs.core.chunk_first.call(null,seq__6741_6780__$1);
var G__6782 = cljs.core.chunk_rest.call(null,seq__6741_6780__$1);
var G__6783 = c__5471__auto___6781;
var G__6784 = cljs.core.count.call(null,c__5471__auto___6781);
var G__6785 = (0);
seq__6741_6770 = G__6782;
chunk__6742_6771 = G__6783;
count__6743_6772 = G__6784;
i__6744_6773 = G__6785;
continue;
} else {
var ref_6786 = cljs.core.first.call(null,seq__6741_6780__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6786)){
} else {
cljs.core.add_watch.call(null,ref_6786,key,((function (seq__6741_6770,chunk__6742_6771,count__6743_6772,i__6744_6773,ref_6786,seq__6741_6780__$1,temp__4425__auto___6779,comp,old_reactions,vec__6736,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6735){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6741_6770,chunk__6742_6771,count__6743_6772,i__6744_6773,ref_6786,seq__6741_6780__$1,temp__4425__auto___6779,comp,old_reactions,vec__6736,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6735))
);
}

var G__6787 = cljs.core.next.call(null,seq__6741_6780__$1);
var G__6788 = null;
var G__6789 = (0);
var G__6790 = (0);
seq__6741_6770 = G__6787;
chunk__6742_6771 = G__6788;
count__6743_6772 = G__6789;
i__6744_6773 = G__6790;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_6735;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_6791 = rum.core.reactive_key.call(null,state);
var seq__6745_6792 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6746_6793 = null;
var count__6747_6794 = (0);
var i__6748_6795 = (0);
while(true){
if((i__6748_6795 < count__6747_6794)){
var ref_6796 = cljs.core._nth.call(null,chunk__6746_6793,i__6748_6795);
cljs.core.remove_watch.call(null,ref_6796,key_6791);

var G__6797 = seq__6745_6792;
var G__6798 = chunk__6746_6793;
var G__6799 = count__6747_6794;
var G__6800 = (i__6748_6795 + (1));
seq__6745_6792 = G__6797;
chunk__6746_6793 = G__6798;
count__6747_6794 = G__6799;
i__6748_6795 = G__6800;
continue;
} else {
var temp__4425__auto___6801 = cljs.core.seq.call(null,seq__6745_6792);
if(temp__4425__auto___6801){
var seq__6745_6802__$1 = temp__4425__auto___6801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6745_6802__$1)){
var c__5471__auto___6803 = cljs.core.chunk_first.call(null,seq__6745_6802__$1);
var G__6804 = cljs.core.chunk_rest.call(null,seq__6745_6802__$1);
var G__6805 = c__5471__auto___6803;
var G__6806 = cljs.core.count.call(null,c__5471__auto___6803);
var G__6807 = (0);
seq__6745_6792 = G__6804;
chunk__6746_6793 = G__6805;
count__6747_6794 = G__6806;
i__6748_6795 = G__6807;
continue;
} else {
var ref_6808 = cljs.core.first.call(null,seq__6745_6802__$1);
cljs.core.remove_watch.call(null,ref_6808,key_6791);

var G__6809 = cljs.core.next.call(null,seq__6745_6802__$1);
var G__6810 = null;
var G__6811 = (0);
var G__6812 = (0);
seq__6745_6792 = G__6809;
chunk__6746_6793 = G__6810;
count__6747_6794 = G__6811;
i__6748_6795 = G__6812;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__6813_SHARP_){
return cljs.core.get_in.call(null,p1__6813_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__6814_SHARP_,p2__6815_SHARP_){
return cljs.core.assoc_in.call(null,p1__6814_SHARP_,path,p2__6815_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__6816_SHARP_){
if(((!((p1__6816_SHARP_ == null)))?((((p1__6816_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__6816_SHARP_.cljs$core$IDeref$))?true:(((!p1__6816_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__6816_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__6816_SHARP_))){
return cljs.core.deref.call(null,p1__6816_SHARP_);
} else {
return p1__6816_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__6819 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6819,(0),null);
var next_state = cljs.core.nth.call(null,vec__6819,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__6820_6836 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6822_6837 = null;
var count__6823_6838 = (0);
var i__6824_6839 = (0);
while(true){
if((i__6824_6839 < count__6823_6838)){
var arg_6840 = cljs.core._nth.call(null,chunk__6822_6837,i__6824_6839);
if(((!((arg_6840 == null)))?((((arg_6840.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6840.cljs$core$IWatchable$))?true:(((!arg_6840.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6840):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6840))){
cljs.core.add_watch.call(null,arg_6840,rum.core.cursored_key.call(null,state),((function (seq__6820_6836,chunk__6822_6837,count__6823_6838,i__6824_6839,arg_6840){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6820_6836,chunk__6822_6837,count__6823_6838,i__6824_6839,arg_6840))
);

var G__6841 = seq__6820_6836;
var G__6842 = chunk__6822_6837;
var G__6843 = count__6823_6838;
var G__6844 = (i__6824_6839 + (1));
seq__6820_6836 = G__6841;
chunk__6822_6837 = G__6842;
count__6823_6838 = G__6843;
i__6824_6839 = G__6844;
continue;
} else {
var G__6845 = seq__6820_6836;
var G__6846 = chunk__6822_6837;
var G__6847 = count__6823_6838;
var G__6848 = (i__6824_6839 + (1));
seq__6820_6836 = G__6845;
chunk__6822_6837 = G__6846;
count__6823_6838 = G__6847;
i__6824_6839 = G__6848;
continue;
}
} else {
var temp__4425__auto___6849 = cljs.core.seq.call(null,seq__6820_6836);
if(temp__4425__auto___6849){
var seq__6820_6850__$1 = temp__4425__auto___6849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6820_6850__$1)){
var c__5471__auto___6851 = cljs.core.chunk_first.call(null,seq__6820_6850__$1);
var G__6852 = cljs.core.chunk_rest.call(null,seq__6820_6850__$1);
var G__6853 = c__5471__auto___6851;
var G__6854 = cljs.core.count.call(null,c__5471__auto___6851);
var G__6855 = (0);
seq__6820_6836 = G__6852;
chunk__6822_6837 = G__6853;
count__6823_6838 = G__6854;
i__6824_6839 = G__6855;
continue;
} else {
var arg_6856 = cljs.core.first.call(null,seq__6820_6850__$1);
if(((!((arg_6856 == null)))?((((arg_6856.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6856.cljs$core$IWatchable$))?true:(((!arg_6856.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6856):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6856))){
cljs.core.add_watch.call(null,arg_6856,rum.core.cursored_key.call(null,state),((function (seq__6820_6836,chunk__6822_6837,count__6823_6838,i__6824_6839,arg_6856,seq__6820_6850__$1,temp__4425__auto___6849){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6820_6836,chunk__6822_6837,count__6823_6838,i__6824_6839,arg_6856,seq__6820_6850__$1,temp__4425__auto___6849))
);

var G__6857 = cljs.core.next.call(null,seq__6820_6850__$1);
var G__6858 = null;
var G__6859 = (0);
var G__6860 = (0);
seq__6820_6836 = G__6857;
chunk__6822_6837 = G__6858;
count__6823_6838 = G__6859;
i__6824_6839 = G__6860;
continue;
} else {
var G__6861 = cljs.core.next.call(null,seq__6820_6850__$1);
var G__6862 = null;
var G__6863 = (0);
var G__6864 = (0);
seq__6820_6836 = G__6861;
chunk__6822_6837 = G__6862;
count__6823_6838 = G__6863;
i__6824_6839 = G__6864;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__6828_6865 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6830_6866 = null;
var count__6831_6867 = (0);
var i__6832_6868 = (0);
while(true){
if((i__6832_6868 < count__6831_6867)){
var arg_6869 = cljs.core._nth.call(null,chunk__6830_6866,i__6832_6868);
if(((!((arg_6869 == null)))?((((arg_6869.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6869.cljs$core$IWatchable$))?true:(((!arg_6869.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6869):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6869))){
cljs.core.remove_watch.call(null,arg_6869,rum.core.cursored_key.call(null,state));

var G__6870 = seq__6828_6865;
var G__6871 = chunk__6830_6866;
var G__6872 = count__6831_6867;
var G__6873 = (i__6832_6868 + (1));
seq__6828_6865 = G__6870;
chunk__6830_6866 = G__6871;
count__6831_6867 = G__6872;
i__6832_6868 = G__6873;
continue;
} else {
var G__6874 = seq__6828_6865;
var G__6875 = chunk__6830_6866;
var G__6876 = count__6831_6867;
var G__6877 = (i__6832_6868 + (1));
seq__6828_6865 = G__6874;
chunk__6830_6866 = G__6875;
count__6831_6867 = G__6876;
i__6832_6868 = G__6877;
continue;
}
} else {
var temp__4425__auto___6878 = cljs.core.seq.call(null,seq__6828_6865);
if(temp__4425__auto___6878){
var seq__6828_6879__$1 = temp__4425__auto___6878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6828_6879__$1)){
var c__5471__auto___6880 = cljs.core.chunk_first.call(null,seq__6828_6879__$1);
var G__6881 = cljs.core.chunk_rest.call(null,seq__6828_6879__$1);
var G__6882 = c__5471__auto___6880;
var G__6883 = cljs.core.count.call(null,c__5471__auto___6880);
var G__6884 = (0);
seq__6828_6865 = G__6881;
chunk__6830_6866 = G__6882;
count__6831_6867 = G__6883;
i__6832_6868 = G__6884;
continue;
} else {
var arg_6885 = cljs.core.first.call(null,seq__6828_6879__$1);
if(((!((arg_6885 == null)))?((((arg_6885.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6885.cljs$core$IWatchable$))?true:(((!arg_6885.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6885):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6885))){
cljs.core.remove_watch.call(null,arg_6885,rum.core.cursored_key.call(null,state));

var G__6886 = cljs.core.next.call(null,seq__6828_6879__$1);
var G__6887 = null;
var G__6888 = (0);
var G__6889 = (0);
seq__6828_6865 = G__6886;
chunk__6830_6866 = G__6887;
count__6831_6867 = G__6888;
i__6832_6868 = G__6889;
continue;
} else {
var G__6890 = cljs.core.next.call(null,seq__6828_6879__$1);
var G__6891 = null;
var G__6892 = (0);
var G__6893 = (0);
seq__6828_6865 = G__6890;
chunk__6830_6866 = G__6891;
count__6831_6867 = G__6892;
i__6832_6868 = G__6893;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map