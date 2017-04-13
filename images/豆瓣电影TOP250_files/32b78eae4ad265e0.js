
Do(function(){
  var cookieCfg={key:"ap",cookie:"1"},$doubanTip=$("#doubanapp-tip"),data={};function hideDoubanTip(){if(!$doubanTip.length){return}$doubanTip.hide();data[cookieCfg.key]=cookieCfg.cookie;set_cookie(data)}$doubanTip.delegate("a","click",hideDoubanTip);if(!get_cookie(cookieCfg.key)){$doubanTip.show()}var popup;var nav=$("#db-global-nav");var more=nav.find(".bn-more");function handleShowMoreActive(c){var a=$(c.currentTarget);var b=a.parent();hideDoubanTip();if(popup){popup.parent().removeClass("more-active");if($.contains(b[0],popup[0])){popup=null;return}}b.addClass("more-active");popup=b.find(".more-items");popup.trigger("moreitem:show")}nav.delegate(".bn-more, .top-nav-reminder .lnk-remind","click",function(a){a.preventDefault();handleShowMoreActive(a);return}).delegate(".lnk-doubanapp","mouseenter",function(b){var a=$(this);if(!a.parent().hasClass("more-active")){handleShowMoreActive(b)}}).delegate(".top-nav-doubanapp","mouseleave",function(){var b=$(this);var a=b.find(".lnk-doubanapp");if(popup){b.removeClass("more-active");if($.contains(b[0],popup[0])){popup=null}}});$(document).click(function(a){if($(a.target).closest(".more-items").length||$(a.target).closest(".more-active").length){return}if(popup){popup.parent().removeClass("more-active");popup=null}});
});

    Do(function() {
      $.getScripts=function(){var t=Array.prototype.slice.call(arguments);t.length&&!function i(c){if(c)return"function"==typeof c?void c():void $.ajax({url:c,dataType:"script",cache:!0,complete:function(){i(t.shift())}})}(t.shift())};

      $.getScripts(
        'https://img3.doubanio.com/f/shire/45dbd19d76e2601d4b8ac605bf7f1fefc4f34d10/js/lib/jquery.tmpl.min.js',
        'https://img3.doubanio.com/f/movie/e1b3eda57ecf09b716e489e854ac81da234ac10e/js/movie/search_sugg.js',
        function() {
         $("#db-nav-movie").find("input[name=search_text]").iSuggest({
             api: '/j/subject_suggest',
             tmplId: 'suggResult',
             item_act: function(item){
                 window.location = item.data("link");
             }
         });
      });
    });
  
Do(function(){
    var nav = $('#db-nav-movie');
    var inp=$("#inp-query"),label=inp.closest(".nav-search").find("label");"placeholder"in inp[0]?(label.hide(),inp.attr("placeholder",label.text())):(""!==inp.val()&&label.hide(),inp.parent().click(function(){inp.focus(),label.hide()}).end().focusin(function(){label.hide()}).focusout(function(){""===$.trim(this.value)?label.show():label.hide()}).keydown(function(){label.hide()})),inp.parents("form").submit(function(){if(!$.trim(inp.val()).length)return!1}),nav.find(".lnk-more, .lnk-account").click(function(n){n.preventDefault();var i,e=$(this),t=e.hasClass("lnk-more")?$("#db-productions"):$("#db-usr-setting");t.data("init")||(i=e.offset(),t.css({"margin-left":i.left-$(window).width()/2-t.width()+e.width()+parseInt(e.css("padding-right"),10)+"px",left:"50%",top:i.top+e.height()+"px"}),t.data("init",1),t.hide(),$("body").click(function(n){var i=$(n.target);i.hasClass("lnk-more")||i.hasClass("lnk-account")||i.closest("#db-usr-setting").length||i.closest("#db-productions").length||t.hide()})),"none"===t.css("display")?($(".dropdown").hide(),t.show()):$(".dropdown").hide()});

});
