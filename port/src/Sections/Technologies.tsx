import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import types from "../assets/type.png";
import bootstrap from "../assets/boot.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import python from "../assets/python.png";
import reactnative from "../assets/reactnative.png";
import Title from "../Components/Title";
import TechnologieItem from "../Components/TechnologieItem";

function Technologies() {
    const TechnologiesData = [
        { img: html, percentage: 90, name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { img: css, percentage: 85, name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { img: js, percentage: 80, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { img: types, percentage: 70, name: "TypeScript", url: "https://www.typescriptlang.org/" },
        { img: bootstrap, percentage: 75, name: "Bootstrap", url: "https://getbootstrap.com/" },
        { img: sass, percentage: 65, name: "Sass", url: "https://sass-lang.com/" },
        { img: react, percentage: 85, name: "ReactJs", url: "https://reactjs.org/" },
        { img: node, percentage: 60, name: "NodeJs", url: "https://nodejs.org/" },
        { img: express, percentage: 55, name: "ExpressJs", url: "https://expressjs.com/" },
        { img: mongo, percentage: 50, name: "MongoDB", url: "https://www.mongodb.com/" },
        { img: reactnative, percentage: 50, name: "ReactNative", url: "https://reactnative.dev/" },
        { img: python, percentage: 50, name: "Python", url: "https://www.python.org/" },
    ];

    return (
        <div className="container mt-5">
            <div className="container mt-5">
                <Title title={"TECHNOLOGIES"} />
            </div>
            <div className="row mt-5 d-flex justify-content-center">
                {TechnologiesData.map((technology, index) => (
                    <div className="col-6 col-sm-6 col-md-2 mt-5" key={index}>
                        <TechnologieItem 
                            img={technology.img} 
                            percentage={technology.percentage} 
                            name={technology.name} 
                            url={technology.url} // Pass the URL here
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;
