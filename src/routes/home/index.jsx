import { useRef, useState } from "react";
import Blobs from '../../components/blobs';
import Tilt from '../../components/tilt';
import Mouse from '../../components/mouse';

const FORM_WIDTH = 400, MAIN_MOUSE_SIZE = 60, MAIN_MOUSE_SIZE_IN_ARTICLE =20;
const DELAYED_MICE_CONFIG = [
  { size: 50, delay: 20, color: 'rgb(249 115 22)' },
  { size: 40, delay: 40, color: 'red' }
];

const Home = () => {
  const formRef = useRef(null);
  const containerMouseRef = useRef(null);

  const [mainMousePos, setMainMousePos] = useState({ x: 0, y: 0 });
  const [mainMousePosInArticle, setMainMousePosInArticle] = useState({ x: 0, y: 0 });
  const [delayedMousePos, setDelayedMousePos] = useState(Array.from(DELAYED_MICE_CONFIG, () => ({ x: 0, y: 0 })));

  const [isMouseOnScreen, setIsMouseOnScreen] = useState(false);
  const [wasFirstContact, setWasFirstContact] = useState(false);

  // Handler for main mouse move event
  const handleMainMouseMove = (e) => {
    const containerRect = containerMouseRef.current.getBoundingClientRect();
    setMainMousePos({
      x: e.clientX - containerRect.left - MAIN_MOUSE_SIZE / 2,
      y: e.clientY - containerRect.top - MAIN_MOUSE_SIZE / 2,
    });
  }

  const handleMainMouseMoveInArticle = (e) => {
    const containerRect = formRef.current.getBoundingClientRect();
    setMainMousePosInArticle({
      x: e.clientX - containerRect.left - MAIN_MOUSE_SIZE_IN_ARTICLE / 2,
      y: e.clientY - containerRect.top - MAIN_MOUSE_SIZE_IN_ARTICLE / 2,
    });
  }

  // Handler for delayed mouse move events
  const handleDelayMouseMove = (index, size, delay, e) => {
    const containerRect = containerMouseRef.current.getBoundingClientRect();

    // Use setTimeout to add a delay
    setTimeout(() => {
      setDelayedMousePos(prevPos => {
        const newPos = [...prevPos];
        newPos[index] = {
          x: e.clientX - containerRect.left - size / 2,
          y: e.clientY - containerRect.top - size / 2,
        };
        return newPos;
      });
    }, delay);
  }

  const handleMouseEnter = () => {
    setIsMouseOnScreen(true);
    setWasFirstContact(true);
  }

  const handleMouseLeave = () => {
    setIsMouseOnScreen(false);
  }

  return (
    <>
      {/* Main container with cursor tracking */}
      <div
        onMouseMoveCapture={(e) => {
          handleMainMouseMove(e);
          handleMainMouseMoveInArticle(e);
          DELAYED_MICE_CONFIG.forEach((config, index) => handleDelayMouseMove(index, config.size, config.delay, e));
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-none grid place-items-center h-screen w-screen relative overflow-hidden"
      >
        <main className="relative flex justify-center items-center">
          {/* Tilt component for form tilting effect */}
          <Tilt>
            <article
              ref={formRef}
              className="relative aspect-square flex justify-center flex-col items-center gap-12 z-10 p-4 bg-[rgba(255,255,255,0.5)] backdrop-blur-lg [border-bottom:2px_solid_rgba(255,255,255,.8)] [border-right:2px_solid_rgba(255,255,255,.8)] [border-top:2px_solid_rgba(255,255,255,.5)] [border-left:2px_solid_rgba(255,255,255,.5)] rounded-xl [transform-style:preserve-3d] saturate-150 overflow-hidden"
              style={{ 'width': `${FORM_WIDTH}px` }}
            >
              <h2 className="text-8xl text-white w-full text-center font-bold mb-4 [text-shadow:0_0_3px_#18293883,-1px_-1px_3px_white,1px_1px_3px_#0000006e] flex justify-center relative">
                <span className="hover:-translate-y-2 transition-transform will-change-transform duration-300">H</span>
                <span className="hover:-translate-y-2 transition-transform will-change-transform duration-300">e</span>
                <span className="hover:-translate-y-2 transition-transform will-change-transform duration-300">y</span>
                <span className="hover:-translate-y-2 transition-transform will-change-transform duration-300">!</span>
              </h2>
              <button className="bg-white rounded-full py-4 px-10 [border:1px_solid_black] ">
                Ver CV
              </button>
              <Mouse
                size={MAIN_MOUSE_SIZE_IN_ARTICLE}
                position={mainMousePosInArticle}
                isOnScreen={isMouseOnScreen}
                wasFirstContact={wasFirstContact}
                color={'rgb(249 115 22)'}
                />
            </article>
          </Tilt>
          {/* Container for custom cursor */}
          <div
            ref={containerMouseRef}
            className="[border:1px_solid_red] absolute top-0 left-0 aspect-square grid place-items-center will-change-transform [transform-style:preserve-3d] [transform:perspective(600px)] [rotateX(0deg)] [filter:url(#Gooey)]"
            style={{ 'width': `${FORM_WIDTH}px` }}
          >
            {/* Blobs component for cursor effect */}
            <Blobs parentWidth={FORM_WIDTH} />
            {/* Custom mice with delay */}
            <Mouse
              size={MAIN_MOUSE_SIZE}
              position={mainMousePos}
              isOnScreen={isMouseOnScreen}
              wasFirstContact={wasFirstContact}
              color={'orange'}
            />
            {DELAYED_MICE_CONFIG.map((config, index) => (
              <Mouse
                key={index}
                size={config.size}
                position={delayedMousePos[index]}
                isOnScreen={isMouseOnScreen}
                wasFirstContact={wasFirstContact}
                color={config.color}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home;
