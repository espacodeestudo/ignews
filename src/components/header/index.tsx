import React from 'react'
import styled from "./styles.module.scss";
import { SigInButton } from '../SignInButton';

function Header() {
  return (
    <header className={styled["headerContainer"]}>
        <div className={styled["headerContent"]}>
            <h3>Ig.news</h3>
        <nav>
            <a className={styled["active"]}>Home</a>
            <a>Post</a>
        </nav>

        <SigInButton/>
        </div>
    </header>
  )
}

export {Header}