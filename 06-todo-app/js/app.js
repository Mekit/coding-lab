var app = new Vue({
  el: '#app',
  data: {
    todo: '',
    todos: [
      {
        text: 'Learn CSS',
        done: true,
        note: 'Not a big deal 😎'
      },
      {
        text: 'Thematize this App',
        done: false,
        new: true,
      },
      {
        text: 'Learn JavaScript',
        done: false,
        note: 'Not so easy 😅'
      },
      { 
        text: 'Learn Vue.js',
        done: false,  
      },
      {
        text: 'Build something awesome',
        done: false
      }
    ]
  },
  methods: {
    addNewTodo: function(){
      if (this.todo !== ''){
        this.todos.push({
          text: this.todo,
          done: false,
        });
        this.todo = '';
      }
    },
    toggleDone: function(index){
      this.todos[index].done = !this.todos[index].done;
    },
    todoClass: function(item){
      let classes = [];
      if (item.done){
        classes.push('todo-item--done');
      } else {
        classes.push('todo-item--open');
      }
      if (item.new){
        classes.push('todo-item--new');
      }
      if (item.note){
        classes.push('todo-item--note');
      }
      return classes.join(' ');
    }
  }
})