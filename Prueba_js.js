$(".add").click(function () {
    $(".data-p").data("test", "Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo");
    $(".data-s").text($(".data-p").data("test"));
});

$(".get").click(function () {
    alert($(".data-p").data("test"))
});

$(".addClass").click(function () {
    $(".no-red").addClass("rojo");
});

$(".slideT").click(function () {
    $(".latrell").slideToggle("slow");
});

$(".append").click(function () {
    $(".apend").append("<p>Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo</p>");
});

$(".val").click(function () {
    alert($("#valorant").val())
});

$(".fadeIn").click(function () {
    $(".latrell2").fadeIn("slow");
});
$(".fadeOut").click(function () {
    $(".latrell2").fadeOut("slow");
});

$(".focus").click(function () {
    alert("Modo Focus Activado.")
    $("#focusin").focus(function () {
    $(this).css('outline-color', 'red')
    });
});

$(".hide").click(function () {
    $(".hider").hide();
});

$(".show").click(function () {
    $(".hider").show();
});

$(".slideUp").click(function () {
    $(".slider").slideUp();
});
$(".slideDown").click(function () {
    $(".slider").slideDown();
});


