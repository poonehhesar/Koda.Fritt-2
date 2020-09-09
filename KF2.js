// Self invoked anonymous function
const global = "Global";

(function () {
  document.querySelector("#btn1").addEventListener("click", () => {
    const notGlobalFunction = () => {
      const notGlobal = "Not Global";
      document.getElementById("id2").innerHTML =
        typeof notGlobal + " " + notGlobal;
    };
    notGlobalFunction();
    document.getElementById("id1").innerHTML = typeof global + " " + global;
  });

  //Custom events with 2 listeners
  const change_name_color = new CustomEvent("changeTextAndColor", {
    detail: { color: "pink", name: "Goodye world!" },
  });

  document.addEventListener("changeTextAndColor", (event) => {
    let color = event.detail.color;
    document.querySelector("#colorId").style.color = color;
  });
  document.addEventListener("changeTextAndColor", (event) => {
    let name = event.detail.name;
    document.querySelector("#colorId").innerHTML = name;
  });
  document.getElementById("colorBtn").addEventListener("click", () => {
    document.dispatchEvent(change_name_color);
  });

  //Assignment with &&
  document.getElementById("&&btn").addEventListener("click", () => {
    var ln = parseInt(document.getElementById("ln").value);

    if (ln >= 46 && ln <= 56) {
      document.getElementById("result").innerHTML =
        "Congrats you won the lotto!";
    } else {
      document.getElementById("result").innerHTML =
        "You lost the lotto! The winning lotto is any number between 46-56";
    }
  });
})();
