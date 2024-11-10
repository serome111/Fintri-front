import React, { useState, useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { useTranslation } from 'react-i18next';

const LoginCPage = () => {
    const { t } = useTranslation();
    const images = [
        'https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1693712001507-f36fc0a45a79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia de imagen cada 5 segundos

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="bg-baseLight dark:bg-baseDark w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
                <div
                    className="hidden bg-cover lg:block lg:w-2/3 transition-all duration-500"
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                >
                    <div className="flex items-center justify-center h-full px-20 bg-gray-900 bg-opacity-40 dark:bg-baseDark dark:bg-opacity-60">
                        <div>
                            <h2 className="text-2xl font-bold text-textDark sm:text-3xl">{t('Fintri')}</h2>
                            <p className="max-w-xl mt-3 text-textDark">
                                { t('easy_description') }
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

export default LoginCPage;
