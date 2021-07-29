new Vue({
  el: "#app",
  data: () => ({
    valueTask: undefined,
    tasksList: [
      { name: 'Read more about Vue', done: false },
      { name: 'Buy food', done: true },
      { name: 'Learn AngularJS', done: false }
    ],

    firstNumber : '',
    secondNumber: ''
  }),
  computed: {
    taskClass() {
      return {
        'task': true,
        'border-task': this.tasksList.length > 1
      }
    },
    result: function(){
      return this.firstNumber * this.secondNumber;
  }
  },
  methods: {
    onSubmitForm() {
      if (this.valueTask) {
        this.tasksList.push({ name: this.valueTask, done: false })
        this.valueTask = ''
      }
    },
    onRemoveTask(indexTask) {
      this.tasksList.splice(indexTask, 1)
    }
  }
});
