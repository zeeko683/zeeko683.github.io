var age = prompt("What is your age?");
if (!(parseInt(age) >= 18)) {
  alert("you must be 18 years or older to view my collection");
  window.location = "https://www.youtube.com/watch?v=ZloHwUlO-Rk";
}

var tags = [
  "furry",
  "stockings",
  "hentai",
  "nipples",
  "huge ass",
  "female",
  "pussy"
];
var generated_tag = tags[Math.floor(Math.random() * tags.length)];
// var tag = prompt("search tag");

function getPosts(tag) {
  $("#tag").text(tag);
  fetch(
    `https://r34-json-api.herokuapp.com/posts?tags=${tag.replace(/ /g, "_")}`
  )
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res);
      $("#porn").empty();
      res.forEach(item => {
        var template = `
                <div class="mt-5 mt-lg-0 mb-5 mt-md-0 col-lg-3 col-md-6 col-12 zoomonhovewr">
                <a
                class=""
                href="${item.source}"
                target="blank"
                >
                <div class="team-thumb">
                <img
                src="${item.sample_url}"
                class="img-fluid"
                />
                <div class="team-info d-flex flex-column">
                <h3>${item.tags[0]}</h3>
                <span
                ><span class="font-weight-bold">Tags:</span> ${item.tags.join(
                  ", "
                )}</span>
                    </div>
                    </div>
                    </a>
                    </div>
                    `;
        $("#porn").append(template);
      });
    });
}
getPosts(generated_tag);
