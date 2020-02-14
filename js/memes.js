fetch("https://meme-api.herokuapp.com/gimme/100")
  .then(response => {
    return response.json();
  })
  .then(res => {
    console.log(res);
    $("#memes").empty();
    res.memes.forEach(meme => {
      var template = `
      <div class="mt-5 mt-lg-0 mb-5 mt-md-0 col-lg-3 col-md-6 col-12 zoomonhovewr">
        <a
          class=""
          href="${meme.postLink}"
          target="blank"
        >
          <div class="team-thumb">
            <img
              src="${meme.url}"
              class="img-fluid"
            />
            <div class="team-info d-flex flex-column">
              <h3>${meme.title}</h3>
              <span
                >Subreddit: ${meme.subreddit}</span>
            </div>
          </div>
        </a>
        </div>
        `;
      $("#memes").append(template);
    });
  });
