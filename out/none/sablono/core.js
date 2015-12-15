// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__6406__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__6405 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__6405,(0),null);
var body = cljs.core.nthnext.call(null,vec__6405,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__6406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6407__i = 0, G__6407__a = new Array(arguments.length -  0);
while (G__6407__i < G__6407__a.length) {G__6407__a[G__6407__i] = arguments[G__6407__i + 0]; ++G__6407__i;}
  args = new cljs.core.IndexedSeq(G__6407__a,0);
} 
return G__6406__delegate.call(this,args);};
G__6406.cljs$lang$maxFixedArity = 0;
G__6406.cljs$lang$applyTo = (function (arglist__6408){
var args = cljs.core.seq(arglist__6408);
return G__6406__delegate(args);
});
G__6406.cljs$core$IFn$_invoke$arity$variadic = G__6406__delegate;
return G__6406;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5440__auto__ = (function sablono$core$update_arglists_$_iter__6413(s__6414){
return (new cljs.core.LazySeq(null,(function (){
var s__6414__$1 = s__6414;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6414__$1);
if(temp__4425__auto__){
var s__6414__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6414__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6414__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6416 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6415 = (0);
while(true){
if((i__6415 < size__5439__auto__)){
var args = cljs.core._nth.call(null,c__5438__auto__,i__6415);
cljs.core.chunk_append.call(null,b__6416,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__6417 = (i__6415 + (1));
i__6415 = G__6417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6416),sablono$core$update_arglists_$_iter__6413.call(null,cljs.core.chunk_rest.call(null,s__6414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6416),null);
}
} else {
var args = cljs.core.first.call(null,s__6414__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__6413.call(null,cljs.core.rest.call(null,s__6414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6423 = arguments.length;
var i__5727__auto___6424 = (0);
while(true){
if((i__5727__auto___6424 < len__5726__auto___6423)){
args__5733__auto__.push((arguments[i__5727__auto___6424]));

var G__6425 = (i__5727__auto___6424 + (1));
i__5727__auto___6424 = G__6425;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5440__auto__ = (function sablono$core$iter__6419(s__6420){
return (new cljs.core.LazySeq(null,(function (){
var s__6420__$1 = s__6420;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6420__$1);
if(temp__4425__auto__){
var s__6420__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6420__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6420__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6422 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6421 = (0);
while(true){
if((i__6421 < size__5439__auto__)){
var style = cljs.core._nth.call(null,c__5438__auto__,i__6421);
cljs.core.chunk_append.call(null,b__6422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__6426 = (i__6421 + (1));
i__6421 = G__6426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6422),sablono$core$iter__6419.call(null,cljs.core.chunk_rest.call(null,s__6420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6422),null);
}
} else {
var style = cljs.core.first.call(null,s__6420__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__6419.call(null,cljs.core.rest.call(null,s__6420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq6418){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6418));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to6427 = (function sablono$core$link_to6427(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6430 = arguments.length;
var i__5727__auto___6431 = (0);
while(true){
if((i__5727__auto___6431 < len__5726__auto___6430)){
args__5733__auto__.push((arguments[i__5727__auto___6431]));

var G__6432 = (i__5727__auto___6431 + (1));
i__5727__auto___6431 = G__6432;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.link_to6427.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.link_to6427.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to6427.cljs$lang$maxFixedArity = (1);

sablono.core.link_to6427.cljs$lang$applyTo = (function (seq6428){
var G__6429 = cljs.core.first.call(null,seq6428);
var seq6428__$1 = cljs.core.next.call(null,seq6428);
return sablono.core.link_to6427.cljs$core$IFn$_invoke$arity$variadic(G__6429,seq6428__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6427);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to6433 = (function sablono$core$mail_to6433(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6438 = arguments.length;
var i__5727__auto___6439 = (0);
while(true){
if((i__5727__auto___6439 < len__5726__auto___6438)){
args__5733__auto__.push((arguments[i__5727__auto___6439]));

var G__6440 = (i__5727__auto___6439 + (1));
i__5727__auto___6439 = G__6440;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.mail_to6433.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.mail_to6433.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__6436){
var vec__6437 = p__6436;
var content = cljs.core.nth.call(null,vec__6437,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4668__auto__ = content;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to6433.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to6433.cljs$lang$applyTo = (function (seq6434){
var G__6435 = cljs.core.first.call(null,seq6434);
var seq6434__$1 = cljs.core.next.call(null,seq6434);
return sablono.core.mail_to6433.cljs$core$IFn$_invoke$arity$variadic(G__6435,seq6434__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6433);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list6441 = (function sablono$core$unordered_list6441(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5440__auto__ = (function sablono$core$unordered_list6441_$_iter__6446(s__6447){
return (new cljs.core.LazySeq(null,(function (){
var s__6447__$1 = s__6447;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6447__$1);
if(temp__4425__auto__){
var s__6447__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6447__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6447__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6449 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6448 = (0);
while(true){
if((i__6448 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__6448);
cljs.core.chunk_append.call(null,b__6449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6450 = (i__6448 + (1));
i__6448 = G__6450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6449),sablono$core$unordered_list6441_$_iter__6446.call(null,cljs.core.chunk_rest.call(null,s__6447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6449),null);
}
} else {
var x = cljs.core.first.call(null,s__6447__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list6441_$_iter__6446.call(null,cljs.core.rest.call(null,s__6447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6441);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list6451 = (function sablono$core$ordered_list6451(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5440__auto__ = (function sablono$core$ordered_list6451_$_iter__6456(s__6457){
return (new cljs.core.LazySeq(null,(function (){
var s__6457__$1 = s__6457;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6457__$1);
if(temp__4425__auto__){
var s__6457__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6457__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6457__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6459 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6458 = (0);
while(true){
if((i__6458 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__6458);
cljs.core.chunk_append.call(null,b__6459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6460 = (i__6458 + (1));
i__6458 = G__6460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6459),sablono$core$ordered_list6451_$_iter__6456.call(null,cljs.core.chunk_rest.call(null,s__6457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6459),null);
}
} else {
var x = cljs.core.first.call(null,s__6457__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list6451_$_iter__6456.call(null,cljs.core.rest.call(null,s__6457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6451);
/**
 * Create an image element.
 */
sablono.core.image6461 = (function sablono$core$image6461(var_args){
var args6462 = [];
var len__5726__auto___6465 = arguments.length;
var i__5727__auto___6466 = (0);
while(true){
if((i__5727__auto___6466 < len__5726__auto___6465)){
args6462.push((arguments[i__5727__auto___6466]));

var G__6467 = (i__5727__auto___6466 + (1));
i__5727__auto___6466 = G__6467;
continue;
} else {
}
break;
}

var G__6464 = args6462.length;
switch (G__6464) {
case 1:
return sablono.core.image6461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image6461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6462.length)].join('')));

}
});

sablono.core.image6461.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image6461.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image6461.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6461);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__6469_SHARP_,p2__6470_SHARP_){
return [cljs.core.str(p1__6469_SHARP_),cljs.core.str("["),cljs.core.str(p2__6470_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__6471_SHARP_,p2__6472_SHARP_){
return [cljs.core.str(p1__6471_SHARP_),cljs.core.str("-"),cljs.core.str(p2__6472_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field6473 = (function sablono$core$color_field6473(var_args){
var args6474 = [];
var len__5726__auto___6541 = arguments.length;
var i__5727__auto___6542 = (0);
while(true){
if((i__5727__auto___6542 < len__5726__auto___6541)){
args6474.push((arguments[i__5727__auto___6542]));

var G__6543 = (i__5727__auto___6542 + (1));
i__5727__auto___6542 = G__6543;
continue;
} else {
}
break;
}

var G__6476 = args6474.length;
switch (G__6476) {
case 1:
return sablono.core.color_field6473.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field6473.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6474.length)].join('')));

}
});

sablono.core.color_field6473.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.color_field6473.call(null,name__6394__auto__,null);
});

sablono.core.color_field6473.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.color_field6473.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6473);

/**
 * Creates a date input field.
 */
sablono.core.date_field6477 = (function sablono$core$date_field6477(var_args){
var args6478 = [];
var len__5726__auto___6545 = arguments.length;
var i__5727__auto___6546 = (0);
while(true){
if((i__5727__auto___6546 < len__5726__auto___6545)){
args6478.push((arguments[i__5727__auto___6546]));

var G__6547 = (i__5727__auto___6546 + (1));
i__5727__auto___6546 = G__6547;
continue;
} else {
}
break;
}

var G__6480 = args6478.length;
switch (G__6480) {
case 1:
return sablono.core.date_field6477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field6477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6478.length)].join('')));

}
});

sablono.core.date_field6477.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.date_field6477.call(null,name__6394__auto__,null);
});

sablono.core.date_field6477.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.date_field6477.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6477);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field6481 = (function sablono$core$datetime_field6481(var_args){
var args6482 = [];
var len__5726__auto___6549 = arguments.length;
var i__5727__auto___6550 = (0);
while(true){
if((i__5727__auto___6550 < len__5726__auto___6549)){
args6482.push((arguments[i__5727__auto___6550]));

var G__6551 = (i__5727__auto___6550 + (1));
i__5727__auto___6550 = G__6551;
continue;
} else {
}
break;
}

var G__6484 = args6482.length;
switch (G__6484) {
case 1:
return sablono.core.datetime_field6481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field6481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6482.length)].join('')));

}
});

sablono.core.datetime_field6481.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.datetime_field6481.call(null,name__6394__auto__,null);
});

sablono.core.datetime_field6481.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.datetime_field6481.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6481);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field6485 = (function sablono$core$datetime_local_field6485(var_args){
var args6486 = [];
var len__5726__auto___6553 = arguments.length;
var i__5727__auto___6554 = (0);
while(true){
if((i__5727__auto___6554 < len__5726__auto___6553)){
args6486.push((arguments[i__5727__auto___6554]));

var G__6555 = (i__5727__auto___6554 + (1));
i__5727__auto___6554 = G__6555;
continue;
} else {
}
break;
}

var G__6488 = args6486.length;
switch (G__6488) {
case 1:
return sablono.core.datetime_local_field6485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field6485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6486.length)].join('')));

}
});

sablono.core.datetime_local_field6485.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.datetime_local_field6485.call(null,name__6394__auto__,null);
});

sablono.core.datetime_local_field6485.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.datetime_local_field6485.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6485);

/**
 * Creates a email input field.
 */
sablono.core.email_field6489 = (function sablono$core$email_field6489(var_args){
var args6490 = [];
var len__5726__auto___6557 = arguments.length;
var i__5727__auto___6558 = (0);
while(true){
if((i__5727__auto___6558 < len__5726__auto___6557)){
args6490.push((arguments[i__5727__auto___6558]));

var G__6559 = (i__5727__auto___6558 + (1));
i__5727__auto___6558 = G__6559;
continue;
} else {
}
break;
}

var G__6492 = args6490.length;
switch (G__6492) {
case 1:
return sablono.core.email_field6489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field6489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6490.length)].join('')));

}
});

sablono.core.email_field6489.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.email_field6489.call(null,name__6394__auto__,null);
});

sablono.core.email_field6489.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.email_field6489.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6489);

/**
 * Creates a file input field.
 */
sablono.core.file_field6493 = (function sablono$core$file_field6493(var_args){
var args6494 = [];
var len__5726__auto___6561 = arguments.length;
var i__5727__auto___6562 = (0);
while(true){
if((i__5727__auto___6562 < len__5726__auto___6561)){
args6494.push((arguments[i__5727__auto___6562]));

var G__6563 = (i__5727__auto___6562 + (1));
i__5727__auto___6562 = G__6563;
continue;
} else {
}
break;
}

var G__6496 = args6494.length;
switch (G__6496) {
case 1:
return sablono.core.file_field6493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field6493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6494.length)].join('')));

}
});

sablono.core.file_field6493.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.file_field6493.call(null,name__6394__auto__,null);
});

sablono.core.file_field6493.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.file_field6493.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6493);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field6497 = (function sablono$core$hidden_field6497(var_args){
var args6498 = [];
var len__5726__auto___6565 = arguments.length;
var i__5727__auto___6566 = (0);
while(true){
if((i__5727__auto___6566 < len__5726__auto___6565)){
args6498.push((arguments[i__5727__auto___6566]));

var G__6567 = (i__5727__auto___6566 + (1));
i__5727__auto___6566 = G__6567;
continue;
} else {
}
break;
}

var G__6500 = args6498.length;
switch (G__6500) {
case 1:
return sablono.core.hidden_field6497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field6497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6498.length)].join('')));

}
});

sablono.core.hidden_field6497.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.hidden_field6497.call(null,name__6394__auto__,null);
});

sablono.core.hidden_field6497.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.hidden_field6497.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6497);

/**
 * Creates a month input field.
 */
sablono.core.month_field6501 = (function sablono$core$month_field6501(var_args){
var args6502 = [];
var len__5726__auto___6569 = arguments.length;
var i__5727__auto___6570 = (0);
while(true){
if((i__5727__auto___6570 < len__5726__auto___6569)){
args6502.push((arguments[i__5727__auto___6570]));

var G__6571 = (i__5727__auto___6570 + (1));
i__5727__auto___6570 = G__6571;
continue;
} else {
}
break;
}

var G__6504 = args6502.length;
switch (G__6504) {
case 1:
return sablono.core.month_field6501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field6501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6502.length)].join('')));

}
});

sablono.core.month_field6501.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.month_field6501.call(null,name__6394__auto__,null);
});

sablono.core.month_field6501.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.month_field6501.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6501);

/**
 * Creates a number input field.
 */
sablono.core.number_field6505 = (function sablono$core$number_field6505(var_args){
var args6506 = [];
var len__5726__auto___6573 = arguments.length;
var i__5727__auto___6574 = (0);
while(true){
if((i__5727__auto___6574 < len__5726__auto___6573)){
args6506.push((arguments[i__5727__auto___6574]));

var G__6575 = (i__5727__auto___6574 + (1));
i__5727__auto___6574 = G__6575;
continue;
} else {
}
break;
}

var G__6508 = args6506.length;
switch (G__6508) {
case 1:
return sablono.core.number_field6505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field6505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6506.length)].join('')));

}
});

sablono.core.number_field6505.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.number_field6505.call(null,name__6394__auto__,null);
});

sablono.core.number_field6505.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.number_field6505.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6505);

/**
 * Creates a password input field.
 */
sablono.core.password_field6509 = (function sablono$core$password_field6509(var_args){
var args6510 = [];
var len__5726__auto___6577 = arguments.length;
var i__5727__auto___6578 = (0);
while(true){
if((i__5727__auto___6578 < len__5726__auto___6577)){
args6510.push((arguments[i__5727__auto___6578]));

var G__6579 = (i__5727__auto___6578 + (1));
i__5727__auto___6578 = G__6579;
continue;
} else {
}
break;
}

var G__6512 = args6510.length;
switch (G__6512) {
case 1:
return sablono.core.password_field6509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field6509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6510.length)].join('')));

}
});

sablono.core.password_field6509.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.password_field6509.call(null,name__6394__auto__,null);
});

sablono.core.password_field6509.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.password_field6509.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6509);

/**
 * Creates a range input field.
 */
sablono.core.range_field6513 = (function sablono$core$range_field6513(var_args){
var args6514 = [];
var len__5726__auto___6581 = arguments.length;
var i__5727__auto___6582 = (0);
while(true){
if((i__5727__auto___6582 < len__5726__auto___6581)){
args6514.push((arguments[i__5727__auto___6582]));

var G__6583 = (i__5727__auto___6582 + (1));
i__5727__auto___6582 = G__6583;
continue;
} else {
}
break;
}

var G__6516 = args6514.length;
switch (G__6516) {
case 1:
return sablono.core.range_field6513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field6513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6514.length)].join('')));

}
});

sablono.core.range_field6513.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.range_field6513.call(null,name__6394__auto__,null);
});

sablono.core.range_field6513.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.range_field6513.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6513);

/**
 * Creates a search input field.
 */
sablono.core.search_field6517 = (function sablono$core$search_field6517(var_args){
var args6518 = [];
var len__5726__auto___6585 = arguments.length;
var i__5727__auto___6586 = (0);
while(true){
if((i__5727__auto___6586 < len__5726__auto___6585)){
args6518.push((arguments[i__5727__auto___6586]));

var G__6587 = (i__5727__auto___6586 + (1));
i__5727__auto___6586 = G__6587;
continue;
} else {
}
break;
}

var G__6520 = args6518.length;
switch (G__6520) {
case 1:
return sablono.core.search_field6517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field6517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6518.length)].join('')));

}
});

sablono.core.search_field6517.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.search_field6517.call(null,name__6394__auto__,null);
});

sablono.core.search_field6517.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.search_field6517.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6517);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field6521 = (function sablono$core$tel_field6521(var_args){
var args6522 = [];
var len__5726__auto___6589 = arguments.length;
var i__5727__auto___6590 = (0);
while(true){
if((i__5727__auto___6590 < len__5726__auto___6589)){
args6522.push((arguments[i__5727__auto___6590]));

var G__6591 = (i__5727__auto___6590 + (1));
i__5727__auto___6590 = G__6591;
continue;
} else {
}
break;
}

var G__6524 = args6522.length;
switch (G__6524) {
case 1:
return sablono.core.tel_field6521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field6521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6522.length)].join('')));

}
});

sablono.core.tel_field6521.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.tel_field6521.call(null,name__6394__auto__,null);
});

sablono.core.tel_field6521.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.tel_field6521.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6521);

/**
 * Creates a text input field.
 */
sablono.core.text_field6525 = (function sablono$core$text_field6525(var_args){
var args6526 = [];
var len__5726__auto___6593 = arguments.length;
var i__5727__auto___6594 = (0);
while(true){
if((i__5727__auto___6594 < len__5726__auto___6593)){
args6526.push((arguments[i__5727__auto___6594]));

var G__6595 = (i__5727__auto___6594 + (1));
i__5727__auto___6594 = G__6595;
continue;
} else {
}
break;
}

var G__6528 = args6526.length;
switch (G__6528) {
case 1:
return sablono.core.text_field6525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field6525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6526.length)].join('')));

}
});

sablono.core.text_field6525.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.text_field6525.call(null,name__6394__auto__,null);
});

sablono.core.text_field6525.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.text_field6525.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6525);

/**
 * Creates a time input field.
 */
sablono.core.time_field6529 = (function sablono$core$time_field6529(var_args){
var args6530 = [];
var len__5726__auto___6597 = arguments.length;
var i__5727__auto___6598 = (0);
while(true){
if((i__5727__auto___6598 < len__5726__auto___6597)){
args6530.push((arguments[i__5727__auto___6598]));

var G__6599 = (i__5727__auto___6598 + (1));
i__5727__auto___6598 = G__6599;
continue;
} else {
}
break;
}

var G__6532 = args6530.length;
switch (G__6532) {
case 1:
return sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6530.length)].join('')));

}
});

sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.time_field6529.call(null,name__6394__auto__,null);
});

sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.time_field6529.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6529);

/**
 * Creates a url input field.
 */
sablono.core.url_field6533 = (function sablono$core$url_field6533(var_args){
var args6534 = [];
var len__5726__auto___6601 = arguments.length;
var i__5727__auto___6602 = (0);
while(true){
if((i__5727__auto___6602 < len__5726__auto___6601)){
args6534.push((arguments[i__5727__auto___6602]));

var G__6603 = (i__5727__auto___6602 + (1));
i__5727__auto___6602 = G__6603;
continue;
} else {
}
break;
}

var G__6536 = args6534.length;
switch (G__6536) {
case 1:
return sablono.core.url_field6533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field6533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6534.length)].join('')));

}
});

sablono.core.url_field6533.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.url_field6533.call(null,name__6394__auto__,null);
});

sablono.core.url_field6533.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.url_field6533.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6533);

/**
 * Creates a week input field.
 */
sablono.core.week_field6537 = (function sablono$core$week_field6537(var_args){
var args6538 = [];
var len__5726__auto___6605 = arguments.length;
var i__5727__auto___6606 = (0);
while(true){
if((i__5727__auto___6606 < len__5726__auto___6605)){
args6538.push((arguments[i__5727__auto___6606]));

var G__6607 = (i__5727__auto___6606 + (1));
i__5727__auto___6606 = G__6607;
continue;
} else {
}
break;
}

var G__6540 = args6538.length;
switch (G__6540) {
case 1:
return sablono.core.week_field6537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field6537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6538.length)].join('')));

}
});

sablono.core.week_field6537.cljs$core$IFn$_invoke$arity$1 = (function (name__6394__auto__){
return sablono.core.week_field6537.call(null,name__6394__auto__,null);
});

sablono.core.week_field6537.cljs$core$IFn$_invoke$arity$2 = (function (name__6394__auto__,value__6395__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6394__auto__,value__6395__auto__);
});

sablono.core.week_field6537.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6537);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6609 = (function sablono$core$check_box6609(var_args){
var args6610 = [];
var len__5726__auto___6613 = arguments.length;
var i__5727__auto___6614 = (0);
while(true){
if((i__5727__auto___6614 < len__5726__auto___6613)){
args6610.push((arguments[i__5727__auto___6614]));

var G__6615 = (i__5727__auto___6614 + (1));
i__5727__auto___6614 = G__6615;
continue;
} else {
}
break;
}

var G__6612 = args6610.length;
switch (G__6612) {
case 1:
return sablono.core.check_box6609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6609.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6610.length)].join('')));

}
});

sablono.core.check_box6609.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box6609.call(null,name,null);
});

sablono.core.check_box6609.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box6609.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box6609.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box6609.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6609);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6617 = (function sablono$core$radio_button6617(var_args){
var args6618 = [];
var len__5726__auto___6621 = arguments.length;
var i__5727__auto___6622 = (0);
while(true){
if((i__5727__auto___6622 < len__5726__auto___6621)){
args6618.push((arguments[i__5727__auto___6622]));

var G__6623 = (i__5727__auto___6622 + (1));
i__5727__auto___6622 = G__6623;
continue;
} else {
}
break;
}

var G__6620 = args6618.length;
switch (G__6620) {
case 1:
return sablono.core.radio_button6617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6617.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6618.length)].join('')));

}
});

sablono.core.radio_button6617.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button6617.call(null,group,null);
});

sablono.core.radio_button6617.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button6617.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button6617.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button6617.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6617);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6625 = (function sablono$core$select_options6625(coll){
var iter__5440__auto__ = (function sablono$core$select_options6625_$_iter__6634(s__6635){
return (new cljs.core.LazySeq(null,(function (){
var s__6635__$1 = s__6635;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6635__$1);
if(temp__4425__auto__){
var s__6635__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6635__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6635__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6637 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6636 = (0);
while(true){
if((i__6636 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__6636);
cljs.core.chunk_append.call(null,b__6637,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6640 = x;
var text = cljs.core.nth.call(null,vec__6640,(0),null);
var val = cljs.core.nth.call(null,vec__6640,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6640,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options6625.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6642 = (i__6636 + (1));
i__6636 = G__6642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6637),sablono$core$select_options6625_$_iter__6634.call(null,cljs.core.chunk_rest.call(null,s__6635__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6637),null);
}
} else {
var x = cljs.core.first.call(null,s__6635__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6641 = x;
var text = cljs.core.nth.call(null,vec__6641,(0),null);
var val = cljs.core.nth.call(null,vec__6641,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6641,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options6625.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6625_$_iter__6634.call(null,cljs.core.rest.call(null,s__6635__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6625);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6643 = (function sablono$core$drop_down6643(var_args){
var args6644 = [];
var len__5726__auto___6647 = arguments.length;
var i__5727__auto___6648 = (0);
while(true){
if((i__5727__auto___6648 < len__5726__auto___6647)){
args6644.push((arguments[i__5727__auto___6648]));

var G__6649 = (i__5727__auto___6648 + (1));
i__5727__auto___6648 = G__6649;
continue;
} else {
}
break;
}

var G__6646 = args6644.length;
switch (G__6646) {
case 2:
return sablono.core.drop_down6643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6643.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6644.length)].join('')));

}
});

sablono.core.drop_down6643.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6643.call(null,name,options,null);
});

sablono.core.drop_down6643.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down6643.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6643);
/**
 * Creates a text area element.
 */
sablono.core.text_area6651 = (function sablono$core$text_area6651(var_args){
var args6652 = [];
var len__5726__auto___6655 = arguments.length;
var i__5727__auto___6656 = (0);
while(true){
if((i__5727__auto___6656 < len__5726__auto___6655)){
args6652.push((arguments[i__5727__auto___6656]));

var G__6657 = (i__5727__auto___6656 + (1));
i__5727__auto___6656 = G__6657;
continue;
} else {
}
break;
}

var G__6654 = args6652.length;
switch (G__6654) {
case 1:
return sablono.core.text_area6651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6652.length)].join('')));

}
});

sablono.core.text_area6651.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area6651.call(null,name,null);
});

sablono.core.text_area6651.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area6651.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6651);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6659 = (function sablono$core$label6659(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6659);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6660 = (function sablono$core$submit_button6660(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6660);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6661 = (function sablono$core$reset_button6661(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6661);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6662 = (function sablono$core$form_to6662(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6667 = arguments.length;
var i__5727__auto___6668 = (0);
while(true){
if((i__5727__auto___6668 < len__5726__auto___6667)){
args__5733__auto__.push((arguments[i__5727__auto___6668]));

var G__6669 = (i__5727__auto___6668 + (1));
i__5727__auto___6668 = G__6669;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.form_to6662.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.form_to6662.cljs$core$IFn$_invoke$arity$variadic = (function (p__6665,body){
var vec__6666 = p__6665;
var method = cljs.core.nth.call(null,vec__6666,(0),null);
var action = cljs.core.nth.call(null,vec__6666,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to6662.cljs$lang$maxFixedArity = (1);

sablono.core.form_to6662.cljs$lang$applyTo = (function (seq6663){
var G__6664 = cljs.core.first.call(null,seq6663);
var seq6663__$1 = cljs.core.next.call(null,seq6663);
return sablono.core.form_to6662.cljs$core$IFn$_invoke$arity$variadic(G__6664,seq6663__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6662);

//# sourceMappingURL=core.js.map