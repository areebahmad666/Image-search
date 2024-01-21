const accessKey = "5IdLiQK1u_VRtZkfvvpUHoyCFaPtlPQ0ntv6N4dT2a8";

const serachForm = document.getElementById("serach-form");
const serachBox = document.getElementById("search-box");
const serachResult = document.getElementById("serach-result");
const showMoreBtn = document.getElementById("show-more-btn");

// https://api.unsplash.com/search/photos?page=1&query=office&client_id=5IdLiQK1u_VRtZkfvvpUHoyCFaPtlPQ0ntv6N4dT2a8

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = serachBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (page === 1) {
        serachResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        serachResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

serachForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})