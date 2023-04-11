import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__col">
                       <p>EmoBook.<span>&copy;</span> All Rights Reserved</p>
                    <div className="footer__col">
                        <h3 className="footer__title">Contact Us</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms of Service</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact Us</a></li>
                            {/*Add links to the above # after creating them*/}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;