import React from 'react'
import './styles/Footer.css'
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">The name you choose for your laundry cleaning business is one of the most important decisions you will make as a new entrepreneur. It’s because your new company brand has the power to communicate your unique and attractive benefits to customers. 

Powerful names can greatly impact your business’s perception in new clients’ minds.  I will help you come up with a catchy laundry business name to attract paying customers to build your business.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/" className='mb-2'>Normal Wash</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/" className='mb-2'>Pigment Wash</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/" className='mb-2'>Bleach Wash</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/" className='mb-2'>Stone Wash</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/" className='mb-2'>Acid Wash</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/" className='mb-16'>Sand Blasting</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/">About Us</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/">Contact Us</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/">Contribute</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/">Privacy Policy</a></li>
                <li><a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/">Sitemap</a></li>
              </ul>
            </div>
          </div>


        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 mt-16">
              <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                <a href="https://www.linkedin.com/in/ravikumar-sura-28a4ba238/"> Sura Ravikumar</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/NetTantra"><i className="fa fa-facebook"></i></a></li>
                <li><a className="twitter" href="https://twitter.com/NetTantra"><i className="fa fa-twitter"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/company/nettantra/"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer