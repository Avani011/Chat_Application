import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm.jsx';

import './App.css';
import  ChatFeed  from "./components/ChatFeed.jsx";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine 
            height ="100vh"
            projectID="fa6941e5-7ff0-4ea6-9fb0-eabbcecd0870"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;