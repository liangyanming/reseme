import React, { useEffect, useState } from "react";
import './index.css';

export default function ForPokemon(props) {
  const { offset } = props;
  return <div className="for-pokemon" style={ (offset > 50) ? { display: 'block', opacity: 1 } : {  opacity: 0 } }>
    <div className="job">主业：前端开发工程师(React)</div>
    <div className="job">生日：1993.1.16</div>
    <div className="job">学校：
      <a onClick={()=>window.open("http://www.ccut.edu.cn/ccut.html")}>长春工业大学</a>
    </div>
    <div className="job">
       爱好：<font>POKEMON重度爱好者</font>
       <p>LOL(玩的还行</p>
       <p>唱歌</p>
       <p>旅游(瞎溜达，又吃又喝不拍照</p>
       <p>过山车爱好者</p>
       <p>电影</p>
     </div>
  </div>
}