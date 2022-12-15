// import React from 'react';
// import {makeStyles} from "@mui/styles";
// import { Paper, List, ListItem, ListItemText, Input} from '@mui/material';
// import io from 'socket.io-client';
// import firebase from "firebase/compat";
//
// const useStyles = makeStyles(theme => ({
//     root: {
//         margin: '50px auto',
//         padding: theme.spacing(3, 2),
//         maxWidth: 500
//     }
// }));
//
// const Chat = () => {
//     const classes = useStyles();
//     const [messages, setMessages] = React.useState([]);
//     const [input, setInput] = React.useState('');
//     const socket = io('http://localhost:3000');
//
//     React.useEffect(() => {
//         socket.on('chat message', msg => {
//             setMessages(prevMessages => [...prevMessages, msg]);
//         });
//
//
//         firebase.database().ref('messages').on('value', snapshot => {
//
//             const data = snapshot.val();
//             const messages = Object.keys(data).map(key => ({
//                 id: key,
//                 ...data[key]
//             }));
//
//             setMessages(messages);
//         });
//     }, []);
//
//     const handleSubmit = event => {
//         event.preventDefault();
//
//         firebase.database().ref('messages').push({
//             text: input,
//             timestamp: Date.now()
//         });
//
//         socket.emit('chat message', input);
//
//         setInput('');};
//
//     const handleChange = event => {
//         setInput(event.target.value);
//     };
//
//     return (
//         <Paper className={classes.root}>
//             <List>
//                 {messages.map(message => (
//                     <ListItem key={message.id}>
//                         <ListItemText primary={message.text} />
//                     </ListItem>
//                 ))}
//             </List>
//             <form onSubmit={handleSubmit}>
//                 <Input
//                     fullWidth
//                     value={input}
//                     onChange={handleChange}
//                     placeholder="Введите сообщение"
//                 />
//             </form>
//         </Paper>
//     );
// };
//
// export default Chat;
//

export {};