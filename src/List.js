import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import db from './firebase';

function List(props) {
    const [uid,setUid]=useState('');
    const[input,setInput]=useState('');
   
    useEffect(()=>{
        setUid(props.text.id)
        
    })


    const updateTodo=(uid)=>{
        
        
         document.getElementById(uid).style.display='none';
       console.log(uid);
        db.collection('todos').doc(uid).set({
            todo:input
        },{merge:true})
        setInput('');
        
    
   
    }
    const handleInput=(id)=>{
        
        
            
    }


    return (
        <>
        <div className="w3-container">
  
  <div id={uid} className="w3-modal">
    <div className="w3-modal-content w3-card-4">
      <header className="w3-container w3-teal"> 
        <span onClick={e=>{document.getElementById(uid).style.display='none' }}
        className="w3-button w3-display-topright">&times;</span>
       
      </header>
      <div className="w3-container">
        <input type="text" value={input} onChange={e=>{setInput(e.target.value)}}/>
        <Button onClick={e=>{
            updateTodo(uid)}}>DONE</Button>


    </div>
    </div>
  </div>
</div>




         <Container>
            
            
            
            <Text>{props.text.todo}</Text>
            <Icons>
                <Button key={props.text.id} onClick={e=>{
                    setInput(props.text.todo);
                        
                        
                       
                        console.log(uid);
                        
                        document.getElementById(uid).style.display='block';
                }} >
                     <EditIcon className='icons'/>
                </Button>
               <Button onClick={event=>db.collection('todos').doc(props.text.id).delete()}>
                   <DeleteIcon className='icons'/>
               </Button>
                
                

            </Icons>
        </Container>
        
        
        </>

       
    )
}

export default List

const Container=styled.div`

    width:500px;
    background-color: white;
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    
   
    margin-bottom: 20px;
    @media (max-width:768px){
       width:80vw; 
    }

`
const Text=styled.p`
    width:100%; 
    line-break: auto;
    font-size: 15px;
    border-bottom:1px solid lightgray;
    padding-bottom: 25px;

`
const Icons=styled.div`
width:100%;
display: flex;
justify-content:space-between;

.icons{
    color:gray;
}

`