var app = new Vue({
  el: '#app',
  data: {
    todo: '',
    todos: [
      {
        text: 'Learn CSS',
        done: true,
      },
      {
        text: 'Thematize this App',
        done: false,
      },
      {
        text: 'Learn JavaScript',
        done: false
      },
      { 
        text: 'Learn Vue',
        done: false,  
      },
      { text: 'Build something awesome',
        done: false
      }
    ]
  },
  methods: {
    addNewTodo: function(){
      this.todos.push({
        text: this.todo,
        done: false,
      });
      this.todo = '';
    },
    toggleDone: function(index){
      this.todos[index].done = !this.todos[index].done;
    }
  }
})