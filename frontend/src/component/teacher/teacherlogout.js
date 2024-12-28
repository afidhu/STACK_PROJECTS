import React from 'react';

const Logout = () => {
    
localStorage.removeItem('teacherLoginStatus')
window.location.replace('/teacher-dashboard');

    return (
        <div>
            
        </div>
    );
}

export default Logout;
