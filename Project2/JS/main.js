$('document').ready(()=>{
    $('#searchbtn').click(()=>{
        searchGiphy();
    })

    function searchGiphy() {
        $(gifs).empty();
        var userInput = $('#search').val();
        var numberOfGifs = $('#numSearchGifs').val();
        
        if (userInput == 0) {
            alert("Please fill in the 'GIF Search' field. If you leave the 'Number of GIFs' field blank the search will return a default of 25 GIFs.")
        };

        $.ajax({
            url: `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=C3vgfkJ9NO78ZdGLXlm5cuODWh4UuI2W&limit=${numberOfGifs}`
            
        })
            .done((res)=>{
                var giphySearch = res.data;
                $.each(giphySearch, (i, e)=>{
                    //console.log("index", i, "element", e)
                    //console.log(giphySearch)
                    var giphy = e.images.downsized_medium.url;
                    //console.log("giphy", giphy);
                    $("#gifs").append(`<img src="${giphy}" alt="gyphy image"/>`)
                })
            })
        
    }
        
    
    
})