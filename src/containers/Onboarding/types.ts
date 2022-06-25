export interface OnboardingProps {
  localState: LocalStateType;
  handlers: HandlersType;
}

export interface LocalStateType {
  isLoading: boolean;
  buttonLabel: string;
}

export interface HandlersType {
  onStartApp: () => void;
}
