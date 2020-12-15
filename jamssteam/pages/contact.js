import Head from 'next/head'
import { LoginGlobalStyle, LoginNavbar } from "./passindex";

    export default function Home() {
        return (
            <main>
                <div className="container">
        <Head>
            <title>Jams Steam | Contact</title>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        </Head>
        <center>
            <LoginNavbar/>
            <div className="wrapper">
                <div className="title">
                    Contact Form</div>
                <form action="https://formsubmit.co/kim.long@edison.k12.nj.us" method="POST">
                    <div className="field">
                        <input type="text" required></input>
                        <label>Name</label>
                    </div>
                    <div className="field">
                        <input type="email" required></input>
                        <label>Email</label>
                    </div>
                    <div className="field">
                        <input type="text" required></input>
                        <label>Message</label>
                    </div>
                    <div className="field">
                        <input id="btn" type="submit" value="Send"></input>
                    </div>
                </form>
                <div>
                    <p id="display"></p>
                </div>
            </div>
        </center>
            <LoginGlobalStyle />
            <style jsx>{`
                .wrapper{
                    width: 400px;
                    background: #fff;
                    border-radius: 30px;
                    box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
                    margin-top: 6%;
                    height: 450px;
                }
                .wrapper .title{
                    font-size: 35px;
                    font-weight: 600;
                    text-align: center;
                    line-height: 100px;
                    color: #fff;
                    user-select: none;
                    border-radius: 15px 15px 0 0;
                    background: linear-gradient(-135deg, #c850c0, #4158d0);          
                }
                .wrapper form{
                    padding: 10px 30px 50px 30px;
                }
                .wrapper form .field{
                    height: 50px;
                    width: 100%;
                    margin-top: 20px;
                    position: relative;
                }
                .wrapper form .field input{
                    height: 100%;
                    width: 100%;
                    outline: none;
                    font-size: 17px;
                    padding-left: 20px;
                    border: 1px solid lightgrey;
                    border-radius: 25px;
                    transition: all 0.3s ease;
                }
                .wrapper form .field input:focus,
                form .field input:valid{
                    border-color: #c850c0;
                }
                .wrapper form .field label{
                    position: absolute;
                    top: 50%;
                    left: 20px;
                    color: #999999;
                    font-weight: 400;
                    font-size: 17px;
                    pointer-events: none;
                    transform: translateY(-50%);
                    transition: all 0.3s ease;
                }
                form .field input:focus ~ label,
                form .field input:valid ~ label{
                    top: 0%;
                    font-size: 16px;
                    color: #c850c0;
                    background: #fff;
                    transform: translateY(-50%);
                }
                form .content{
                    display: flex;
                    width: 100%;
                    height: 50px;
                    font-size: 16px;
                    align-items: center;
                    justify-content: space-around;
                }
                form .content .checkbox{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                form .content input{
                    width: 15px;
                    height: 15px;
                    background: red;
                }
                form .content label{
                    color: #c850c0;
                    user-select: none;
                    padding-left: 5px;
                }
                form .content .pass-link{
                    color: "";
                }
                form .field input[type="submit"]{
                    color: #fff;
                    border: none;
                    padding-left: 0;
                    font-family: poppins;
                    margin-top: 10px;
                    font-size: 20px;
                    font-weight: 500;
                    cursor: pointer;
                    background: linear-gradient(-135deg, #c850c0, #4158d0);          
                    transition: 0.7s;
                }

                form .field input[type="submit"]:hover{
                    background: linear-gradient(-135deg, #fff, #fff);
                    color: #c850c0;
                    border: 2px solid #c850c0;
                    transition: 0.7s;
                }

                form .pass-link a:hover,
                form .signup-link a:hover{
                    text-decoration: underline;
                }

            `}</style>
        </div>
    </main>

        )
    }
