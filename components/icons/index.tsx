import { SVGProps } from "react";

interface CircularLoadingProps extends SVGProps<SVGSVGElement> {
	stroke: string;
  }

const ReactIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		// class="w-6 h-6 text-gray-800 dark:text-white"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
		<path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
	</svg>
);

const Lottie = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="40"
		height="40"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 288 288"
		{...props}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 400 400"
			width="288"
			height="288"
		>
			<clipPath id="a">
				<path d="M0 0h400v400H0z"></path>
			</clipPath>
			<g clipPath="url(#a)">
				<path
					fill="#00ddb3"
					d="M298.783 0H101.217C45.317 0 0 45.317 0 101.217v197.566C0 354.683 45.316 400 101.217 400h197.566C354.683 400 400 354.683 400 298.783V101.217C400 45.317 354.683 0 298.783 0z"
					// class="color00ddb3 svgShape"
				></path>
				<path
					fill="#ffffff"
					d="M304.035 89.598c-68.951 0-94.382 49.158-114.885 88.663l-13.486 25.248c-21.74 41.899-37.964 67.35-79.781 67.35a19.756 19.756 0 0 0-13.995 5.784 19.769 19.769 0 0 0-4.291 21.56 19.758 19.758 0 0 0 10.713 10.702 19.756 19.756 0 0 0 7.573 1.499c68.951 0 94.382-49.158 114.885-88.663l13.405-25.248c21.74-41.899 37.964-67.35 79.781-67.35a19.763 19.763 0 0 0 18.286-12.201 19.77 19.77 0 0 0-4.291-21.56 19.763 19.763 0 0 0-13.995-5.784z"
					// class="colorfff svgShape"
				></path>
			</g>
		</svg>
	</svg>
);

const ExpoIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg width="114" height="32" viewBox="0 0 114 32" {...props}>
		<path
			fill="#FFF"
			d="M14.805 10.334c.256-.377.535-.425.762-.425.227 0 .605.048.86.425 2.015 2.766 5.34 8.277 7.791 12.342 1.6 2.65 2.828 4.687 3.08 4.946.946.972 2.243.366 2.997-.737.742-1.086.948-1.849.948-2.663 0-.554-10.752-20.552-11.835-22.217C18.366.405 18.028 0 16.245 0H14.91c-1.777 0-2.034.404-3.075 2.005C10.753 3.67 0 23.668 0 24.222c0 .814.206 1.577.948 2.663.754 1.103 2.052 1.71 2.998.737.252-.26 1.48-2.295 3.08-4.946 2.451-4.065 5.765-9.576 7.78-12.342Zm23.913-8.566v24.55h14.96v-4.98h-9.799v-5.19h8.718v-4.98h-8.718v-4.42h9.799v-4.98h-14.96Zm34.922 24.55-6.208-8.908 5.789-8.312h-5.859l-2.859 4.068-2.825-4.068H55.75l5.789 8.347-6.172 8.873h5.858l3.243-4.664 3.243 4.664h5.928ZM86.115 8.747c-2.37 0-4.22.982-5.405 2.77v-2.42h-4.916V32h4.916v-8.102c1.186 1.789 3.034 2.771 5.405 2.771 4.429 0 7.95-4.033 7.95-8.979 0-4.945-3.521-8.943-7.95-8.943ZM85 21.934c-2.407 0-4.29-1.824-4.29-4.244 0-2.384 1.883-4.243 4.29-4.243 2.37 0 4.289 1.894 4.289 4.244 0 2.384-1.918 4.243-4.29 4.243Zm19.791-13.187c-5.056 0-8.892 3.858-8.892 8.979 0 5.12 3.835 8.943 8.892 8.943 5.021 0 8.892-3.823 8.892-8.943 0-5.121-3.871-8.979-8.892-8.979Zm0 4.735c2.301 0 4.08 1.789 4.08 4.244 0 2.384-1.779 4.208-4.08 4.208-2.337 0-4.08-1.824-4.08-4.208 0-2.455 1.743-4.244 4.08-4.244Z"
		></path>
	</svg>
);
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
		<path d="M21 21l-6 -6" />
	</svg>
);

const SunIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
		<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
	</svg>
);
const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
	</svg>
);
const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M5 12l5 5l10 -10" />
	</svg>
);

const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
		<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
	</svg>
);

const SourceCodeIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5" />
		<path d="M6 5l-2 2l2 2" />
		<path d="M10 9l2 -2l-2 -2" />
	</svg>
);

const ScreenShareIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
		<path d="M7 20l10 0" />
		<path d="M9 16l0 4" />
		<path d="M15 16l0 4" />
		<path d="M17 4h4v4" />
		<path d="M16 9l5 -5" />
	</svg>
);



// View box is based on 50x50 size
// from: https://codepen.io/jczimm/pen/vEBpoL

const CIRCLE_RADIUS = 50 / 2;

const CircularLoading = ({ stroke, ...props }: CircularLoadingProps) => {
  const center = CIRCLE_RADIUS;
  
  return (
    <svg 
      viewBox={`0 0 ${CIRCLE_RADIUS * 2} ${CIRCLE_RADIUS * 2}`} 
      width={40} 
      height={40}
      {...props}
    >
      <circle
        fill="none"
        stroke={stroke}
        strokeWidth={5}
        strokeLinecap="round"
        cx={CIRCLE_RADIUS}
        cy={CIRCLE_RADIUS}
        r={CIRCLE_RADIUS - 5}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={`0 ${center} ${center}`}
          to={`360 ${center} ${center}`}
          dur="1.33s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dasharray"
          values="1,200; 89,200; 89 200;"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate 
          attributeName="stroke-dashoffset" 
          values="0;-35;-124;" 
          dur="1s" 
          repeatCount="indefinite" 
        />
      </circle>
    </svg>
  );
};

export const MyIcons = {
	React: ReactIcon,
	Lottie: Lottie,
	ExpoIcon: ExpoIcon,
	SearchIcon: SearchIcon,
	SunIcon: SunIcon,
	MoonIcon: MoonIcon,
	CheckIcon: CheckIcon,
	ClipboardIcon: ClipboardIcon,
	SourceCodeIcon: SourceCodeIcon,
	ScreenShareIcon: ScreenShareIcon,
	CircularLoading: CircularLoading,
};
