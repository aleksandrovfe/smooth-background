import React, {useState} from "react";
import "./App.scss";

const classes = ['video', 'img1', 'img2', 'img3', 'img4', 'img5']

const App = () => {
  const [flag, setFlag] = useState(0)

  const onChangeImg = (imageNumbert) => setFlag(imageNumbert)

  return (
    <div className="App">
      <div className="sign1">У тебя очень красивая улыбка</div>
      <div className="sign2">Давай наконец перейдем на ты</div>
      <div className="sign3">Улыбайся чаще</div>
      <div className="sign4">Повторяй слова</div>
      <div className={`img ${classes[flag]}`}></div>
      <video
          src="assets/video.mp4"
          className={`${classes[flag]}`}
          loop="loop"
          autoPlay="autoPlay"
        >
        </video>
      <div className="buttons-list">
        <button className='btn' onClick={() => onChangeImg(0)}></button>
        <button className='btn' onClick={() => onChangeImg(1)}></button>
        <button className='btn' onClick={() => onChangeImg(2)}></button>
        <button className='btn' onClick={() => onChangeImg(3)}></button>
        <button className='btn' onClick={() => onChangeImg(4)}></button>
        <button className='btn' onClick={() => onChangeImg(5)}></button>
      </div>
    </div>
  );
}


export default App;
