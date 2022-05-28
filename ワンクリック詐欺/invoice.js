const app = new Vue({
  el:"#app",
  data: {
    count: 3 * 24 * 60 * 60,
  },
  created() {
    setInterval(() => {
      this.count = this.count - 1
    }, 1000)
  }
})
