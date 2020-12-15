import Head from 'next/head';
import {createGlobalStyle} from "styled-components";
import Image from "next/image";


export const LoginGlobalStyle = createGlobalStyle`
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


export function LoginNavbar() {
    return (
        <div className="header">

            <a href="/passindex"><Image className="logo" src="/logo.png" alt=""
            width={70}
            height={60}/></a>
            

            <h1 className="space1"></h1>

            <h7 className="title"><a href="/passindex">Jams Steam</a></h7>

            <h1 className="space"></h1>

            <a href="/blog.html" className="nav">
                <h3>Blog</h3>
            </a>
            <a href="/contact" className="nav">
                <h3>Contact</h3>
            </a>
            <a href="/challenges" className="nav">
                <h3>Challenges</h3>
            </a>

            <a href="/" className="nav">
                <button>Logout</button>
            </a>



            <style jsx>{`
        
        body{
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        .title {
          margin-top: 0.5%;
          font-size: 30px;
          font-weight: bold;
          
        }

        .header {
          margin: 0;
          padding: 0;
          background: linear-gradient(-135deg, #c850c0, #4158d0);          
          display: flex;
          height: 70px;
          width: 100%;
          transition: 0.3s;
          z-index: 1000000;
          border-top: 5px solid white;
          border-bottom: 5px solid white;

        }
        .space1 {
          margin-left: 3%;
        }


        .space {
          margin-left: 7%;
        }

        .nav {
          float: right;
          display: flex;
          font-family: "Poppins";
          flex-direction: center;
          margin-left: 10%;
          text-decoration: none;
          margin-top: -0.6%;
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

        .nav button {
            border-radius: 10px;
            border: 1px solid #171717;
            width: 300%;
            font-size: 17px;
            margin-top: 35%;
            color: white;
            font-family: 'poppins';
            background: #171717;
            height: 50%;
        }

        .nav button:hover{
          cursor: pointer;
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
                <LoginNavbar />
                <LoginGlobalStyle />

                
                <div className="cards">
                <section class="title">
                  <center>
                    <h2>Quick Links</h2>
                  </center>
                </section>
                  
                  
                  <p className="wordsthatprollynoonewillread">You will find some quick links to resourses we use in JAMS Steam like zoom/meet and classroom! If you scroll down you will also find announcments and info about the website or club.</p>
                  <a href="https://meet.google.com/lookup/buzheppq2n" ><button id = "btn" className="regName">Meet</button></a>
                  <a href="https://classroom.google.com/u/0/c/MTg4MzE0Mjg4MTIx" ><button id = "btn" className="regerName">Classroom</button></a>

                  <a href="https://www.njcie.org/poster-contest" ><button id = "btn" className="regestName">Extra</button></a>

                </div>

                <div className="card-info">
                  <h2>Announcment Board</h2>
                  <p className="wordsthatprollynoonewillread">Thank you for voting on for our website! We weill be frequently updating the site! We have many plans such as this new website!</p>
                  <p>----------------------------------------------------------------------------</p>
                  <p className="wordsthatprollynoonewillread">We just realsed version 1.0.1 of the JAMS Steam Website! We hope you like it, if you find any bugs or feedback you want to give us. Feel free to use the feedback form when you logout!</p>
                  <p className="thePersonWhoWroteTheThingyAboveAndIsAnyoneGOnnaEvenReadThisAndIfYouDoKillYourSlefBecauseYourAWaste"><strong>
                        Thanks! - Jams STEAM Dev Team
                    </strong>
                  </p>
                  
              </div>
              
              <br></br>
                <br/>

                <style jsx>{`
                h1, h2, p {
                  color: black;
                }

                .card-info {
                    width: 55%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    border-radius: 30px;
                    background-color: #fff;
                    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
                    margin-top: 4%;
                    color: black;
                }


                .cards {
                    width: 55%;
                    margin: 0 auto;
                    border-radius: 30px;
                    background-color: #fff;
                    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
                    margin-top: 4%;
                    color: black;
                    flex-direction: row;
                    flex-wrap: center;
                    justify-content: center;
                    

                }

                .wordsthatprollynoonewillread{
                  margin-right: 3%;
                  margin-left: 3%;
                  text-align: center;
                }
                .              thePersonWhoWroteTheThingyAboveAndIsAnyoneGOnnaEvenReadThisAndIfYouDoKillYourSlefBecauseYourAWaste{
                  text-align: center;
                  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;       
                }

                .regName {
                    border-radius: 10px;
                    font-family:'Poppins'
                    border: 1px solid #171717;
                    border-style: none;
                    border: none;
                    font-size: 20px;
                    color: white;
                    font-family: 'poppins';
                    background: #171717;
                    height: 50%;
                    width: 10%;
                }

                .regName:hover{
                  backround: #1BA261;
                }

                #btn {
                  margin-left: 15%;
                  padding: 10px;
                  margin-bottom: 1%;
                }

              
                .regerName {
                  border-radius: 10px;
                  font-family:'Poppins'
                  border: 1px solid #171717;
                  border-style: none;
                  border: none;
                  font-size: 20px;
                  color: white;
                  font-family: 'poppins';
                  background: #171717;
                  height: 50%;
                  width: 20%;
              }        

              .regestName {
                border-radius: 10px;
                font-family:'Poppins'
                border: 1px solid #171717;
                border-style: none;
                border: none;
                font-size: 20px;
                color: white;
                font-family: 'poppins';
                background: #171717;
                height: 50%;
                width: 10%;
              }         

              .title h3 {
                margin-left: 1000%;
                margin-right: 1000%;
              }
                
            `} </style>

            <div className="">

            </div>
            </div>
      </main>
    )
}

  