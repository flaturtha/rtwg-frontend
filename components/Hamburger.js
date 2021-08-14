export default function Hamburger (props) {
  return (
    <svg
      xmlns="http://www.w3.org/200/svg"
      className="prefix__h-6 prefix__w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  )
}