// eslint-disable

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [글제목,  test] = useState(['test 코트 추천']);
    let [a, 글제목변경] = useState(['test 우동맛집', '강남 파스타맛집', '강남 초밥맛집']);
    let [따봉, 따봉변경] = useState(0);

    return (
    <div className='App'>
      <div className='black-nav'>
        <h4> 블로그임</h4>          
      </div>
      

      <div className='list'>

        <button onClick={()=>{
          let copy = [...a];
          copy[0] = '여기 코트 추천';
          글제목변경(copy)
        }}> 글수정 </button>
        
        <h4> { 글제목 } <span onClick={()=>{따봉변경(따봉+1)}}>🔥 {따봉}</span></h4>
        <div className="post-container1">
          <p className="post-content"> { a[0] } </p>
        </div>

        <div className="post-container2">
          <p className="post-content"> { a[1] } </p>
        </div>


        <div className="post-container3">
          <p className="post-content"> { a[2] } </p>
        </div>


        <Modal></Modal>
        <Modal></Modal>


      </div>
    
    
    </div>
  );
}

export default App


function Modal(){
  return(
    <div className='modal'>
      <h4>제목??</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>닫기</button>
    </div>
  )
}