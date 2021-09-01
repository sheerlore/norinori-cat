import './Cat.css'

const Cat = (props) => {
  return (
    <div className="svg-display">
      <svg
        viewBox="184 63.5 299 404"
        // viewBox="180 60 300 400"
        width={props.width}
        height={props.height}>
        <path
          d="M467 464.5
             C461.49 389.26 458.04 342.24 456.66 323.43
             C450.24 235.72 434.6 148.93 410 64.5
             C410 64.5 410 64.5 410 64.5
             C398.94 83.61 392.02 95.56 389.25 100.33
             C381.67 113.43 367.68 121.5 352.54 121.5
             C339.03 121.5 323.74 121.5 310.43 121.5
             C294.63 121.5 279.96 113.3 271.69 99.83
             C268.8 95.12 261.57 83.34 250 64.5
             C250 64.5 250 64.5 250 64.5
             C224.77 148.82 210.37 236.02 207.15 323.97
             C206.46 342.71 204.75 389.55 202 464.5"
          id="body-line"
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M300 175.83
             C300 179.6 296.94 182.67 293.17 182.67
             C289.4 182.67 286.33 179.6 286.33 175.83
             C286.33 172.06 289.4 169 293.17 169
             C296.94 169 300 172.06 300 175.83Z"
          id="right-eye"
          opacity="1"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="0"
        ></path>

        <path
          d="M375 175.83
             C375 179.6 371.94 182.67 368.17 182.67
             C364.4 182.67 361.33 179.6 361.33 175.83
             C361.33 172.06 364.4 169 368.17 169
             C371.94 169 375 172.06 375 175.83Z"
          id="left-eye"
          opacity="1"
          fill="#000000"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="0"
        ></path>

        <path
          d="M340.54 194.48
             C342.24 192.86 341.1 190 338.75 190
             C333.95 190 324.42 190 319.21 190
             C317.6 190 316.81 191.96 317.98 193.07
             C320.38 195.36 323.47 198.29 325.65 200.37
             C328.09 202.68 331.91 202.68 334.35 200.37
             C336.53 198.29 338.43 196.48 340.54 194.48Z"
          id="nose"
          opacity="1"
          fillOpacity="1"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M319.4 215
             L326.58 212.05
             L330 207.74
             L330 201.57"
          id="nose-left"
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M339.69 215
             L332.93 211.92
             L330 207.5
             L330 201.85"
          id="nose-right"
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M273 119.17
             L240 121.5
             L250.67 75
             L273 119.17Z"
          id="mimi-left"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M390 117.89
             L420 121.5
             L408 75
             L390 117.89Z"
          id="mimi-right"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M185 172.25 L283 195.75"
          id="hige-l1"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M186 200 L282 203.75"
          id="hige-l2"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M187 226.25 L280 213.25"
          id="hige-l3"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M480 175.75 L379 193.75"
          id="hige-r1"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M480 202.25 L380 203.25"
          id="hige-r2"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <path
          d="M477 224.75 L380 212.25"
          id="hige-r3"
          opacity="1"
          fillOpacity="1"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        ></path>

        <rect>
          <animate
            id="o1"
            begin="0;o1.end"
            dur={String(Number(props.speed) * 2) + "s"}
            attributeName="visibility"
            from="hide" to="hide" />
        </rect>

        <path
          id="ago"
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            begin="o1.begin"
            attributeName="d"
            from="M370 280
                  L331.25 286.25
                  L295 280"
            to="M370 300
                  L331.25 306.25
                  L295 300"
            dur={props.speed + "s"}
          // repeatCount="indefinite"
          />
        </path>

        <path
          opacity="1"
          fillOpacity="0"
          stroke="#000000"
          strokeWidth="2"
          strokeOpacity="1"
        >
          <animate
            begin={"o1.begin+" + props.speed + "s"}
            attributeName="d"
            from="M370 300
                  L331.25 306.25
                  L295 300"
            to="M370 280
                L331.25 286.25
                L295 280"
            dur={props.speed + "s"}
          // repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

}

export default Cat;