import styled, { css } from 'styled-components';

export const QuestionWrapper = styled.div<{ answering?: boolean; answered?: boolean }>`
  width: 100%;
  border-radius: 8px;
  padding: 1.4rem;
  font-size: 1.6rem;

  ${({ answering, answered }) =>
    answered
      ? css`
          background-color: #dbdcdd;
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
        `
      : answering
      ? css`
          border: 1px solid #835afd;
          background-color: #f4f0ff;
          box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
        `
      : css`
          background-color: white;
        `}

  p {
    margin-bottom: 16px;
  }

  div.actions {
    display: flex;
    flex-wrap: wrap;
    row-gap: 6px;
    align-items: center;
    justify-content: space-between;
    color: rgb(0, 0, 0, 0.5);

    & > div:first-child {
      & > div {
        ${({ answered }) => answered && 'background-color: #A8A8B3'};
      }
    }

    div.admin-icons {
      display: flex;
      gap: 10px;
      align-items: center;

      svg {
        cursor: pointer;
        transition: all 0.2s;

        &:nth-child(1) {
          ${(props) => props.answered && `color: ${props.theme.colors.primary}`};
        }

        &:nth-child(2) {
          ${(props) => props.answering && `color: ${props.theme.colors.primary}`};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }

        &:hover:last-child {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }

    span {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
        margin-left: 6px;
        transition: all 0.2s;
        margin-bottom: 4px;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
