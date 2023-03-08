import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import DeleteMap from './delete';
import GetMap from './GetMap';
import TelevisionDetailManagement from './post';
import TelevisionDetailUpdate from './update';
import './AppCss.css'

function App(){
    return (
        <div className='App'>
                 <Router>
                    <div class='nav'>
                        <h1 id='title'>TELEVISION</h1>
                        <div class='nav-link'>
                    <Link to='/'><button><b>HOME</b></button></Link>
                    <Link to='/delete'><button><b>DELETE</b></button></Link>
                    <Link to='/put'><button><b>UPDATE</b></button></Link>
                    <Link to='/get'><button><b>VIEW</b></button></Link>
                    </div>
                    </div>
                <Routes>
                    
                <Route path='/' element={<TelevisionDetailManagement/>}/>
                <Route path='/get' element={<GetMap/>}/>
                <Route path='/put' element={<TelevisionDetailUpdate/>}/>
                <Route path='/delete' element={<DeleteMap/>}/>

                </Routes>
                </Router>

        </div>
    )
}

export default App;


