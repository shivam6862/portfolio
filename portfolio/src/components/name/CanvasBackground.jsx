import React, { useEffect, useRef } from "react";
import classes from "./CanvasBackground.module.css";

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray.current = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 2 - 1;
        let directionY = Math.random() * 2 - 1;
        let colors = [
          "#FF5733",
          "#C70039",
          "#900C3F",
          "#581845",
          "#FFC300",
          "#DAF7A6",
          "#1287A5",
          "#F4D03F",
          "#00D2D3",
        ];
        let color = colors[Math.floor(Math.random() * colors.length)];

        particlesArray.current.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.current.forEach((particle) => {
        particle.update();
      });
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
      animate();
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("mousemove", (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animate();
      let mouse = {
        x: event.x - canvasRef.current.getBoundingClientRect().left,
        y: event.y - canvasRef.current.getBoundingClientRect().top,
      };
      particlesArray.current.forEach((particle) => {
        let distance = Math.sqrt(
          (mouse.x - particle.x) ** 2 + (mouse.y - particle.y) ** 2
        );
        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particle.x, particle.y);
          ctx.strokeStyle = particle.color;
          ctx.stroke();
          ctx.closePath();
        }
      });
    });

    window.addEventListener("mouseout", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animate();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseout", () => {});
    };
  }, []);

  return (
    <div className={classes.canvasContainer}>
      <canvas ref={canvasRef} className={classes.canvas}></canvas>
    </div>
  );
};

export default CanvasBackground;
