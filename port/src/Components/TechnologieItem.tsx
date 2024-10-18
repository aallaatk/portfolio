interface TechnologieItemProps {
  img: string;
  percentage: number;
  name: string;
  url:string  // Add name prop for technology name
}

function TechnologieItem({ img, percentage, name,url }: Readonly<TechnologieItemProps>) {
  const percentageClass = `percentage-${percentage}`;

  return (
    <div className="technology-item-container">
      <div className={`technology-border ${percentageClass}`}>
        <img src={img} alt={name} className="technology-image" />
             <span className="technology-name">
          <a 
            href={url} 
            style={{ textDecoration: 'none', color: 'white' }} 
            target="_blank"  // Opens link in a new tab
            rel="noopener noreferrer"  // Security measure for external links
          >
            {name}
          </a>
        </span>{/* Tooltip for name */}
      </div>
    </div>
  );
}

export default TechnologieItem;
