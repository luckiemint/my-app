import Header from "./Header";

const Blogs = () => {
    return (
        <>
            <Header />
            <div className='mainContainer'>
                <h1 style={{ color: 'red' }}>React Lifecycle of Components</h1>

                <p>Lifecycle of a component can be defined as the <i>series of methods that are <b>invoked in different stages</b> of the component’s existence.</i></p>
                <p>
                    A React Component can go through four stages of its life as follows.
                    <div className="imageContainer">
                        <div>
                            <ol>
                                <b>
                                    <li>Initialization</li>
                                    <li>Mounting</li>
                                    <li>Updating</li>
                                    <li>Unmounting</li>
                                </b>
                            </ol>
                        </div>
                        <div>
                            <img src="https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png" height={300} />
                        </div>
                    </div>
                </p>

                <div className="box">
                    <p>
                        <h3>Initialization</h3>
                        In this phase, the developer has to define the props and initial state of the component, this is generally done in the constructor of the component.
                    </p><br />
                    <p>
                        <h3>Mounting</h3>
                        Mounting means putting elements into the DOM:
                        Mounting is the phase of the component lifecycle when the initialization of the component is completed.
                        The component is mounted on the DOM and rendered for the first time on the webpage.
                    </p> <br />
                    <p>
                        <h3>Updation</h3>
                        The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props
                    </p> <br />
                    <p>
                        <h3>Unmounting</h3>
                        The next phase in the lifecycle is when a component is removed from the DOM(or unmounting)
                    </p><br /></div>



            </div>

        </>
    )
}

export default Blogs