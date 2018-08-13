import React from "react";
import PictureDetails from "../../components/picture_details/PictureDetails";
import { observer, inject } from "mobx-react";
import EmptyState from "../../components/empty_state/EmptyState";

const DetailsPage = inject("detailsPageStore")(
  observer(({ detailsPageStore }) => (
    <div className="d-flex justify-content-center align-items-center mt-5">
      {Object.keys(detailsPageStore.getSelectedPicture()).length > 0 ? (
        <PictureDetails picture={detailsPageStore.getSelectedPicture()} />
      ) : (
        <EmptyState
          title="No picture details"
          description="Click more on a picture."
        />
      )}
    </div>
  ))
);

export default DetailsPage;
