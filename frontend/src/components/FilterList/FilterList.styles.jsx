import styled from "styled-components";

export const Filter = styled.section`
    display: inline-block;
    background: #8ea93e;
    padding: 3%;
    border-radius: 20px;
    width: 100%;
    box-shadow: 1px 5px 5px black;
    //FILTER SECTION

    li {
        margin: 3%;
        width: 100%;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    & .btn {
        padding: 5px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #40abc6;
        color: #e7e7e7;
        margin: 2% 0;
        box-shadow: 3px 1px 5px black;
    }
    & .btn-filter {
        padding: 5px 0;
        border-radius: 10px;
        text-align: center;
        background-color: #16b462;
        color: #e7e7e7;
        box-shadow: 3px 1px 5px black;
    }
    & .btn-filter:hover {
        cursor: pointer;
        background-color: #1fc36e;
    }
    & .btn:hover {
        cursor: pointer;
        background-color: #28bee4;
    }
`;
