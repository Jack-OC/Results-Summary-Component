fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var list = document.getElementById("summary-list");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class","list-item");
        div.setAttribute("id","item"+i)
        div.innerHTML = `
                <div class="icon-category">
                    <img src="${data[i].icon}" alt="${data[i].category} icon" />
                    <span>${data[i].category}</span>
                </div>
                <div class="item-score"><span>${data[i].score}</span> / 100</div>`
        list.appendChild(div);
    }
}
