import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import whitetree from './assets/white tree.jpg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app">
        <div id="userInfo">
            <div id="nameAndTitle">
                <h1>
                    自我介紹
                </h1>
                <h2>
                    <strong>姓名:</strong>潘依芊
                </h2>
                <h2><strong>學號:</strong>411630576
                </h2>
                <h2>
                    <strong>系級:</strong>資管三C
                </h2>
                <li><strong>興趣:</strong>
                    <ol>
                        <li>看小說</li>
                        <li>聽音樂</li>
                    </ol>
                </li>

                <span>
                    <h3>目前在看的小說</h3>
                    <em>《白色橄欖樹》</em>
                    <img src={whitetree} alt="白色橄欖樹"/>
                    <h3>最近常聽的歌</h3>
                    <a href="https://youtu.be/W0lK-LSkHx4?si=YB4zH3YkSLxMY3ta">租購 薛之謙</a>
                </span>
                <p>
                <h3>喜歡的遊戲</h3>
                <table>
                    <tr>
                        <th>國中~高中</th>
                        <th>大學</th>
                    </tr>
                    <tr>
                        <td>奇蹟暖暖</td>
                        <td>跑跑薑餅人</td>
                    </tr>
                </table>                
                </p>
            </div>
        </div>

    </div>
    </>
  )
}

export default App
