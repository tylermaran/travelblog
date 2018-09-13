// Dummy data until I put together a database
var cards = {
    "name": ["Thailand", "Singapore", "Vietnam", "China"],
    "city": ["Bangkok", "Singapore", "Hanoi", "Shenzen"],
    "image": ["https://dummyimage.com/400x400/000/fff",
        "https://dummyimage.com/400x400/000/fff",
        "https://dummyimage.com/400x400/000/fff",
        "https://dummyimage.com/300x300/000/fff"
    ]
}

// Ditto
var content = {
    "Day1": "Stuff goes here."
}

// Initializes page with country squares
function loadPage() {

    for (let i = 0; i < cards.name.length; i++) {

        console.log(cards.name[i]);
        var tile = $("<div>");
        tile.addClass("card-grid");
        tile.attr("id", "tile_" + cards.name[i]);

        var front = $("<div>");
        front.addClass("front");
        front.attr("id", "front_" + cards.name[i])
        front.text("Front Content");
        front.css("background-image", 'url(' + cards.image[i] + ')');

        var border = $("<div>");
        border.addClass("border");
        front.append(border);

        var back = $("<div>");
        back.addClass("back");
        back.attr("id", "back_" + cards.name[i]);
        back.text(cards.name[i]);

        tile.append(front);

        tile.append(back);

        $(tile).hide().appendTo(".tiles").fadeIn(500);

    }

    // Watches for second click on back tile
    $(".back").click(function () {
        expand($(this).text());
    });


}

// Expands card to full page on click
function expand(name) {
    console.log("Ran expand function for " + name);

    for (let i = 0; i < cards.name.length; i++) {

        if (cards.name[i] != name) {
            var tempName = cards.name[i];
            $("#front_" + tempName).hide();
            $("#back_" + tempName).hide();
            $("#tile_" + tempName).hide();
            // $(".front").hide();
            $("." + tempName).hide();
            console.log("Hiding " + tempName);
        }

    }

    // $(".tiles").remove();
    $(".card-grid").flip(false);


    // $("#tile_" + name).on('flip:done', function () {
    //     $("#tile_" + name).removeClass("card-grid");
    //     $("#tile_" + name).addClass("expand-tile");


    // });


    // $("#front_" + name).animate({
    //     left: '20%',
    //     opacity: '0.75',
    //     height: '150px',
    //     width: '60vw'
    // });


    var backButton = $("<div>");

    $(".card-grid").flip({
        axis: 'y',
        trigger: 'hover'
    });

}
loadPage();

// Runs card flip
$(".card-grid").flip({
    axis: 'y',
    trigger: 'hover'
});