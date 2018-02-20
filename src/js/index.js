let params = {};

function display(data) {
    const row = document.querySelector(".row");

    function render(param) {
        const column = `
            <div class="oss-card">
                <div class="header">
                    <div class="pull-left">${param.name}</div>
                        <img src="${param.img}" class="logo pull-right" />
                </div>
                <hr class="colors"/>
                <div class="creator"> by <a href="${param.dev}" class="creator-id"> <span class=""> ${param.devname}</span> </a>
                </div>
                <div class="about"> 
                    <p>${param.about}</p>
                    <div class="link">
                        <a href="${param.github}" class="">
                            <i class="ion ion-social-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            `

        const div = document.createElement("div");
        div.className = "column";
        div.innerHTML = column;
        row.appendChild(div);
    }

    for (const project of data) {
        render(project)
    }

}

function sortByNames(param) {
    const sorted = param.sort(function (a, b) {
        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    })
    return sorted
}

SDK.queryData("mig", "data", params, function (response) {
    const loader = document.getElementById("loader");
    loader.classList.toggle("hide");
    mig = response.payload.results
    sorted = sortByNames(mig);
    display(sorted)
    // console.log(response)
});