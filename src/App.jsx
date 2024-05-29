import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title ";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  
  const filterItems = (category) => {
    if(category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <section className="menu">
      <Title text="our menu" />
      <Categories categories={allCategories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  )
}

export default App;