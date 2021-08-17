 var submit1 = document.getElementById("submit");
submit1.addEventListener("click", function () {
 var gender = document.querySelectorAll('input[name="Gender"]');
  let selecetval;
  for (const g of gender) {
    if (g.checked) {
      selecetval = g.value;
      console.log(selecetval);
    }
  }
  if (selecetval == null || selecetval == "") {
    alert("please select your gender");
  }
});