import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CakeInfo from "../../components/cake-details/CakeInfo";
import cakes from "../../assets/data/cakes.json";

const CakeDetails = () => {
  const { cakeId } = useParams();
  //   const [cake, setCake] = useState(null);
  const cake = cakes.find((cake) => cake._id == cakeId);
  return (
    <div>
      <CakeInfo cake={cake} />
    </div>
  );
};

export default CakeDetails;
