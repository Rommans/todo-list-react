import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);",
  filter: "none",
  backColorTodo: "gainsboro",
  h2: "black",
  buttonAddAll: "#0098d3",
  itemBackColor: "white",
  itemColor: "white",
  deleteBackColor: "#ff4242",
  emptyList: "black",
  itemInput: "black",
  itemInputBorder: "1px black solid",
  scrollBtnColor: "black", 
};

export const darkTheme = {
  body: "linear-gradient(-45deg, #a5543a, #ad2b5d, #18708f, #11624f)",
  filter: "brightness(0.55)",
  backColorTodo: "#4d4d4d",
  h2: "white",
  buttonAddAll: "#894ff1",
  itemBackColor: "dimgray",
  itemColor: "black",
  deleteBackColor: "#cc3939",
  emptyList: "white",
  itemInputColor: "white",
  itemInputBorder: "1px white solid",
  scrollBtnColor: "white", 
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.body};
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    .back-img {
        filter: ${(props) => props.theme.filter};
    }

    .todo {
        background-color: ${(props) => props.theme.backColorTodo};
    }

    h2 {
        color: ${(props) => props.theme.h2};
    }

    .btn__add button, .btns-list-first button {
        background-color: ${(props) => props.theme.buttonAddAll};
    }

    .todo-item div {
        color: ${(props) => props.theme.emptyList};
    }

    .item {
        background-color: ${(props) => props.theme.itemBackColor};
        color: ${(props) => props.theme.itemColor};
    }

    .item input {
        color: ${(props) => props.theme.itemInputColor};
        border-bottom: ${(props) => props.theme.itemInputBorder};
    }

    .btns-list-second button {
        background-color: ${(props) => props.theme.deleteBackColor};
    }

    .btn__switch .btn__scroll {
        color: ${(props) => props.theme.scrollBtnColor};
    }

    @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`;
