import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import db from './firebase';
import firebase from 'firebase'

//deploying firebase
//connect to db
//firebase init
//npm run build
//firebase deploy


function Todo() {
  
  const addtodo=(event)=>{

    event.preventDefault();
    console.log('clicked');
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('')
  }

  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  useEffect(()=>{
    

    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      console.log('todo',todos)
      //setTodos(snapshot.docs.map(doc=>doc.data().todo))
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
    })

  },[])

    return (
        <Container>
           
    


      <form action="">
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/><Button className='add-btn' disabled={!input} onClick={addtodo}>add</Button>

      </form>
    <ul>
      {todos.map(todo=>(
      <List text={todo}/>
      )
        
      )}
    </ul>
        </Container>
    )
}

export default Todo

const Container=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
form{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
input{
  height: 40px;
  outline: none;
  border: none;
  padding:10px 18px;
  border-radius:0px;
  width: 300px;
  @media (max-width:768px){
    width: 60vw;
  }
}
ul{
  padding: 0;
}
.add-btn{
  background-color: rgba(0, 128, 0, 0.648) !important;
  color:white;
  height:40px;
  border-radius: 0px;
  @media (max-width:768px){
    width: 20vw;
  }

  &:hover{
  background-color: rgba(0, 128, 0, 0.848);
}
}


`
