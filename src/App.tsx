import React from "react";
import {
  ActionSheetWrapper,
  ActionSheetBackgroundWrapper,
  ActionSheetBodyWrapper,
  ActionSheetHeaderWrapper,
  ActionSheetChildrenWrapper,
  ActionSheetFooterWrapper,
  ActionSheetAdditionalAreaWrapper
} from "./styled";
import { FlipProvider } from "./FlipProvider";

export default function App() {
  const [flag, setFlag] = React.useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <FlipProvider selectors={["#header"]}>
        <ActionSheetWrapper>
          <ActionSheetBackgroundWrapper />

          <ActionSheetBodyWrapper>
            <ActionSheetHeaderWrapper id="header" data-flip-translate>
              헤더
            </ActionSheetHeaderWrapper>

            <ActionSheetChildrenWrapper>
              {flag && (
                <ActionSheetAdditionalAreaWrapper id="additional-area">
                  칩 영역
                </ActionSheetAdditionalAreaWrapper>
              )}
              <div>
                <div>
                  {Array.from({ length: 4 }).map((x, idx) => (
                    <p key={idx}>{idx}</p>
                  ))}
                </div>
              </div>
            </ActionSheetChildrenWrapper>
            <ActionSheetFooterWrapper>
              <button
                onClick={() => {
                  setFlag((x) => !x);
                }}
              >
                토글
              </button>
            </ActionSheetFooterWrapper>
          </ActionSheetBodyWrapper>
        </ActionSheetWrapper>
      </FlipProvider>
    </div>
  );
}
