$(function () {
  $(".change-devour").on("click", () => {
    let id = $(this).data("id");

    let newDevour = $(this).data("newdevour");

    console.log(`this is the value of ${newDevour}`);

    let newDevourState = {
      devoured: newDevour,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(() => {
      location.reload();
    });
  });

  $(".burger-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      name: $("#choice").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("I created a burger");
      location.reload();
    });
  });
});
