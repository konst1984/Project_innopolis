import './Footer.css'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container footer__cony">
                    <div className="footer__wrapper flex">
                        <div className="footer__logo">
                            <Link to={'/'} className="link link_logo footer__link-logo"><img
                                src="/images/logotypeFooterDesktop.svg" alt="Логотип 'Очки'"/></Link></div>
                        <div className="footer__social flex">
                            <a className="footer__link-social link flex" href="https://twitter.com" target="_blank"
                               rel="noopener noreferrer"><img src="/images/twitter.svg" alt="twitter"/></a>
                            <a className="footer__link-social flex" href="https://facebook.com" target="_blank"
                               rel="noopener noreferrer"><img src="/images/facebook.svg" alt="facebook"/></a>
                            <a className="footer__link-social flex" href="https://youtube.com" target="_blank"
                               rel="noopener noreferrer"><img src="/images/youtube.svg" alt="youtube"/></a>
                        </div>
                        <div className="footer__developer flex">
                            <span className="footer__span">Разработано</span><a className="footer__link-develop link"
                                                                                href="https://htmlacademy.ru"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"><img
                            src="images/HtmlAcademy.svg" alt="HTML Academy"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;