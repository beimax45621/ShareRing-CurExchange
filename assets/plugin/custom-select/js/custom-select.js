jQuery().ready(function () {
  jQuery(".drop-down").append('<div class="button"></div>');
  jQuery(".drop-down").append('<ul class="select-list"></ul>');
  jQuery(".drop-down").each(function () {
    var parent = jQuery(this);
    parent.find("select option").each(function () {
      var img = jQuery(this).attr("data-image");
      parent.find(".select-list").append(`<li class="clsAnchor"><div class="d-flex align-items-center"><img src="${img}" /><span value="${jQuery(this).val()}">${jQuery(this).text()}</span></div></li>`);
    });
    parent.find(".button").html(`<img src="${parent.find("select").find(":selected").attr("data-image")}" /><span>${parent.find(" select").find(":selected").text()}</span><a href="javascript:void(0);" class="select-list-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG6SURBVHgBtVbLccIwEF35AAcu5MjnAB0kFSQzFAAlQAUhFWBXkFABlEC4M0MH0IF94HOMLxyAGch7jO0xRiImmDfjkdBK7+1qpRVKrsB13WIul+sqpV7xs3Y8HmuBycfYHO1ou91+1+t1z8ShdIPr9ZpkA3xvkg7D3W7n6ISs5MBqteoeDofZDeREG5HOFotFN2k4i2C5XNpoenIfnEqlYl8I0HN4/SkZADwf1Wr1KxLgnnNb0C1KNvCRkxfm5JQDkPcyJCeK+Xx+wI4KvHflAUAUTxb2qykPAk7WO7eopTNOJhMZj8ey2WyMBLRxDufqgMv4xgieTYv5cbFOJG4zOcGbzwi0yW00GlIoFLQi8THO4VwDapbJEi5MiujI2ZqgcMHcWBG7QJIwHEtDDviMwLs2IxnJDeTMwZxJnsofiBOmJScsyxqpoOb/yAOAi1a3UC/4eEwlewyjWgSBDhpfsgOLncPOSaBUKnnIhSMZAQ7b4esW3YOgfttyP+xyudyPxJJWPnvw4D/lm7k8I9cKEEEJp0hbUoBHfb/fd3SPvrq2MPh30YRYC96xKIZRMWceTx+S2edJNHH8AmXxEY9NHt24AAAAAElFTkSuQmCC"></a>`);
    parent.find(" ul li div").each(function () {
      if (jQuery(this).find("span").text() == parent.find(" select").find(":selected").text()) {
        jQuery(this).addClass("active");
      }
    });
    parent.find(".select-list li div").on("click", function () {
      var dd_text = jQuery(this).children("span").text();
      var dd_img = jQuery(this).children("img").attr("src");
      var dd_val = jQuery(this).children("span").attr("value");
      parent.find(" .button").html(`<img src="${dd_img}" /><span>${dd_text}</span><a href="javascript:void(0);" class="select-list-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG6SURBVHgBtVbLccIwEF35AAcu5MjnAB0kFSQzFAAlQAUhFWBXkFABlEC4M0MH0IF94HOMLxyAGch7jO0xRiImmDfjkdBK7+1qpRVKrsB13WIul+sqpV7xs3Y8HmuBycfYHO1ou91+1+t1z8ShdIPr9ZpkA3xvkg7D3W7n6ISs5MBqteoeDofZDeREG5HOFotFN2k4i2C5XNpoenIfnEqlYl8I0HN4/SkZADwf1Wr1KxLgnnNb0C1KNvCRkxfm5JQDkPcyJCeK+Xx+wI4KvHflAUAUTxb2qykPAk7WO7eopTNOJhMZj8ey2WyMBLRxDufqgMv4xgieTYv5cbFOJG4zOcGbzwi0yW00GlIoFLQi8THO4VwDapbJEi5MiujI2ZqgcMHcWBG7QJIwHEtDDviMwLs2IxnJDeTMwZxJnsofiBOmJScsyxqpoOb/yAOAi1a3UC/4eEwlewyjWgSBDhpfsgOLncPOSaBUKnnIhSMZAQ7b4esW3YOgfttyP+xyudyPxJJWPnvw4D/lm7k8I9cKEEEJp0hbUoBHfb/fd3SPvrq2MPh30YRYC96xKIZRMWceTx+S2edJNHH8AmXxEY9NHt24AAAAAElFTkSuQmCC"></a>`);
      parent.find(" .select-list span").parent().removeClass("active");
      jQuery(this).parent().addClass("active");
      $(".drop-down select[name=options]").val(dd_val);
      $(".drop-down .select-list li").slideUp();
    });
    parent.find(" .button").on("click", "a.select-list-link", function () {
      parent.find(" ul li").slideToggle();
    });
  });
});
