function filterProjects(criteria) {
    var buttons = ['filter-all', 'filter-engineering', 'filter-software'];
    for (var i = 0; i < buttons.length; i++) {
        var el = document.getElementById(buttons[i])
        if (buttons[i].endsWith(criteria)) {
            el.className = 'button primary small';
        } else {
            el.className = 'button small';
        }
    }

    var projects = document.getElementsByTagName('article');
    for (var i = 0; i < projects.length; i++) {
        if (criteria == 'all' || projects[i].classList.contains(criteria)) {
            projects[i].style.display = 'block';
        } else {
            projects[i].style.display = 'none';
        }
    }
}