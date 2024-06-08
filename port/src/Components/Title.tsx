interface TitleProps {
    title:string;
}

function Title({title}:Readonly<TitleProps>) {
  return (
    <div className="container" id="title">
        <h3>{title}</h3>
        </div>
  )
}

export default Title