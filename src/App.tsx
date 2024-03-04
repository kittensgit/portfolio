import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';

const App: FC = () => {
    return (
        <div className="app">
            <div className="app__content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
