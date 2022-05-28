const app = new Vue({
  el: "#app",
  data: {
    message: "写真を撮影しました",
    seen: false,
    sasimi: true
  },
  methods: {
    move() {
      this.seen = true
      this.sasimi = false
      setTimeout(() => {
        this.message = "情報送信中..."
      }, 500)
      setTimeout(() => {
        this.message = "仮登録手続き中..."
      }, 1646)
      setTimeout(() => {
        location.href = "invoice.html"
      }, 3000)
    }
  }
})
