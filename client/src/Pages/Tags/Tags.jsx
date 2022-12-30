import React from 'react'

import LeftSidebar from '../../components/LeftSideBar/LeftSideBar.jsx'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [
        {
            id: 1,
            tagName: "C#",
            tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
        }, {
            id: 2,
            tagName: "Python",
            tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
        }, {
            id: 3,
            tagName: "Java",
            tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
        }, {
            id: 4,
            tagName: "Html",
            tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
        }, {
            id: 5,
            tagName: "Css",
            tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
        }, {
            id: 6,
            tagName: "Javascript",
            tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
        }, {
            id: 7,
            tagName: "Reactjs",
            tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
        }, {
            id: 8,
            tagName: "Node.js",
            tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. "
        }, {
            id: 9,
            tagName: "Php",
            tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
        }, {
            id: 10,
            tagName: "Android",
            tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
        }]

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2">
                <h1 className='tags-h1'>Tags</h1>
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions.</p>
                <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags