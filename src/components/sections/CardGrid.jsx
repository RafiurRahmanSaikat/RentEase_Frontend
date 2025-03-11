const CardGrid = ({ items, columns = 4, renderItem, className = "" }) => {
    const gridCols = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    }

    return (
      <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
        {items.map((item, index) => renderItem(item, index))}
      </div>
    )
  }

  export default CardGrid

