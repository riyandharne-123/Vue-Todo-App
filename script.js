const app = new Vue({
el:'#app',
data:{
newTodo:'',
Todos:[]
},
methods:{
    addTodo(){
        this.Todos.push({
       title:this.newTodo,
       done:false
        });
        this.newTodo= '';
    },
    removeTodo(todo){
        const todoIndex=this.Todos.indexOf(todo);
        this.Todos.splice(todoIndex,1);
    },
    allDone(){
        
        this.Todos.forEach(todo => {
            if( todo.done==true){
                todo.done=false
            }
       else{
           todo.done=true
       }
        });
    }
}
});