
function CustomSelect() {
    var container = ".custom_select",
        selected_selector = ".custom_select_selected",
        obj = document.querySelector(container);
    
    if (obj.length) {
        var selected = obj.find(selected_selector);
        var options = obj.find("ul").children();

        this.css("z-index", parseInt(999));

        selected.click(function() {
            options.parent().toggle();
        });

        $.each(options, function(k1, v1) {
            $(this).click(function() {
                selected.html($(this).html());
                options.parent().toggle();
            });
        });
    }
}

$().ready(function() {
    CustomSelect();
});

var imgFullURL = document.querySelector('img.something').src;

(function() {

    const imageInfo = new Object();
    imageInfo.source = '';
  
    window.addEventListener('mouseover', function (event) {
      var currentElement = event.target;
      // console.log(event.target);
      if (currentElement.tagName === 'IMG') {
        // console.log(currentElement.outerHTML + "is a photo");
        imageInfo.source = currentElement.src;
        // console.log("src is :" + imageInfo.source)
        return imageInfo.source;
      }
    })
  })();
