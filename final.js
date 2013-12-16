$(window).on("resize", function(event){
  console.log( $(this).width() );
});

$(window).on("load", function(event){
  console.log( $(this).width() );
});

$('img').on('click', function(){
        var $clickedimage = $(this);
        console.log('alt text: ' + $clickedimage.attr('alt'));
        console.log('width: ' + $clickedimage.width());
        console.log('height: ' + $clickedimage.height());
        })

$(':header').on('click', function(){
        var $clickedheader = $(this);
        console.log('text: ' + $clickedheader.text());
        console.log('color: ' + $clickedheader.css("color"));
        console.log('font-size: ' + $clickedheader.css("font-size"));
})

  $('#bold').find('b').on("click", function(b) {
	  console.log(b.target);
	  $('#bold').css("font-weight", "bold");
  });