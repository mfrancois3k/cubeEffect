import './styles.scss'

// const cubeContainer = document.querySelector('.cube-container');
// const cube = document.querySelector('.cube');
// const panels = document.querySelectorAll('.panel');
// let mouseX = 0;
// let mouseY = 0;
// let textRotationY = 0;

// cubeContainer.addEventListener('mousemove', e => {
//   mouseX = (e.clientX / window.innerWidth) * 360;
//   mouseY = (e.clientY / window.innerHeight) * 360;
// });

// const rotateCube = () => {
//   const rotationX = mouseY;
//   const rotationY = mouseX;
//   Object.assign(cube.style, {
//     transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`
//   });
//   panels.forEach((panel, i) => {
//     const angle = 360 / panels.length;
//     const hue = angle * i;
//     const left = `${(24 / panels.length) * i}%`;
//     const orbitText = panel.querySelector('.orbit-text'); // Add this line
//     Object.assign(panel.style, {
//       "--left": left,
//       "--hue": hue,
//       "--angle": `${angle * i}deg`,
//       transform: `rotateY(${textRotationY}deg)`
//     });
//     orbitText.style.transform = `rotateY(${textRotationY}deg)`; // Add this line
//   });
//   textRotationY = (textRotationY -= 0.1) % 360;
//   window.requestAnimationFrame(rotateCube);
// };

// rotateCube();
