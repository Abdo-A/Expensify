import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The  info is {props.info}</p>
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin&&<p>Please beware because this message is private!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated?<WrappedComponent {...props}/>:<p>Please login to see the info!</p>}
        </div>
    )
};



const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="these are the details" isAdmin={true} />,document.getElementById('app'));
ReactDOM.render(<AuthInfo info="these are the details" isAuthenticated={true} />,document.getElementById('app'));