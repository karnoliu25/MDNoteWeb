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
    selectedNote() {
      return this.notes.find((note) => note.id === this.selectedId);
    },
  },
  methods: {
    // 保存
    save() {
      const note = {
        id: Date.now(),
        title: this.title || "未命名笔记",
        content: this.content,
      };
      this.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    // 选中
    selected(note) {
      this.selectedId = note.id;
      this.content = note.content;
      this.title = note.title;
    },
    // 新增
    addNote() {
      this.title = "未命名笔记";
      this.content = "";
    },
    // 删除
    deleteNote() {
      if (this.selectedId && confirm("确定删除笔记吗？")) {
        const arr = this.notes.find((note) => note.id === this.selectedId);
        const index = this.notes.indexOf(arr);
        if (index !== -1) {
          this.notes.splice(index, 1);
          localStorage.setItem("notes", JSON.stringify(this.notes));
        }
      }
    },
  },
});
