import Head from 'next/head'
import {LoginGlobalStyle, LoginNavbar} from "./passindex";

export default function Home() {
    return (
        <main>
            <div className="container">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
                    <title>Jams Steam | Challenges </title>
                </Head>
                <LoginNavbar/>
                <center>
                <div className="card">
                    <div class="space">
                        <h2>Challenge Board</h2>
                        <p className="wordsthatprollynoonewillread">
                            <strong>Club Logo  
                            </strong>
                               -  If you are intrested in Graphic deisign, listen up because this might be the club for you! In club logo you will be designing a logo that relates to JAMS and Steam. Mrs.Long would like it to be on a t-shirt, poster, or anything that would promote JAMS Steam Club!</p>
                        <p>----------------------------------------------------------------------------</p>
                        <p className="wordsthatprollynoonewillread">
                            <strong>Sound Experiment  
                            </strong>
                               -  If you like to conduct experiments and share findings, then you better listen up because this could be your next choice. In this experiment you will guide you through exploring sound as an energy form. It will provide various examples of sound both on earth and in space and will conclude with a selection of experiments you can do yourself from home. The findings will be organized and shared to the group. The challenge will be for any member choosing this option to demonstrate their findings in a live club meeting.
                        </p>
                        <p>----------------------------------------------------------------------------</p>
                        <p className="wordsthatprollynoonewillread">
                            <strong>Upcycling  
                            </strong>
                               -  The Upcycling challenge is for people who like to solve problems and build solutions. This challenge is mostly for people who like to reduce waste and reuse trash in a completely differnt way. One example is taking a waterbottle and turning it into a phone holder. You can use multiple trash objects for this. If you chose this challenge just remember you have to turn the trash into a entirly whole other object or thing!
                        </p>
                        <p>----------------------------------------------------------------------------</p>
                        <p className="wordsthatprollynoonewillread">
                            <strong>Website   
                            </strong>
                                -  A Website! If you are looking to try to create a website, I personaly think you should use html and css. The html would be for the main things and the css is for how nice it looks and deisgn of the webpage/website. Upon completion of this challenge, you will be need to create a well-designed basic webpage with a left or top side navigation panel, text header, pictures, external links, and anchor links.
                        </p>
                        <p>----------------------------------------------------------------------------</p>
                        <p className="wordsthatprollynoonewillread">
                            <strong>Testillations  
                            </strong>
                               -  This is a great challenge if you would like to combine their math minds and artistic ability. This challenge will be to create the most creative AND most complex tessellation. Create a SIMPLE tessellation but if you choose this challenge you must think on your own beyond simple to design and create their own challenging tessellation which include rotations and mirroring in their designs.
                        </p>
                        <p className="thePersonWhoWroteTheThingyAboveAndIsAnyoneGOnnaEvenReadThisAndIfYouDoKillYourSlefBecausYourAWaste">
                            <strong>
                                Thanks! - Jams STEAM Dev Team
                            </strong>
                        </p>
                    </div>

                </div>
                </center>

                <LoginGlobalStyle/>
                <style jsx>{`
            body {
                text-align: center;
            }

            .card {
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
                margin-bottom: 2%;
             }
             .thePersonWhoWroteTheThingyAboveAndIsAnyoneGOnnaEvenReadThisAndIfYouDoKillYourSlefBecausYourAWaste{
                text-align: center;
                background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;       
              }

              .space p, .space strong {
                  margin: 10px;
              }


            

            `}</style>
            </div>
        </main>

    )
}
