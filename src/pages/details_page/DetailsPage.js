import React from "react";
import PictureDetails from "../../components/user_details/PictureDetails";
import { observer, inject } from "mobx-react";

const DetailsPage = inject("picturesStore")(
  observer(({ picturesStore }) => (
    <div className="d-flex justify-content-center align-items-center pt-5">
      <PictureDetails />
      <div>{JSON.stringify(picturesStore.selectedPicture)}</div>
    </div>
  ))
);

export default DetailsPage;
