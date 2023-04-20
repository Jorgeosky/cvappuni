let numeroLista = 1;

function changeData(num, title, data) {
  document.getElementById('content-title').innerHTML = title;
  if (num === 6) {
    document.getElementById('content-data').innerHTML =
      data + '<img src="Utils/picture2.webp" alt="pokemon-comida" />';
  } else {
    document.getElementById('content-data').innerHTML = data;
  }
}

function changeMusic(num) {
  const data = {
    1: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/qU9mHegkTc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    2: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/nGDGNXS7A44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    3: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZQAA_YcrFRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    4: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Jp6u-c6Fr70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    5: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/j5iXa7bwTRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  };
  numeroLista = numeroLista + num;
  if (numeroLista === 0) {
    numeroLista = 5;
  } else if (numeroLista === 6) {
    numeroLista = 1;
  }
  document.getElementById('music-video').innerHTML = data[numeroLista];
}
