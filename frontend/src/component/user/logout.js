import React from 'react';

const Logout = () => {
    localStorage.removeItem('studentLoginStatus')
window.location.replace('/login');
    return (
        <div>
            
        </div>
    );
}

export default Logout;
