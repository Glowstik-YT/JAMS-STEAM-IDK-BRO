import Head from 'next/head'
import { GlobalStyle, CONSTANTS, Navbar } from "./index";

    export default function Home() {
        return (
            <main>
                <div className="container">
        <Head>
            <title>Jams Steam | Guide </title>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        </Head>
            <h1>|JAMS Steam Club|</h1>
            <Navbar />
            <div className='flex-box'>
                <div className='card'> 
                <h2>Guide</h2>
                <p className="main-guide"> Using this site is very simple, as you can see there is a navigiation tab above where you can go to other web pages.

The feedback tab is if you would ike to talk to us the creators of the website. 
<br></br>
<br></br>
If you have any suggestions, glitches or feedback you can send an email to us via form

<br></br>
<br></br>

Once you have clicked on it, it should bring you to a login page where if you have the right log in credentials you can enter.
If you have forgot or lost yours then you may contact us at the feedback page where we can gladly reset it for you!
<br></br>
<br></br>

When you login, there is also the a Challenges button where you can look and see the description of the challenges Ms.Long has provided.
            
</p>
<hr></hr>
                <p className="thanks">
                    <strong>
                        Thanks! - Jams STEAM Dev Team
                    </strong>
                </p>

                </div>
            </div>
            <GlobalStyle />
            <style jsx>{`

                .flex-box {
                    width: 65%;
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
                
                h2{
                    text-align: center;
                    color: black;
                }

                .card{
                    background: #fff;
                    margin-right: 5%;
                    margin-left: 5%;
                    border-radius: 30px;
                    height: 425px;
                }

                .thanks{
                    text-align: center;
                    background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </div>
    </main>

        )
    }
