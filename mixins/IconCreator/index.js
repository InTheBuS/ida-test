export default {
  data() {
    return {
      styleCart: {
        width: "32px",
        height: "32px",
        backgroundImage: "url(/Cart.svg)"
      }
    }
  },
  methods: {
    IconCreator(width, height, url, repeat, size) {
      return {
        width: `${width}px;`,
        height: `${height}px;`,
        backgroundImage: `url(${url})`,
        backgroundRepeat: repeat ? repeat : null,
        backgroundSize: size ? size : null
      }
    }
  }
}
