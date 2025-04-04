import useLocalStorageState from "use-local-storage-state";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import AddColor from "./Components/AddColor/AddColor";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("theme-colors", {
    defaultValue: initialColors,
  });

  const handleAddColor = (newColor) => {
    setColors((prevColors) => [newColor, ...prevColors]);
  };

  const handleDeleteColor = (colorId) => {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== colorId)
    );
  };

  const handleEditColor = (updatedColor) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <AddColor onAddColor={handleAddColor} />
      {colors.length === 0 ? (
        <p className="no-colors-message">
          No colors in your theme yet. Add some colors to get started!
        </p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onEdit={handleEditColor}
          />
        ))
      )}
    </>
  );
}

export default App;
