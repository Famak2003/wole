'use client';

import LogoBanner from '@/components/LogoBanner';
import NavBar from '@/components/NavBar';
import store, { persistor } from '@/lib/redux/store';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function ReduxProvider({ children }: { children: React.ReactNode }) {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <main className=" flex flex-col justify-between items-center w-full h-full min-h-[100dvh] bg-black ">
                <LogoBanner/>
                <div className=' flex flex-col flex-1 pt-3 px-[12px] w-full h-full ring-2 '>
                    {children}
                </div>
                <NavBar/>
            </main>
        </PersistGate>
        </Provider>
    );
}

export default ReduxProvider