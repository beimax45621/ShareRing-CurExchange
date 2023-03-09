function toastr(msg) {
  var html = `
  <div class="custom-toast">
    <span>${msg}</span>
  </div>
  `;
  $(".right").append(html);
  setTimeout(function () {
    $(".custom-toast").remove();
  }, 3000);
}
