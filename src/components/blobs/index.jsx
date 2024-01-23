    import { useState } from "react"

    const TWO_PI_RADIANS = 360

    const Blobs = ({parentWidth}) => {
        const [blobs] = useState(() => {
            const blobsParams = {
                amount : 2,
                key : 'blob',
                width : 360,
                extraDistance : .8
            }

            const createdBlobs = Array.from({ length : blobsParams.amount}, (_, i) => (
                <div 
                    key={`${blobsParams.key}_${i}`} 
                    className="[contain:strict] absolute bg-[rgb(59,116,202)] will-change-transform aspect-square shadow-black" 
                    style={{
                        '--i' : i + 1,
                        '--_width' : `${blobsParams.width}px`,
                        '--_left' : `${(blobsParams.width / 2 * -1) * blobsParams.extraDistance}px`,
                        '--_transform-origin' : `${(parentWidth / 2 + (blobsParams.width / 2 * blobsParams.extraDistance))}px`,
                        '--position-in-circle' : `${TWO_PI_RADIANS / blobsParams.amount}deg`, /* Position in circle */
                        '--half-width' : `${blobsParams.width / 2}px`,
                        width: 'var(--_width)',
                        left: 'var(--_left)',
                        transform: 'rotate(calc(var(--position-in-circle)*var(--i)))',
                        transformOrigin: 'var(--_transform-origin)',
                        filter: 'hue-rotate(0deg)',
                        animation: 'deform 20s, rotate 90s, jellyfish 25s',
                        animationFillMode: 'forwards',
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite'
                    }}
                >
                </div>
            ))

            return createdBlobs
        })

        return <>
            {
                blobs.map(blob => blob) 
            }
            {/* SVG filter for visual effect */}
            <svg className="absolute w-0 h-0">
                <filter id="Gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={10}/>
                    <feColorMatrix values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 20 -10
                    "/>
                </filter>
            </svg>
        </> 
    }

    export default Blobs