// for (var i =0; i<100; i++){
//     var request = new XMLHttpRequest();
//     // create request to XHR object
//     // last parameter decides if we want reuest to be asynchronous or not
//     request.open('GET', 'data.txt', false); //synchronous means browser will wait till its completed
//     request.send();
//     console.log(request);
//     if (request.status === 200){
//         console.log("success");
//         document.writeln(request.responseText);
//     }
//     else{
//         console.log("failed");
//     }
    
// }

var request;
if (window.XMLHttpRequest){
    request = new XMLHttpRequest;
}
else{
    request = new ActiveXObject ("Microsoft.XMLHTTP");
}
// request.open('GET', 'data.xml');
// request.onreadystatechange = function (){
//     if (request.readyState === 4 && request.status === 200){
//         console.log(request.responseXML);
//     }
// }
// request.send();

// jQuery sends and recive XHR request
// compatible with all browsers
$(".loadData:even").load('data.txt'); 

function loadAJAX () {
    request.open('GET', 'data.json');
    request.onreadystatechange = function (){
    if (request.readyState === 4 && request.status === 200){
        var items = JSON.parse(request.responseText);
        var output = `<ul>`;
        for (var k in items){
            output += `<li>` + items[k].name + `</li>`;
        }
        output += `</ul>`;
        document.getElementById('update').innerHTML = output;
        console.log(items);
    }
}
request.send();
}

$.getJSON('data.json', function(data){
    var out = `<ul>`;
    $.each(data, function(k, v){
        out += `<li>` + v.name + `</li>`;
    })
    out += `</ul>`;
    //$('#jdata').html(out);
    $('#jdata').append(out);
    console.log(data);
});

