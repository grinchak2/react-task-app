import React from 'react';
import Tasks from '../containers/Tasks';
import Comments from '../containers/Comments';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        return(
            <div id="app" className="row">
                <div className="col-left">
                    <div className="title1">TASK APP</div>
                    <div className="title2">Test app</div>
                </div>
                <div className="col-right">
                    <div className="row content-block">
                        <div className="col col-left">
                            <Tasks />
                        </div>
                        <div className="col col-right">
                            <Comments />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;