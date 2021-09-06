import './Cat.css'

const Cat = (props) => {
  return (
    <div className="svg-display app-ele">
      <svg
        viewBox={`0 40 ${props.width} ${props.height}`}
        width={props.width}
        height={props.height}>

        {/* 点座標 */}
        {/* <g>
          <g>
            <circle cx={0} cy={0} r="5" fill="red" />
            <circle cx={props.width / 2} cy={0} r="5" fill="red" />
            <circle cx={props.width / 4} cy={0} r="5" fill="red" />
            <circle cx={props.width / 4 * 3} cy={0} r="5" fill="red" />
            <circle cx={props.width} cy={0} r="5" fill="red" />
          </g>
          <g>
            <circle cx={0} cy={props.height / 4} r="5" fill="red" />
            <circle cx={props.width / 2} cy={props.height / 4} r="5" fill="red" />
            <circle cx={props.width / 4} cy={props.height / 4} r="5" fill="red" />
            <circle cx={props.width / 4 * 3} cy={props.height / 4} r="5" fill="red" />
            <circle cx={props.width} cy={props.height / 4} r="5" fill="red" />
          </g>
          <g>
            <circle cx={0} cy={props.height / 2} r="5" fill="red" />
            <circle cx={props.width / 2} cy={props.height / 2} r="5" fill="red" />
            <circle cx={props.width / 4} cy={props.height / 2} r="5" fill="red" />
            <circle cx={props.width / 4 * 3} cy={props.height / 2} r="5" fill="red" />
            <circle cx={props.width} cy={props.height / 2} r="5" fill="red" />
          </g>
          <g>
            <circle cx={0} cy={props.height / 4 * 3} r="5" fill="red" />
            <circle cx={props.width / 2} cy={props.height / 4 * 3} r="5" fill="red" />
            <circle cx={props.width / 4} cy={props.height / 4 * 3} r="5" fill="red" />
            <circle cx={props.width / 4 * 3} cy={props.height / 4 * 3} r="5" fill="red" />
            <circle cx={props.width} cy={props.height / 4 * 3} r="5" fill="red" />
          </g>
          <g>
            <circle cx={0} cy={props.height} r="5" fill="red" />
            <circle cx={props.width / 2} cy={props.height} r="5" fill="red" />
            <circle cx={props.width / 4} cy={props.height} r="5" fill="red" />
            <circle cx={props.width / 4 * 3} cy={props.height} r="5" fill="red" />
            <circle cx={props.width} cy={props.height} r="5" fill="red" />
          </g>
        </g> */}



        {/* 体のライン */}
        <path
          d="M100 560
             Q0 560, 60 300 
             Q60 300, 90 70
             L120 110
             Q180 100, 240 110
             L270 70
             Q300 300, 300 300 
             Q360 560, 250 560 
             Z
             "
          id="body-line"
          opacity="1"
          fillOpacity="1"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            attributeName="d"
            values="M100 560
             Q0 560, 60 300 
             Q60 300, 90 70
             L120 110
             Q180 100, 240 110
             L270 70
             Q300 300, 300 300 
             Q360 560, 250 560 
             Z;
             M100 560
             Q0 560, 40 310 
             Q35 280, 90 80
             L120 120
             Q180 110, 240 120
             L270 80
             Q325 280, 320 310 
             Q360 560, 250 560 
             Z;
             M100 560
             Q0 560, 60 300 
             Q60 300, 90 70
             L120 110
             Q180 100, 240 110
             L270 70
             Q300 300, 300 300 
             Q360 560, 250 560 
             Z;
             "
            dur={props.speed + "s"}
            repeatCount="indefinite"
          ></animate>
        </path>

        {/* 足 */}
        <g>
        </g>

        {/* 耳 */}
        <g strokeOpacity="0">
          <path
            d="M90 70 L110 110 L90 130"
          >
            <animate
              attributeName="d"
              values="
              M90 70 L110 110 L90 130;
              M90 80 L110 120 L80 140;
              M90 70 L110 110 L90 130;
              "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            ></animate>
          </path>

          <path
            d="M250 110 L270 70 L270 130"
          >
            <animate
              attributeName="d"
              values="
              M250 110 L270 70 L270 130;
              M250 120 L270 80 L280 140;
              M250 110 L270 70 L270 130;
              "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            ></animate>
          </path>
        </g>

        {/* 右目 */}
        <circle
          cx="145" cy="180" r="6"
          id="right-eye"
          opacity="1"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="0"
        >
          <animate
            attributeName="cy"
            values="180;190;180"
            dur={props.speed + "s"}
            repeatCount="indefinite"
          ></animate>
        </circle>

        {/* 左目 */}
        <circle
          cx="215" cy="180" r="6"
          id="right-eye"
          opacity="1"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="0"
        >
          <animate
            attributeName="cy"
            values="180;190;180"
            dur={props.speed + "s"}
            repeatCount="indefinite"
          ></animate>
        </circle>

        {/* 鼻 */}
        <g>

          <path
            d="M175 190
          L185 190
          L180 195
          z"
            id="nose"
            opacity="1"
            fillOpacity="1"
            fill="rgb(255, 120, 180)"
            stroke="#000000"
            strokeWidth="2"
            strokeOpacity="1"
          >
            <animate
              attributeName="d"
              values="M175 190
          L185 190
          L180 195
          z;
          M175 200
          L185 200
          L180 205
          z;
          M175 190
          L185 190
          L180 195
          z;
          "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            ></animate>
          </path>

          <path
            d="M180 195 L180 205"
            stroke="black"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              values="M180 195 L180 205;
                      M180 205 L180 215;
                      M180 195 L180 205;
                      "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            ></animate>
          </path>
        </g>

        {/* 左のひげ */}
        <g>
          <path
            d="M140 210 L40 190"
            id="hige-l1"
            opacity="1"
            fillOpacity="1"
            stroke="#000000"
            strokeWidth="2"
            strokeOpacity="1"
          >
            <animate
              attributeName="d"
              values="
              M140 210 L40 190;
              M140 220 L40 190;
              M140 210 L40 190;
                      "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M140 220 L30 210"
            id="hige-l2"
            opacity="1"
            fillOpacity="1"
            stroke="#000000"
            strokeWidth="2"
            strokeOpacity="1"
          >
            <animate
              attributeName="d"
              values="
              M140 220 L30 210;
              M140 230 L30 210;
              M140 220 L30 210;
                      "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            />

          </path>

          <path
            d="M140 230 L40 230"
            id="hige-l3"
            opacity="1"
            fillOpacity="1"
            stroke="#000000"
            strokeWidth="2"
            strokeOpacity="1"
          >
            <animate
              attributeName="d"
              values="
              M140 230 L40 230;
              M140 240 L40 230;
              M140 230 L40 230;
                      "
              dur={props.speed + "s"}
              repeatCount="indefinite"
            />
          </path>
        </g>
        {/* 右のひげ */}
        <path
          d="M220 210 L310 190"
          id="hige-r1"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            attributeName="d"
            values="
              M220 210 L310 190;
              M220 220 L310 190;
              M220 210 L310 190;
                      "
            dur={props.speed + "s"}
            repeatCount="indefinite"
          />

        </path>

        <path
          d="M220 220 L320 210"
          id="hige-r2"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            attributeName="d"
            values="
              M220 220 L320 210;
              M220 230 L320 210;
              M220 220 L320 210;
                      "
            dur={props.speed + "s"}
            repeatCount="indefinite"
          />

        </path>

        <path
          d="M220 230 L310 230"
          id="hige-r3"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            attributeName="d"
            values="
              M220 230 L310 230;
              M220 240 L310 230;
              M220 230 L310 230;
                      "
            dur={props.speed + "s"}
            repeatCount="indefinite"
          />

        </path>



        {/* あごのよくわからない部分 */}
        <path
          d="M160 300
               Q180 310,200 300"
          id="ago"
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            attributeName="d"
            values="
              M160 300
              Q180 310,200 300;
              M130 300
              Q180 310,230 300;
              M160 300
              Q180 310,200 300;
              "
            dur={props.speed}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

}

export default Cat;