type AddListenerFunction = (
  event: string,
  callback: (...args: any[]) => void,
) => void;
type CanGoBackFunction = () => boolean;
type DispatchFunction = (action: any) => void;
type GetIdFunction = () => string;
type GetParentFunction = () => any;
type GetStateFunction = () => any;
type GoBackFunction = () => void;
type IsFocusedFunction = () => boolean;
type NavigateFunction = (name: string, params?: any) => void;
type PopFunction = () => void;
type PopToTopFunction = () => void;
type PushFunction = (name: string, params?: any) => void;
type RemoveListenerFunction = (
  event: string,
  callback: (...args: any[]) => void,
) => void;
type ReplaceFunction = (name: string, params?: any) => void;
type ResetFunction = (state: any) => void;
type SetOptionsFunction = (options: any) => void;
type SetParamsFunction = (params: any) => void;

type NavigationProps = {
  navigation: {
    addListener: AddListenerFunction;
    canGoBack: CanGoBackFunction;
    dispatch: DispatchFunction;
    getId: GetIdFunction;
    getParent: GetParentFunction;
    getState: GetStateFunction;
    goBack: GoBackFunction;
    isFocused: IsFocusedFunction;
    navigate: NavigateFunction;
    pop: PopFunction;
    popToTop: PopToTopFunction;
    push: PushFunction;
    removeListener: RemoveListenerFunction;
    replace: ReplaceFunction;
    reset: ResetFunction;
    setOptions: SetOptionsFunction;
    setParams: SetParamsFunction;
  };
  route: {
    key: string;
    name: string;
    params?: any;
  };
};

export default NavigationProps;
