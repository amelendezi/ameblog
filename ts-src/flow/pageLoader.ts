import $ from 'jquery';

export class Header {
    Load() {
        $("#header").html("<div class='header'><h3>Ameblog Sample Application</h3></div>");
    }
}

export class Body {
    Load() {
        console.log("Loading the page body");
    }
}

export class Footer {
    Load() {
        console.log("Loading the page footer");
    }
}