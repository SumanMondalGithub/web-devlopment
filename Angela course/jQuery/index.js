// $("h1").addClass("big-h1 border-style")
// $("h1").removeClass("border-style")

// $("h1").text("Bye")
// $("button").text("clicked")
// $("button").html("<em>hey</em>")

// $("a").attr("href", "https://www.yahoo.com")
// $("h1").click(function(){
//     $("h1").css("color", "yellowgreen")
// })

// $(document).keypress(function(event){
//     $("h1").text(event.key)
//     console.log(event)
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "red")
// })

$("h1").addClass("big-h1")

$("button").on("click", function () {
    $("h1").slideToggle()
})

// $("button").click(function(){
//     $("h1").slideToggle()
// })