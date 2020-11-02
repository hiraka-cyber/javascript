var menu3bar_off = function(e) {
	var elm = e.target ? (e.target.nodeType == 3 ? e.target.parentNode : e.target) : (window.event.srcElement ? window.event.srcElement : "");
	if(!elm || $(elm).parents(".menu3bar")[0]) {
		return "";
	}

	$(document.body).unbind("touchend", menu3bar_off);
	$(document.body).unbind("click", menu3bar_off);

	$(".menu3bar_on").removeClass("menu3bar_on");
};
var menu3bar = function(self) {
	if($(self).hasClass("menu3bar_on") ) {
		return "";
	}

	$(self).addClass("menu3bar_on");

	$(document.body).unbind("touchend", menu3bar_off).bind("touchend", menu3bar_off);
	$(document.body).unbind("click", menu3bar_off).bind("click", menu3bar_off);
};

$(document).ready(function() {
	if(navigator.userAgent.indexOf("Android 2.") === -1) {
		return "";
	}
	$("div.menu3bar > ul").css( {
		"position": "absolute",
		"max-height": "none",
	} );
} );

/*
//debug
var debug = function(obj, layer) {
	if(typeof(obj) != "object") {
		return obj;
	}

	var txt = "";
	layer = layer ? layer : 0;
	for(var i in obj) {
		for(var j = 0; j < layer; j++) {
			txt += "\t";
		}

		if(typeof(obj[i]) == "object") {
			if(obj[i] instanceof jQuery) {
				txt += i + " : jquery object\n";
			} else {
				txt += i + " :\n" + debug(obj[i], layer + 1);
			}
		} else {
			txt += i + " : " + obj[i] + "\n";
		}
	}
	return txt;
};
$(document).ready(function() {
	if(!$("#debug")[0]) {
		$(document.body).append($("<textarea style=\"display:block;z-index:900000;position:fixed;top:0;left:0;width:300px;max-height:100%;overflow:auto;background-color:#000;color:#fff;font-size:80%\" id=\"debug\">yes</textarea>") );
	}
} );
*/
