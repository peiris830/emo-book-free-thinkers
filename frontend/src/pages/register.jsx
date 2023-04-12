var MyClass = React.createClass({
    render: function() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>EmoBook Register</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
                {/* CSS Section */}
                <style dangerouslySetInnerHTML={{__html: "\n        *{\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n\n        }\n        body{\n            background: rgb(217, 217, 217);\n        }\n\n        .row{\n            background-color: white;\n            border-radius: 10px;\n            box-shadow: 12px 12px 22px grey;\n        }\n\n        .img{\n            border-top-left-radius:10px ;\n            border-bottom-left-radius: 10px;\n        }\n\n        .btn1{\n            border: none;\n            outline: none;\n            height: 50px;\n            width: 100%;\n            background-color: black;\n            color: white;\n            border-radius: 3px;\n            font-weight: bold;\n\n        }\n\n        .btn1:hover{\n            background-color: white;\n            border: 1px solid;\n            color: black;\n        }\n\n\n        \n        body{\n          height: 100vh;\n          background-color: #000;\n           background-size: cover;\n          background-position: center;\n      \n        }\n\n        li{\n          list-style: none;\n\n        }\n\n        a{\n          text-decoration: none; \n          color:#fff;\n          font-size: 1rem;\n\n        }\n\n    \n\n        a:hover{\n          color: orange;\n        }\n\n        /* header */\n\n        header{\n          position: relative;\n          padding: 0 2rem;\n        }\n\n        .navbar{\n          width: 100%;\n          height: 60px;\n          max-width: 1200px;\n          margin: 0 auto;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n\n\n        .navbar .logo a{\n          font-size: 1.5rem;\n          font-weight: bold;\n        }\n\n        .navbar .list_el{\n          display: flex;\n          gap:5rem;\n\n        }\n\n        .navbar .toggleButton{\n          color: #fff;\n          font-size: 1.5rem;\n          cursor: pointer;\n          display: none;\n        }\n\n        .Button{\n          background-color: orange;\n          color: #fff;\n          padding: 0.5rem 1rem;\n          border: none;\n          outline: none;\n          border-radius: 20px;\n          font-size: 0.8rem;\n          font-weight: bold;\n          cursor: pointer;\n          transition: scale 0.2 ease ;\n        }\n\n        .Button:hover{\n          scale: 1.05;\n          color: #fff;\n\n        }\n\n        .Button:active{\n          scale: 0.95;\n        }\n\n        /* drop down*/\n\n        .dropdown_menu{\n\n          position: absolute;\n          right: 2rem;\n          top: 60px;\n          width: 300px;\n          height: 0;\n          background: rgba(255, 255, 255, 0.1);\n          backdrop-filter: blur(15px);\n          border-radius: 10px;\n          overflow: hidden;\n          transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n        }\n\n        .dropdown_menu li {\n          padding: 0.7rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n\n        .dropdown_menu.open{\n          height: 240px;\n        }\n\n        .dropdown_menu .Button{\n          width: 100%;\n          display: flex;\n          justify-content: center;\n        }\n\n        section#hero{\n          height: calc(100vh - 90px);\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          color: white;\n          \n         \n        }\n\n        #hero h1{\n          font-size: 3rem;\n          margin-bottom: 1rem;\n          font-weight: bold;\n        }\n\n      \n        @media(max-width:992px ){\n          .navbar .list_el,\n          .navbar .Button {\n            display: none;\n          }\n\n          .navbar .toggleButton{\n            display: block;\n          }\n          .dropdown_menu{\n            display: block;\n          }\n\n        @media(max-width:576px ){\n          .dropdown_menu{\n            left: 2rem ;\n            width: unset;\n\n          }\n        }\n\n      \n\n        }\n\n\n\n    \n    " }} />
                {/* Head Section */}
                <header>
                    <div className="navbar">
                        <div className="logo"><a href="Main.html">Emo Book</a></div>
                        <ul className="list_el ">
                            <li><a href="Main.html">Home</a></li>
                            <li><a href="About.html">About</a></li>
                            <li><a href="ContactPage.html">Contact Us</a></li>
                        </ul>
                        <a href="register.html" className="Button">Login/Signup</a>
                        <div className="toggleButton">
                            <i className="fa-solid fa-bars" />
                        </div>
                    </div>
                    <div className="dropdown_menu ">
                        <li><a href="Main.html">Home</a></li>
                        <li><a href="About.html">About</a></li>
                        <li><a href="ContactPage.html">Contact Us</a></li>
                        <li><a href="#" className="Button">Login/Signup</a></li>
                    </div>
                </header>
                <section className="Form my -4 mx -5">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="column-len5">
                                <img src="pic1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="column-len7 px-5 pt-5">
                                <h1 className="font-weight-bold py-3">Register on EmoBook!</h1>
                                <h4>Create your account</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <input type="text" placeholder="Full Name" className="form-control  my-3 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <input type="number" placeholder="Phone" className="form-control my-3 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <input type="email" placeholder="Email-Address" className="form-control my-3 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <input type="password" placeholder="Create a Password" className="form-control my-3 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <button type="submit" className="btn1 mt-3 mb-5">Create Account</button>
                                        </div>
                                    </div>
                                    <p>Already have an account? <a href="Emobook.html">Sign in here</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});