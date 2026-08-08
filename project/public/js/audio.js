 export const bgms = {
   title: new Audio("title.wav"),
   search: [
      new Audio("search_f.wav"),
      new Audio("search1.wav")
   ]
 };
 
 
 export function titleBGM_f() {
    bgms.title.play();
    bgms.title.loop = true;
    bgms.title.volume = 0.5;
 }
 export function titleBGM_e() {
    bgms.title.pause();
 }
 export function search_f() {
   bgms.search[0].play();
   bgms.search[0].volume = 0.5;
 }
  function searchBGM() {
   bgms.search[1].play();
   bgms.search[1].volume = 0.5;
 };
 export function search_bgm_stop() {
   /* bgms.search.forEach(bgm  => {
         bgm.addEventListener("ended", () => {
         bgm.pause();
      });
   });  */
    bgms.search[1].pause();
 }
 bgms.search.forEach(bgm  => {
   bgm.addEventListener("ended", () => {
   console.log("終了");
   searchBGM();
 });
 });

window.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("volumeSlider");

    slider.addEventListener("input", e => {
        bgms.title.volume = slider.value;
    });
});




 
  
