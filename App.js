import StackNavigator from './StackNavigator';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
  return (
  <AuthProvider>
    <StackNavigator/>
  </AuthProvider>
  );
}
