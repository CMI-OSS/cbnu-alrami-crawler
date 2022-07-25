type Props = {
  color: string;
};

function LeftArrow({ color }: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.96286 1.69161C7.14406 1.48324 7.12202 1.16742 6.91364 0.986223C6.70527 0.805024 6.38945 0.827057 6.20825 1.03544L6.96286 1.69161ZM1.36816 7.36353L0.990861 7.03544C0.827265 7.22357 0.827265 7.50348 0.990861 7.69162L1.36816 7.36353ZM6.20825 13.6916C6.38945 13.9 6.70527 13.922 6.91364 13.7408C7.12202 13.5596 7.14406 13.2438 6.96286 13.0354L6.20825 13.6916ZM6.20825 1.03544L0.990861 7.03544L1.74547 7.69162L6.96286 1.69161L6.20825 1.03544ZM0.990861 7.69162L6.20825 13.6916L6.96286 13.0354L1.74547 7.03544L0.990861 7.69162Z"
        fill={color}
      />
      <path
        d="M1.36816 6.86353C1.09202 6.86353 0.868164 7.08738 0.868164 7.36353C0.868164 7.63967 1.09202 7.86353 1.36816 7.86353V6.86353ZM12.8464 7.86353C13.1226 7.86353 13.3464 7.63967 13.3464 7.36353C13.3464 7.08738 13.1226 6.86353 12.8464 6.86353V7.86353ZM1.36816 7.86353H12.8464V6.86353H1.36816V7.86353Z"
        fill={color}
      />
    </svg>
  );
}

export { LeftArrow };
