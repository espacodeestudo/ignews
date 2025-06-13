import styled from "./styles.module.scss"
import {FaGithub} from 'react-icons/fa'
import {FiX} from "react-icons/fi"

function SigInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ?  (
    <button type="button" className={styled.signInButton}>
        <FaGithub color="#04d361"/>
       Yuran Simão

       <FiX color="#737380" className={styled.closedIcon}/>
    </button>
  ): (
    <button type="button" className={styled.signInButton}>
        <FaGithub color="#eba417"/>
        Sigin with Github
    </button>
  )
}

export {SigInButton}