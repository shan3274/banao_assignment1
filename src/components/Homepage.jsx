import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineGroupAdd } from "react-icons/md";

import Loginoptions from "./modals/Loginoptions";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full h-[5rem] lg:border-b-[.5px] border-black flex bg-transparent items-center lg:justify-around justify-between px-5 lg:px-0 relative z-10 ">
        <div className="w-[30%] h-[100%] lg:flex items-center justify-center hidden">
          <svg
            width="163"
            height="24"
            viewBox="0 0 163 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_1141)">
              <path
                d="M96.795 15.498C98.7163 15.498 100.274 13.9393 100.274 12.0165C100.274 10.0938 98.7163 8.53503 96.795 8.53503C94.8737 8.53503 93.3162 10.0938 93.3162 12.0165C93.3162 13.9393 94.8737 15.498 96.795 15.498Z"
                fill="#CDDC36"
              />
              <path
                d="M84.788 11.1465L90.2736 5.65649H86.5611C85.541 7.31878 84.933 9.20114 84.788 11.1465Z"
                fill="#DAE233"
              />
              <path
                d="M95.9586 0C93.9447 0.127315 91.9978 0.773184 90.3066 1.875V5.658L95.9586 0Z"
                fill="#DAE233"
              />
              <path
                d="M108.769 11.1465L103.283 5.65649H106.996C108.03 7.31208 108.64 9.19811 108.769 11.1465Z"
                fill="#DAE233"
              />
              <path
                d="M97.6313 0C99.6453 0.127382 101.592 0.773246 103.283 1.875V5.658L97.6313 0Z"
                fill="#DAE233"
              />
              <path
                d="M90.3066 12.786H84.821C84.9502 14.7344 85.5594 16.6205 86.5941 18.276H90.3066V12.786Z"
                fill="#DAE233"
              />
              <path
                d="M103.318 12.786H108.803C108.674 14.7344 108.065 16.6204 107.03 18.276H103.318V12.786Z"
                fill="#DAE233"
              />
              <path
                d="M95.9587 5.59052L90.4131 11.1405H84.7881L95.9587 -0.00598145V5.59052Z"
                fill="#46B746"
              />
              <path
                d="M97.6313 23.9655C99.6561 23.8934 101.623 23.2683 103.318 22.158V12.786L97.6313 18.477V23.9655Z"
                fill="#46B746"
              />
              <path
                d="M95.9256 18.444L90.3066 12.8205V22.1925C92.003 23.2733 93.9503 23.8961 95.9586 24V18.45L95.9256 18.444Z"
                fill="#46B746"
              />
              <path
                d="M97.6313 5.59051L103.177 11.1405H108.796L97.6313 0V5.59051Z"
                fill="#46B746"
              />
              <path
                d="M17.689 22.6215C17.5054 22.6381 17.3218 22.5905 17.1693 22.4869C17.0168 22.3833 16.9049 22.2299 16.8527 22.053L14.3047 15.1245H4.18168L1.70713 22.053C1.64714 22.2251 1.53344 22.3732 1.38283 22.4756C1.23222 22.578 1.0527 22.6291 0.870795 22.6215C0.724565 22.6204 0.580909 22.5829 0.452689 22.5125C0.324469 22.4422 0.215689 22.3411 0.136087 22.2183C0.0564849 22.0955 0.00854682 21.9549 -0.00343509 21.8091C-0.015417 21.6632 0.00893169 21.5167 0.0674301 21.3825L6.62325 3.27303C6.75925 2.67424 7.09515 2.13972 7.57553 1.75768C8.05591 1.37563 8.65207 1.16888 9.26566 1.17153C9.87821 1.1728 10.4731 1.37724 10.9571 1.75287C11.4412 2.1285 11.7872 2.65414 11.941 3.24754L18.5358 21.39C18.5707 21.4868 18.5933 21.5876 18.6033 21.69C18.5981 21.9326 18.5006 22.1641 18.3307 22.3372C18.1608 22.5103 17.9313 22.612 17.689 22.6215ZM4.84565 13.35H13.6422L10.1634 3.60903C10.1236 3.39742 10.0127 3.20579 9.84916 3.06585C9.68562 2.92591 9.47923 2.84606 9.26416 2.83953C8.86448 2.83953 8.56471 3.10755 8.36487 3.64355L4.84565 13.35Z"
                fill="#27A365"
              />
              <path
                d="M24.5161 3.21304H17.9573C17.8388 3.22001 17.7202 3.20269 17.6087 3.16212C17.4972 3.12154 17.3951 3.05858 17.3088 2.97711C17.2225 2.89564 17.1537 2.79736 17.1067 2.68833C17.0596 2.5793 17.0354 2.46179 17.0354 2.34304C17.0354 2.22429 17.0596 2.1068 17.1067 1.99777C17.1537 1.88874 17.2225 1.79046 17.3088 1.70899C17.3951 1.62752 17.4972 1.56456 17.6087 1.52398C17.7202 1.48341 17.8388 1.46609 17.9573 1.47306H32.7071C32.9377 1.47306 33.1588 1.56472 33.3218 1.72787C33.4848 1.89103 33.5764 2.1123 33.5764 2.34304C33.5764 2.57378 33.4848 2.79507 33.3218 2.95823C33.1588 3.12138 32.9377 3.21304 32.7071 3.21304H26.2562V21.8236C26.2562 21.9378 26.2337 22.0509 26.19 22.1565C26.1464 22.2621 26.0823 22.3579 26.0016 22.4387C25.9209 22.5195 25.8251 22.5836 25.7196 22.6273C25.6141 22.6711 25.5011 22.6935 25.3869 22.6935C25.2727 22.6935 25.1597 22.6711 25.0542 22.6273C24.9488 22.5836 24.8529 22.5195 24.7722 22.4387C24.6915 22.3579 24.6275 22.2621 24.5838 22.1565C24.5401 22.0509 24.5176 21.9378 24.5176 21.8236L24.5161 3.21304Z"
                fill="#27A365"
              />
              <path
                d="M51.6057 15.498C51.61 16.4726 51.4165 17.4379 51.037 18.3354C50.6575 19.2329 50.0999 20.044 49.398 20.7195C48.6442 21.4663 47.7437 22.0483 46.7535 22.4286C45.7633 22.8089 44.7049 22.9794 43.6455 22.929C42.5347 22.9521 41.4304 22.7539 40.3968 22.346C39.3632 21.9381 38.4209 21.3286 37.6248 20.553C35.9975 18.9564 35.0301 16.8053 34.9149 14.5275C34.7811 12.8903 34.7811 11.2448 34.9149 9.60753C35.0308 7.34954 35.9994 5.21991 37.6248 3.64953C38.4163 2.86532 39.357 2.24793 40.3912 1.8339C41.4253 1.41986 42.5319 1.21757 43.6455 1.23901C45.251 1.195 46.8323 1.63827 48.1813 2.51052C49.5304 3.38277 50.5842 4.64318 51.204 6.12603C51.2556 6.26307 51.2735 6.41046 51.2564 6.55587C51.2393 6.70128 51.1877 6.84047 51.1058 6.96179C51.0239 7.08312 50.9141 7.18305 50.7857 7.2532C50.6573 7.32336 50.514 7.36169 50.3677 7.36501C50.1849 7.37716 50.0033 7.32783 49.8518 7.22482C49.7002 7.12181 49.5875 6.97104 49.5314 6.79652C49.0303 5.65659 48.2045 4.68979 47.1574 4.01695C46.1103 3.34411 44.8882 2.99507 43.644 3.01351C42.7784 3.00046 41.9188 3.15949 41.1151 3.48134C40.3113 3.8032 39.5794 4.28149 38.9617 4.88851C37.6582 6.11348 36.8689 7.78871 36.7539 9.57453C36.5867 11.2438 36.5867 12.9257 36.7539 14.595C36.8711 16.3827 37.6453 18.0636 38.9272 19.314C39.5514 19.9214 40.2892 20.3997 41.0983 20.7214C41.9074 21.0432 42.772 21.2021 43.6425 21.189C45.2601 21.2597 46.846 20.725 48.091 19.689C48.6589 19.2039 49.1102 18.5969 49.4112 17.9131C49.7122 17.2293 49.8553 16.4863 49.8296 15.7395V13.389H44.8131C44.5825 13.389 44.3614 13.2974 44.1984 13.1342C44.0354 12.9711 43.9438 12.7498 43.9438 12.519C43.9438 12.2883 44.0354 12.067 44.1984 11.9038C44.3614 11.7407 44.5825 11.649 44.8131 11.649H49.93C50.1492 11.628 50.3702 11.6545 50.5782 11.7268C50.7861 11.7992 50.9759 11.9156 51.1348 12.0681C51.2936 12.2207 51.4176 12.4057 51.4984 12.6106C51.5791 12.8156 51.6147 13.0355 51.6027 13.2555L51.6057 15.498Z"
                fill="#27A365"
              />
              <path
                d="M57.1603 21.8911C57.1691 22.0268 57.1495 22.1628 57.1027 22.2904C57.0559 22.418 56.983 22.5345 56.8885 22.6322C56.7941 22.73 56.6803 22.8069 56.5544 22.858C56.4285 22.9091 56.2933 22.9333 56.1576 22.9291C56.0233 22.9277 55.8907 22.8997 55.7674 22.8466C55.6441 22.7936 55.5326 22.7165 55.4393 22.6199C55.346 22.5233 55.2729 22.4092 55.224 22.2841C55.1752 22.159 55.1517 22.0254 55.1549 21.8911V20.2516C55.0544 18.9121 57.2292 18.9121 57.1618 20.2516L57.1603 21.8911Z"
                fill="#27A365"
              />
              <path
                d="M58.0641 2.44352C58.0204 2.30948 58.01 2.16685 58.0337 2.02787C58.0573 1.8889 58.1144 1.75775 58.1999 1.64573C58.2854 1.53372 58.3969 1.44418 58.5247 1.38483C58.6524 1.32548 58.7927 1.29811 58.9334 1.30504C59.0348 1.29453 59.1373 1.30454 59.2347 1.33448C59.3321 1.36442 59.4226 1.41368 59.5006 1.47931C59.5786 1.54495 59.6427 1.62563 59.6889 1.71655C59.7352 1.80747 59.7626 1.90677 59.7697 2.00853L64.0174 21.0885C64.0174 21.3225 64.2512 21.2565 64.3171 21.0885L69.1328 2.88003C69.1994 2.44651 69.4244 2.05315 69.7641 1.77606C70.1038 1.49897 70.5342 1.35785 70.9719 1.38002C71.4081 1.36413 71.8352 1.50756 72.1736 1.78354C72.5119 2.05953 72.7385 2.44923 72.8109 2.88003L77.5262 21.123C77.5936 21.291 77.826 21.357 77.826 21.123L82.1411 2.07303C82.1594 1.85755 82.2599 1.65741 82.4218 1.51413C82.5837 1.37085 82.7944 1.29543 83.0104 1.30353C83.1523 1.28875 83.2957 1.31138 83.4262 1.36918C83.5567 1.42697 83.6699 1.51792 83.7544 1.63301C83.8389 1.74809 83.8919 1.88332 83.9081 2.02524C83.9243 2.16716 83.9032 2.31084 83.8467 2.44204L79.5001 21.4545C79.4067 21.864 79.1772 22.2296 78.8491 22.4914C78.521 22.7533 78.1137 22.8959 77.6941 22.8959C77.2744 22.8959 76.8672 22.7533 76.539 22.4914C76.2109 22.2296 75.9814 21.864 75.888 21.4545L71.0723 3.21154C71.0723 3.17176 71.0565 3.1336 71.0284 3.10547C71.0003 3.07734 70.9622 3.06153 70.9224 3.06153C70.8827 3.06153 70.8446 3.07734 70.8164 3.10547C70.7883 3.1336 70.7725 3.17176 70.7725 3.21154L65.8894 21.4545C65.796 21.864 65.5664 22.2296 65.2383 22.4914C64.9102 22.7533 64.503 22.8959 64.0833 22.8959C63.6637 22.8959 63.2564 22.7533 62.9283 22.4914C62.6002 22.2296 62.3706 21.864 62.2772 21.4545L58.0641 2.44352Z"
                fill="#5C5D5D"
              />
              <path
                d="M125.893 22.7611C125.759 22.7553 125.628 22.7227 125.508 22.6652C125.387 22.6078 125.279 22.5266 125.19 22.4266L119.237 14.9626C119.065 14.6633 118.816 14.4156 118.516 14.2449C118.216 14.0743 117.876 13.987 117.531 13.9921H113.316V21.8581C113.307 22.0887 113.213 22.3079 113.053 22.4738C112.893 22.6398 112.677 22.741 112.447 22.7581C112.215 22.7463 111.996 22.6468 111.835 22.4797C111.674 22.3127 111.582 22.0904 111.578 21.8581V3.21307C111.568 2.98177 111.606 2.75094 111.69 2.53521C111.774 2.31948 111.902 2.12357 112.065 1.95994C112.229 1.79631 112.425 1.66852 112.641 1.58471C112.856 1.5009 113.087 1.46288 113.318 1.47309H119.439C121.19 1.3867 122.906 1.98725 124.222 3.14708C124.846 3.74334 125.333 4.4677 125.65 5.2704C125.968 6.07309 126.108 6.93507 126.061 7.79707C126.061 11.3116 123.987 13.2871 120.515 13.7551L126.602 21.3196C126.722 21.4838 126.782 21.6848 126.77 21.8881C126.774 22.0042 126.754 22.1199 126.711 22.2279C126.669 22.3359 126.604 22.434 126.522 22.5159C126.439 22.5979 126.341 22.6619 126.233 22.7041C126.125 22.7463 126.009 22.7657 125.893 22.7611ZM113.351 12.2176H118.97C122.549 12.2176 124.321 10.7446 124.321 7.73257C124.321 4.95457 122.615 3.21307 119.405 3.21307H113.351V12.2176Z"
                fill="#5C5D5D"
              />
              <path
                d="M129.673 2.24254C129.673 2.0118 129.765 1.79053 129.928 1.62737C130.091 1.46422 130.312 1.37256 130.542 1.37256C130.773 1.37256 130.994 1.46422 131.157 1.62737C131.32 1.79053 131.412 2.0118 131.412 2.24254V20.8201H141.981C142.216 20.8313 142.438 20.9298 142.605 21.0962C142.771 21.2626 142.869 21.485 142.881 21.72C142.869 21.9521 142.769 22.1711 142.602 22.3326C142.435 22.4942 142.213 22.5862 141.981 22.59H131.446C131.211 22.6 130.976 22.561 130.756 22.4753C130.536 22.3897 130.337 22.2593 130.17 22.0925C130.004 21.9257 129.873 21.726 129.788 21.5062C129.702 21.2864 129.663 21.0512 129.673 20.8155V2.24254Z"
                fill="#5C5D5D"
              />
              <path
                d="M148.035 22.626C147.809 22.6386 147.583 22.6028 147.373 22.521C147.162 22.4392 146.971 22.3133 146.812 22.1517C146.654 21.9902 146.532 21.7966 146.454 21.584C146.377 21.3714 146.345 21.1447 146.362 20.919V3.14551C146.345 2.91983 146.377 2.69311 146.454 2.48052C146.532 2.26793 146.654 2.07437 146.812 1.91278C146.971 1.75119 147.162 1.62529 147.373 1.5435C147.583 1.46171 147.809 1.42592 148.035 1.43851H153.257C154.483 1.35703 155.713 1.53549 156.866 1.96224C158.018 2.38899 159.068 3.05442 159.946 3.91502C161.595 5.67549 162.515 7.99592 162.521 10.4085C162.588 11.512 162.588 12.6185 162.521 13.722C162.484 16.1277 161.553 18.4333 159.909 20.1885C159.027 21.0323 157.981 21.6848 156.835 22.1053C155.69 22.5257 154.47 22.7051 153.252 22.632H148.035V22.626ZM160.775 10.341C160.508 5.85601 158.065 3.21152 153.217 3.21152H148.133V20.8185H153.217C158.067 20.8185 160.541 18.141 160.775 13.689C160.843 12.5746 160.844 11.4571 160.778 10.3425L160.775 10.341Z"
                fill="#5C5D5D"
              />
              <path
                d="M90.3006 22.2V12.8205L95.9122 18.45H95.9452V24C93.9399 23.8981 91.9952 23.278 90.3006 22.2ZM97.6149 18.4845L103.292 12.7935V22.1655C101.6 23.2755 99.6368 23.9006 97.6149 23.973V18.4845ZM103.292 18.2835V12.786H108.771C108.641 14.734 108.033 16.6199 107 18.276L103.292 18.2835ZM86.5926 18.2835C85.5585 16.6252 84.9504 14.7366 84.8225 12.786H90.3006V18.276L86.5926 18.2835ZM93.3073 12.0165C93.3084 11.3294 93.5131 10.658 93.8954 10.0873C94.2778 9.5165 94.8205 9.07197 95.4552 8.80984C96.0899 8.54771 96.7879 8.47973 97.4612 8.61451C98.1344 8.74929 98.7527 9.08078 99.2377 9.56707C99.7228 10.0534 100.053 10.6727 100.186 11.3467C100.32 12.0207 100.251 12.7192 99.9878 13.3539C99.7248 13.9886 99.2797 14.5311 98.7088 14.9127C98.1378 15.2943 97.4666 15.498 96.78 15.498C96.3236 15.4976 95.8717 15.4072 95.4501 15.2321C95.0286 15.0569 94.6456 14.8003 94.3232 14.477C94.0007 14.1538 93.745 13.7701 93.5707 13.3479C93.3964 12.9257 93.3069 12.4733 93.3073 12.0165ZM103.16 11.1465L97.6149 5.5965V0C99.6265 0.127176 101.571 0.773109 103.259 1.875V5.64L103.276 5.6565H106.972C107.998 7.30233 108.605 9.17515 108.739 11.1105L108.771 11.1465H103.16ZM84.7895 11.1465L84.83 11.1C84.9807 9.1712 85.5863 7.30566 86.5971 5.6565H90.2841L90.3006 5.64V1.875C91.989 0.773109 93.9335 0.127176 95.9452 0V5.5905L90.3996 11.1405L84.7895 11.1465Z"
                fill="url(#paint0_linear_1_1141)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_1141"
                x1="84.7895"
                y1="10.464"
                x2="96.7906"
                y2="23.9906"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00A854" />
                <stop offset="1" stop-color="#004D25" />
              </linearGradient>
              <clipPath id="clip0_1_1141">
                <rect width="162.566" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-[40%] h-[100%] lg:flex items-center justify-center relative hidden">
          <input
            type="text"
            className="border-[.5px] border-black rounded-full w-[90%] h-[50%] pl-[9%]"
            placeholder="Search for your favorite groups in ATG"
          />
          <BiSearch className="absolute left-[8%] text-[20px]" />
        </div>
        <div className="w-[30%] h-[100%] lg:flex items-center justify-center relative hidden">
          <button onClick={() => setOpenModal(!openModal)}>
            Create account.<span className="text-blue-500">It’s free!</span>
          </button>
          <FaCaretDown />
        </div>
        <IoArrowBack className="text-[25px] lg:hidden text-white" />
        <button
          className="bg-[rgba(0,0,0,0.3)] text-white w-[30%] h-[60%] rounded-md lg:hidden border-white border-[0.5px] z-[100]"
          onClick={() => setOpenModal(!openModal)}
        >
          Join
        </button>
        <Loginoptions open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="lg:relative">
        <section className="w-full lg:relative h-[50vh] z-[-1]  flex items-center justify-center">
          <img
            src="https://muzaffarhaque.github.io/agt-A/images/hero-bg-home.png"
            alt=""
            className=" absolute top-0 left-0 w-full lg:block hidden"
          />
          <img
            src="https://muzaffarhaque.github.io/agt-A/images/hero-bg-imagmb.png"
            alt=""
            className=" absolute top-0 left-0 w-full lg:hidden"
          />

          <div className="w-[80%] h-[80%] flex items-start justify-center flex-col  text-white lg:pt-[100px] lg:mt-0 mt-[-200px] z-40 ">
            <h1 className="lg:text-[40px] text-[20px] font-[500]">
              Computer Engineering
            </h1>
            <p className="z-10">142,765 Computer Engineers follow this</p>
          </div>
        </section>
        <section className="w-full flex flex-col lg:px-10 mt-[-15rem] lg:mt-0 xl:mt-10">
          <div className="w-[100%] flex items-center justify-between h-[5rem]">
            <div className="pl-5 flex gap-5">
              <button className="border-b-[.5px] border-black ">
                All Posts(32)
              </button>
              <button className="text-gray-500 lg:block hidden">
                Articles
              </button>
              <button className="text-gray-500 lg:block hidden">Events</button>
              <button className="text-gray-500 lg:block hidden">
                Education
              </button>
              <button className="text-gray-500 lg:block hidden">Jobs</button>
            </div>
            <div className="pr-5 flex gap-5">
              <button className="w-[150px] h-[40px] bg-gray-100 flex items-center justify-center rounded-md">
                Write Post <FaCaretDown />
              </button>
              <button className="lg:flex hidden w-[150px] h-[40px] bg-blue-600 gap-1 text-white items-center justify-center rounded-md">
                <MdOutlineGroupAdd />
                Join Group
              </button>
            </div>
          </div>
          <div className="w-[100%] flex items-center lg:justify-between justify-center">
            <div className="lg:w-[70%] w-[100%] flex flex-col lg:justify-start lg:items-start justify-center items-center">
              <div className="w-[90%] border-[.5px] bg-white rounded-md drop-shadow-lg pb-10 my-5">
                <img
                  src="https://muzaffarhaque.github.io/agt-A/images/artical1-img.png"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <img
                    src="https://muzaffarhaque.github.io/agt-A/images/ArticleIimg.png"
                    alt=""
                    className="h-[20px] w-[100px] m-5 "
                  />

                  <p className="mx-5 text-[25px]">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>
                  <p className="text-[20px] text-gray-500 mx-5">
                    I’ve worked in UX for the better part of a decade. F..
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="mx-5 flex gap-4 items-center justify-center">
                      <img
                        src="https://muzaffarhaque.github.io/agt-A/images/profile.png"
                        alt=""
                      />
                      <p className="text-[20px]">Shan Khan</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mx-5">
                      <img
                        src="https://muzaffarhaque.github.io/agt-A/images/visibility_24px_outlined.png"
                        alt=""
                      />
                      <p>1.4k views</p>

                      <button>
                        <img
                          src="https://muzaffarhaque.github.io/agt-A/images/share.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[90%] border-[.5px] bg-white rounded-md drop-shadow-lg pb-10 my-5">
                <img
                  src="https://muzaffarhaque.github.io/agt-A/images/artical1-img.png"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <img
                    src="https://muzaffarhaque.github.io/agt-A/images/ArticleIimg.png"
                    alt=""
                    className="h-[20px] w-[100px] m-5 "
                  />

                  <p className="mx-5 text-[25px]">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>
                  <p className="text-[20px] text-gray-500 mx-5">
                    I’ve worked in UX for the better part of a decade. F..
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="mx-5 flex gap-4 items-center justify-center">
                      <img
                        src="https://muzaffarhaque.github.io/agt-A/images/profile.png"
                        alt=""
                      />
                      <p className="text-[20px]">Shan Khan</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mx-5">
                      <img
                        src="https://muzaffarhaque.github.io/agt-A/images/visibility_24px_outlined.png"
                        alt=""
                      />
                      <p>1.4k views</p>

                      <button>
                        <img
                          src="https://muzaffarhaque.github.io/agt-A/images/share.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[90%] border-[.5px] bg-white rounded-md drop-shadow-lg pb-10 my-5">
                <img
                  src="https://muzaffarhaque.github.io/agt-A/images/artical1-img.png"
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <img
                    src="https://muzaffarhaque.github.io/agt-A/images/ArticleIimg.png"
                    alt=""
                    className="h-[20px] w-[100px] m-5 "
                  />

                  <p className="mx-5 text-[25px]">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </p>
                  <p className="text-[20px] text-gray-500 mx-5">
                    I’ve worked in UX for the better part of a decade. F..
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="mx-5 flex gap-4 items-center justify-center">
                      <img
                        src="https://muzaffarhaque.github.io/agt-A/images/profile.png"
                        alt=""
                      />
                      <p className="text-[20px]">Shan Khan</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mx-5">
                      <img
                        src="https://muzaffarhaque.github.io/agt-A/images/visibility_24px_outlined.png"
                        alt=""
                      />
                      <p>1.4k views</p>

                      <button>
                        <img
                          src="https://muzaffarhaque.github.io/agt-A/images/share.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]  lg:flex flex-col items-start justify-start mt-[-95rem] hidden p-10">
              <div className="relative flex mb-5">
                <img
                  src="https://muzaffarhaque.github.io/agt-A/images/location.png"
                  alt=""
                  className="absolute left-0"
                />
                <input
                  type="text"
                  className="border-b-black border-b-[.5px] w-[100%] pl-5"
                  placeholder="Noide, India"
                />
                <img
                  src="https://muzaffarhaque.github.io/agt-A/images/edit.png"
                  alt=""
                  className="absolute right-0"
                />
              </div>
              <div className="flex relative">
                <img
                  src="https://muzaffarhaque.github.io/agt-A/images/!.png"
                  alt=""
                  className=" absolute top-2"
                />
                <p className="pl-5 text-[10px] text-gray-500">
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
const Homepage = () => {
  return (
    <>
      <div className="">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default Homepage;
