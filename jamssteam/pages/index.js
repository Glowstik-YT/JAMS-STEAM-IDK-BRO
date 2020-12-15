import Head from 'next/head';
import {createGlobalStyle} from "styled-components";
import Image from "next/image";


export const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    margin: 0;
    padding: 0;
    font-family: "Poppins";
    scroll-behavior: smooth;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    overflow-y: none;
    background-color: #171717;
  }

  h1{
    text-align: center;
    color: white;
}
`;


export function Navbar() {
    return (
        <div className="header">

            <h1 className="space"></h1>


            <a href="/" className="nav">
                <h3>Home</h3>
            </a>
            <a href="/guide" className="nav">
                <h3>Guide</h3>
            </a>
            <a href="/feedback" className="nav">
                <h3>Feedback</h3>
            </a>

            <style jsx>
                {`
        
        body{
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        .header {
          margin: 0;
          padding: 0;
          background: linear-gradient(-135deg, #c850c0, #4158d0);          
          display: flex;
          height: 50px;
          width: 100%;
          transition: 0.3s;
          z-index: 1000000;
          border-top: 5px solid white;
          border-bottom: 5px solid white;

        }

        .space {
          margin-left: 22%;
        }

        .nav {
          float: right;
          display: flex;
          font-family: "Poppins";
          flex-direction: center;
          margin-left: 10%;
          text-decoration: none;
          margin-top: -1.2%;
          font-size: 20px;
          color: #fff;
          transition: 0.7s;
          text-align: center;
        }

        .nav:hover {
          color: white;
          font-family: "Poppins";
          font-style: bolder;
        }

        .logo {
          margin-top: 10%;
        }
      
        
        
        `}</style>
        </div>
    )
}


export default function Home() {
    return (
      <main>
        <div className="container">
            <Head>
                <title>Jams Steam!</title>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            </Head>
            <center>
                <div>
                    <h1 className="title">
                        <a href="login.html">|Welcome to JAMS Steam Club|</a>
                    </h1>
                    <Navbar/>

                        <br></br>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div className="slider">
                            <div className="slides">

                                <input type="radio" name="radio-btn" id="radio1"></input>
                                <input type="radio" name="radio-btn" id="radio2"></input>
                                <input type="radio" name="radio-btn" id="radio3"></input>
                                <input type="radio" name="radio-btn" id="radio4"></input>


                                <div className="slide first">
                                    <Image src="/img1.jpg" alt=""
                                        width={1000}
                                        height={600}/>
                                </div>
                                <div className="slide">
                                    <Image src="/img.jpg" alt=""
                                        width={1000}
                                        height={600}/>
                                </div>
                                <div className="slide">
                                    <Image src="/img3.jpg" alt=""
                                        width={1000}
                                        height={600}/>
                                </div>
                                <div className="slide">
                                    <Image src="/img2.jpg" alt=""
                                        width={1000}
                                        height={600}/>
                                </div>


                                <div className="navigation-auto">
                                    <div className="auto-btn1"></div>
                                    <div className="auto-btn2"></div>
                                    <div className="auto-btn3"></div>
                                    <div className="auto-btn4"></div>
                                </div>

                            </div>

                            <div className="navigation-manual">
                                <label for="radio1" className="manual-btn"></label>
                                <label for="radio2" className="manual-btn"></label>
                                <label for="radio3" className="manual-btn"></label>
                                <label for="radio4" className="manual-btn"></label>
                            </div>

                        </div>


                        <script type="text/javascript">
                            {`
                            var counter = 1;
                            setInterval(function () {
                              
                              document.getElementById('radio' + counter).checked = true;
                              counter++;
                              if (counter > 4) {
                                counter = 1;
                              }
                            }, 5000);
                            `}
                        </script>

                        <br></br>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <p >This is the official website of the JAMS Steam Club, here you can see updates about the club and many other things including Field Trips, Announcements, Reminders, and much more! If you would like to learn how to use the site you can click on the "Guide" tab on the navigation bar which will answer all of your questions. Have a great day!</p>
                        <p>
                            <strong>
                                *If you find any bugs, glitchs or want to give feedback, than please click the feedback button. Please use the Feature only for appropprite problems.*
                            </strong>
                        </p>
                        <p>
                            <strong>Thank You</strong>
                        </p>
                    </div>
                </center>
                <GlobalStyle />
                <style jsx>
                    {`
      
              
      .slider {
        width: 1000px;
        height: 500px;
        border-radius: 10px;
        overflow: hidden;
        border: 5px solid #c850c0;
      }
      
      .slides {
        width: 500%;
        height: 500px;
        display: flex;
      }
      
      .slides input {
        display: none;
      }
      
      .slide {
        width: 20%;
        transition: 2s;
      }
      
      .slide img {
        width: 800px;
        height: 500px;
      }
      
      
      .navigation-manual {
        position: absolute;
        width: 1000px;
        margin-top: -40px;
        display: flex;
        justify-content: center;
      }
      
      .manual-btn {
        border: 2px solid #c850c0;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
      }
      
      .manual-btn:not(:last-child) {
        margin-right: 40px;
      }
      
      .manual-btn:hover {
        background: #c850c0;
      }
      
      #radio1:checked~.first {
        margin-left: 0;
      }
      
      #radio2:checked~.first {
        margin-left: -20%;
      }
      
      #radio3:checked~.first {
        margin-left: -40%;
      }
      
      #radio4:checked~.first {
        margin-left: -60%;
      }
            
      .navigation-auto {
        position: absolute;
        display: flex;
        width: 1000px;
        justify-content: center;
        margin-top: 460px;
      }
      
      .navigation-auto div {
        border: 2px solid #c850c0;
        padding: 5px;
        border-radius: 10px;
        transition: 1s;
      }
      
      .navigation-auto div:not(:last-child) {
        margin-right: 40px;
      }
      
      #radio1:checked~.navigation-auto .auto-btn1 {
        background: #c850c0;
      }
      
      #radio2:checked~.navigation-auto .auto-btn2 {
          background: #c850c0;
      }
      
      #radio3:checked~.navigation-auto .auto-btn3 {
        background: #c850c0;
      }
      
      #radio4:checked~.navigation-auto .auto-btn4 {
        background: #c850c0;
      }

      .conatiner {
        font-family: "Poppins";
        background-color: red;
      }
            `} </style>
            </div>
      </main>
    )
}

