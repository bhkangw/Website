import * as React from 'react';
import './FrontPage.css';

const getLogoHeader = () => {
    return (
        <div>
            <div className="index-title-bg">
                <div>
                    <div className="temp-image" />
                    <h3 id="content-text">Proident minim magna sunt ex ut et dolor ipsum cupidatat commodo dolor.</h3>
                </div>
            </div>
            <div className="index-subimage-bg">
                <div className="desk-dash" />
            </div>
        </div>
    );
};

const getSignUpBanner = () => {
    return (
        <div className="banner-container">
            <div>
                <h4>Sign up to get your mentor today!</h4>
                <button className="btn btn-lg btn-block btn-sign-up-index">Sign up now!</button>
            </div>
        </div>
    );
};

const getInfoPanels = () => {
    return (
        <div className="info-panel-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 info-item">
                        <div className="disp-1" />
                        <h3 className="title-data">
                            Learn
                        </h3>
                        <h5 className="desc-data">
                            Nulla fugiat occaecat mollit reprehenderit
                            eu nisi veniam dolor et in mollit laborum proident.
                        </h5>
                    </div>
                    <div className="col-12 col-md-4 info-item">
                        <div className="disp-1" />
                        <h3 className="title-data">
                            Learn
                        </h3>
                        <h5 className="desc-data">
                            Nulla fugiat occaecat mollit reprehenderit
                            eu nisi veniam dolor et in mollit laborum proident.
                        </h5></div>
                    <div className="col-12 col-md-4 info-item">
                        <div className="disp-1" />
                        <h3 className="title-data">
                            Learn
                        </h3>
                        <h5 className="desc-data">
                            Nulla fugiat occaecat mollit reprehenderit
                            eu nisi veniam dolor et in mollit laborum proident.
                        </h5></div>
                </div>
            </div>
        </div>
    );
};

export const getFrontPage = () => {
    const header = getLogoHeader();
    const panels = getInfoPanels();
    const signUp = getSignUpBanner();
    return (
        <div>
            {header}
            {panels}
            {signUp}
        </div>
    );
};