import React from 'react';

interface Props {
  categories: string[];
  onChange: (value: string) => void;
  defaultSelected?: string;
}

const Search = ({ categories, onChange, defaultSelected }: Props) =>
  (
    <div style={{ position: 'relative', width: '300px' }}>
      <select
        className='search'
        onChange={(e) => onChange(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category} defaultValue={defaultSelected}>
            {category}
          </option>
        ))}
      </select>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      >
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="15pt" viewBox="0 0 512.000000 512.000000"
             preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
             fill="gray" stroke="none">
            <path d="M1950 4680 c-125 -16 -229 -39 -351 -80 -430 -143 -784 -450 -989
-859 -383 -766 -131 -1695 590 -2175 538 -358 1249 -374 1800 -42 l94 57 555
-555 556 -554 69 -21 c82 -25 134 -26 207 -5 96 28 146 63 170 117 31 74 42
160 29 237 -22 129 -18 124 -562 657 -277 270 -520 509 -541 530 l-37 39 50
85 c143 236 219 474 240 749 66 869 -547 1653 -1410 1804 -113 20 -365 28
-470 16z m390 -425 c278 -42 520 -164 716 -359 151 -151 259 -328 322 -526 44
-139 57 -228 56 -390 0 -205 -44 -401 -124 -560 -100 -198 -397 -491 -595
-586 -193 -92 -351 -128 -565 -127 -339 1 -645 125 -887 360 -516 501 -522
1315 -14 1824 290 289 696 425 1091 364z" />
          </g>
        </svg>
      </div>
    </div>
  );

export default Search;