import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { MainPage, ComicsPage, SingleComicPage } from '../pages';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

// import TestComponent from "../testComponent/TestComponent";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


const App = () => {


    return (
        <BrowserRouter>
            <div className="app">
                {/* <TestComponent /> */}
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes >
                            <Route path="/" element={<MainPage />} />
                            <Route path="/comics" element={<ComicsPage />} />
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic' />} />
                            <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} />

                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </BrowserRouter>
    )

}

export default App;