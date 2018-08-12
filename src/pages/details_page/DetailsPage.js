import React from "react";
import PictureDetails from "../../components/picture_details/PictureDetails";
import { observer, inject } from "mobx-react";

const DetailsPage = inject("picturesStore")(
  observer(({ picturesStore }) => (
    <div className="d-flex justify-content-center align-items-center">
      <PictureDetails picture={picturesStore.selectedPicture} />
    </div>
  ))
);

export default DetailsPage;
