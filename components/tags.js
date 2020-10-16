import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const StyledTags = styled.div`
  border: 1px #dadde1 solid;
  border-radius: 0.4rem;
  flex: 1;
  padding: 20px;
  margin-right: ${({ prefix }) => (prefix ? "20px" : 0)};
  margin-left: ${({ subfix }) => (subfix ? "20px" : 0)};
  text-align: ${({ subfix }) => (subfix ? "right" : "left")};
  color: #25c2a0;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    color: #25c2a0;
    border-color: #25c2a0;
    cursor: pointer;
  }

  &::before {
    content: "${({ prefix, subfix }) => (prefix ? prefix : subfix)}";

    display: block;
    color: black;
    font-weight: normal;
  }
`;

export default function Tags({ leftTitle, leftId, rightTitle, rightId }) {
  const router = useRouter();
  return (
    <>
      <Container>
        {leftTitle ? (
          <StyledTags
            prefix="Previous"
            onClick={() => router.push(`/posts/${leftId}`)}
          >
            {leftTitle}
          </StyledTags>
        ) : (
          <div style={{ flex: 1 }}> </div>
        )}

        {rightTitle ? (
          <StyledTags
            subfix="Next"
            onClick={() => router.push(`/posts/${rightId}`)}
          >
            {rightTitle}
          </StyledTags>
        ) : (
          <div style={{ flex: 1 }}></div>
        )}
      </Container>
    </>
  );
}
