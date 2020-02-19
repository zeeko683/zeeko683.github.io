const soundboard = $("#soundboard");
const sounds = [
  {
    url:
      "https://cdn.discordapp.com/attachments/511821791405015040/679826827245781008/brian.mp3",
    title: "I am back",
    id: 0
  },
  {
    url:
      "https://cdn.discordapp.com/attachments/511821791405015040/679826821373755429/brian_2.mp3",
    title: "I think I broke the audioooo",
    id: 1
  },
  {
    url:
      "https://cdn.discordapp.com/attachments/511821791405015040/679826823227768872/brian_3.mp3",
    title: "Houseflipppa",
    id: 2
  },
  {
    url:
      "https://cdn.discordapp.com/attachments/511821791405015040/679826823474970638/brian_4.mp3",
    title: "Now there's a hole",
    id: 3
  },
  {
    url:
      "https://cdn.discordapp.com/attachments/511821791405015040/679826824569815052/brian_5.mp3",
    title: "Plant",
    id: 4
  },
  {
    url:
      "https://cdn.discordapp.com/attachments/511821791405015040/679826825698082853/brian_6.mp3",
    title: "Use the force",
    id: 5
  }
];

// <button type="button" class="btn btn-primary">I am back</button>
sounds.forEach(sound => {
  soundboard.prepend(
    `<button type="button" class="btn btn-outline-primary m-2 btn-lg btn-block" onclick="playSound(${sound.id})"><i class="fa fa-music mr-1 float-left pt-1"></i> ${sound.title}</button>
      <audio class="d-none" id="sound${sound.id}" src="${sound.url}"></audio>
      `
  );
});

function playSound(id) {
  $(`#sound${id}`)[0].play();
}
