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
  {fileName:"video1.mp4", detail:"黄色のきれいなお花の動画です", date:"2024/4/1"},
  {fileName:"video2.mp4", detail:"ピンクのきれいなお花の動画です", date:"2024/4/20"},
  {fileName:"video3.mp4", detail:"枯れ葉と木の実の動画です", date:"2024/5/5"},
  {fileName:"video4.mp4", detail:"海岸沿いを上から撮影した動画です", date:"2024/5/10"},
  {fileName:"video5.mp4", detail:"山の上から海を撮影したタイムラプスです", date:"2024/6/2"},
  {fileName:"video6.mp4", detail:"水面に浮かぶスイレンの動画です", date:"2024/6/19"},
  {fileName:"video7.mp4", detail:"海岸沿いの都市を撮影した動画です", date:"2024/7/4"},
  {fileName:"video8.mp4", detail:"砂浜から陸地を撮影した動画です", date:"2024/8/1"},
  {fileName:"video9.mp4", detail:"オーロラの動画です", date:"2024/8/20"}
]

//読み込んだ後に実行
document.addEventListener('DOMContentLoaded',onStart);
