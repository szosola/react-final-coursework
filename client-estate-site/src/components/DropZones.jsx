import { useDroppable } from "@dnd-kit/core";
import "./DropZones.css";

export function FavouritesDropZone({ children }) {
  const { setNodeRef, isOver } = useDroppable({
    id: "favourites-drop",
  });

  return (
    <div
      ref={setNodeRef}
      className={`drop-zone fav-drop ${isOver ? "drop-over" : ""}`}
    >
      {children}
    </div>
  );
}

export function RemoveDropZone() {
  const { setNodeRef, isOver } = useDroppable({
    id: "remove-drop",
  });

  return (
    <div
      ref={setNodeRef}
      className={`drop-zone remove-drop ${isOver ? "drop-over" : ""}`}
    >
      Drop here to remove
    </div>
  );
}
