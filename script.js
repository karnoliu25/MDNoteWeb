const vm = new Vue({
  el: "#container",
  data() {
    return {
      content: "",
      title: "",
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      selectedId: null,
    };
  },
  computed: {
    // 预览
    preview() {
      return marked.parse(this.content);
    },
  },
  methods: {
    // 保存
    save() {
      const note = {
        id: Date.now(),
        title: this.title,
        content: this.content,
      };
      this.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      console.log(`test`);
    },
  },
});
