import styles from "../styles/Home.module.scss";
import {Header} from "../src/components/common/header/Header";
import Head from "next/head";
import {Uranus} from "../src/components/pages/uranus/Uranus";

export default function UranusPage() {
    return (
        <>
            <Head>
                <title>Uranus</title>
                <meta name="description" content="Uranus"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;400;700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;400;700&display=swap" rel="stylesheet"/>
            </Head>
            <main className={styles.main}>
                <Header/>
                <Uranus/>
            </main>
        </>
    );
}