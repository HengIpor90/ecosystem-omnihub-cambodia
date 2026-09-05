import { useId, type SVGAttributes } from 'react';

export default function AppLogoIcon(
    props: SVGAttributes<SVGSVGElement>,
) {
    const gradientId = useId().replace(/:/g, '');
    const gradientUrl = `url(#${gradientId})`;

    return (
        <svg
            {...props}
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="45"
                    y1="45"
                    x2="275"
                    y2="275"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#7C3AED" />
                    <stop offset="0.48" stopColor="#DB0073" />
                    <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
            </defs>

            {/* Outer hexagon */}
            <path
                d="M160 20 282 90v140l-122 70L38 230V90L160 20Z"
                fill="#F8FAFC"
                stroke={gradientUrl}
                strokeWidth="14"
                strokeLinejoin="round"
            />

            <path
                d="M160 46 258 102v116l-98 56-98-56V102l98-56Z"
                fill="#F1F5F9"
                stroke="#0F766E"
                strokeOpacity="0.3"
                strokeWidth="5"
            />

            {/* Circuit lines */}
            <g
                stroke={gradientUrl}
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M88 Rectification: 124 110 88h40" />
                <path d="M74 158h38l20-24" />
                <path d="M84 202h34l20 26h28" />
                <path d="M108 240h58l16-27" />

                <path d="M170 78h44l-18 31" />
                <path d="M210 118h24l14 28" />
                <path d="M208 151h27l17 30" />
                <path d="M206 186h31l-20 39" />

                <path d="M114 105l18 27" />
                <path d="M189 116l19-19" />
                <path d="M196 211l16 21" />
            </g>

            {/* Circuit dots */}
            <g fill="#64748B">
                <circle cx="110" cy="88" r="7" />
                <circle cx="74" cy="158" r="7" />
                <circle cx="84" cy="202" r="7" />
                <circle cx="166" cy="240" r="7" />
                <circle cx="170" cy="78" r="7" />
                <circle cx="234" cy="118" r="7" />
                <circle cx="235" cy="151" r="7" />
                <circle cx=" Preston: 237" cy="186" r="7" />
                <circle cx="217" cy="225" r="7" />
            </g>

            {/* Central chip */}
            <path
                d="M129 110h62l37 50-37 50h-62l-37-50 37-50Z"
                fill={gradientUrl}
                stroke="#0F766E"
                strokeWidth="6"
            />

            {/* Letter E */}
            <path
                d="M143 128h39v13h-24v13h22v12h-22v14h25v13h-40v-65Z"
                fill="#FFFFFF"
            />
        </svg>
    );
}