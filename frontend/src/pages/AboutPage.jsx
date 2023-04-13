import React from 'react';

function AboutPage() {
        return (
            <div>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
                <link rel="stylesheet" href="aboutStyle.css"/>
                <style
                    dangerouslySetInnerHTML={{__html: "\n        body {\n            background-color: black;\n            color: #FFFFFF;\n            font-family: Arial, sans-serif;\n            text-align: center;\n      }\n    "}}/>
                <header>

                </header>
                <div className="description">
                    <h1>About Free Thinkers</h1>
                    <br/>
                    <br/>
                    <p>Free thinkers is a dynamic and innovative team of tech enthusiasts who are passionate about
                        building a cutting-edge web application that suggests books based on user emotions. With a deep
                        understanding of human psychology and behaviour, the Free thinkers team has harnessed the power
                        of computer vision and artificial intelligence to create a unique and personalised reading
                        experience for users.</p>
                    <br/>
                    <p>By utilising the device camera to capture and analyse facial expressions, the Free thinkers team
                        has created an intelligent system that can identify the emotions of users in real-time. Based on
                        these emotions, the web application then suggests a list of books that are most likely to
                        resonate with the user and help them explore and process their emotions.</p>
                    <br/>
                    <p>Whether you're feeling happy, sad, anxious, or anything in between, the Free thinkers web
                        application is designed to help you find the perfect book to match your mood. With a
                        user-friendly interface and a vast library of books across various genres and languages, the
                        application is an ideal choice for anyone looking to discover new books and expand their reading
                        horizons.</p>
                    <br/>
                    <p>Overall, Free thinkers is a team of creative thinkers and problem-solvers who are dedicated to
                        leveraging technology to enhance the human experience. With their innovative web application,
                        they are revolutionising the way people discover and engage with books and emotions, and
                        empowering users to make meaningful connections with literature.</p>
                    <br/>
                </div>
            </div>
        );
}

export default AboutPage;