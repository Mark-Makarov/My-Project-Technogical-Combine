import React, {useEffect, useRef, useState} from 'react';
import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './Chat.css'
import {useAppDispatch} from "../../Hooks/Hooks";
import {chatSlice} from "../../Store/slices/chatSlice";


firebase.initializeApp({
    apiKey: "AIzaSyBlQWA4kC96rY3uYJuIVo4KALvZqIp6cuc",
    authDomain: "technological-combine.firebaseapp.com",
    projectId: "technological-combine",
    storageBucket: "technological-combine.appspot.com",
    messagingSenderId: "825549129412",
    appId: "1:825549129412:web:dc660375f32cd74e2deb91",
    measurementId: "G-03MGTHL5X1"
})

const auth: firebase.auth.Auth = firebase.auth();
const firestore = firebase.firestore();

interface ChatMessage {
    id: string;
    text: string;
    createdAt: firebase.firestore.Timestamp;
    uid: string;
    photoURL: string;
}

const Chat: React.FC = () => {

    // @ts-ignore
    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
                <SignOut />
            </header>

            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>

        </div>
    );
}

const SignIn: React.FC = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(r => '');
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )

}

const SignOut: React.FC = () => {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}


const ChatRoom: React.FC = () => {
    const dummy = useRef<HTMLSpanElement>(null);

    // @ts-ignore
    const messagesRef = firestore.collection<ChatMessage>('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    // @ts-ignore
    const [messages] = useCollectionData<ChatMessage>(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        // @ts-ignore
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        // @ts-ignore
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    let dispatch = useAppDispatch();
    useEffect(()=>{
        if (messages != undefined) {
            dispatch(
                chatSlice.actions.getMessages(
                    messages
                        .filter(message => message.createdAt)
                        .map(message => ({
                            ...message,
                            createdAt: message.createdAt.toDate().toString().slice(0, 24)
                        }))
                )
            );
        }
    },[[messages]]);

    return (
        <>
        <main>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}
                   placeholder="Введите сообщение" />

            <button type="submit" disabled={!formValue}>🕊️</button>

        </form>
    </>)
}

interface ChatMessage {
    message: {
        text: string,
        uid: string,
        photoURL: string,
    }
}



const ChatMessage: React.FC<{ message: ChatMessage }> = ({ message }) => {

    const date = message.createdAt
        ? message.createdAt.toDate().toString().slice(0, 24)
        : [];

    return(
            <div className="sent p message">
                <img src={message.photoURL} alt="" className="message-photo"/>
                <div>
                    <div className="message-header">
                        <p>{date} <br/>
                            {message.text}</p>
                    </div>
                </div>
            </div>
       )
}


export default Chat;