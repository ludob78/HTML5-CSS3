// Sélection vignette en image principale
window.addEventListener('load', function () {
    console.log("Chargement script");
    var active_item, thumbnail, previous_button, next_button;

    list_thumbnail = document.getElementById("list_thumbnail");
    previous_button = document.getElementsByClassName("previous_button");
    next_button = document.getElementsByClassName("next_button");
    // console.log(list_thumbnail);
    thumbnail = list_thumbnail.querySelectorAll("img");
    console.log(thumbnail);

    //Affichage de la vignette sélectionné dans le Carroussel.
    for (i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener('click', function () {
            active_item = document.querySelector(".carousel-item.active img");
            active_item.src = this.src;
        });
    }

    // Afficher dans le carroussel la vignette suivante après la sélection d'une vignette

    //Afficher la vignette en fonction du boutton previous
    previous_button[0].addEventListener("click", function () {
        active_item = document.querySelector(".carousel-item.active img");
        source_active = active_item.src;
        // console.log("source_active:"+source_active);
        var tab_src = [];
        for (i = 0; i < thumbnail.length; i++) {
            // console.log(thumbnail[i].src);
            tab_src[i] = thumbnail[i].src;
        }
        IndexCurrentActive = tab_src.indexOf(source_active);
        // console.log("currentIndex:"+IndexCurrentActive);
        if (IndexCurrentActive == 0) {
            LastIndex = tab_src.length - 1;
            // console.log("LastIndex:"+LastIndex);
            LastSrc = tab_src[LastIndex];
            // console.log("LastSrc:"+LastSrc);
            active_item.src = LastSrc;
        }
        else {
            console.log("tab_src[IndexCurrentActive-1].src:" + tab_src[IndexCurrentActive - 1]);
            active_item.src = tab_src[IndexCurrentActive - 1];
        }

    });
    //Afficher la vignette en fonction du boutton next
    next_button[0].addEventListener("click", function () {
        active_item = document.querySelector(".carousel-item.active img");
        source_active = active_item.src;
        // console.log("source_active:"+source_active);
        var tab_src = [];
        for (i = 0; i < thumbnail.length; i++) {
            // console.log(thumbnail[i].src);
            tab_src[i] = thumbnail[i].src;
        }
        IndexCurrentActive = tab_src.indexOf(source_active);
        // console.log("currentIndex:"+IndexCurrentActive);
        // console.log("tab_src.length:"+parseInt(tab_src.length-1));
        if (parseInt(IndexCurrentActive) == parseInt(tab_src.length - 1)) {
            // FirstIndex=tab_src.length;
            // console.log(LastIndex);
            FirstSrc = tab_src[0];
            // console.log("FirstSrc:"+FirstSrc);
            active_item.src = FirstSrc;
        }
        else {
            // console.log("tab_src[IndexCurrentActive+1].src:"+ tab_src[IndexCurrentActive+1]);
            active_item.src = tab_src[IndexCurrentActive + 1];
        }
    })


    // console.log(next_button);


});