

const Categories = ({ categories, filtereItems }) => {
  return (
    <div className="btn-container">
        {categories.map((category) => {
            return (
                <button
                  className="btn"
                  key={category}
                  onClick={() => filtereItems(category)}
                >
                    {category}
                </button>
            );
        })}
    </div>
  );
};

export default Categories;