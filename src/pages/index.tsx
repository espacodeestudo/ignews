import Head from "next/head"
import styled from "./home.module.scss"
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>
      
      <main className={styled.contentContainer}>

        <section className={styled.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br/>
            <span>for $9.90 month</span>
          
          </p>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  );
}
