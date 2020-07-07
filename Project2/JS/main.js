$('document').ready(()=>{
    $('#searchbtn').click(()=>{
        let userInput = $('#search').val();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=rockets&api_key=pJZvELgcigMA241e254NhtmIf0vFa5RF&limit=5"
            
        })
            .done((res)=>{
                let giphySearch = res.data;
                $.each(giphySearch, (i, e)=>{
                    //console.log("index", i, "element", e)
                    //console.log(giphySearch)
                    let giphy = e.images.downsized_small.url;
                    //console.log("giphy", giphy);
                    $("body").append('<img src="${giphy}" alt="gyphy image"/>')
                })
            })
        
    })
        
    
})