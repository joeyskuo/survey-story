import React from 'react';
import './css/_grid.css';
import './css/_features.css';

const Features = () => {
    return (
        <section className="section-features">
            <div className="wrapper">
                <div className="row row-heading">
                    <h2>Get valuable feedback &mdash; not dud answers</h2>
                    <p className="long-copy">
                        We're more than just survey software. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <br/><br/>
                <div className="row row-features">

                    <div className="col span-1-of-4 box">
                        <i className="ion-ios-stopwatch-outline icon-big"></i>
                        <h3>Simple Setup</h3>
                        <p>
                            Automate your customer feedback program by connecting your CRM in under 15 minutes.
                        </p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <i className="ion-ios-email-outline icon-big"></i>
                        <h3>One-Click Feedback</h3>
                        <p>
                            Your customers get a beautiful one-question email that's super simple to answer.
                        </p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <i className="ion-ios-list-outline icon-big"></i>
                        <h3>Ask for Anything</h3>
                        <p>
                            Easily customize your surveys to collect the information you need. Measure customer satisfaction, perform market research, or even conduct A/B testing.
                        </p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <i className="ion-ios-chatboxes-outline icon-big"></i>
                        <h3>35% Response Rate</h3>
                        <p>
                            You get 4x more responses than conventional survey platforms thanks to our clever optimization and automations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Features;