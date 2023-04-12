var MyClass = React.createClass({
    render: function() {
        return (
            <div>
                {/* /* new code * /  */}
                <style dangerouslySetInnerHTML={{__html: "\n\n\n        *{\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n          font-family: 'Open Sans', sans-serif;\n        }\n\n        @keyframes slideInLeft{\n        from{\n            transform: translateX(-300px);\n          }\n\n          to{\n            transform: translateX(0);\n          }\n        }\n\n\n        body{\n          height: 100vh;\n          background-color: #000;\n           background-size: cover;\n          background-position: center;\n      \n        }\n\n        li{\n          list-style: none;\n\n        }\n\n        a{\n          text-decoration: none; \n          color:#fff;\n          font-size: 1rem;\n\n        }\n\n    \n\n        a:hover{\n          color: orange;\n        }\n\n        /* header */\n\n        header{\n          position: relative;\n          padding: 0 2rem;\n        }\n\n        .navbar{\n          width: 100%;\n          height: 60px;\n          max-width: 1200px;\n          margin: 0 auto;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n\n\n        .navbar .logo a{\n          font-size: 1.5rem;\n          font-weight: bold;\n        }\n\n        .navbar .list_el{\n          display: flex;\n          gap:5rem;\n\n        }\n\n        .navbar .toggleButton{\n          color: #fff;\n          font-size: 1.5rem;\n          cursor: pointer;\n          display: none;\n        }\n\n        .Button{\n          background-color: orange;\n          color: #fff;\n          padding: 0.5rem 1rem;\n          border: none;\n          outline: none;\n          border-radius: 20px;\n          font-size: 0.8rem;\n          font-weight: bold;\n          cursor: pointer;\n          transition: scale 0.2 ease ;\n        }\n\n        .Button:hover{\n          scale: 1.05;\n          color: #fff;\n\n        }\n\n        .Button:active{\n          scale: 0.95;\n        }\n\n        /* drop down*/\n\n        .dropdown_menu{\n\n          position: absolute;\n          right: 2rem;\n          top: 60px;\n          width: 300px;\n          height: 0;\n          background: rgba(255, 255, 255, 0.1);\n          backdrop-filter: blur(15px);\n          border-radius: 10px;\n          overflow: hidden;\n          transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n\n        }\n\n        .dropdown_menu li {\n          padding: 0.7rem;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n\n        }\n\n        .dropdown_menu.open{\n          height: 240px;\n        }\n\n        .dropdown_menu .Button{\n          width: 100%;\n          display: flex;\n          justify-content: center;\n        }\n\n        section#hero{\n          height: calc(100vh - 90px);\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          color: white;\n          \n         \n        }\n\n        #hero h1{\n          font-size: 3rem;\n          margin-bottom: 1rem;\n          font-weight: bold;\n        }\n\n      \n        @media(max-width:992px ){\n          .navbar .list_el,\n          .navbar .Button {\n            display: none;\n          }\n\n          .navbar .toggleButton{\n            display: block;\n          }\n          .dropdown_menu{\n            display: block;\n          }\n\n        @media(max-width:576px ){\n          .dropdown_menu{\n            left: 2rem ;\n            width: unset;\n\n          }\n        }\n\n      \n\n        }\n\n\n    \n      \n    " }} />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="style.css" />
                <title>Emo-Book </title>
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
                    {/* <div class="dropdown_menu">
          <li><a href="Main.html">Home</a></li>
          <li><a href="About.html">About</a></li>
          <li><a href="Contact.html">Contacts</a></li>
          <li><a href="#" class="Button">Login/Signup</a></li>
        </div> */}
                    <div className="dropdown_menu ">
                        <li><a href="Main.html">Home</a></li>
                        <li><a href="About.html">About</a></li>
                        <li><a href="ContactPage.html">Contact Us</a></li>
                        <li><a href="register.html" className="Button">Login/Signup</a></li>
                    </div>
                </header>
                <main>
                    <section id="hero">
                        <h1>Welcome to Emo Book </h1>
                        <p style={{width: '600px', padding: '10px', border: '1px solid white', textAlign: 'justify'}}> Emo Book is an innovative project that aims to provide readers with a personalized emotional reading experience. It is an emotional based book recommendation application that suggests books based on the reader's mood and emotions.
                            Emo Book utilizes advanced machine learning algorithms to analyze the user's emotional state, taking into account factors such as stress, happiness, sadness, and excitement. <br /><br /> Based on the user's input, the application will recommend books that align with
                            their current emotional state,  helping them to find books that they will enjoy and connect with on a deeper level.
                            Emo Book provides a user-friendly interface that is easy to navigate, allowing users to easily browse recommended books and view details such as author information, summaries, and reviews. <br /><br /> Additionally, users can create their reading lists and save their favorite books for later.
                            Overall, Emo Book is an exciting project that promises to revolutionize the way readers discover new books. With its advanced emotional-based recommendation system,  it will help readers find books that resonate with them on a deeper emotional level, ultimately leading to a more fulfilling reading experience.</p>
                    </section>
                </main>
                <div className="gleam">
                </div>
            </div>
        );
    }
});