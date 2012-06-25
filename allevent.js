(function () {
var addAllEventListener = function (elem, callback) {
	var all = "DOMActivate DOMAttrModified DOMAttributeNameChanged DOMCharacterDataModified DOMContentLoaded DOMElementNameChanged DOMFocusIn DOMFocusOut DOMNodeInserted DOMNodeInsertedIntoDocument DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified abort afterprint animationend animationiteration animationstart beforeprint beforeunload blur callschanged canplay canplaythrough click compositionend compositionstart compositionupdate contextmenu cuechange delivered dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended error focus focusin focusout hashchange incoming input invalid keydown keypress keyup load loadeddata loadedmetadata loadend loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel mozfullscreenchange offline online pagehide pageshow pause play playing popstate progress ratechange readystatechange received reset resize scroll seeked seeking select sent show stalled storage submit suspend textinput timeout timeupdate touchstart touchmove touchend touchcancel unload volumechange waiting wheel".split(/\s/);
	for (var i = 0, len = all.length; i < len; i += 1) {
		elem.addEventListener(all[i], callback);
	};
};
this.addAllEventListener = addAllEventListener;
}());
