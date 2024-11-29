// Card.jsx
export const Card = ({ style, image, text }) => (
  <div className="flex w-full p-5 rounded-xl items-center justify-center" style={style}>
    <div className="flex flex-row w-full">
      <div className="px-8">
        <img src={image}  />
      </div>
      <p className="text-[22px] font-Poppins font-bold text-white text-left w-full">{text}</p>
    </div>
  </div>
);
