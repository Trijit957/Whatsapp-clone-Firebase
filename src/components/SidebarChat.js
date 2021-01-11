import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import '../styles/SidebarChat.css';
import { useStateValue } from './StateProvider';
import db from '../firebase/firebase';

const SidebarChat = ({ addNewChat, id, name }) => {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();
    
    const createChat = () => {
        const roomName = prompt("Please Enter Room Name: ");
        if(roomName) {
          db.collection('rooms').add({
              name: roomName
          });  
        }
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    useEffect(() => {
      if(id) {
        db.collection('rooms')
          .doc(id)
          .collection('messages')
          .orderBy('timestamp','desc')
          .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())));
      }
     
    }, [id]);


    return !addNewChat ? (

          <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
              <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                <h2>{name}</h2>
              <p>{messages[0]?.message}</p>
              </div>
            </div>
          
          </Link>
  
    ) : (
       <div onClick={createChat} className="sidebarChat">
           <h2>Add New Room</h2>
       </div>
    )
}

export default SidebarChat;
