import React from 'react'

const TaskList = (props) => {

    console.log(props);
    return (
        <ul>
            {props.todosArray.length
                props.todosArray.map(todos, index) => {
                    return (<li key={index}> {todos} < button id={index} onClick={ (event) => props.deleteItem (index, event)} type ="text"> Delete </button> </li>)
                });


            }

        </ul>



    )
}