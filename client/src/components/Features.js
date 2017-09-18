import React from 'react';
import './css/_grid.css';
import './css/_features.css';

const Features = () => {
    return (
        <section className="section-features">
            <div className="row">
                <h2>Get food fast &mdash; not fast food</h2>
                <p className="long-copy">
                    Hello, we're Omnifood, your now premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
                </p>
            </div>
            <br/><br/>
            <div className="row features">

                <div className="col span-1-of-4 box">
                    <i className="ion-ios-infinite-outline icon-big"></i>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-ios-stopwatch-outline icon-big"></i>
                    <h3>Ready in 20 minutes</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-ios-nutrition-outline icon-big"></i>
                    <h3>100% organic</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-ios-cart-outline icon-big"></i>
                    <h3>Order anything</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
            </div>

        </section>
    )
};

export default Features;