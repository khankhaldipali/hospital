import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/all.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'antd/dist/antd.css';

// -------------react icons-----------------
// import { FcAbout } from "react-icons/fc";
// import { DiAngularSimple } from "react-icons/di";
// import { BiAbacus } from "react-icons/bi";
import React from 'react';


// http://www.templatemonsterpreview.com/demo/106057.html?_gl=1*1nfj6mq*_ga*MTE3Njk0MjkxOC4xNjU3ODg1NDgz*_ga_FTPYEGT5LY*MTY1OTU4ODE1OS4zLjEuMTY1OTU5MDAwNi40Nw..&_ga=2.268316110.1728479225.1659588160-1176942918.1657885483

function App() {
  return (
    <>
      {/* ---------------------start header section------ */}
      <section className='banner'>
        <div className='bg'>
          <span class="Linkify">Hi! Welcome back. How are you doing?</span>
        </div>
        {/* <div className='scrollup'>
          <img src={require('./image/dis_icon.png')}></img>
        </div> */}


        {/* -----------------start header area--------------------- */}
        <div className='header_area'>
          <div className='container header_top'>
            <div className='row'>
              <div className='flex'>
                <div className='col col-md-6'>
                  <div className='address'>
                    <ul class="d-flex">
                      <li><a href="#">info@webmail.com</a></li>
                      <li className='ps-3'><a href="#">+98898787687676</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col col-md-6'>
                  <div className='social'>
                    <ul class="d-flex">
                      <li><a href="#">fb</a></li>
                      <li className='ps-4'><a href="#">tw</a></li>
                      <li className='ps-4'><a href="#">be</a></li>
                      <li className='ps-4'><a href="#">yu</a></li>
                      <li className='ps-4'><a href="#">li</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* -----------------start header-bottom section--------- */}
          <div className='container-fluid'>
            <div className='main_nav'>
              <nav class="navbar navbar-expand-lg" aria-label="Fifth navbar example">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src={require('./image/logo.png')}></img>
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 main">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        <ul className='sub'>
                          <li><a href='#'>HOME ONE</a></li>
                          <li><a href='#'>HOME TWO</a></li>
                          <li><a href='#'>HOME THREE</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Services</a>
                        <ul className='sub'>
                          <li><a href='#'>Service details</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Pages</a>
                        <ul className='sub'>
                          <li><a href='#'>why choose us</a></li>
                          <li><a href='#'>team</a></li>
                          <li><a href='#'>portfolio</a></li>
                          <li><a href='#'>news</a></li>
                          <li><a href='#'>faq</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">News</a>
                        <ul className='sub'>
                          <li><a href='#'>news standard</a></li>
                          <li><a href='#'>news grid</a></li>
                          <li><a href='#'>news details</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">contact</a>
                      </li>
                    </ul>
                    <div className='pe-5'>
                      <a href="#" class="main-btn btn-borderd">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

        </div>

        {/* -----------------start header area--------------------- */}
        <section className='single_banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='banner_text'>
                  <h1>YOUR HEALTH OUR RESPONSIBILITY</h1>
                  <p>We are a team of Dedicated Drs</p>
                  <div className='btn_group'>
                    <a href="#" class="main-btn btn-borderd">
                      GET STARTED NOW
                    </a>
                    <a href='#' className='main_btn1'>
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* ---------------------end header section------ */}
      {/* ---------------------start about section------ */}
      <section className='about spacer_y'>
        <div className='container-custom '>
          <div className='d-flex row'>
            <div className='col-lg-6 col-md-10'>
              <div className='main_img'>
                <img src={require('./image/im1.jpeg')} className='im1'></img>
                <img src={require('./image/im2.jpeg')} className='im2'></img>
                <img src={require('./image/im3.jpeg')} className='im3'></img>
                <img src={require('./image/im4.png')} className='im4'></img>
                <img src={require('./image/im5.png')} className='im5'></img>
              </div>
            </div>
            <div className=' col-lg-6 col-md-10'>
              <div className='about_text'>
                <div className='section_title'>
                  <span className='main_title'>ABOUT US</span>
                  <h2>We Work With You To Address.</h2>
                </div>
                <p>
                  Over the years, a wide range of developments and innovations in the global IT arena have led
                  to many new IT-enabled devices and services being produced. Moreover, there is need for IT
                  today, not just in urban areas but rural regions as well.
                </p>
                <div className='about_feature'>
                  <div className='sngle_features d-flex'>
                    <div className='chart' data-percent="75">
                    </div>
                    <div className='counter_box'>
                      <span>32+</span>
                    </div>
                    <div className='desc'>
                      <h4>Years of Experience</h4>
                      <p>As a result, most of us need to know how to use<br></br> computers. Our knowledge of
                        computers.</p>
                    </div>
                  </div>
                  <div className='sngle_features d-flex'>
                    <div className='chart' data-percent="75">
                    </div>
                    <div className='counter_box'>
                      <span>99+</span>
                    </div>
                    <div className='desc'>
                      <h4>PROJECT DONE TOGETHER</h4>
                      <p>As a result, most of us need to know how to use<br></br> computers. Our knowledge of
                        computers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* ---------------------end about section------ */}
      {/* ---------------------start services section------ */}

      <section className='services spacer_y1'>
        <div className='container-custom'>
          <div className='section_title text_center'>
            <span className='title'>services</span>
            <h2>What We Do</h2>
          </div>
          <div className='loop'>
            <div className='row justify-content-center'>
              <div className='col-lg-4  col-md-6  col-sm-10'>
                <div className='white text_center'>
                  <div className='icon_box'>
                    <img src={require('./image/icon-1.png')}></img>
                  </div>
                  <h4>Capital Market</h4>
                  <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <a href="single-service.html" class="service_link">Read More</a>
                </div>
              </div>
              <div className='col-lg-4  col-md-6  col-sm-10'>
                <div className='black text_center'>
                  <div className='icon_box'>
                    <img src={require('./image/icon-2.png')}></img>
                  </div>
                  <h4>Capital Market</h4>
                  <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <a href="single-service.html" class="service_link1">Read More</a>
                </div>
              </div>
              <div className='col-lg-4  col-md-6  col-sm-10'>
                <div className='aqua text_center'>
                  <div className='icon_box'>
                    <img src={require('./image/icon-3.png')}></img>
                  </div>
                  <h4>Capital Market</h4>
                  <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <a href="single-service.html" class="service_link">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------end services section------ */}
      {/* ---------------------start quote section------ */}
      <section className='quote'>
        <div className='container-custom'>
          <div className='quote_inner'>
            <div className='quote_img'>
              <img src={require('./image/quote.png')}></img>
            </div>
            <div className='quote_text'>
              <div className='row align-items-end'>
                <div className='col-lg-5 offset-lg-5 col-md-7 offset-md-5 ps-md-5'>
                  <div className='quote_title section_title'>
                    <span className='main_title1'>get a quote</span>
                    <h2>WE ARE HERE FOR<br></br> YOUR ESTIMATE<br></br> PRICE.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------end quote section------ */}
      {/* ---------------------start feature section------ */}
      <section className='feature spacer_y1'>
        <div className='container-custom'>
          <div className='row align-items-center d-flex'>
            <div className='col-lg-9 col-md-8 col-sm-7'>
              <div className='section_title'>
                <span class="main_title">Our Feature</span>
                <h2>Our Powerful Features</h2>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-5 d-none d-sm-block'>
              <div className='text-right'>
                <a href='#' className='main_btn2'>
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>

          {/* -------------feature box----------- */}
          <div className='feature_boxes'>
            <div className='row justify-content-center justify-content-md-between'>
              <div className='col-lg-4 col-md-5 col-sm-10'>
                <div className='feature_box'>
                  <h4><i class="fa-regular fa-angle-down"></i>Marketing</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
                <div className='feature_box'>
                  <h4><i class="fa-regular fa-gear"></i>AUTO CUSTOMIZED</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
                <div className='feature_box'>
                  <h4><i class="fa-regular fa-address-book"></i>24/7 ONLINE SUPPORT</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
              </div>
              <div className='feature_img'>
                <img src={require('./image/feature.png')}></img>
              </div>
              <div className='col-lg-4 col-md-5 col-sm-10'>
                <div className='feature_box'>
                  <h4><i class="fa-solid fa-desktop"></i>TIME SAVING</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
                <div className='feature_box'>
                  <h4><i class="fa-solid fa-globe"></i>EMAIL MARKETING</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
                <div className='feature_box'>
                  <h4><i class="fa-solid fa-lock"></i>HIGH QUALITY SECURITY</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------end  feature section------ */}
      {/* ---------------------start  video section------ */}
      <section className='video spacer_y'>

        <div className='container'>
          <div className='row justify-content-center justify-content-lg-end'>
            <div className='col-lg-5 col-md-8'>
              <div className='video_text'>
                <div className='section_title'>
                  <span class="main_title">INTRO VIDEO</span>
                  <h2>OUR LATEST INSIGHTS & OVERVIEW.</h2>
                </div>
                <p>Over the years, a wide range of developments &amp; innovations in the global IT arena have led to
                  many new IT-enabled devices and services being produced.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="video_wrap">
          <div class="video_bg">
            <div class="video_link v_icon">
              <a href="#" class="popup_video">play</a>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------end  video section------ */}
      {/* ---------------------start  team section------ */}
      <section className='team spacer_y1'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='img_box'>
                <div className='member_img'>
                  <img src={require('./image/img1.png')}></img>
                </div>
                <div className='member_info'>
                  <h3>Rosa D.William</h3>
                  <span>Founder &amp; CEO</span>
                </div>
                <a href='#' className='social_trigger'>+</a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='img_box'>
                <div className='member_img'>
                  <img src={require('./image/img2.png')}></img>
                </div>
                <div className='member_info'>
                  <h3>hilixer b. browni</h3>
                  <span>co-founder</span>
                </div>
                <a href='#' className='social_trigger'>+</a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='img_box'>
                <div className='member_img'>
                  <img src={require('./image/img3.png')}></img>
                </div>
                <div className='member_info'>
                  <h3>pokoloko k. kilix</h3>
                  <span>consultant</span>
                </div>
                <a href='#' className='social_trigger'>+</a>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='img_box'>
                <div className='member_img'>
                  <img src={require('./image/img4.png')}></img>
                </div>
                <div className='member_info'>
                  <h3>pokoloko k. kilix</h3>
                  <span>consultant</span>
                </div>
                <a href='#' className='social_trigger'>+</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------end  team section------ */}
      {/* ---------------------start  skill section------ */}
      <section className='skill spacer_y1'>
        <div className='container-custom'>
          <a href='#' className='main_btn2 hire_btn'>
            HIRE US NOW
          </a>
          <div className='row align-items-center justify-content-center'>

            <div className='col-lg-6 col-md-8 col-sm-10'>
              <div className='skill_bar'>
                <div className='section_title'>
                  <span class="main_title">SKILLSET</span>
                  <h2>CHECK SKILLSET & MANUPULATION</h2>
                </div>
                <div className='skill_pro'>
                  <div className='d-flex justify-content-between skill_inner'>
                    <span>Consulting & Marketing</span>
                    <span>72%</span>
                  </div>
                  <div className='pro_wrap'>
                    <div class="progressbar"></div>
                  </div>
                </div>
                <div className='skill_pro'>
                  <div className='d-flex justify-content-between skill_inner'>
                    <span>IT SOLUTION & TRAVELSHOOTING</span>
                    <span>81%</span>
                  </div>
                  <div className='pro_wrap'>
                    <div class="progressbar1"></div>
                  </div>
                </div>
                <div className='skill_pro'>
                  <div className='d-flex justify-content-between skill_inner'>
                    <span>UIX SOLUTION</span>
                    <span>72%</span>
                  </div>
                  <div className='pro_wrap'>
                    <div class="progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-8 col-sm-10'>
              <div className='skill_img'>
                <img src={require('./image/skill-img.jpeg')}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------end  skill section------ */}
      {/* ---------------------start  testimonial section------ */}
      <section className='testi spacer_y1'>
        <div className='container-custom'>
          <Carousel>

            <Carousel.Item>
              <div className='d-md-flex row'>
                <div className='col-lg-4'>
                  <div className='testi_img'>
                    <img src={require('./image/testi1.png')}></img>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='testi_content'>
                    <div className='d-flex icon_set'>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star-half-stroke star"></i></a>
                    </div>
                    <h2>“ Online proofing smart review allows pages within multi page documents to be
                      treated as. Aproove was built to be
                      content is real. ”</h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-md-flex row'>
                <div className='col-lg-4'>
                  <div className='testi_img'>
                    <img src={require('./image/testi1.png')}></img>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='testi_content'>
                    <div className='d-flex icon_set'>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star-half-stroke star"></i></a>
                    </div>
                    <h2>“ Online proofing smart review allows pages within multi page documents to be
                      treated as. Aproove was built to be
                      content is real. ”</h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-md-flex row'>
                <div className='col-lg-4'>
                  <div className='testi_img'>
                    <img src={require('./image/testi1.png')}></img>
                  </div>
                </div>
                <div className='col-lg-8'>
                  <div className='testi_content'>
                    <div className='d-flex icon_set'>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star star"></i></a>
                      <a href='#'><i class="fa-solid fa-star-half-stroke star"></i></a>
                    </div>
                    <h2>“ Online proofing smart review allows pages within multi page documents to be
                      treated as. Aproove was built to be
                      content is real. ”</h2>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      {/* -------------------end  testimonial section------ */}
      {/* -------------------start  blog section------ */}
      <section className='blog spacer_y1'>
        <div className='container-custom'>
          <div className='section_title text_center'>
            <span className='title'>BLOG</span>
            <h2>NEWS FEEDS</h2>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-10'>
              <div className='blog_box text_center'>
                <ul className='toper d-flex'>
                  <li>
                    <a href='#' className='d-flex'>
                      <i class="fa-solid fa-calendar-days"></i>
                      <span>14th May 2022</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='d-flex'>
                      <i class="fa-solid fa-comments"></i>
                      <span>10 Comments</span>
                    </a>
                  </li>
                </ul>
                <div className='blog_img blog1'></div>
                <div className='blog_desc'>
                  <h3>
                    <a href="#">Health consultant is involved in the planning</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore.</p>
                  <a href="#" class="blog_link"> Read More </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-10'>
              <div className='blog_box text_center'>
                <ul className='toper d-flex'>
                  <li>
                    <a href='#' className='d-flex'>
                      <i class="fa-solid fa-calendar-days"></i>
                      <span>14th May 2022</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='d-flex'>
                      <i class="fa-solid fa-comments"></i>
                      <span>10 Comments</span>
                    </a>
                  </li>
                </ul>
                <div className='blog_img blog2'></div>
                <div className='blog_desc'>
                  <h3>
                    <a href="#">Health consultant is involved in the planning</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore.</p>
                  <a href="#" class="blog_link"> Read More </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-10'>
              <div className='blog_box text_center'>
                <ul className='toper d-flex'>
                  <li>
                    <a href='#' className='d-flex'>
                      <i class="fa-solid fa-calendar-days"></i>
                      <span>14th May 2022</span>
                    </a>
                  </li>
                  <li>
                    <a href='#' className='d-flex'>
                      <i class="fa-solid fa-comments"></i>
                      <span>10 Comments</span>
                    </a>
                  </li>
                </ul>
                <div className='blog_img blog3'></div>
                <div className='blog_desc'>
                  <h3>
                    <a href="#">Health consultant is involved in the planning</a>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore.</p>
                  <a href="#" class="blog_link"> Read More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------end  blog section------ */}
      {/* -------------------start  footer top section------ */}
      <section className='footer_top'>
        <div className='container-custom'>
          <div className='row align-items-center'>
            <div className='col-sm-4'>
              <div className='foot_img text-sm-left text_center'>
                <a href='#'>
                  <img src={require('./image/logo-white.png')}></img>
                </a>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='foot_social text_center text-sm-right'>
                <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                <a href='#'><i class="fa-brands fa-twitter"></i></a>
                <a href='#'><i class="fa-brands fa-behance"></i></a>
                <a href='#'><i class="fa-brands fa-linkedin"></i></a>
                <a href='#'><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------end  footer  top section------ */}
      {/* -------------------start  footer bottom section------ */}
      <section className='footer_botoom spacer_y1'>
        <div className='container-custom'>
          <div className='row'>
            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='foot1'>
                <div>
                  <h5 className='inner'>company</h5>
                  <ul className='inner_con'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Referral Program</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Legal</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='foot1'>
                <div>
                  <h5 className='inner'>COMMUNITY</h5>
                  <ul className='inner_con'>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Meetups</a></li>
                    <li><a href="#">Q&amp;A</a></li>
                    <li><a href="#">Write for DOnations</a></li>
                    <li><a href="#">Droplets for Demos</a></li>
                    <li><a href="#">Hatch Startup Program</a></li>
                    <li><a href="#">Shop Swag</a></li>
                    <li><a href="#">Research Program</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='foot1'>
                <div>
                  <h5 className='inner'>SOLUTIONS</h5>
                  <ul className='inner_con'>
                    <li><a href="#">Health Analytics</a></li>
                    <li><a href="#">Marketing Research</a></li>
                    <li><a href="#">Health Monitoring</a></li>
                    <li><a href="#">Managed Services</a></li>
                    <li><a href="#">Health Solutions</a></li>
                    <li><a href="#">Research Program</a></li>
                    <li><a href="#">Currents Research</a></li>
                    <li><a href="#">Open Source</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='foot1'>
                <div>
                  <h5 className='inner'>new feeds</h5>
                  <div className=''>
                    <div className='post'>
                      <div className='post_img'>
                        <img src={require('./image/foot1.png')}></img>
                      </div>
                      <div className='post_desc'>
                        <div className='time d-flex align-items-center'>
                          <i class="fa-solid fa-calendar-days"></i>
                          <span> 14th May 2022</span>
                        </div>
                        <h5>
                          <a href="single-news.html">Managing Partner along with Senior
                            Counsels.</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='post'>
                      <div className='post_img'>
                        <img src={require('./image/foot2.png')}></img>
                      </div>
                      <div className='post_desc'>
                        <div className='time d-flex align-items-center'>
                          <i class="fa-solid fa-calendar-days"></i>
                          <span> 14th May 2022</span>
                        </div>
                        <h5>
                          <a href="single-news.html">Managing Partner along with Senior
                            Counsels.</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className=''>
                    <div className='post'>
                      <div className='post_img'>
                        <img src={require('./image/foot3.png')}></img>
                      </div>
                      <div className='post_desc'>
                        <div className='time d-flex align-items-center'>
                          <i class="fa-solid fa-calendar-days"></i>
                          <span> 14th May 2022</span>
                        </div>
                        <h5>
                          <a href="single-news.html">Managing Partner along with Senior
                            Counsels.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------copy right area------------- */}
          <div className='copy d-sm-flex justify-content-between'>
            <p className='copy_right'>Copyright By@Slidesigma - 2022</p>
            <p className='copy_right'>Design By@Slidesigma - 2022</p>
          </div>
        </div>
      </section>

      {/* -------------------end  footer bottom section------ */}
      <div className='container'>
        <div className='owl-carousel owl-theme'>
          <img src={require('./image/blog1.jpeg')} alt="" />
          <img src={require('./image/blog2.jpeg')} alt="" />
          <img src={require('./image/blog3.jpeg')} alt="" />
          <img src={require('./image/blog1.jpeg')} alt="" />
          <img src={require('./image/blog2.jpeg')} alt="" />
          <img src={require('./image/blog3.jpeg')} alt="" />
          <img src={require('./image/blog1.jpeg')} alt="" />
          <img src={require('./image/blog2.jpeg')} alt="" />
          <img src={require('./image/blog3.jpeg')} alt="" />
        </div>
      </div>
    
    </>
  );
}

export default App;
