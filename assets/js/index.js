
$("#add_issue").submit(function(event){
    alert("Data created successfully");
})

$("#update_issue").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array,function(n,i){
        data[n['title']] = n['value']
    })
    console.log(data);

    var request = {
        "url": `http://localhost:3005/api/issues/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Issue updated")
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3005/api/issues/${id}`,
            "method": "DELETE",
            
        }

        if(confirm("Are you sure to delete this?")){
            $.ajax(request).done(function(response){
                alert("Issue deleted");
                location.reload();
            })
        }

    })
}