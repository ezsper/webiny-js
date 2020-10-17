import { useSetRecoilState } from "recoil";
import { uiAtom } from "@webiny/app-page-builder/editor/recoil/modules/ui/uiAtom";

export const deactivateElementMutation = () => {
    const setUiAtom = useSetRecoilState(uiAtom);

    setUiAtom(prev => ({
        ...prev,
        activeElement: null
    }));
};