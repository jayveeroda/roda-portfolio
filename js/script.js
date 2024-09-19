$(document).ready(function () {
  $("a").hover(
    function () {
      $(this).attr("rel", $(this).attr("title")), $(this).removeAttr("title");
    },
    function () {
      $(this).attr("title", $(this).attr("rel")), $(this).removeAttr("rel");
    }
  );
}),
  $(".dropdown-menu .dropdown-toggle").on("click", function (t) {
    return (
      $(this).next().hasClass("show") ||
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show"),
      $(this).next(".dropdown-menu").toggleClass("show"),
      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (t) {
          $(".dropdown-submenu .show").removeClass("show");
        }),
      !1
    );
  });
$(window).scroll(function () {
  $(this).scrollTop() > 100 ? $(".totop").fadeIn() : $(".totop").fadeOut();
});
$(".totop, .scroll").click(function (e) {
  var h = $(this).attr("href");
  window.scroll({
    top: $(h).offset().top,
    left: 0,
    behavior: "smooth",
  });
  e.preventDefault();
});
