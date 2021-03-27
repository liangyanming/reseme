import React, { useEffect, useState, useCallback } from "react";
import ForMe from './forMe';
import ForJob from './forJob';
import ForPokemon from './forMe/ForPokemon';
import egg from './egg.png';
import './App.css';

function App() {
  const menuList = ['welcome', 'poke-ball', 'poke-wait','great-ball', 'great-wait', 'ultra-ball', 'ultra-wait','beast-ball']
  const [menu, setMenu] = useState('welcome')
  const [offset, setOffset] = useState(0)
  const [hight, setHight] = useState(0)
  useEffect(()=>{
    const rootDom = document.getElementById('main')
    rootDom.addEventListener('scroll', getScrollInfo, false)
    return ()=>rootDom.removeEventListener('scroll', getScrollInfo, false)
  },[])
  useEffect(()=>{
    // window.setTimeout(
    //   ()=>window.scrollTo({
    //     top: menuList.indexOf(menu) * 1200,
    //     behavior: 'smooth'
    //   }),
    //   1000
    // )
  }, [menu])
  const getScrollInfo = useCallback(() => {
    const { scrollTop, clientHeight } = document.getElementById('main');
    if (menu !== 'poke-ball' && scrollTop < clientHeight) {
      setMenu('poke-ball')
      setHight(clientHeight)
    }
    if (menu !== 'poke-wait' && parseInt(scrollTop / clientHeight) === 1) {
      setMenu('poke-wait')
    }
    if (menu !== 'great-ball' && parseInt(scrollTop / clientHeight) === 2) {
      setMenu('great-ball')
    }
    if (menu !== 'great-wait' && parseInt(scrollTop / clientHeight) === 3) {
      setMenu('ultra-wait')
    }
    // if (menu !== 'ultra-ball' && parseInt(scrollTop / clientHeight) === 4) {
    //   setMenu('ultra-ball')
    // }
    // if (menu !== 'ultra-wait' && parseInt(scrollTop / clientHeight) === 5) {
    //   setMenu('ultra-wait')
    // }
    if (menu !== 'beast-ball' && parseInt(scrollTop / clientHeight) === 4) {
      setMenu('beast-ball')
    }
    setOffset(scrollTop % clientHeight)
  }, [])

  const cilck = (tomenu) => {
    // alert("i'm burning")
    setMenu(tomenu)
  }
  return (
    <div id="main" className="App">
      <div
        className="welcome"
        style={menu !== "welcome" ? { height: 0 } : {}}
      >
        <div>
          <div className="welcome-title" style={ menu !== "welcome" ? { display: 'none' } : {}}>touch me!</div>
          <img className="egg" src={egg} alt="egg" onClick={()=>cilck('poke-ball')} style={ menu !== "welcome" ? { position: 'absolute', opacity: 0 } : { opacity: 1 }} />
        </div>
      </div>
      <div className="ball-content" style={ menu === "welcome" ? { display: 'none', top: '100vh' } : { position: 'fixed', width: '100%', height: '100%' }}>
        <div className="ball">
          <div
            className="poke-ball"
          >
            <div className="left" >
              <ForMe />
            </div>
            <div className="middle" />
            <div className="right" >
              <ForPokemon offset={offset} />
            </div>
          </div>
        </div>
        <div
          className="ball"
          style={
            menuList.indexOf(menu) === 2 ?
              { transform: `translate3d(${100 - offset * 100 / hight}%, 0px, 0px)` } :
              ( menuList.indexOf(menu) < 2 ?
                { transform: 'translate(100%, 0px)' } :
                {transform: 'translate(0%, 0px)'})
          }
        >
          <div className="great-ball">
            <div
              className="left"
              style={{ backgroundColor: '#3c81c3' }}
            >
              <ForJob offset={menu === 'great-ball' ? offset : (menu === 'ultra-wait' ? hight :0)} hight={hight} location="left" />
            </div>
            <div className="middle" >
              <div className="middle-title">
                工作经历
              </div>
            </div>
            <div
              className="right"
              style={{ backgroundColor: '#ec4650' }}
            >
              <ForJob offset={menu === 'great-ball' ? offset : (menu === 'ultra-wait' ? hight :0)} hight={hight} location="right" />
            </div>
          </div>
        </div>

        <div
          className="ball"
          style={ menuList.indexOf(menu) === 6 ?
            { transform: `translate3d(0px, -${100 - offset * 100 / hight}%, 0px)` } :
            (menuList.indexOf(menu) > 6 ? { transform: 'translate(0px, 0%)' } : { display: 'none' })
          }
        >
          <div className="beast-ball">
            <div
              className="left"
              style={{ backgroundColor: '#d9ce3d' }}
            >
               <div className="content">{offset}</div>
            </div>
            <div className="middle" />
            <div
              className="right"
              style={{ backgroundColor: '#3568af' }}
            />
          </div>
        </div>

      </div>
      <div style={ menu === "welcome" ? { display: 'none' } :{ position: 'absolute', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 9999, top: 0, width: '100%', height: '600vh' }} />

      {/*<div className="master-ball"/>*/}
    </div>
  );
}

export default App;
