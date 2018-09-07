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
for (let i = 0; i < cards.name.length; i++) {

    console.log(cards.name[i]);
    var tile = $("<div>");
    tile.addClass("card-grid");

    var front = $("<div>");
    front.addClass("front", cards.name[i]);
    front.text("Front Content");
    front.css("background-image", 'url(' + cards.image[i] + ')');

    var border = $("<div>");
    border.addClass("border");
    front.append(border);

    var back = $("<div>");
    back.addClass("back");
    back.attr("id", cards.name[i]);
    back.text(cards.name[i]);

    tile.append(front);

    tile.append(back);

    $(".tiles").append(tile);
    var tempName = cards.name[i];

}

// Watches for second click on back tile
$(".back").click(function () {
    expand($(this).text());
});


// Expands card to full page on click
function expand(name) {
    console.log("Ran expand function for " + name);

    for (let i =1; i < cards.name.length; i++) {
        
        if (cards.name[i] != name) {
            var tempName = cards.name[i];
            $("#" + tempName).hide();
            $(".front").hide(); 
            console.log("Hiding " + tempName);
        }
        
    }

    $("#" + name).animate({
        left: '20%',
        opacity: '0.75',
        height: '150px',
        width: '60vw'
    });

}

// Runs card flip
$(".card-grid").flip({
    axis: 'y',
    trigger: 'hover'
});