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
      <div className="row justify-content-center mb-5 mt-5" key={author.id}>
        <div className="col-lg-6 col-12 mt-4 d-flex justify-content-center ">
          {author.img && (
            <img className="img-fluid img-profile" src={author.img} />
          )}
        </div>
        <div data-aos="fade-right" className="col-lg-6 col-12 mt-4 content">
          <h3 className="name title fs-2">{author.name}</h3>
          <p className="description">{author.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid p-5">
      <div className="container">
        <div className="text-center m-5">
          <h1 className="title fs-1">{title}</h1>
        </div>
        {authors}
      </div>
    </div>
  );
};
