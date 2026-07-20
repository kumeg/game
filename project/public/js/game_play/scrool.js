import { ref } 
from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export const screen = ref([0, 0]);

export let x = 0;
export let y = 0;

const update = (event) => {

          screen.value[0] = event.pageX - x;
          screen.value[1] = event.pageY - y;

          const control = document.querySelector('#scroolControl');
          control.scrollTop -= screen.value[1] / 12;
        control.scrollLeft -= screen.value[0] / 12;
        };

        export const startHold = (event) => {
          window.addEventListener("mousemove", update);
            x = event.pageX;
           y = event.pageY; 
          console.log(x);
          
        };
        export const stopHold = () => {
          window.removeEventListener("mousemove", update);
        }; 

        const update2 = (event) => {

          screen.value[0] = event.pageX - x;
          screen.value[1] = event.pageY - y;

          const control = document.querySelector('#scroolControl_2');
          control.scrollTop -= screen.value[1] / 12;
        control.scrollLeft -= screen.value[0] / 12;
        };

        export const startHold2 = (event) => {
          window.addEventListener("mousemove", update2);
            x = event.pageX;
           y = event.pageY; 
          console.log(x);
          
        };
        export const stopHold2 = () => {
          window.removeEventListener("mousemove", update2);
        };  