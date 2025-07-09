$(document).ready(function() {
    const envelope = $('#envelope');
    const btnOpen = $("#open");
    const btnReset = $("#reset");

    envelope.on('click', open);
    btnOpen.on('click', open);
    btnReset.on('click', close);

    function open() {
        envelope.removeClass("close").addClass("open");
    }

    function close() {
        envelope.removeClass("open").addClass("close");
    }
});
