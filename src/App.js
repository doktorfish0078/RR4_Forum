import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { useState } from 'react';

import Header from './components/header';
import Forum from './components/forum';
import Thread_page from './components/thread_page';
import CreateNewTopic from './components/create_new_topic';
import TopicPage from './components/topic_page';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setloggedUserId] = useState(undefined);

  return (
    <Router>
      <Helmet>
        <script src="https://kit.fontawesome.com/50f06b1917.js" crossorigin="anonymous"></script>
      </Helmet>
      <div className="App">
          <Header isLoggedIn={isLoggedIn} loggedUserId={loggedUserId}/>
          
          <Routes>
            <Route path='/' element = { <Forum/> }/>
            <Route path='/thread/:id_thread' element = { 
              <Thread_page
                loggedUserId={loggedUserId} 
                isLoggedIn={isLoggedIn}
              /> }
            />
            <Route path='/thread/:id_thread/topic/:id_topic' element = { 
              <TopicPage
                loggedUserId={loggedUserId} 
                isLoggedIn={isLoggedIn}
              /> 
              }
            />
            <Route path='/thread/:id/create_new_topic' element = { 
              <CreateNewTopic 
              loggedUserId={loggedUserId} 
              isLoggedIn={isLoggedIn}
              /> 
              }
            />
            <Route path='/login' element = { 
              <Login 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                setloggedUserId={setloggedUserId}
              /> 
              }
            />
            <Route path='/registration' element = { <Registration/> }/>
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
