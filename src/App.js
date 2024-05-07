import { ChatEngine } from "react-chat-engine";

import './App.css';
import  ChatFeed  from "./components/ChatFeed.jsx";

const App =() =>{
    return(
        <ChatEngine 
            height ="100vh"
            projectID="fa6941e5-7ff0-4ea6-9fb0-eabbcecd0870"
            userName="avani011"
            userSecret="a11n10ny"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;