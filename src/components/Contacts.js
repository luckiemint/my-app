import Header from "./Header"
import Hooksr from "./Hooksr"


export const Contacts = () => {
    return (
        <div className="page">
            <Header />
            <div className='mainContainer'>
                <div>
                    <h1>Hooks</h1>
                    <ul>
                        <li>
                            Can only use hooks in function component.
                        </li>
                        <li>
                            Do not call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns.
                        </li>
                        <li>
                            React Hooks must be callled in the exact same order in every component render.
                        </li>
                    </ul>
                </div>
                <div className="usBox">
                    <div>
                        <h2>UseState</h2>
                        <ul>
                            <li>
                                Snippet: <b>const [first, setfirst] = useState(second)</b>
                                <ul>
                                    <li>
                                        first = current state
                                    </li>
                                    <li>
                                        setfirst = updated current state
                                    </li>
                                </ul>
                            </li>
                            <li>
                                For managing state in our component.
                            </li>
                            <li>
                                To keep track of data that can change over time and affects the rendering of a component.
                            </li>
                            <li>
                                The adv is that whenever the state will be updated, react will re-render the component on its own without reloading the page.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Hooksr />
                    </div>
                </div>
            </div>

        </div>
    )
}
