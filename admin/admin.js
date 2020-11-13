// navbar-msg+alet box toggle

const msgIcon = document.getElementById("msgIcon");
const alertIcon = document.getElementById("notiIcon");
const msgnotiBox = document.getElementById("msgBox");
const alertnotiBox = document.getElementById("alertBox");

msgIcon.addEventListener("click", () => {
    if (msgnotiBox.classList.contains("showmsgBox")) {
        msgnotiBox.classList.remove("showmsgBox");
    }
    else {
        msgnotiBox.classList.add("showmsgBox");
    }
});
alertIcon.addEventListener("click", () => {
    if (alertnotiBox.classList.contains("showmsgBox")) {
        alertnotiBox.classList.remove("showmsgBox");
    }
    else {
        alertnotiBox.classList.add("showmsgBox");
    }
});

const adNav = document.querySelector('.adNav');
const resnavicon = document.querySelector('.resicon');
const headerSearch = document.querySelector('.responisve-head-right');
resnavicon.addEventListener('click', () => {
    if (adNav.classList.contains('height-100')) {
        adNav.classList.remove('height-100');
        headerSearch.classList.remove("resrightHeight");
    } else {
        adNav.classList.add('height-100');
        headerSearch.classList.add('resrightHeight');
    }
})

$(document).ready(function () {
    // sidenav-toggle
    $('.sidenav-collapse-btn').click(function () {
        var spn = $('.adNav ul li a span');
        spn.toggleClass('disNone');
        $('.main-content-wrapper').toggleClass('mar-left-0');
        $('.adNav').toggleClass('width-50');
        $('.sidenav-collapse-btn').toggleClass('width-50');
        $('.sidenav-collapse-btn i').toggleClass('icon-rotate');
        
        
    });
    // modal-activation
    $('#replybox').modal('hide');  
    // table-data-search
     $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
 
});
