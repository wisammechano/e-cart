import { useState } from "react";

export default function QuantitySpinner({ onAddRemove, quantity }) {
  const style = `
      input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `;

  const onBlur = (e) => {
    let val = e.target.value;
    if (val === "") val = 0;
    const difference = val - quantity;
    onAddRemove(difference);
  };

  const [value, setValue] = useState(quantity);
  const onAdd = () => {
    setValue((v) => v + 1);
    onAddRemove(1);
  };

  const onRemove = () => {
    setValue((v) => v - 1);
    onAddRemove(-1);
  };

  return (
    <>
      <div className="flex h-8 rounded-lg bg-transparent">
        <style>{style}</style>
        <button
          data-action="remove"
          className="flex-shrink-0 bg-red-300 text-red-600 hover:text-red-500 hover:bg-red-400 h-full w-8 rounded-l cursor-pointer outline-none"
          onClick={onRemove}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="w-12 outline-none focus:outline-none text-center bg-red-100 font-bold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={onBlur}
        />
        <button
          data-action="add"
          className="flex-shrink-0 bg-red-300 text-red-600 hover:text-red-500 hover:bg-red-400 h-full w-8 rounded-r cursor-pointer"
          onClick={onAdd}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </>
  );
}
