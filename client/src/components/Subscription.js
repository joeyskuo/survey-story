import React from 'react';
import './css/_subscription.css';

const Subscription = () => {
    return (
        <section className="section-plans">
            <div className="wrapper-price">
                <h2 className="pricing">Choose the plan that works for you.</h2>
                <div className="row row-plans">
                    <div className="col span-1-of-3">
                        <div className="plan-box">
                            <div className="plan">
                                <h3>Starter</h3>
                                <p className="plan-price">$19 <span>/ month</span></p>
                                <p className="plan-price-month">Up to 20,000 emails</p>
                            </div>
                            <div>
                                <ul>
                                    <li><i className="ion-ios-checkmark-empty"></i>Basic question types</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Metrics & Reporting</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Data API</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Embedding</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#" className="btn btn-full">Sign up now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col span-1-of-3">
                        <div className="plan-box">
                            <div className="plan">
                                <h3>Pro</h3>
                                <p className="plan-price">$59 <span>/ month</span></p>
                                <p className="plan-price-month">Up to 100,000 emails</p>
                            </div>
                            <div>
                                <ul>
                                    <li><i className="ion-ios-checkmark-empty"></i>Basic question types</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Metrics & Reporting</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Data API</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Embedding</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#" className="btn btn-ghost">Sign up now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col span-1-of-3">
                        <div className="plan-box">
                            <div className="plan">
                                <h3>Premium</h3>
                                <p className="plan-price">$89 <span>/ month</span></p>
                                <p className="plan-price-month">Up to 1+ million emails</p>
                            </div>
                            <div>
                                <ul>
                                    <li><i className="ion-ios-checkmark-empty"></i>Basic question types</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Metrics & Reporting</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Data API</li>
                                    <li><i className="ion-ios-checkmark-empty"></i>Embedding</li>
                                </ul>
                            </div>
                            <div>
                                <a href="#" className="btn btn-ghost">Sign up now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Subscription;