import "./Authors.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Authors = ({ data, title, ...props }) => {
  // console.log(typeof authorsProps);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const authors = data.map((author) => {
    return (
      <div className="col-lg-6 col-12 m-auto mt-4 d-flex justify-content-center m-auto mb-5">
        <div key={author.id}>
          <div className="">
            {author.name && (
              <h3 data-aos="fade-right" className="name title text-center fs-2 mb-4">
                {author.name}
              </h3>
            )}
            {author.img && (
              <img data-aos="fade-right" className="img-fluid img-profile" src={author.img} />
            )}
          </div>
        </div>
        {author.description && (
          <div data-aos="fade-right" className="col-lg-6 col-12 mt-4 content">
            <p className="description">{author.description}</p>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="container mt-7 mb-5">
      <div className="text-center">
        <h1 className="title fs-1">{title}</h1>
      </div>
      <div className="row mb-5 pb-5 mt-6 p-5 p-lg-1">{authors}</div>
    </div>
  );
};
