import '../Styles/TechSelector.css'
import Jsimg from '../assets/SelectionJs.png'
import Reactimg from '../assets/SelectionReact.png'
export const TechSelector=()=>{
    return(
        <>
        <div>
            <div className='techSelectorHeadings'>
                <h3>Welcome to DevPath – JS & Reac</h3>
                <h2>Choose Your Learning Path</h2>
            </div>
            <div className='techSelectorSubHeading'>
                <p>Select JavaScript or React to begin your journey towards <br/> becoming a proficient web developer.</p>
            </div>
            <div className='techSelectorSectionContainer'>
                <div className='techSelectorJsSection'>
                    <div className='jsLogo'>
                        <img src={Jsimg} alt='JsLogo' />
                    </div>
                    <div>
                        <h2>JavaScript</h2>
                    </div>
                    <div className='techSelectorJsSectionDis'>
                        <p>Master the fundamentals of JavaScript, from variables and functions to asynchronous programming and DOM manipulation for dynamic web experiences.</p>
                    </div>
                    <div>
                        <button>Start JavaScript</button>
                    </div>
                </div>
                <div className='techSelectorReactSection'>
                    <div className='ReactLogo'>
                        <img src={Reactimg} alt='ReactImg' />
                    </div>
                    <div>
                        <h2>React</h2>
                    </div>
                    <div className='techSelectorReactSectionDis'>
                        <p>Build powerful and interactive user interfaces with React, including hooks, state management, and component architecture for modern web applications.</p>
                    </div>
                    <div>
                        <button>Start React</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}