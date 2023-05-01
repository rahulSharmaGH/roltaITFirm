import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import Container from "../components/Container";
function TermAndCondition() {
  return (
    <>
      <Meta title={"Terms And Condition"} />
      <BreadCrumps title={"Terms And Condition"} />
      <Container className="policy-wrapper-2 py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TermAndCondition;
