 var icons = {
header: "ui-icon-circle-arrow-e",
activeHeader: "ui-icon-circle-arrow-s"
};

$(function() {
$( "#accordion" ).accordion({
collapsible: true,
  icons: icons
});
});