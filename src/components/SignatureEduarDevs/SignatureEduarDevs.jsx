import "./SignatureEduarDevs.scss";

export const SignatureEduarDevs = () => {
  const brandName = "EduarDevs";
  return (
    <div className="text-center p-2">
      Site web developpé par{" "}
      <a
        href="https://eduardevs.website/"
        target="_blank"
        rel="noopener noreferrer"
        className="signature-link"
      >
        {brandName}
      </a>
    </div>
  );
};
