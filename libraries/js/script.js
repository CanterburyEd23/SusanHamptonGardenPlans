//Company Directory App - Primary Script File

//preloader function
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});


//On document ready...
$(document).ready(function() {

    //State
    let Plants = [];
    let PlantId = 0;
    let selectedId;

    //Initial API calls
    getAllPlants();   

    // AJAX functions     
    //Get all plants
    function getAllPlants() {
        $.ajax({
            url: "libraries/php/getAllPlants.php",
            type: "GET",
            success: function(result) {
                console.log(JSON.stringify(result));
                if (result.status.name == "ok") {
                    $("#allPlants").empty();                  
                    let array = result['data'];
                    let listItem;
                    for (let i = 0; i < array.length; i++) {
                        listItem = '<li class="list-group-item" id="Plant' + array[i]['id'] + '">'                            
                            + '<p class="plantInstance">' + array[i]['name'] + '</p>'
                            + '<div class="flexDiv">'
                            + '<button type="button" class="btn btn-outline-dark listItemButton readSite" value="LOC' + array[i]['id'] + '">View</button>'
                            + '</div>'
                            + '</li>';
                        $("#allPlants").append(listItem);
                    };
                    $("#allPlants, #siteResultsDetails").show();
                    readSiteClickHandler();                    
                    $('#siteInput').val('');
                };
            },
            error: function(jqXHR, exception) {
                let msg = "Uncaught Error.\n" + jqXHR.responseText;
                console.log(msg);
            }
        });
    };    

    //Get site by ID function
    function getSiteById(id1) {
        $.ajax({
            url: "libraries/php/getSiteById.php",
            type: "GET",
            data: {
                ID: id1
            },
            success: function(result) {
                // console.log(JSON.stringify(result));
                if (result.status.name == "ok") {
                    let array = result['data'];
                    selectedId = array[0]["id"];
                    $("#editSiteId").attr("value", array[0]["id"]);
                    $("#siteName").html(array[0]["name"]);
                    $("#editSiteName").attr("value", array[0]["name"]);
                    siteDepartmentNumberCheck();
                };
            },
            error: function(jqXHR, exception) {
                let msg = "Uncaught Error.\n" + jqXHR.responseText;
                console.log(msg);
            }
        });
    };

    //Non-AJAX Functions
        
    //readSite button click handler
    function readSiteClickHandler() {
        $(".readSite").each(function() {
            $(this).click(function() {
                let id = $(this).val().slice(3);
                // console.log(id);
                getSiteById(id);
                $('#readSiteModal').modal("show");
            });
        });
    };

    //Listener for the siteInput textbox
    $("#siteInput").keyup(function() {
        filterSiteList();
    });
       
    //Filter triggered by the siteInput textbox
    function filterSiteList() {        
        let txtValue;
        let input = $('#siteInput');
        let filter = input.val().toUpperCase();
        let list = $("#allSites");
        let listItem = list.children();
        let p;      
        for (let i = 0; i < listItem.length; i++) {
            p = listItem[i].getElementsByTagName("p")[0];
            txtValue = p.textContent || p.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                listItem[i].style.display = "";
            } else {
                listItem[i].style.display = "none";
            };
        };
    };

});
