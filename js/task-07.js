const inputRange = document.querySelector("#font-size-control");

const textSpam = document.querySelector("#text");

const changeFontSize = () =>
  (textSpam.style.fontSize = `${inputRange.value}px`);

inputRange.addEventListener("input", changeFontSize);
