import { CURRENT_BUTTON,SAVE_BTN } from "@/store/mutation-types";


export default {
    [CURRENT_BUTTON](state, {
        currBtnName
    }){
        state.currBtnName = currBtnName;
    },
    [SAVE_BTN](state, {
        btnName,
    }){
        state.btnName =btnName;
        // localStorage.setItem('btn',state.btnName);
    }

}
