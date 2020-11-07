import React from "react";
import { useCanvas } from "../../hooks/useCanvas";

const Canvas = () => {
  const canvasRef = useCanvas();
  return <canvas id="bg-canvas" ref={canvasRef} />;
};

export default Canvas;
