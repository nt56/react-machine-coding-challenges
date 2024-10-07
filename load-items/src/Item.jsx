const Item = ({ data }) => {
  return (
    <div className="w-[300px] flex flex-col gap-5 shadow-xl p-4 border border-black">
      <img
        alt="product-img"
        src={data.thumbnail}
        className="w-[200px] rounded-lg"
      />
      <h3 className="font-bold">{data.title}</h3>
      <p className="w-fit">{data.description}</p>
    </div>
  );
};

export default Item;
