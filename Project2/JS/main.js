
    //on document ready
$('document').ready(()=>{
        //functions on click of search button
    $('#searchbtn').click(()=>{
        searchGiphy();
        addBorder();
    })
        //searches for gifs using Giphy API
    function searchGiphy() {
        $(gifs).empty();
        var userInput = $('#search').val();
        var numberOfGifs = $('#numSearchGifs').val();
        
            //error message if a search is attempted with empty search criteria
        if (userInput == 0) {
            alert("Please fill in the 'GIF Search' field. If you leave the 'Number of GIFs' field blank the search will return a default of 25 GIFs.")
        };
            //ajax call
        $.ajax({
            url: `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=C3vgfkJ9NO78ZdGLXlm5cuODWh4UuI2W&limit=${numberOfGifs}`
            
        })
            //when ajax call is complete giphs are displayed
        .done((res)=>{
                var giphySearch = res.data;
                $.each(giphySearch, (i, e)=>{
                    var giphy = e.images.downsized_medium.url;
                    $("#gifs").append(`<img src="${giphy}" alt="gyphy image"/>`);
                    
                })
                    //after 1 second addBorder function is called to add border to gif search results
                setTimeout(addBorder, 1000);
        
            })
            
    }
    //if there is any content(gifs) inside the gif search results element, add activeBorder class to the element
    function addBorder() {
    if (('#gif').val !== "") {
        $("#gifs").addClass('activeBorder');
        } else {
        $("#gifs").removeClass('activeBorder');
        }
        
    }   


})