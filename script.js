const app = new Vue({
el:'#app',
data:{
newTodo:'',
newTag:'',
Todos:[]
},
methods:{
    addTodo(){
        if(this.newTag==""|| this.newTodo==""){
            alert('error')
        }
        else
        this.Todos.push({
       title:this.newTodo,
       tag:this.newTag,
       done:false
        });
        this.newTodo= '';
        this.newTag='';
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