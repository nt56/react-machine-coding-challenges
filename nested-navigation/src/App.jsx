import MenuList from "./MenuList";
import menus from "./data";

const App = () => {
  return (
    <div className="h-[100vh] w-[350px] bg-blue-600">
      <MenuList list={menus} />
    </div>
  );
};

export default App;
