var $j = jQuery.noConflict();

$j(document).ready(function () {
    let currentYear = new Date().getFullYear();
    let minYear = currentYear;
    let maxYear = currentYear + 50;

    
    $j("#txtClmIntmDt,#txtClmRegDt").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        yearRange: minYear + ':' + maxYear,
        maxDate: 0
    });

    $j("#txtPolFmDt").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        yearRange: minYear + ':' + maxYear,
        minDate: 0
    });

    // Loss Date Datepicker
    $j("#txtClmLossDt").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+10',
        maxDate: 0
    });
});



//$(function () {
//    var a = $(".numberText");
//    $.each(a, function () {
//        var parts = $(this).val().toString().split(".");
//        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//        $(this).val(parts.join("."));
//    });
//});
//$(function () {
//    $(".numberText").on("keyup", function () {
//        var sanitizedValue = $(this).val().replace(/[^0-9.]/g, "");
//        var parts = sanitizedValue.split(".");
//        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//        if (parts[1] && parts[1].length > 2) {
//            parts[1] = parts[1].slice(0, 2);
//        }
//        $(this).val(parts.join("."));
//    });
//});

$(function () {
    var a = $(".numberText");
    $.each(a, function () {
        var parts = $(this).val().toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(this).val(parts.join("."));
    });
});

$(function () {
    $(".numberText").on("keyup", function () {
        var sanitizedValue = $(this).val().replace(/[^0-9.]/g, "");
        var parts = sanitizedValue.split(".");

        // Restrict to 7 digits before the decimal
        if (parts[0].length > 7) {
            parts[0] = parts[0].slice(0, 7);
        }

        // Format with commas for the integer part
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Restrict to 2 digits after the decimal
        if (parts[1] && parts[1].length > 2) {
            parts[1] = parts[1].slice(0, 2);
        }

        $(this).val(parts.join("."));
    });
});