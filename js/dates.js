$(function () {

    $('#datetimepicker1').datetimepicker({
      format: 'YYYY-MM-D'
    });

    $('#datetimepicker2').datetimepicker({
      format: 'YYYY-MM-D'
    });

    $('#datetimepicker2').datetimepicker();
    $('#datetimepicker2').datetimepicker({
        useCurrent: false
    });
    $("#datetimepicker1").on("dp.change", function (e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function (e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });
});
