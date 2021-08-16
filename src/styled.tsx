import styled from "styled-components";

export const ActionSheetWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
`;
export const ActionSheetBackgroundWrapper = styled.div`
  background-color: #222222;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.4;
`;

export const ActionSheetBodyWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  max-height: calc(100vh - 100px);
  flex-direction: column;
  background-color: white;
  border-radius: 20px 20px 0px 0px;
`;

export const ActionSheetHeaderWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid gray;
`;

export const ActionSheetChildrenWrapper = styled.div`
  overflow-y: scroll;
`;

export const ActionSheetFooterWrapper = styled.div`
  padding: 10px 0;
`;

export const ActionSheetAdditionalAreaWrapper = styled.div`
  padding: 20px 0;
`;
