



/*var mw_edit = document.createElement("edit");
var mw_module = document.createElement("module");
var mw_moduleedit = document.createElement("moduleedit");
var mw_editblock = document.createElement("editblock");*/

if (window.console != undefined) {
	console.log('Microweber Javascript Framework Loaded');
}

/*
 * Microweber v0.1 - Javascript Framework
 *  
 * Copyright (c) 2010 Mass Media Group (www.ooyes.net) Dual licensed under the
 * MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
 *
 */


window.mw = window.mw ? window.mw : {};
MW  = window.mw;
mw = window.mw;

mw.ready = function(elem, callback){
    $(document).ready(function(){
      $(elem).each(function(){
         var el = $(this);
          if(!el.hasClass("exec")){
            el.addClass("exec");
            callback.call(el);
          }
      });

      $(document.body).ajaxStop(function(){
        $(elem).each(function(){
           var el = $(this);
            if(!el.hasClass("exec")){
              el.addClass("exec");
              callback.call(el);
            }
        });
      });

    });

}


 
mw.module =  function($vars, $update_element) {



	$.ajax({
		  url: '{SITE_URL}api/module',
		   type: "POST",
		      data: ($vars),
		      async:false,
			  
		  success: function(resp) {
		   $($update_element).html(resp);

		   if($vars.callback!=undefined){
			   $vars.callback.call(this);
			   
		   }
		   
		  }
			});
}


mw.clear_cache =  function() {
	$.ajax({
		  url: '{SITE_URL}ajax_helpers/clearcache',
		   type: "POST",
		  success: function(resp) {
		   
		  }
			});
}


 


