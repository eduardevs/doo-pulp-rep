import "./ButtonCta.scss";

export const ButtonCta = ({ text, mobile = false, href, ...props }) => (
  <div className="block-cta w-auto mt-5">
    <a
      className={`d-flex btn btn-primary btn-cta ${mobile ? "cta-mobile" : ""}`}
      href={href}
    >
      {text && text}
    </a>
  </div>
);
