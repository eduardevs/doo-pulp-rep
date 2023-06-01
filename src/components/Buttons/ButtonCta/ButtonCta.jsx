import "./ButtonCta.scss";

export const ButtonCta = ({ text, mobile = false, href, ...props }) => (
  <div className="block-cta w-auto">
    <a
      className={`d-flex btn btn-primary btn-cta ${mobile ? "cta-mobile" : ""}`}
      href={href}
      target="_blank"
    >
      {text && text}
    </a>
  </div>
);
