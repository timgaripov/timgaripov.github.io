$( ".bib-button" ).click(function() {
    var pub_index = $(this).data("pub-index");
    $(`.bib-content[data-pub-index='${pub_index}']`).toggle();
    if ($(this).text() == "BIB") { 
        $(this).text("BIB \u2191"); 
    } else { 
        $(this).text("BIB"); 
    };
});
