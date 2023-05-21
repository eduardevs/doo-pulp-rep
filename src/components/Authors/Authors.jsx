import "./Authors.scss";

export const Authors = ({ data, title, ...props }) => {
  // console.log(typeof authorsProps);

  const authors = data.map((author) => {
    return (
      <div className="row justify-content-center" key={author.id}>
        <div className="col-md-4 col-12 mt-4 d-flex justify-content-center">
          {author.img && (
            <img className="img-fluid img-profile" src={author.img} />
          )}
        </div>
        <div className="col-md-6 col-12 mt-4 content">
          <h3 className="name">{author.name}</h3>
          <p className="description">{author.description}</p>
        </div>
      </div>
    );
  });


  return (
    <div className="container-fluid p-5">
      <div className="text-center m-5">
        {" "}
        <h1>{title}</h1>
      </div>

      {authors}
    </div>
  );
};
