import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDoggos } from "./actions";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
`;
const Div = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: teal;
`;

const Img = styled.img`
  width: 100%;
`;

const Dog = (props) => {
  useEffect(() => {
    props.getDoggos();
  }, []);

  return (
    <Main>
      <Div>
        <h1>Doggos</h1>
        {props.isFetching && <h3>Fetching the doggos... </h3>}
        <Img src={props.doggos} />
      </Div>
    </Main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isFetching: state.isFetching,
    doggos: state.doggos,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getDoggos })(Dog);
