import React, { Component } from 'react'
import './components.css'

export default class QuizComponent extends Component {
    render() {
        return (
            <div className='main2'>

                <div className="box2">

                    <h2 className='question-head'>Question</h2>
                    <div className="qno">
                        <h4 className="qno-text">1 of 15</h4>
                    </div>
                    <div className="main-quiz">
                        <h4 className='question'>Which is the only mammal ...?</h4>

                        <div className="option-div">
                            <button className="options">h</button>
                            <button className="options">ff</button>
                            <button className="options">fff</button>
                            <button className="options">ffff</button>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className='page-options page-options1'>Previous</button>
                        <button className='page-options page-options2'>Next</button>
                        <button className='page-options page-options3'>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}
