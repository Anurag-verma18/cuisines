import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title ";
import items from "./data";

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <section className="menu">
      <Title text="our menu" />
      <Categories />
      <Menu items={menuItems} />
    </section>
  )
}

export default App