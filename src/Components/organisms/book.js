import PIC from '../Atoms/image1.jpeg'
import React ,{useEffect}from 'react'
import {BiTime} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"


const Book =(props)=>{

  

  // useEffect(() => {
  //   setBooks(newbooks);
        
  // }, [booksList]);


    return(
      
        <div style={{ backgroundColor: "#f2f2f2", width: "250px", minHeight: "475px", margin: "10% 10%"}}>
            <img src = {PIC} style = {{ height : "300px", width :"250px"}}></img>
      
             <p style={{width : "150px",fontSize:15,textAlign:'left',fontFamily:'Times New Roman, serif'}}>{props.title}</p>
             <p style={{textAlign:'left',fontFamily:'Times New Roman, serif'}}>{props.authorName}</p>
         
      <div className='rowC' style={{float : 'left'}}>
      <React.Fragment style = {{textAlign:'left',width:"120px",height:"20px"}}>
             
             <BiTime style = {{width:"15px",height:"15px",paddingLeft:"5px"}}></BiTime> <i style={{fontSize:"12px",fontFamily:'Times New Roman, serif'}}>{props.time}-minute read       </i>
         </React.Fragment>
      
    
      <React.Fragment style = {{textAlign:'right',width:"120px",height:"20px"}}>
             
             <BsPerson style = {{width:"15px",height:"15px",textAlign:'left'}}></BsPerson> <i style={{fontSize:"12px",fontFamily:'Times New Roman, serif'}}> {props.readCount}K reads</i>
             </React.Fragment >
       
      </div>
      <h2 style={{float:'right',paddingRight:"10px"}}>...</h2>

      
      <button className="button" onClick = {()=>props.changeState(props.bookId)}>Change State</button>
        
        </div>
        
        
    )

}

export default Book;

{/* <div>
            <div style={{ backgroundColor: "#f2f2f2", width: "250px", minHeight: "475px", margin: "10% 10%"}}>
      <Image/>
      <Title/>
      <div className='rowC'>
        <div style={{float:'left'}}>
        <TimeRead/>
        </div>
        <div style={{float:'right',paddingRight:"10px"}}>
        <Views/>
        </div>
        <h2 style={{float:'right',paddingRight:"10px"}}>...</h2>
      </div>
      </div>
        </div> */}