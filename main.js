$(function () {
  $("#button_push").click(function () {
    let pricetarget = parseInt($("#pricetarget").val());
    let rangetarget = parseInt($("#rangetarget").val());
    let mileagetarget = parseInt($("#mileagetarget").val());
    let pricetarget2 = parseInt($("#pricetarget2").val());
    let rangetarget2 = parseInt($("#rangetarget2").val());
    let mileagetarget2 = parseInt($("#mileagetarget2").val());
    if (isNaN(pricetarget || rangetarget || mileagetarget || rangetarget2 || pricetarget2 || mileagetarget2)) {
      alert("半角数字のみを入力");
      return;
    }
    // if (pricetarget || rangetarget || rangetarget2|| pricetarget2 < 0) {
    //   alert("-が入力されています");
    //   return;
    // }

    //税込価格で計算する
    let regulartotal = Math.round((pricetarget * rangetarget) / mileagetarget);
    $("#regulartotal").val(regulartotal);

    let premiumtotal = Math.round((pricetarget2 * rangetarget2) / mileagetarget2);
    $("#premiumtotal").val(premiumtotal);
  });
});
