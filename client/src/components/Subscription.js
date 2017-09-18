import React from 'react';
import './css/_subscription.css';

const Subscription = () => {
    return (
        <section className="section-plans">
            <h2>Start eating healthy today</h2>
            <div className="row">
                <div className="col span-1-of-3">
                    <div className="plan-box">
                        <div className="plan">
                            <h3>Starter</h3>
                            <p className="plan-price">$19 <span>/ month</span></p>
                            <p className="plan-price-month">That's only $3 per survey</p>
                        </div>
                        <div>
                            <ul>
                                <li><i className="ion-ios-checkmark-empty"></i>1 meal every day</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Order 24/7</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Access to the newest creations</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Free delivery</li>
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
                            <p className="plan-price-month">That's only $3 per survey</p>
                        </div>
                        <div>
                            <ul>
                                <li><i className="ion-ios-checkmark-empty"></i>1 meal every day</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Order 24/7</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Access to the newest creations</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Free delivery</li>
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
                            <p className="plan-price-month">That's only $3 per survey</p>
                        </div>
                        <div>
                            <ul>
                                <li><i className="ion-ios-checkmark-empty"></i>1 meal every day</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Order 24/7</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Access to the newest creations</li>
                                <li><i className="ion-ios-checkmark-empty"></i>Free delivery</li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="btn btn-ghost">Sign up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Subscription;