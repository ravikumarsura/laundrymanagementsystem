import React from 'react'
import './css/style.css'
import img1 from './images/bg3.jpg'
import img2 from './images/bg1.jpg'
import img3 from './images/bg2.jpg'
import img4 from './images/about3.jpg'
import img5 from './images/about2.jpg'

const ServicesM = () => {
    return (
        <div>

            <section id="explore-food">

                <div class="explore-food wrapper">
                    <div class="container">

                        <div class="row pt-5">

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img1} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4>Dry clean</h4>
                                        <p>Time : 15-20 minutes | serves : 1</p>
                                        <span>100/- <del>200/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img2} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4> White wash clean </h4>
                                        <p>Time : 25-30 minutes | serves : 1</p>
                                        <span>120/- <del>220/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img3} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4>fabrication wash</h4>
                                        <p>Time : 15-45 minutes | serves : 1</p>
                                        <span>130/- <del>230/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr />

                        <div class="row pt-5">

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img4} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4>Dry clean</h4>
                                        <p>Time : 15-20 minutes | serves : 1</p>
                                        <span>140/-<del>180/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img5} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4> White wash clean </h4>
                                        <p>Time : 25-30 minutes | serves : 1</p>
                                        <span>120/- <del>160/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img1} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4>fabrication wash</h4>
                                        <p>Time : 15-45 minutes | serves : 1</p>
                                        <span>150/- <del>200/-</del></span>
                                        <button href="#" class="main-btn mt-4">

                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <hr />


                        <div class="row pt-5">

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img2} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4>Dry clean</h4>
                                        <p>Time : 15-20 minutes | serves : 1</p>
                                        <span>100/- <del>140/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img3} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4> White wash clean </h4>
                                        <p>Time : 25-30 minutes | serves : 1</p>
                                        <span>125/-<del>185/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-lg-0 mb-5">
                                <div class="card">
                                    <img src={img4} class="img-fluid" alt="" />
                                    <div class="pt-3">
                                        <h4>fabrication wash</h4>
                                        <p>Time : 15-45 minutes | serves : 1</p>
                                        <span>135/- <del>165/-</del></span>
                                        <button class="main-btn mt-4">
                                            Order now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ServicesM