"use client";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export default function MixedShapes() {
  const sceneRef = useRef(null);
  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      MouseConstraint,
      Mouse,
      Composite,
      Bodies,
    } = Matter;

    const skills = [
      "JavaScript",
      "Html",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Figma",
      "C++",
      "C#",
      "Python",
      "CSS",
    ];

    // Get container dimensions
    const containerWidth = sceneRef.current.clientWidth;
    const containerHeight = sceneRef.current.clientHeight;

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: "black",
        showAngleIndicator: true,
        wireframes: false,
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    // Fix canvas resolution for high DPI displays
    const canvas = render.canvas;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio || 1;
    
    canvas.width = containerWidth * pixelRatio;
    canvas.height = containerHeight * pixelRatio;
    canvas.style.width = containerWidth + 'px';
    canvas.style.height = containerHeight + 'px';
    ctx.scale(pixelRatio, pixelRatio);

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create skill boxes with text-based sizing
    const skillBodies = skills.map((skill, index) => {
      // Responsive sizing based on screen width
      const isMobile = containerWidth < 768;
      const charWidth = isMobile ? 10 : 26;
      const padding = isMobile ? 20 : 40;
      const height = isMobile ? 40 : 68;
      
      const textWidth = skill.length * charWidth;
      const boxWidth = textWidth + padding;
      const boxHeight = height;
      
      // Position skills in a grid-like pattern
      const cols = Math.floor(containerWidth / (boxWidth + 20));
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      const x = 50 + col * (boxWidth + 20);
      const y = 50 + row * (boxHeight + 20);
      
      const body = Bodies.rectangle(x, y, boxWidth, boxHeight, {
        render: {
          stiffness: 0.2,
          fillStyle: "black",
          strokeStyle: "white",
          lineWidth: 1
          
        },
        chamfer: { radius: 7 }
      });
      // Store skill text in body for rendering
      body.skillText = skill;
      return body;
    });

    Composite.add(world, skillBodies);

    // Add text rendering
    Matter.Events.on(render, 'afterRender', () => {
      const ctx = render.canvas.getContext('2d');
      const isMobile = containerWidth < 768;
      const fontSize = isMobile ? '12px' : '16px';
      ctx.font = `${fontSize} Arial`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      skillBodies.forEach(body => {
        if (body.skillText) {
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          ctx.fillText(body.skillText, 0, 0);
          ctx.restore();
        }
      });
    });

    // add walls - responsive to container size (invisible but solid)
    Composite.add(world, [
      Bodies.rectangle(containerWidth / 2, 0, containerWidth + 100, 50, { 
        isStatic: true,
        render: { visible: false }
      }),
      Bodies.rectangle(containerWidth / 2, containerHeight, containerWidth + 100, 50, { 
        isStatic: true,
        render: { visible: false }
      }),
      Bodies.rectangle(containerWidth, containerHeight / 2, 50, containerHeight + 100, { 
        isStatic: true,
        render: { visible: false }
      }),
      Bodies.rectangle(0, containerHeight / 2, 50, containerHeight + 100, { 
        isStatic: true,
        render: { visible: false }
      }),
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: containerWidth, y: containerHeight },
    });

    // cleanup on component unmount
    return () => {
      Matter.Events.off(render, 'afterRender');
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <main className="w-full h-full">
      <div ref={sceneRef} className="w-full h-full"/>
    </main>
  );
}
