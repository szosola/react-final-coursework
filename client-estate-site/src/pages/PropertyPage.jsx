import { useParams } from "react-router-dom";

function PropertyPage() {
  const { id } = useParams();

  return (
    <div>
      <h2>Property Deatails</h2>
      <p>Property ID: {id}</p>
    </div>
  );
}

export default PropertyPage;