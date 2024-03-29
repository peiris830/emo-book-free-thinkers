import Header from "../components/Header";
import {BrowserRouter, Link} from "react-router-dom";

function LoginPage() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>EmoBook Login</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
                {/* CSS Section */}
                <style dangerouslySetInnerHTML={{__html: "\n        *{\n            padding: 0;\n            margin: 0;\n            box-sizing: border-box;\n\n        }\n\n        body{\n            background-color: black;\n        }\n\n        .row{\n            background-color: white;\n            border-radius: 10px;\n            box-shadow: 12px 12px 22px grey;\n        }\n\n        .img{\n            border-top-left-radius:10px ;\n            border-bottom-left-radius: 10px;\n        }\n\n        .btn1{\n            border: none;\n            outline: none;\n            height: 50px;\n            width: 100%;\n            background-color: black;\n            color: white;\n            border-radius: 3px;\n            font-weight: bold;\n\n        }\n\n        .btn1:hover{\n            background-color: white;\n            border: 1px solid;\n            color: black;\n        }\n\n        li{\n          list-style: none;\n\n        }\n\n        a{\n          text-decoration: none; \n          color:#fff;\n          font-size: 1rem;\n\n        }\n\n    \n\n        a:hover{\n          color: orange;\n        }\n\n        /* header */\n\n        header{\n          position: relative;\n          padding: 0 2rem;\n        }\n\n        .navbar{\n          width: 100%;\n          height: 60px;\n          max-width: 1200px;\n          margin: 0 auto;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n\n\n        .navbar .logo a{\n          font-size: 1.5rem;\n          font-weight: bold;\n        }\n\n        .navbar .list_el{\n          display: flex;\n          gap:5rem;\n\n        }\n\n        .navbar .toggleButton{\n          color: #fff;\n          font-size: 1.5rem;\n          cursor: pointer;\n          display: none;\n        }\n\n        .Button{\n          background-color: orange;\n          color: #fff;\n          padding: 0.5rem 1rem;\n          border: none;\n          outline: none;\n          border-radius: 20px;\n          font-size: 0.8rem;\n          font-weight: bold;\n          cursor: pointer;\n          transition: scale 0.2 ease ;\n        }\n\n        .Button:hover{\n          scale: 1.05;\n          color: #fff;\n\n        }\n\n        .Button:active{\n          scale: 0.95;\n        }\n\n        /* drop down*/\n\n        .dropdown_menu{\n\n          position: absolute;\n          right: 2rem;\n          top: 60px;\n          width: 300px;\n          height: 0;\n          background: rgba(255, 255, 255, 0.1);\n          backdrop-filter: blur(15px);\n          border-radius: 10px;\n          overflow: hidden;\n          transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n        }\n\n        .dropdown_menu li {\n          padding: 0.7rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n\n        .dropdown_menu.open{\n          height: 240px;\n        }\n\n        .dropdown_menu .Button{\n          width: 100%;\n          display: flex;\n          justify-content: center;\n        }\n\n        section#hero{\n          height: calc(100vh - 90px);\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          color: white;\n          \n         \n        }\n\n        #hero h1{\n          font-size: 3rem;\n          margin-bottom: 1rem;\n          font-weight: bold;\n        }\n\n      \n        @media(max-width:992px ){\n          .navbar .list_el,\n          .navbar .Button {\n            display: none;\n          }\n\n          .navbar .toggleButton{\n            display: block;\n          }\n          .dropdown_menu{\n            display: block;\n          }\n\n        @media(max-width:576px ){\n          .dropdown_menu{\n            left: 2rem ;\n            width: unset;\n\n          }\n        }\n\n      \n\n        }\n\n\n\n\n    \n    " }} />
                {/* Head Section */}
                <Header />
                <section className="Form my -4 mx -5">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="column-len5">
                                <img src="pic1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="column-len7 px-5 pt-5">
                                <h1 className="font-weight-bold py-3">Welcome to EmoBook!</h1>
                                <h4>Sign in to your account</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <input type="email" placeholder="Email-Address Or Username" className="form-control  my-3 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="column-len7">
                                            <input type="password" placeholder="******" className="form-control my-3 p-4" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        {/*<div className="column-len7">
                                            <a href="landing page.html"><button type="button" className="btn1 mt-3 mb-5">Login</button></a>
                                        </div>*/}
                                        <Link to="/User">
                                            <button type="button" className="btn1 mt-3 mb-5">Login</button>
                                        </Link>
                                    </div>
                                    <p>Don't have an account, register here! <Link to="/Register">Register Here </Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                &nbsp;
            </div>
        );
}

export default LoginPage;