import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <section className="bg-neutral text-neutral-content px-6 py-10">
        
        {/* Responsive Grid */}
        <div className="max-w-7xl mx-auto 
                        grid grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-5 
                        gap-8">

          {/* Logo & Description */}
          <div>
            <h6 className="text-xl font-semibold mb-3">
              CS-Ticket System
            </h6>
            <p className="text-sm leading-relaxed">
              CS-Ticket System helps manage customer
              support tickets efficiently. Track issues,
              assign priorities, and resolve tasks with
              a clean and responsive dashboard.
            </p>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-xl font-semibold mb-3">Company</h6>
            <div className="flex flex-col gap-2 text-sm">
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Our Mission</a>
              <a className="link link-hover">Contact Sales</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-xl font-semibold mb-3">Services</h6>
            <div className="flex flex-col gap-2 text-sm">
              <a className="link link-hover">Products & Services</a>
              <a className="link link-hover">Customer Stories</a>
              <a className="link link-hover">Download Apps</a>
            </div>
          </div>

          {/* Informations */}
          <div>
            <h6 className="text-xl font-semibold mb-3">Informations</h6>
            <div className="flex flex-col gap-2 text-sm">
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Join Us</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h6 className="text-xl font-semibold mb-3">Social Links</h6>
            <div className="flex flex-col gap-3 text-sm">

              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 hover:text-black">
                <FontAwesomeIcon icon={faXTwitter} />
                Twitter
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>

              <a href="mailto:info@example.com"
                 className="flex items-center gap-2 hover:text-yellow-400">
                <FontAwesomeIcon icon={faEnvelope} />
                support@cst.com
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-base-300 text-base-content py-4 text-center">
        <p className="text-sm">
          © CS-Ticket System {new Date().getFullYear()}.
          All rights reserved.
        </p>
      </footer>
    </>
  );
}