import React from "react";
import Meta from "../components/Meta";
import BreadCrumps from "../components/BreadCrumps";
import Container from "../components/Container";
function Shippingpolicy() {
  return (
    <>
      <Meta title={"Shipping Policy "} />
      <BreadCrumps title={"Shipping Policy"} />
      <Container class1="policy-wrapper-2 py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Shippingpolicy;
