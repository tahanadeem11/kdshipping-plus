/**
 * KD Shipping Plus - Load shared header and footer into #site-header and #site-footer.
 * HTML is inlined so it works with file:// and without a server. Include after jQuery, before main.js.
 */
(function () {
    'use strict';

    var headerHTML = '<!-- navbar start -->\n' +
        '<div class="navbar-top style-one text-white bgs-cover" style="background-image: url(assets/images/background/header-top-bg.jpg);">\n' +
        '    <div class="container container-1570">\n' +
        '        <div class="row">\n' +
        '            <div class="col-lg-6">\n' +
        '                <div class="topbar-left text-lg-start text-center">\n' +
        '                    <span class="off">20% OFF</span>\n' +
        '                    <span>Free Shipping on all U.S. Orders $50+</span>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-lg-6">\n' +
        '                <ul class="topbar-right justify-content-center justify-content-lg-end">\n' +
        '                    <li><i class="fal fa-phone"></i> <b>Call :<a href="tel:8175764174"> (817) 576-4174</a></b></li>\n' +
        '                    <li><i class="fal fa-envelope"></i> <a href="mailto:staff@kdshippingplus.com">staff@kdshippingplus.com</a></li>\n' +
        '                    <li class="social-style-one">\n' +
        '                        <a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-dribbble" aria-hidden="true"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<nav class="navbar style-one navbar-area navbar-expand-lg py-20">\n' +
        '    <div class="container container-1570">\n' +
        '        <div class="responsive-mobile-menu">\n' +
        '            <button class="menu toggle-btn d-block d-lg-none" data-target="#Iitechie_main_menu" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '                <span class="icon-left"></span>\n' +
        '                <span class="icon-right"></span>\n' +
        '            </button>\n' +
        '        </div>\n' +
        '        <div class="logo">\n' +
        '            <a href="index.html"><img src="assets/images/logos/logo.png" alt="KD Shipping Plus"></a>\n' +
        '        </div>\n' +
        '        <div class="nav-right-part nav-right-part-mobile">\n' +
        '            <a class="search-bar-btn" href="#">\n' +
        '                <i class="far fa-search"></i>\n' +
        '            </a>\n' +
        '        </div>\n' +
        '        <div class="collapse navbar-collapse" id="Iitechie_main_menu">\n' +
        '            <ul class="navbar-nav menu-open text-lg-end">\n' +
        '                <li><a href="index.html">Home</a></li>\n' +
        '                <li><a href="about.html">About</a></li>\n' +
        '                <li class="menu-item-has-children">\n' +
        '                    <a href="services.html">Services</a>\n' +
        '                    <ul class="sub-menu">\n' +
        '                        <li class="menu-item-has-children">\n' +
        '                            <a href="#">Copy & Print</a>\n' +
        '                            <ul class="sub-menu">\n' +
        '                                <li><a href="business-card-solution-keller-tx.html">Business Cards</a></li>\n' +
        '                                <li><a href="copying-services-keller-tx.html">Copying Services</a></li>\n' +
        '                                <li><a href="document-finishing-services-keller-tx.html">Document Finishing</a></li>\n' +
        '                                <li><a href="flyers-brochures-printing-keller-tx.html">Flyers & Brochures</a></li>\n' +
        '                                <li><a href="graphic-design-keller-tx.html">Graphic Design</a></li>\n' +
        '                                <li><a href="poster-banner-printing-keller-tx.html">Poster & Banner Printing</a></li>\n' +
        '                                <li><a href="photo-printing-keller-tx.html">Photo Printing</a></li>\n' +
        '                                <li><a href="postcard-printing-keller-tx.html">Postcard Printing</a></li>\n' +
        '                                <li><a href="print-document-services-keller-tx.html">Print & Document Services</a></li>\n' +
        '                                <li><a href="fotozoomer-large-format-printing-keller-tx.html">FotoZoomer Large Format Printing</a></li>\n' +
        '                            </ul>\n' +
        '                        </li>\n' +
        '                        <li class="menu-item-has-children">\n' +
        '                            <a href="#">Home & Business</a>\n' +
        '                            <ul class="sub-menu">\n' +
        '                                <li><a href="computer-rental-keller-tx.html">Computer Rental</a></li>\n' +
        '                                <li><a href="digital-fingerprinting-keller-tx.html">Digital Fingerprinting</a></li>\n' +
        '                                <li><a href="document-scanning-keller-tx.html">Document Scanning</a></li>\n' +
        '                                <li><a href="document-shredding-keller-tx.html">Document Shredding</a></li>\n' +
        '                                <li><a href="fax-services-keller-tx.html">Fax Services</a></li>\n' +
        '                                <li><a href="gift-wrapping-keller-tx.html">Gift Wrapping</a></li>\n' +
        '                                <li><a href="greeting-cards-keller-tx.html">Greeting Cards</a></li>\n' +
        '                                <li><a href="key-duplication-keller-tx.html">Key Duplication</a></li>\n' +
        '                                <li><a href="notary-public-keller-tx.html">Notary Public</a></li>\n' +
        '                                <li><a href="office-supplies-keller-tx.html">Office Supplies</a></li>\n' +
        '                                <li><a href="passport-photos-keller-tx.html">Passport Photos</a></li>\n' +
        '                                <li><a href="mailbox-rental-keller-tx.html">Mailbox Rental</a></li>\n' +
        '                                <li><a href="rubber-stamps-keller-tx.html">Rubber Stamps</a></li>\n' +
        '                                <li><a href="digital-fingerprinting-keller-tx.html">Fingerprinting</a></li>\n' +
        '                                <li><a href="passport-expediting-keller-tx.html">Passport Expediting</a></li>\n' +
        '                            </ul>\n' +
        '                        </li>\n' +
        '                        <li class="menu-item-has-children">\n' +
        '                            <a href="#">Pack & Ship</a>\n' +
        '                            <ul class="sub-menu">\n' +
        '                                <li><a href="packing-keller-tx.html">Packing</a></li>\n' +
        '                                <li><a href="custom-box-making-keller-tx.html">Custom Box Making</a></li>\n' +
        '                                <li><a href="decorative-mailers-keller-tx.html">Decorative Mailers</a></li>\n' +
        '                                <li><a href="professional-packing-keller-tx.html">Professional Packing</a></li>\n' +
        '                                <li><a href="shipping-keller-tx.html">Shipping</a></li>\n' +
        '                                <li><a href="us-postal-service-keller-tx.html">US Postal Service</a></li>\n' +
        '                                <li><a href="international-shipping-keller-tx.html">International Shipping</a></li>\n' +
        '                                <li><a href="fedex-shipping-keller-tx.html">FedEx Shipping</a></li>\n' +
        '                            </ul>\n' +
        '                        </li>\n' +
        '                        <li class="menu-item-has-children">\n' +
        '                            <a href="#">Digital Mailbox Rental</a>\n' +
        '                            <ul class="sub-menu">\n' +
        '                                <li><a href="anytime-mailbox-keller-tx.html">Anytime Mailbox</a></li>\n' +
        '                                <li><a href="ipostal1-keller-tx.html">iPostal1</a></li>\n' +
        '                            </ul>\n' +
        '                        </li>\n' +
        '                    </ul>\n' +
        '                </li>\n' +
        '                <li><a href="faqs.html">FAQs</a></li>\n' +
        '                <li><a href="contact.html">Contact</a></li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '        <div class="nav-right-part nav-right-part-desktop">\n' +
        '            <button class="search-bar-btn">\n' +
        '                <i class="far fa-search"></i>\n' +
        '            </button>\n' +
        '            <a href="contact.html" class="theme-btn style-two">Get Started <i class="far fa-long-arrow-right"></i></a>\n' +
        '            <div class="menu-sidebar">\n' +
        '                <button>\n' +
        '                    <i class="far fa-ellipsis-h"></i>\n' +
        '                    <i class="far fa-ellipsis-h"></i>\n' +
        '                    <i class="far fa-ellipsis-h"></i>\n' +
        '                </button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</nav>\n' +
        '<!-- navbar end -->';

    var footerHTML = '<!-- footer area start -->\n' +
        '<footer class="footer-area pt-80">\n' +
        '    <div class="container">\n' +
        '        <div class="row justify-content-between">\n' +
        '            <div class="col-xl-4 col-lg-5 col-md-6">\n' +
        '                <div class="widget widget_about wow fadeInUp delay-0-2s">\n' +
        '                    <div class="footer-logo mb-25">\n' +
        '                        <a href="index.html"><img src="assets/images/logos/logo.png" alt="KD Shipping Plus"></a>\n' +
        '                    </div>\n' +
        '                    <p>KD Shipping Plus – Shipping, Mailing &amp; More in Keller, TX. Your one-stop for packaging, mailbox rental, printing, notary, and more.</p>\n' +
        '                    <div class="social-style-two mt-15">\n' +
        '                        <a href="#"><i class="fab fa-facebook-f"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-twitter"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-dribbble"></i></a>\n' +
        '                        <a href="#"><i class="fab fa-instagram"></i></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xl-4 col-md-6">\n' +
        '                <div class="widget widget_nav_menu wow fadeInUp delay-0-4s">\n' +
        '                    <h4 class="widget-title">Our Services</h4>\n' +
        '                    <ul>\n' +
        '                        <li><a href="shipping-keller-tx.html">Shipping &amp; Mailing</a></li>\n' +
        '                        <li><a href="mailbox-rental-keller-tx.html">Mailbox Rental</a></li>\n' +
        '                        <li><a href="copying-services-keller-tx.html">Copying Services</a></li>\n' +
        '                        <li><a href="document-finishing-services-keller-tx.html">Document Finishing</a></li>\n' +
        '                        <li><a href="notary-public-keller-tx.html">Notary Public</a></li>\n' +
        '                        <li><a href="contact.html">Contact Us</a></li>\n' +
        '                        <li><a href="faqs.html">FAQs</a></li>\n' +
        '                    </ul>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xl-3 col-md-6">\n' +
        '                <div class="widget widget_contact_info wow fadeInUp delay-0-6s">\n' +
        '                    <h4 class="widget-title">Support</h4>\n' +
        '                    <p>Need support or want to work together?</p>\n' +
        '                    <ul>\n' +
        '                        <li><i class="far fa-map-marker-alt"></i> <a href="https://maps.google.com/?q=2041+Rufe+Snow+Dr+101+Keller+TX+76248" target="_blank" rel="noopener">2041 Rufe Snow Dr #101, Keller, TX 76248, United States</a></li>\n' +
        '                        <li><i class="far fa-envelope"></i> <a href="mailto:staff@kdshippingplus.com">staff@kdshippingplus.com</a></li>\n' +
        '                        <li><i class="far fa-phone"></i> <a href="tel:8175764174">(817) 576-4174</a></li>\n' +
        '                    </ul>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="footer-bottom mt-15 pt-25 pb-10">\n' +
        '            <div class="row align-items-center">\n' +
        '                <div class="col-lg-6">\n' +
        '                    <div class="copyright-text text-center text-lg-start">\n' +
        '                        <p>&copy; Copyright 2025, All Rights Reserved Powered by <a href="http://nextlevelrankers.com/" target="_blank" rel="noopener">Next Level Rankers</a></p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="col-lg-6">\n' +
        '                    <div class="payment-method-image mb-15 text-center text-lg-end">\n' +
        '                        <a href="#"><img src="assets/images/footer/payment-method.png" alt="Payment Method"></a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="back-to-top">\n' +
        '                <span class="back-top"><i class="fa fa-angle-up"></i></span>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</footer>\n' +
        '<!-- footer area end -->';

    function inject() {
        var headerEl = document.getElementById('site-header');
        var footerEl = document.getElementById('site-footer');
        if (headerEl) headerEl.innerHTML = headerHTML;
        if (footerEl) footerEl.innerHTML = footerHTML;
        if (window.jQuery) {
            window.jQuery(document).trigger('site-components-loaded');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
