import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faGit, faGitAlt, faHtml5, faJsSquare, faBootstrap, faReact } from "@fortawesome/free-brands-svg-icons"
import { AnimatedLetters } from "../AnimatedLetters"
import "./index.scss"
import Loader from "react-loaders"

export function Skills(){
    const[letterClass, setLetterClass] = useState('text-animate')
   
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(idTimeOut);
      }, [])
    return(
        <>
        <div className="contianer skills-page">
        <div className="text-zone">
                <h1>
                   <AnimatedLetters letterClass={letterClass} strArray={['Skills', ' ', '&', ' ','Experience']}
                    idx={15}
                   /> 
                </h1>
                <p>
            Expert in front-end development including technologies like
            <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[' ','HTML5']}
                    idx={15}
                   /> </span>
            <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','CSS3']}
                    idx={15}
                   /> </span>
           <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','JAVASCRIPT']}
                    idx={15}
                   /> </span>
           <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','REACTJS']}
                    idx={15}
                   /> </span>
            <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','BOOTSTRAP']}
                    idx={15}
                   /> </span>  
                   <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','TAILWIND CSS']}
                    idx={15}
                   /> </span>
            <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','GIT']}
                    idx={15}
                   /> </span>   
                   <span className="tech-tag"><AnimatedLetters letterClass={letterClass} strArray={[',','SASS']}
                    idx={15}
                   /> </span>     
            </p>
            <p>   
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
            </p>
            <p>
                "Visit my"<a target="_blank" href="https://www.linkedin.com/in/rahul-kumar-280430b0/" rel="noreferrer"> LinkedIn </a>
                profile for more details. Also you can checkout my cv on this
                <a  href="/"> Link </a>
                , or feel free to give a peek on some of my blog
                <a  href="/mywork"> Posts</a>.
            </p>
        </div>
        <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faBootstrap} color="#3B71CA" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}