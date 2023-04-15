import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

function ContactPage() {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <title>Contact Us</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,400&display=swap" rel="stylesheet" />
        </head>
        <body>
            <Header />
            {/*<div className="navbar">
                <div className="logo">
                    <a href="../../../Main.html">Emo Book</a>
                </div>
                <ul className="list_el ">
                    <li>
                        <a href="../../../Main.html">Home</a>
                    </li>
                    <li>
                        <a href="About.html">About</a>
                    </li>
                    <li>
                        <a href="ContactPage.html">Contact Us</a>
                    </li>
                </ul>
                <a href="#" className="Button">
                    Login/Signup
                </a>
                <div className="toggleButton">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            <div className="dropdown_menu ">
                <li>
                    <a href="../../../Main.html">Home</a>
                </li>
                <li>
                    <a href="About.html">About</a>
                </li>
                <li>
                    <a href="Contact.html">Contacts</a>
                </li>
                <li>
                    <a href="#" className="Button">
                        Login/Signup
                    </a>
                </li>
            </div>*/}
        <div className="container">
            <h1>
                Connect With Us <br /> <br />
            </h1>
            {/* <p>We would love to respond to your queries and help you suceed.<br>Feel free to get in touch with us.</p> */}
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send your request</h3>
                    <form>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" placeholder="No" />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="text" placeholder="@gmail.com" />
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea rows="5" placeholder="Your Message"></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td>
                            <td>suwedhan.20210782@iit.ac.lk</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>+94 71 4020 777</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>57 Ramakrishna Rd, Colombo</td>
                        </tr>
                    </table>
                </div>


            </div>
        </div>


        </body>
</html>
    )}


export default ContactPage;