import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      
      <section className=" footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <div>
          <h6 className=" text-xl">CS- Ticket System</h6>
          <p className="text-left">
            Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h6 className="text-xl text-left">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </div>

        <div>
          <h6 className="text-xl">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </div>

        <div>
          <h6 className="text-xl">Informations</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </div>

        <div>
          <h6 className="text-xl">Social links</h6>

          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-black">
            <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            Twitter
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            Facebook
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            Instagram
          </a>

          <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-yellow-400">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            support@cst.com
          </a>
        </div>
      </section>

      
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>© CS-Ticket System {new Date().getFullYear()}. All rights reserved</p>
        </aside>
      </footer>
    </>
  );
}
