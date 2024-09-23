import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import Write from './pages/write/Write.jsx';
import Single from './pages/single/Single.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Page Not Found</h1>,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'write',
        element: <Write />,
    },
    {
        path: 'post/:postId',
        element: <Single />,
    },
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
