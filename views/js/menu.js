//var themedi = document.getElementById("theme");
//var theme = document.getElementById("theme-display");

$(document).ready(function() {
    $("#night-mode-js").click(function() {
        $(".theme-container, .theme, .btn").toggleClass("night-mode");
        if ($('#night-mode-js').hasClass('night-mode')) {
            $('#night-mode-js').html('Night-mode');
        } else {
            $('#night-mode-js').html('Day-mode');
        }
    });
});


(function(window, document) {

    var layout = document.getElementById('layout'),
        menu = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink')
        //    content = document.getElementById('main')

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function(e) {
        toggleAll(e);
    };

}(this, this.document));