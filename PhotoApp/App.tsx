import { useCameraPermissions } from 'expo-camera';
import { useCameraView, useFacing, useLanguage, useMedicine, useStartScreen } from './hooks';
import { MainApp } from './components/MainApp';

export default function App() {
  const { facing, setFacing } = useFacing()
  const [ permission, requestPermission ] = useCameraPermissions();
  const { cameraRef } = useCameraView()
  const { medicine, setMedicine } = useMedicine()
  const { startScreen, setStartScreen } = useStartScreen()
  const { language, setLanguage } = useLanguage()

  return (
    <MainApp 
        medicine={medicine} 
        permission={permission}
        cameraRef={cameraRef} 
        facing={facing} 
        startScreen={startScreen}
        language={language}
         
        setFacing={setFacing} 
        setMedicine={setMedicine} 
        setStartScreen={setStartScreen}
        requestPermission={requestPermission}
        setLanguage={setLanguage}
      />
  );
}



