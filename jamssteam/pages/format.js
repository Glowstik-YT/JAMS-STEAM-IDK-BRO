import Head from 'next/head'
import { LoginGlobalStyle, LoginNavbar } from "./passindex";

    export default function Home() {
        return (
            <main>
                <div className="container">
        <Head>
            <title>Jams Steam | Format </title>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
        </Head>
            <LoginNavbar />
            
            
            <LoginGlobalStyle />
            <style jsx>{`
            /*CSS GOES HERE*/ 

            `}</style>
        </div>
    </main>

        )
    }
