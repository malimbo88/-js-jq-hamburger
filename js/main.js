//myJavaScript
//selezionare hamburger Menu
$(".header-right a.open").click(
  function() {
  $(".hamburger-menu").addClass("active");
  }
)

$(".hamburger-menu a.close").click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
)
