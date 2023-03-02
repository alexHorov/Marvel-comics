import { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner"
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";
// import SingleComic from "../singleComic/SingleComic";
import TestComponent from "../testComponent/TestComponent";
import decoration from '../../resources/img/vision.png';

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null)


    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <BrowserRouter>
            <div className="app">
                {/* <TestComponent /> */}
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <ErrorBoundary>
                                <RandomChar />
                            </ErrorBoundary>
                            <div className="char__content">
                                <ErrorBoundary>
                                    <CharList onCharSelected={onCharSelected} />
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <CharInfo charId={selectedChar} />
                                </ErrorBoundary>
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision" />
                        </Route>

                        <Route exact path="/comics">
                            <AppBanner />
                            <ComicsList />
                        </Route>
                    </Switch>

                </main>
            </div>
        </BrowserRouter>
    )

}

export default App;