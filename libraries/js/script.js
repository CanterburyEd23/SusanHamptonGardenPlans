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
                // console.log(JSON.stringify(result));
                if (result.status.name == "ok") {
                    $("#allPlants").empty();                  
                    let array = result['data'];
                    let listItem;
                    for (let i = 0; i < array.length; i++) {
                        listItem = '<li class="list-group-item" id="Plant' + array[i]['id'] + '">'                            
                            + '<p class="plantInstance">' + array[i]['plantName'] + '</p>'
                            + '<div class="flexDiv">'
                            + '<button type="button" class="btn btn-outline-dark listItemButton readPlant" value="LOC' + array[i]['id'] + '">View</button>'
                            + '</div>'
                            + '</li>';
                        $("#allPlants").append(listItem);
                    };
                    $("#allPlants").show();
                    readPlantClickHandler();                    
                    $('#plantSearch').val('');
                };
            },
            error: function(jqXHR, exception) {
                let msg = "Uncaught Error.\n" + jqXHR.responseText;
                console.log(msg);
            }
        });
    };    

    //Get Plant by ID function
    function getPlantById(id1) {
        $.ajax({
            url: "libraries/php/getPlantById.php",
            type: "GET",
            data: {
                ID: id1
            },
            success: function(result) {
                console.log(JSON.stringify(result));
                if (result.status.name == "ok") {
                    let array = result['data'];
                    selectedId = array[0]["id"];                    
                    $("#plantName").html(array[0]["plantName"]);
                    $("#plantImage").attr("href", array[0]["image_url"]);
                    $("#plantDesc").html(array[0]["description"]);
                                        
                };
            },
            error: function(jqXHR, exception) {
                let msg = "Uncaught Error.\n" + jqXHR.responseText;
                console.log(msg);
            }
        });
    };

    //Non-AJAX Functions
        
    //readPlant button click handler
    function readPlantClickHandler() {
        $(".readPlant").each(function() {
            $(this).click(function() {
                let id = $(this).val().slice(3);
                console.log(id);
                getPlantById(id);
                $('#plantDetailsModal').modal("show");
            });
        });
    };

    //Listener for the typing in the searchbar
    $("#plantSearch").keyup(function() {
        filterPlantList();
    });
       
    //Filter triggered by the searchbar
    function filterPlantList() {        
        let txtValue;
        let input = $('#plantSearch');
        let filter = input.val().toUpperCase();
        let list = $("#allPlants");
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
