import { SvgProps } from './type';

export function LikeIcon({ color = '#000', size = '24', fill }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart w-6 h-6 text-rose-500"
      data-id="element-13"
    >
      <path
        style={{ stroke: color, fill: fill ? color : 'none' }}
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      ></path>
    </svg>
  );
}

export function WriteIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pen w-6 h-6"
      data-id="element-15"
    >
      <path
        style={{ stroke: color }}
        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      ></path>
    </svg>
  );
}

export function SettingIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-settings w-6 h-6"
      data-id="element-9"
    >
      <path
        style={{ stroke: color }}
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      ></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function InfoIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-info w-6 h-6"
      data-id="element-11"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="8"></line>
    </svg>
  );
}

export function EmailIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-mail w-6 h-6 text-rose-500"
      data-id="element-8"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

export function KeyIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-key w-6 h-6 text-rose-500"
      data-id="element-9"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
      <path d="m21 2-9.6 9.6"></path>
      <circle cx="7.5" cy="15.5" r="5.5"></circle>
    </svg>
  );
}

export function PrevIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-left w-6 h-6 text-gray-600"
      data-id="element-4"
      style={{ color: color }}
    >
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );
}

export function NextIcon({ size = '24', color }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right w-5 h-5"
      data-id="element-38"
      style={{ color: color }}
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
}

export function SearchIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-search absolute left-3 top-2.5 text-gray-400"
      data-id="element-8"
      style={{ color: color }}
    >
      <circle cx="11" cy="11" r="8"></circle>

      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
}
export function ConnectedIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
    >
      <g>
        <path
          d="M7.15381 8.86619C7.44011 9.24894 7.80538 9.56564 8.22484 9.79481C8.6443 10.024 9.10815 10.1603 9.58491 10.1944C10.0617 10.2286 10.5402 10.1598 10.988 9.99271C11.4359 9.82565 11.8426 9.56423 12.1805 9.22619L14.1805 7.22619C14.7877 6.59751 15.1237 5.75551 15.1161 4.88152C15.1085 4.00753 14.7579 3.17149 14.1399 2.55346C13.5218 1.93543 12.6858 1.58487 11.8118 1.57727C10.9378 1.56968 10.0958 1.90566 9.46714 2.51285L8.32048 3.65285"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.82077 7.53303C9.53447 7.15028 9.1692 6.83357 8.74974 6.6044C8.33028 6.37523 7.86643 6.23895 7.38967 6.20481C6.91291 6.17066 6.43438 6.23945 5.98654 6.40651C5.5387 6.57356 5.13203 6.83498 4.7941 7.17303L2.7941 9.17303C2.18691 9.8017 1.85093 10.6437 1.85852 11.5177C1.86612 12.3917 2.21668 13.2277 2.83471 13.8458C3.45274 14.4638 4.28878 14.8143 5.16277 14.8219C6.03676 14.8295 6.87876 14.4936 7.50744 13.8864L8.64744 12.7464"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.487305 0.199219)"
        />
      </defs>
    </svg>
  );
}

export function UnConnectedIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.2959 8.28904C6.5822 8.67179 6.94747 8.98849 7.36693 9.21767C7.78639 9.44684 8.25024 9.58312 8.727 9.61726C9.20376 9.65141 9.68229 9.58262 10.1301 9.41556C10.578 9.2485 10.9846 8.98709 11.3226 8.64904L13.3226 6.64904C13.9298 6.02037 14.2657 5.17836 14.2581 4.30437C14.2506 3.43038 13.9 2.59434 13.282 1.97631C12.6639 1.35828 11.8279 1.00772 10.9539 1.00013C10.0799 0.992531 9.23791 1.32851 8.60923 1.93571L7.46257 3.07571"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.96237 6.95588C8.67607 6.57313 8.3108 6.25642 7.89134 6.02725C7.47188 5.79808 7.00803 5.6618 6.53127 5.62766C6.05451 5.59351 5.57598 5.6623 5.12814 5.82936C4.6803 5.99642 4.27363 6.25783 3.93571 6.59588L1.93571 8.59588C1.32851 9.22455 0.992531 10.0666 1.00013 10.9406C1.00772 11.8145 1.35828 12.6506 1.97631 13.2686C2.59434 13.8866 3.43038 14.2372 4.30437 14.2448C5.17836 14.2524 6.02037 13.9164 6.64904 13.3092L7.78904 12.1692"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.70703"
        y="2"
        width="14"
        height="1"
        transform="rotate(45 3.70703 2)"
        fill="black"
      />
      <rect
        x="2.72485"
        y="1.98242"
        width="14.7073"
        height="1.05052"
        transform="rotate(45 2.72485 1.98242)"
        fill="white"
      />
    </svg>
  );
}

export function LockIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M11.6667 7H2.33333C1.59695 7 1 7.59695 1 8.33333V13C1 13.7364 1.59695 14.3333 2.33333 14.3333H11.6667C12.403 14.3333 13 13.7364 13 13V8.33333C13 7.59695 12.403 7 11.6667 7Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7V4.33333C4 3.44928 4.31607 2.60143 4.87868 1.97631C5.44129 1.35119 6.20435 1 7 1C7.79565 1 8.55871 1.35119 9.12132 1.97631C9.68393 2.60143 10 3.44928 10 4.33333V7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UnLockIcon({ size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M11.6667 7H2.33333C1.59695 7 1 7.59695 1 8.33333V13C1 13.7364 1.59695 14.3333 2.33333 14.3333H11.6667C12.403 14.3333 13 13.7364 13 13V8.33333C13 7.59695 12.403 7 11.6667 7Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7V4.33333C4 3.44928 4.31607 2.60143 4.87868 1.97631C5.44129 1.35119 6.20435 1 7 1C7.79565 1 8.55871 1.35119 9.12132 1.97631"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="11" cy="11" r="8"></circle>

      <path d="m21 21-4.3-4.3"></path>
    </svg>
  );
}

export function LocationIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-map-pin"
      data-id="element-15"
      style={{ color: color }}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export function ShareIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="share"
      style={{ color: color }}
    >
      <path
        fill="currentColor"
        d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"
      ></path>
    </svg>
  );
}

export function SendIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-send"
      data-id="element-46"
      style={{ color: color }}
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
      <path d="m21.854 2.147-10.94 10.939"></path>
    </svg>
  );
}

export function CameraIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-camera"
      data-id="element-8"
      style={{ color: color }}
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  );
}

export function DisConnectedCoupleIcon({ color, size = '24' }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user-x w-5 h-5 mr-2"
      data-id="element-42"
      style={{ color: color }}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <line x1="17" x2="22" y1="8" y2="13"></line>
      <line x1="22" x2="17" y1="8" y2="13"></line>
    </svg>
  );
}

export function ChatIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 50 43"
      fill="none"
      style={{ color }}
    >
      <path
        d="M41.6667 3.3077L8.33333 3.30776C5.5719 3.30776 3.33333 5.52915 3.33333 8.26931V24.8078C3.33333 27.5482 5.5719 29.7693 8.33333 29.7693H25.0001C25.4421 29.7693 25.8661 29.9436 26.1786 30.2539L33.3333 37.3535V31.4231C33.3333 30.5099 34.0797 29.7693 35 29.7693H41.6667C44.428 29.7693 46.6667 27.5482 46.6667 24.8078V8.26924C46.6667 5.52905 44.428 3.3077 41.6667 3.3077ZM8.3333 6.62438e-05L41.6667 0C46.269 0 50 3.70227 50 8.26924V24.8078C50 29.3747 46.269 33.077 41.6667 33.077H36.6667V41.3462C36.6667 42.015 36.2607 42.618 35.6377 42.874C35.015 43.1301 34.298 42.9885 33.8213 42.5158L24.3097 33.077H8.33333C3.73097 33.077 0 29.3747 0 24.8078V8.26931C0 3.70234 3.73093 9.93208e-05 8.3333 6.62438e-05Z"
        fill="black"
      />
    </svg>
  );
}

export function CloseIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      style={{ color }}
    >
      <path
        d="M15 5L5 15"
        stroke="#6B7280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5L15 15"
        stroke="#6B7280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FullIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      style={{ color }}
    >
      <path
        d="M2 8V3H7M12 3H17V8M2 13V18H7M17 13V18H12"
        stroke="#6B7280"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmojiIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      style={{ color }}
    >
      <g>
        <path
          d="M10.0001 18.5339C14.6025 18.5339 18.3334 14.8029 18.3334 10.2005C18.3334 5.59815 14.6025 1.86719 10.0001 1.86719C5.39771 1.86719 1.66675 5.59815 1.66675 10.2005C1.66675 14.8029 5.39771 18.5339 10.0001 18.5339Z"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66675 11.8672C6.66675 11.8672 7.91675 13.5339 10.0001 13.5339C12.0834 13.5339 13.3334 11.8672 13.3334 11.8672"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 7.70117H7.50833"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 7.70117H12.5083"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function FileIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      style={{ color: color }}
    >
      <g>
        <path
          d="M17.8666 9.40923L10.2082 17.0676C9.27005 18.0058 7.99757 18.5328 6.67075 18.5328C5.34393 18.5328 4.07145 18.0058 3.13325 17.0676C2.19505 16.1294 1.66797 14.8569 1.66797 13.5301C1.66797 12.2032 2.19505 10.9308 3.13325 9.99256L10.2749 2.8509C10.9004 2.22432 11.7491 1.87188 12.6345 1.8711C13.5198 1.87031 14.3692 2.22126 14.9957 2.84673C15.6223 3.4722 15.9748 4.32095 15.9755 5.20628C15.9763 6.09161 15.6254 6.94099 14.9999 7.56756L7.84158 14.7092C7.52885 15.022 7.10469 15.1977 6.66242 15.1977C6.22014 15.1977 5.79598 15.022 5.48325 14.7092C5.17051 14.3965 4.99482 13.9723 4.99482 13.5301C4.99482 13.0878 5.17051 12.6636 5.48325 12.3509L12.5582 5.28423"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function UploadIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-upload text-gray-400"
      data-id="element-20"
      style={{ color: color }}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" x2="12" y1="3" y2="15"></line>
    </svg>
  );
}

export function PublicIcon({ color, size = 24 }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-globe mr-2"
      data-id="element-31"
      style={{ color: color }}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
      <path d="M2 12h20"></path>
    </svg>
  );
}
