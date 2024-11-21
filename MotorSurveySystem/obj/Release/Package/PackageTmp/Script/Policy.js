
//window.onload = function () {
//    var fromDateField = document.getElementById('<%= txtPolFmDt.ClientID %>');
//    fromDateField.addEventListener('change', setToDate);
//};


function validateNumericInput(event) {
    var charCode = event.which ? event.which : event.keyCode;

    // Allow numbers (0-9) and one decimal point
    if ((charCode < 48 || charCode > 57) && charCode !== 46) {
        event.preventDefault(); // Prevent any other character except numbers and dot
    }

    // Ensure only one decimal point can be entered
    if (charCode === 46 && event.target.value.includes('.')) {
        event.preventDefault(); // Prevent entering multiple decimal points
    }
}


//currency conversion

//$(document).ready(function () {
    
//    $('#<%= txtPolGrossFCPrem.ClientID %>').on('blur', function () {
//        var fcPremium = $(this).val();
//        var currencyCode = $('#<%= ddlPolCurrCode.ClientID %> option:selected').val(); 

//        if (fcPremium && currencyCode) {
//            $.ajax({
//                type: "POST",
//                url: "CurrencyConversion.asmx/ConvertCurrency", 
//                data: JSON.stringify({ fcPremium: parseFloat(fcPremium), currencyCode: currencyCode }),
//                contentType: "application/json; charset=utf-8",
//                dataType: "json",
//                success: function (response) {
                    
//                    $('#<%= txtPolGrossLCPrem.ClientID %>').val(response.d);
//                },
//                error: function (response) {
//                    console.log("Error: " + response.responseText);
//                }
//            });
//        }
//    });
//});


function formatNumberInput(input) {
   
    var value = input.value.replace(/[^0-9.]/g, '');
    var parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    
    input.value = parts.join('.');
}

function limitToTwoDecimalPlaces(input) {
    // Ensure that input has at most 2 decimal places
    const regex = /^\d+(\.\d{0,2})?$/;
    if (!regex.test(input.value)) {
        input.value = input.value.slice(0, -1);  // Remove the last character if it violates the condition
    }
}

function validateNumericOnly(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
        event.preventDefault(); // Prevent any other character except numbers and dot
    }
}


function validateNumericInput(event) {
    var charCode = event.which ? event.which : event.keyCode;


    if ((charCode < 48 || charCode > 57) && charCode !== 46) {
        event.preventDefault();
    }


    if (charCode === 46 && event.target.value.includes('.')) {
        event.preventDefault();
    }
}

