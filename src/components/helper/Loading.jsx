import logo from "../../assets/logo/logo1.3.svg"

const Loading = () => {
  return (
    <div
      className="h-full w-full fixed top-0 left-0 flex justify-center items-center flex-col gap-2 bg-white"
      style={{
        zIndex: 99,
      }}
    >
      <img src={logo} className="animate-spin w-28" />
      <div className="text-xl font-bold text-palleteBlue">Please wait</div>
    </div>
  )
}

export default Loading
