import { useCameraPermissions } from 'expo-camera';
import { useCameraView, useFacing, useMedicine, useStartScreen } from './hooks';
import { MainApp } from './components/MainApp';

export default function App() {
  const { facing, setFacing } = useFacing()
  const [ permission, requestPermission ] = useCameraPermissions();
  const { cameraRef } = useCameraView()
  const { medicine, setMedicine } = useMedicine()
  const { startScreen, setStartScreen } = useStartScreen()

  return (
    <MainApp 
        medicine={medicine} 
        permission={permission}
        cameraRef={cameraRef} 
        facing={facing} 
        startScreen={startScreen}
         
        setFacing={setFacing} 
        setMedicine={setMedicine} 
        setStartScreen={setStartScreen}
        requestPermission={requestPermission}
      />
  );
}



