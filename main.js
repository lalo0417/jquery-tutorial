$(document).ready(function (ev) {

//    $(document).on("pagecontainershow", function (event, ui) {
//        var newPageID = ui.toPage.prop("id");
//        console.log(ui.toPage.prop("id"));
//
//        localStorage.setItem('page', newPageID);
//
//    });

    $("#intro").on("click", function (ev) {
        ev.preventDefault();


        if (localStorage.getItem('page')) {
            console.log(localStorage.getItem('page'));

            var step = localStorage.getItem("page");


            $.mobile.changePage("#" + step);

        } else {

            $.mobile.changePage("#hs1");
        }
    });
});