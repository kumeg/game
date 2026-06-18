import { ref, computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export const display = ref(false);
export const phase = ref([true, false, false]);
export let attention = ref(["", ""]);
export const roomNum = ref("");
export const roomPassword = ref("");
export let playerNames = ref(["", "", ""]);
export const my_name = ref();
export const names1 = ref(["スキル１", "スキル２", "スキル３"]);
export const names2 = ref(["スキル１", "スキル２", "スキル３"]);
export const names3 = ref(["スキル１", "スキル２", "スキル３"]);

export const skills1 = ref([
  [20, 32, 56],
  [35, 51, 12]
]);

export const skills2 = ref([
  [48, 12, 75],
  [11, 32, 62]
]);

export const skills3 = ref([
  [26, 64, 33],
  [44, 21, 66]
]);

export const firstPoint = ref([466, 466]);

// ✅ point を computed 1発管理
export const point = computed(() => {
  return firstPoint.value.map((fp, i) => {
    const sum1 = skills1.value[i].reduce((a, c) => a + c, 0);
    const sum2 = skills2.value[i].reduce((a, c) => a + c, 0);
    const sum3 = skills3.value[i].reduce((a, c) => a + c, 0);

    const total = sum1 + sum2 + sum3;
    return fp - total;
  });
});

export const authority = ref([false, false, false]);

export const skill_on = ref([false, false]);
export const title_note = ref([false, "", false]);

export const regist = ref([
  [false, false],  
  [["red", "×"], ["red", "×"],["red", "×"]]
]);
console.log(regist.value[0][0]);

export const regist_join = ref(false);

console.log(regist_join.value);

