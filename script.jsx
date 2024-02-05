const gridItems = [
  { id: 1, header: 'Header 1', paragraph: 'Paragraph 1', imgSrc: 'placeholder.jpg', imgAlt: 'Image 1' },
  // Add other items here...
];

const GridContainer = () => (
  <div className="grid-container">
    {gridItems.map(item => (
      <div key={item.id} className="grid-item">
        <img src={item.imgSrc} alt={item.imgAlt} />
        <h2>{item.header}</h2>
        <p>{item.paragraph}</p>
      </div>
    ))}
  </div>
);

