import React from "react";
import Image from "next/image";
import ArrowLeft from "../public/assets/images/carousel/arrow-left.png";
import ArrowRight from "../public/assets/images/carousel/arrow-right.png";

const LeftButton = () => {
  return (
    <button>
      <div className="w-12 rounded-full border-2 border-[#625df5] inline-flex">
        <Image className="button-bg" src={ArrowLeft} alt="" priority={true} />
      </div>
    </button>
  );
};

const RightButton = () => {
  return (
    <button>
      <div className="w-12 rounded-full border-2 border-[#625df5] inline-flex">
        <Image className="button-bg" src={ArrowRight} alt="" priority={true} />
      </div>
    </button>
  );
};

const LeftButtonMob = ({ onClick }) => (
  <button onClick={onClick}>
    <div className="w-8 rounded-full border-2 border-[#625df5] inline-flex your-left-button-mob-styles">
      <Image className="button-bg" src={ArrowLeft} alt="" priority={true} />
    </div>
  </button>
);

const RightButtonMob = ({ onClick }) => (
  <button onClick={onClick}>
    <div className="w-8 rounded-full border-2 border-[#625df5] inline-flex your-right-button-mob-styles">
      <Image className="button-bg" src={ArrowRight} alt="" priority={true} />
    </div>
  </button>
);

export const EditButton = () => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
      stroke="#51636F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0299 2.26495L6.11991 8.17495C5.89491 8.39995 5.66991 8.84245 5.62491 9.16495L5.30241 11.4224C5.18241 12.2399 5.75991 12.8099 6.57741 12.6974L8.83491 12.3749C9.14991 12.3299 9.59241 12.1049 9.82491 11.8799L15.7349 5.96995C16.7549 4.94995 17.2349 3.76495 15.7349 2.26495C14.2349 0.764945 13.0499 1.24495 12.0299 2.26495Z"
      stroke="#51636F"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1826 3.11255C11.6851 4.90505 13.0876 6.30755 14.8876 6.81755"
      stroke="#51636F"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
};

const Rating = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="vuesax/linear/star">
        <g id="star">
          <path
            id="Vector"
            d="M13.73 3.51001L15.49 7.03002C15.73 7.52002 16.37 7.99002 16.91 8.08002L20.1 8.61002C22.14 8.95002 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02 21.35C5.88 22.62 4.58 21.67 5.14 19.25L5.85 16.18C5.98 15.6 5.75 14.79 5.33 14.37L2.85 11.89C1.39 10.43 1.86 8.95002 3.9 8.61002L7.09 8.08002C7.62 7.99002 8.26 7.52002 8.5 7.03002L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z"
            fill="#FEEA00"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

const RatingMob = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <g id="vuesax/linear/star">
        <g id="star">
          <path
            id="Vector"
            d="M10.2975 3.13248L11.6175 5.77248C11.7975 6.13998 12.2775 6.49248 12.6825 6.55998L15.075 6.95748C16.605 7.21248 16.965 8.32248 15.8625 9.41748L14.0025 11.2775C13.6875 11.5925 13.515 12.2 13.6125 12.635L14.145 14.9375C14.565 16.76 13.5975 17.465 11.985 16.5125L9.74249 15.185C9.33749 14.945 8.66999 14.945 8.25749 15.185L6.01499 16.5125C4.40999 17.465 3.43499 16.7525 3.85499 14.9375L4.38749 12.635C4.48499 12.2 4.31249 11.5925 3.99749 11.2775L2.13749 9.41748C1.04249 8.32248 1.39499 7.21248 2.92499 6.95748L5.31749 6.55998C5.71499 6.49248 6.19499 6.13998 6.37499 5.77248L7.69499 3.13248C8.41499 1.69998 9.58499 1.69998 10.2975 3.13248Z"
            fill="#FEEA00"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

const Bicycle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="bicycle 1">
        <g id="XMLID_511_">
          <path
            id="XMLID_512_"
            d="M6.85605 20.1587C6.28812 20.5955 5.58614 20.8658 4.81587 20.8658C2.95962 20.8658 1.44915 19.3553 1.44915 17.4991C1.44915 15.6424 2.95962 14.1319 4.81587 14.1319C6.21684 14.1319 7.41837 14.9933 7.92497 16.2132L8.97924 15.1197C8.149 13.6706 6.60557 12.6828 4.81587 12.6828C2.15572 12.6828 0 14.839 0 17.4991C0 20.1587 2.15572 22.3149 4.81587 22.3149C6.06741 22.3149 7.19665 21.8258 8.05327 21.0427C7.72451 20.9324 7.41266 20.7573 7.14619 20.5007C7.03625 20.3945 6.94139 20.2785 6.85605 20.1587Z"
            fill="white"
          />
          <path
            id="XMLID_513_"
            d="M14.1687 12.7196L11.6186 11.2384C12.7559 10.5266 12.3342 10.7902 13.4715 10.0784L13.4357 10.4407C13.3743 11.0573 13.8287 11.6215 14.4008 11.7375C14.4145 11.7403 18.8775 12.4988 19.0402 12.4988C19.62 12.4988 20.1319 12.08 20.2299 11.4889C20.3393 10.8308 19.8945 10.209 19.2365 10.1001L15.9509 9.5543L16.1071 7.98636C16.2646 6.98442 16.333 6.67026 15.9589 6.07251L15.4886 5.32061C14.881 4.35022 13.5998 4.0535 12.6271 4.66251L7.47966 7.88531C6.2154 8.67689 5.59886 10.3459 6.63101 11.5737C7.03424 12.0535 10.9547 14.4627 10.9547 14.4627L7.77957 17.7562C7.22387 18.3322 7.2404 19.2497 7.81683 19.8049C8.09799 20.0761 8.46029 20.211 8.82254 20.211C9.20233 20.211 9.58159 20.063 9.86556 19.7676L14.4838 14.9783C15.1353 14.3041 14.9825 13.1922 14.1687 12.7196Z"
            fill="white"
          />
          <path
            id="XMLID_514_"
            d="M19.5785 6.14088C20.7074 5.43378 21.0494 3.94592 20.3427 2.81756C19.6361 1.68823 18.1482 1.34623 17.0194 2.0529C15.891 2.75957 15.549 4.24689 16.2553 5.37525C16.9618 6.50463 18.4497 6.84712 19.5785 6.14088Z"
            fill="white"
          />
          <path
            id="XMLID_515_"
            d="M19.1841 12.6828C16.4963 12.6828 14.3682 14.9004 14.3682 17.4991C14.3682 20.1587 16.524 22.3149 19.1841 22.3149C21.8437 22.3149 24 20.1587 24 17.4991C24 14.839 21.8437 12.6828 19.1841 12.6828ZM19.1841 20.8658C17.3278 20.8658 15.8174 19.3553 15.8174 17.4991C15.8174 15.6424 17.3279 14.1319 19.1841 14.1319C21.0404 14.1319 22.5509 15.6424 22.5509 17.4991C22.5509 19.3553 21.0404 20.8658 19.1841 20.8658Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

const ElectronicsSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="laptop 1">
        <path
          id="Vector"
          d="M0.539974 21.3534H23.4576C23.7558 21.3534 23.9975 21.1117 23.9975 20.8134V20.3274C23.9979 20.3193 24 20.3118 24 20.3035C24 20.2154 23.9788 20.1322 23.9414 20.0587L21.5979 14.1596V3.18652C21.5979 2.88827 21.3562 2.64655 21.0579 2.64655H2.93972C2.64147 2.64655 2.39974 2.88827 2.39974 3.18652V14.1596L0.0380743 20.1042C0.0274981 20.1308 0.0200948 20.1579 0.0138666 20.1853C0.0123389 20.1922 0.0111638 20.1992 0.00987113 20.2062C0.00399546 20.2377 0.00035254 20.2696 0.000235027 20.3014C0.000235027 20.3021 0 20.3028 0 20.3035V20.8134C0 21.1117 0.241725 21.3534 0.539974 21.3534ZM9.67641 19.6108L10.1704 18.0831H13.8271L14.3211 19.6108H9.67641ZM3.98723 4.02416H20.0104V13.4252H3.98723V4.02416Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

const Camping = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="camping-tent 1">
        <g id="Group">
          <g id="Group_2">
            <path
              id="Vector"
              d="M15.6749 4.52734C15.5845 4.3825 15.3032 4.25653 15.1324 4.25653H10.3191C10.1483 4.25653 10.1424 4.38504 10.227 4.5332L18.7362 19.3098C18.8207 19.458 19.0216 19.4676 19.1844 19.4174L23.8258 17.9503C23.989 17.9001 24.048 17.7067 23.9576 17.5619L15.6749 4.52734Z"
              fill="white"
            />
            <path
              id="Vector_2"
              d="M4.13787 19.3127L8.24387 10.5482V19.0276C8.24387 19.7865 9.04833 19.743 9.21912 19.743H17.221C17.3918 19.743 17.4612 19.468 17.3767 19.3198L9.10947 4.66587C9.02491 4.51771 8.88804 4.51771 8.80352 4.66587L6.73336 8.30099C6.6488 8.44916 6.45962 8.63667 6.31023 8.71953C4.21622 9.88141 1.39224 11.433 0.140764 11.9822C-0.0467475 12.0646 -0.0362864 12.3011 0.109775 12.4442C0.38811 12.7163 0.979535 13.3387 1.52574 14.0883C1.84343 14.5245 2.12133 15.0108 2.34906 15.4935C2.4219 15.6479 2.40807 15.8948 2.32355 16.0434L0.545508 19.3198C0.46182 19.468 0.531721 19.743 0.702469 19.743H3.68887C3.85953 19.743 4.06044 19.4651 4.13787 19.3127ZM1.75002 12.5602C1.67343 12.4924 1.68222 12.402 1.77305 12.3543C2.6541 11.893 6.82248 9.70528 7.98147 8.99668C8.06897 8.9431 8.10074 8.97155 8.0543 9.06282L4.10316 16.827C4.05667 16.9182 4.00354 16.9107 3.98095 16.8106C3.83235 16.1543 3.2292 13.8686 1.75002 12.5602Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const ArrowDownSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke="#292D32"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowDownSvgMob = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M14.9396 7.2124L10.0496 12.1024C9.47207 12.6799 8.52707 12.6799 7.94957 12.1024L3.05957 7.2124"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export {
  LeftButton,
  RightButton,
  Rating,
  LeftButtonMob,
  RightButtonMob,
  Bicycle,
  ElectronicsSvg,
  Camping,
  RatingMob,
  ArrowDownSvg,
  ArrowDownSvgMob,
};
