import MenuItem from "./MenuItem";

const MenuList = ({ list }) => {
  return (
    <ul className="">
      {list.map((listItem, i) => (
        <MenuItem key={i} item={listItem} />
      ))}
    </ul>
  );
};

export default MenuList;
