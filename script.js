const vm = new Vue({
  el: "#container",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    notePreview() {
      return marked.parse(this.content);
    },
  },
});
