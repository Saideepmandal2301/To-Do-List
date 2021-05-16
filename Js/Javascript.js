$(".txtb").on("keyup", function (e) {
    // 13 means Enter Key 
    if (e.keyCode == 13 && $(".txtb").val() != "") {
        var task = $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<button class='Delete'>Delete <i class='fas fa-trash'></i></button>").click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                p.remove();
            })
        });
        var done = $("<button class='done'>done <i class='fas fa-check'></i></button>").click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                $('.comp').append(p);
                done.remove();
                p.fadeIn();
            })
        });

        task.append(del, done);
        $(".notcomp").append(task);
        // to clear input box
        $(".txtb").val('');
    }
})