'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function onSelect(index) {
  document.getElementById("videoTitle").textContent = videoArray[index]["fileName"];
  document.getElementById("video").src = "videos/" + videoArray[index]["fileName"];
  document.getElementById("detail").textContent = videoArray[index]["detail"];
}

function onStart() {
    //動画の書き込み
  const video = document.getElementById("video");
  video.src = "videos/" + videoArray[0]["fileName"];
  const title = document.getElementById("videoTitle");
  videoTitle.textContent = videoArray[0]["fileName"];
  const detail = document.getElementById("detail");
  detail.textContent = videoArray[0]["detail"];

  //HTMLへの書き込み
  const list = document.getElementById("list");

  for (let i = 0; i < videoArray.length; i++) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    newP.textContent = videoArray[i]["fileName"];
    const newA = document.createElement("a");
    newA.href="#";
    const newImg = document.createElement("img");
    newImg.src = "image.png";
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.title = videoArray[i]["fileName"];
    newButton.setAttribute('onclick', 'onSelect("' + i + '")');

    newLi.appendChild(newImg);
    newLi.appendChild(newP);
    newLi.appendChild(newA);
    newLi.appendChild(newButton);
    console.log(newButton)
  
    list.appendChild(newLi);
  }
  console.log(list);
}

const videoArray = [
  {fileName:"video1.mp4", detail:"街中を大勢の人が歩いている映像です"},
  {fileName:"video2.mp4", detail:"男の子が数学の問題を解いている映像です"},
  {fileName:"video3.mp4", detail:"雪山でスキーを楽しんでいる映像です"},
  {fileName:"video4.mp4", detail:"世界を一周している映像です"},
  {fileName:"video5.mp4", detail:"都会の交差点を空から撮影した映像です"},
  {fileName:"video6.mp4", detail:"渓谷を気球で飛んでいる映像です"},
  {fileName:"video7.mp4", detail:"飛行機から外の景色を撮影した映像です"},
  {fileName:"video8.mp4", detail:"枯れ葉の舞う峠道を撮影した映像です"},
  {fileName:"video9.mp4", detail:"ワインディングロードを空から撮影した映像です"}
]

//読み込んだ後に実行
document.addEventListener('DOMContentLoaded',onStart);
