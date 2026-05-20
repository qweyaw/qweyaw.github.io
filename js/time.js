const timeEle = document.querySelector(".time")

const time = () => {
  const loveDate = new Date("2021/10/18").getTime()
  const nowDate = new Date().getTime()
  const day = Math.floor((nowDate - loveDate) / 1000 / 60 / 60 / 24)
  const hour = Math.floor(((nowDate - loveDate) / 1000 / 60 / 60) % 24)
  const minute = Math.floor(((nowDate - loveDate) / 1000 / 60) % 60)
  const second = Math.floor(((nowDate - loveDate) / 1000) % 60)
  return `
    <div class="timeText">
      X J Y
    </div>
  `
}
setInterval(() => {
  timeEle.innerHTML = time()
}, 1000)
