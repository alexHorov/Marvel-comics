import { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner"
import ComicsList from "../comicsList/ComicsList";
// import SingleComic from "../singleComic/SingleComic";
import TestComponent from "../testComponent/TestComponent";


const App = () => {


    return (
        <BrowserRouter>
            <div className="app">
                {/* <TestComponent /> */}
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
                        </Route>

                        <Route exact path="/comics">
                            <ComicsPage />
                        </Route>
                    </Switch>

                </main>
            </div>
        </BrowserRouter>
    )

}

export default App;