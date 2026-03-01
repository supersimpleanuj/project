 const todoList = [{name:'make dinner',
                  duedate: '2026-02-27'},
                  {name: 'wash dihses',
                   duedate:'2026-02-27'}];
      rendertodoList ()

    function rendertodoList (){
      let todoListHTML = ''
      for(let i = 0; i< todoList.length; i++){
        const todoobject = todoList[i];
       // const name = todoobject.name;
       // const duedate = todoobject.duedate;
        const{name,duedate } = todoobject;

       const html = `
        <div> ${name}</div>
        <div> ${duedate}</div>
         <button class= "delete-button"
         onclick="
         todoList.splice(${i}, 1)
         rendertodoList ()
         
         ">Delete</button>
        `;
        todoListHTML += html;
      }

      document.querySelector('.js-result')
      .innerHTML = todoListHTML;

    }

    function addTodo(){
      const buttonElement = document .querySelector('.js-input-text')
      const name = buttonElement.value;

      const inputElement = document.querySelector('.js-input-date')
      const duedate = inputElement.value;


      todoList.push({name, duedate });
      console.log(todoList);
       rendertodoList ();
      buttonElement.value = '';
       inputElement.value = '';
    }