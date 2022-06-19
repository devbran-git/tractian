interface OnboardingProps {
  onStartApp: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onStartApp }) => {
  return (
    <div className='container'>
      <h3 onClick={onStartApp}>Entrar</h3>
    </div>
  );
};

export default Onboarding;
