const input = document.querySelector(".hashtag");
const result = document.querySelector(".result");

input.addEventListener("input", () => {
  const hashtag = input.value;
  const words = hashtag.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  const hashtagAdding = words.unshift("#");
  const finalResult = words.join("");

  result.innerText = finalResult;
});
