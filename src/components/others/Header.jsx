import React from 'react';

const Header = (props) => {
  const { data, changeUser } = props;

  // ✅ Show Employee Name if available, otherwise show 'Admin'
  const username = data?.firstName || 'Admin';

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');  
    changeUser(null); // ✅ Reset user state
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span> {/* ✅ Employee Name Here */}
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
