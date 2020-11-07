import { useEffect, useRef } from "react";

export const useCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const starCount = (window.innerWidth + window.innerHeight) / 8,
      starSize = 3,
      starMinScale = 0.2,
      overflowThreshold = 50;

    let scale = 1,
      width,
      height;

    let stars = [];

    let pointerX, pointerY;

    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    let touchInput = false;

    const generate = () => {
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: starMinScale + Math.random() * (1 - starMinScale),
        });
      }
    };

    const placeStar = (star) => {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    };

    const resize = () => {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(placeStar);
    };

    const recycleStar = (star) => {
      let direction = "z";

      let vx = Math.abs(velocity.x),
        vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        let axis;

        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          axis = Math.random() < vy / (vx + vy) ? "v" : "h";
        }

        if (axis === "h") {
          direction = velocity.x > 0 ? "l" : "r";
        } else {
          direction = velocity.y > 0 ? "t" : "b";
        }
      }

      star.z = starMinScale + Math.random() * (1 - starMinScale);

      if (direction === "z") {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === "l") {
        star.x = -overflowThreshold;
        star.y = height * Math.random();
      } else if (direction === "r") {
        star.x = width + overflowThreshold;
        star.y = height * Math.random();
      } else if (direction === "t") {
        star.x = width * Math.random();
        star.y = -overflowThreshold;
      } else if (direction === "b") {
        star.x = width * Math.random();
        star.y = height + overflowThreshold;
      }
    };

    const update = () => {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - width / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -overflowThreshold ||
          star.x > width + overflowThreshold ||
          star.y < -overflowThreshold ||
          star.y > height + overflowThreshold
        ) {
          recycleStar(star);
        }
      });
    };

    const render = () => {
      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = starSize * star.z * scale;
        context.strokeStyle = `rgba(255,255,255,${0.5 + 0.5 * Math.random()})`;

        context.beginPath();
        context.moveTo(star.x, star.y);

        var tailX = velocity.x * 2,
          tailY = velocity.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);

        context.stroke();
      });
    };

    const step = () => {
      context.clearRect(0, 0, width, height);
      update();
      render();
      requestAnimationFrame(step);
    };

    const movePointer = (x, y) => {
      if (typeof pointerX === "number" && typeof pointerY === "number") {
        let ox = x - pointerX,
          oy = y - pointerY;
        velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1);
      }

      pointerX = x;
      pointerY = y;
    };

    const onMouseMove = (e) => {
      touchInput = false;
      movePointer(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      touchInput = true;
      movePointer(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    };

    const onMouseLeave = () => {
      pointerX = null;
      pointerY = null;
    };

    generate();
    resize();
    step();

    window.onresize = resize;
    document.onmousemove = onMouseMove;
    document.ontouchmove = onTouchMove;
    document.ontouchend = onMouseLeave;
    document.onmouseleave = onMouseLeave;
    // document.body.style.background = `url(${canvas.toDataURL()})`;
  }, []);

  return canvasRef;
};
