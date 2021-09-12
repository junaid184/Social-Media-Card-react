import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import img1 from './image/img1.jpg';
import profile1 from './image/profile1.jpg';
import profile2 from './image/profile2.jpg';
import img2 from './image/img2.jpg';
import ore from './image/ore.svg';
import heart from './image/heart.svg';
import comment from './image/comment.svg';
import share from './image/share.svg';
import save from './image/save.svg';
import send from './image/send.svg';
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const App = (props) => {
	const [style, setstyle] = useState({
		backgroundColor: "black",
		color: "white"
	})
	const [btnText, setbtnText] = useState("Enable Light Mode")
	const toggleStyle = ()=>{
		if(style.backgroundColor === "black"){
			setstyle({
				color: "black",
				backgroundColor: "white"
			})
			setbtnText("Enable Dark Mode")
		}
		else{
			setstyle({
				color: "white",
				backgroundColor: "black"
			})
			setbtnText("Enable Light Mode");
		}
	}
	const whiteStyle = {
		backgroundColor: "white"
	}
  return<div className="post" style={style}>
	<div className="head"  style={style}>
		<button className="btn btn-light" onClick={toggleStyle}>{btnText}</button>
		<div className="name_profile">
			<img src={props.profile} alt="profileImage" className="avatar"/>
			<div className="q">
				<h4>{props.name}</h4>
				<p>{`${day}/${month}/${year}`}</p>
			</div>
		</div>
		<div className="icon" style={whiteStyle}>
			<img src={ore}  alt="icon" className="svg"/>
		</div>
		
	</div>
	<div className="body">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<img className="post_image" alt="postImage" src={props.postImage}/>
			<div className="btm_icon" style={whiteStyle}>
				<div className="left_icon" >
					<img src={heart}  alt="heart" className="svg margin"/>
					<img src={comment} alt="comment"  className="svg margin"/>
					<img src={share} alt="share"  className="svg margin"/>
				</div>
				<div className="right_icon" style={whiteStyle}>
					<img src={save} alt="savebtn" className="svg margin"/>
				</div>
			</div>
			<form><div className="flex">
				<img src={props.profile} alt="profileImage" className="ico"/>
				<input type="text" name="" placeholder="Enter Text..." className="in"/></div>
					<img src={send} alt="send" className="svg margin"/>
			</form>
		</div>
</div>;
}

    ReactDOM.render(
	<div>
         <App name="Faaiz" profile={profile1} postImage={img1}/>
         <App name="Junaid" profile={profile2} postImage={img2}/>
    </div>
   ,
    document.querySelector('#root')
    );
