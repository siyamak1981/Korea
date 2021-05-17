const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);
mix.styles(["public/assets/css/portal.css"], "public/css/app.css");

mix.scripts(
    [
        "public/assets/plugins/popper.min.js",
        "public/assets/plugins/bootstrap/js/bootstrap.min.js",
        "public/assets/plugins/chart.js/chart.min.js",
        "public/assets/js/index-charts.js",
        "public/assets/js/app.js"
    ],
    "public/js/all.js"
);
