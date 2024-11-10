import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.svg'
const LoginForm = () => {
    const { t } = useTranslation();
    return (
        <div className="flex-1">
            <div className="text-center">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-10" src={logo} alt="Logo" />
                </div>
                <p className="mt-3 text-gray-500 dark:text-gray-300">{t('Sign in to access your account')}</p>
            </div>
            <div className="mt-8">
                <form>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">{t('Email Address')}</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">{t('Password')}</label>
                            <a href="#" className="text-sm text-gray-400 dark:text-gray-500 focus:text-blue-500 hover:text-blue-500 hover:underline">{t('Forgot password?')}</a>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t('Your Password')}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-blue-500 dark:text-blue-300 transition-colors duration-300 transform bg-white dark:bg-gray-800 border border-blue-500 dark:border-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 focus:ring-opacity-50">
                            {t('Sign in')}
                        </button>
                    </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400 dark:text-gray-500">
                    {t('Don&#x27;t have an account yet?')} <a href="#" className="text-blue-500 dark:text-blue-300 focus:outline-none focus:underline hover:underline">{t('Sign up')}</a>.
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
