function sidePanelSize() {

    var panel = document.getElementById('left_panel'),
        height = window.innerHeight;

    let panelHeight = height + 'px';

    panel.setAttribute('style', `height: ${panelHeight}`);
}

sidePanelSize();