import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="bg-baseLight dark:bg-baseDark w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
                <div           
                    className="hidden bg-cover lg:block lg:w-2/3"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}
                >
                    <div className="flex items-center justify-center h-full px-20 bg-gray-900 bg-opacity-40 dark:bg-baseDark dark:bg-opacity-60">
                        <div>
                            <h2 className="text-2xl font-bold text-textDark sm:text-3xl">Meraki UI</h2>
                            <p className="max-w-xl mt-3 text-textDark">          
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae.
                            </p>
                        </div>
                    </div>
                </div>
                                
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-cardLight dark:bg-cardDark p-10">
                    <LoginForm />
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
