jQuery(function () {
    jQuery("#eventLogsTable").styleTable();
    jQuery("#pagination").pagination(nbRows, {
        items_per_page: itemsPerPage,
        current_page: pageNumber,
        callback: paginationCallback
    }).append("<br/>");

    jQuery("#nbRows").html(nbCurrentItems + "/" + nbRows);

    jQuery(".selection").each(function() {
        var curId = jQuery(this).attr('id');
        if (typeof(clickedCb[curId]) != 'undefined') {
            this.checked = clickedCb[curId];
        }
    });

    var tmp = orderby.split(' ');
    var icn = 'n';
    if (tmp[1] == "DESC") {
        icn = 's';
    }
    jQuery("[name=" + tmp[0] + "]")
        .append('<span style="position: relative; float: right;" class="ui-icon ui-icon-triangle-1-' +
            icn + '"></span>');
});

function paginationCallback(page_index, jq) {
    if (page_index != pageNumber) {
        pageNumber = page_index;
        clickedCb = new Array();
        loadPage();
    }
}
