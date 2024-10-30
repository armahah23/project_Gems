import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import profile from "../../../assets/photos/Esignup.png";

function MechanicProfile() {
  const mechanics = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+947765628",
      profile: "",
      isOut: false,
    },
    {
      id: 2,
      name: "Max Kumar",
      email: "kumar@gmail.com",
      phone: "+947765628",
      profile: "",
      isOut: true,
    },
    {
      id: 3,
      name: "Nix Reddy",
      email: "nixRn@gmail.com",
      phone: "+947765628",
      profile: "",
      isOut: false,
    },
    {
      id: 4,
      name: "Nix Reddy",
      email: "nixRn@gmail.com",
      phone: "+947765628",
      profile: "",
      isOut: false,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between border-b-2">
        <h1 className="m-4 text-[36px] text-primary-color font-bold uppercase">
          Mechanic Profile
        </h1>
        <Link
          to={"/admin/dashboard"}
          className="text-[24px] mr-4 cursor-pointer"
        >
          <MdDashboard />
        </Link>
      </div>
      <div className="flex items-center justify-between mx-4">
        {mechanics.map((mechanic, index) => (
          <>
            <div
              key={index}
              className="mt-4 flex items-center justify-center text-black"
            >
              <div className="flex flex-col justify-center items-center p-2 bg-[#13496b5f] rounded-md">
                <div className="flex items-center justify-between w-[100%] border-b-2 py-2 text-[16px]">
                  <span>ID: {mechanic.id} </span>
                  <span>
                    {mechanic.isOut ? (
                      <span className="bg-green-600 p-1 m-1 rounded-sm text-white ">
                        IN
                      </span>
                    ) : (
                      <span className="bg-red-600 p-1 m-1 rounded-sm text-white">
                        OUT
                      </span>
                    )}{" "}
                  </span>
                </div>
                <div className="m-2 flex items-center justify-center w-[75%]">
                  <img src={profile} alt="profile" className="h-[150px] " />
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="text-[24px]">{mechanic.name}</span>
                  <span>{mechanic.phone}</span>
                  <span>{mechanic.email}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MechanicProfile;
