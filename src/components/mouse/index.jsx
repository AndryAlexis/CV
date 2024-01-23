
// Mouse.js
const Mouse = ({size, position, isOnScreen, wasFirstContact, color}) => {

  return <>
    {/* Cursor element with dynamic position */}
    <span
      className="rounded-full absolute aspect-square transition-transform duration-300 pointer-events-none"
      style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${size}px`,
          transform: wasFirstContact & isOnScreen ? `scale(${Number(isOnScreen)})` : 'scale(0)',
          animation: 'deform 20s, rotate 90s, rainbow 200s',
          animationFillMode: 'forwards',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          backgroundColor: color,
      }}
    >
      {/*EMPTY*/}
    </span>
  </>
}

export default Mouse
    