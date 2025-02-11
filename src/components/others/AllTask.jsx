import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const { employees } = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>

            <div>
                {employees && employees.length > 0 ? (
                    employees.map((employee, idx) => (
                        <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='text-lg font-medium w-1/5'>{employee.firstName}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{employee.taskCounts.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{employee.taskCounts.active}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-white'>{employee.taskCounts.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{employee.taskCounts.failed}</h5>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-400 text-center mt-3'>No employees found.</p>
                )}
            </div>
        </div>
    );
};

export default AllTask;
