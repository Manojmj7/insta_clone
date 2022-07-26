import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, collection, getDoc, getDocs } from './firebase';
// import { makeStyles } from '@mui/styles';
// import Modal from '@mui/material/Modal';

// import { doc } from 'firebase/firestore';

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: () => ({
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     // boxShadow: theme.shadows[5],
//     // paddinfg: theme.spacing(2,4,2),
//   }),
// }))


function App() {
  // const classes = useStyles();
  // const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const m = async () => {
      const coll = collection(db, 'posts')
      const docs = await getDocs(coll)
      const datas = []
        docs.forEach(
        (doc) => {
        const data = doc.data()
        datas.push(data)
        
      })
      setPosts( [...datas] )
    }
    m()
    
  }, []);

  return (
    <div className="app">


      {/* <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <div style={modalStyle} className={classes.paper}>
        <h2>I'm model</h2>
      </div>
    </Modal> */}


      <div className='app_header'> 
        <img
          className='app_headerimage'
          src='https://w0.peakpx.com/wallpaper/995/828/HD-wallpaper-shingeki-no-kyoji-emblem-red-pretty-item-object-rose-cg-emblem-objects-beautiful-floral-sweet-nice-green-symbol-attack-on-titan-anime-beauty-realistic-blue-lovely-items-shingeki.jpg'
          alt=''
        />
      </div>

      < h1>Hello World</h1>

      {
        posts.map((post, index) => (
          <Post key={index} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;




    // {
    //   username: 'MJ',
    //   caption: 'Wow it works!',
    //   imageUrl: 'https://w0.peakpx.com/wallpaper/466/434/HD-wallpaper-anime-attack-on-titan-attack-on-titan-eren-yeager-reiner-braun-shingeki-no-kyojin-titan.jpg'
    // },
    // {
    //   username: 'shades ',
    //   caption: 'I sketch!', 
    //   imageUrl: 'https://w0.peakpx.com/wallpaper/981/124/HD-wallpaper-attack-on-titan-beach-attack-on-titan-anime.jpg'
    // },
    // {
    //   username: 'scores ', 
    //   caption: 'I compose!', 
    //   imageUrl: 'https://w0.peakpx.com/wallpaper/457/420/HD-wallpaper-anime-attack-on-titan-attack-on-titan-mikasa-ackerman.jpg'
    // }
