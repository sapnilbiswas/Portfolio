import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Float, Sphere, Box, Cylinder, Cone } from '@react-three/drei'
import { useRef } from 'react'

function ProceduralRocket({ color }) {
  const rocketRef = useRef()
  const fireRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    // Smooth floating and slight tilt
    rocketRef.current.rotation.z = Math.sin(time * 0.5) * 0.1
    rocketRef.current.rotation.y += 0.01
    
    // Fire pulsing
    const fireScale = 1 + Math.sin(time * 10) * 0.2
    fireRef.current.scale.set(fireScale, fireScale * 1.5, fireScale)
  })

  return (
    <group ref={rocketRef}>
      {/* Nose Cone */}
      <Cone args={[0.5, 1, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </Cone>

      {/* Main Body */}
      <Cylinder args={[0.5, 0.5, 2, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </Cylinder>

      {/* Window */}
      <Sphere args={[0.2, 16, 16]} position={[0, 0.5, 0.45]}>
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} />
      </Sphere>

      {/* Fins */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <group key={i} rotation={[0, angle, 0]}>
          <Box args={[0.1, 0.8, 0.6]} position={[0, -0.6, 0.5]}>
            <meshStandardMaterial color={color} />
          </Box>
        </group>
      ))}

      {/* Engine Nozzle */}
      <Cylinder args={[0.3, 0.4, 0.4, 32]} position={[0, -1.2, 0]}>
        <meshStandardMaterial color="#333" metalness={1} />
      </Cylinder>

      {/* Fire Effect */}
      <group ref={fireRef} position={[0, -1.6, 0]}>
        <Sphere args={[0.25, 16, 16]}>
          <meshBasicMaterial color="#ff4d00" />
        </Sphere>
        <pointLight color="#ff4d00" intensity={2} distance={3} />
      </group>
    </group>
  )
}

export default function Scene3D({ color = '#00f0ff' }) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
          <ProceduralRocket color={color} />
        </Float>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
