import * as React from "react";

interface EventsExampleProps {}

const EventsExample: React.FC<EventsExampleProps> = () => {
  const [value, setValue] = React.useState<string>("");
  const [isOver, setIsOver] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(`Current value: ${value}`);
    console.log(inputRef.current?.value);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", "Dragging...");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsOver(false);
    console.log("DROP!");
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Управляемый"
      />
      <input ref={inputRef} type="text" placeholder="Неуправляемый" />

      <button onClick={handleClick}>Show value</button>
      <div
        onDragStart={handleDragStart}
        draggable
        style={{ width: "200px", height: "200px", background: "red" }}
      ></div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        style={{
          width: "200px",
          height: "200px",
          background: isOver ? "green" : "red",
          margin: "10px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
