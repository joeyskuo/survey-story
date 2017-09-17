import React from 'react';
import './css/_features.css';
import './css/_grid.css';

const Features = () => {
    return (
        <section className="section-features">
            <div className="row">
                <h2>Get food fast &mdash; not fast food</h2>
                <p class="long-copy">
                    Hello, we're Omnifood, your now premium fod delivery service. We know you're always busy. No tiem for cooking. So let us take care of that, we're really good at it, we promise!
                </p>
            </div>

            <div className="row">

                <div className="col span-1-of-4">
                    <i className="ion-ios-infinite-outline"></i>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4">
                    <i className="ion-ios-nutrition-outline"></i>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4">
                    <i className="ion-ios-nutrition-outline"></i>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
                <div className="col span-1-of-4">
                    <i className="ion-ios-cart-outline"></i>
                    <h3>Up to 365 days/year</h3>
                    <p>
                        Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexiby if that's your style.
                    </p>
                </div>
            </div>

        </section>
    )
};

export default Features;