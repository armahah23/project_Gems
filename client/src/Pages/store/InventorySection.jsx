import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function InventorySection() {

    

  const item = [
    {
      itemCode: "AC123",
      itemName: "Air Conditioner",
      itemPrice: "1000",
      company: "Toyota",
      warranty: "1 year",
      itemQuantity: "10",
      itemImage: "",
    },
    {
      itemCode: "AC133",
      itemName: "left Door",
      itemPrice: "1000",
      company: "Toyota",
      warranty: "1 year",
      itemQuantity: "10",
      itemImage: "",
    },
    {
      itemCode: "AC124",
      itemName: "signal light",
      itemPrice: "1000",
      company: "Toyota",
      warranty: "1 year",
      itemQuantity: "0",
      itemImage: "",
    },
    {
      itemCode: "AC143",
      itemName: "right Door",
      itemPrice: "1000",
      company: "Toyota",
      warranty: "1 year",
      itemQuantity: "10",
      itemImage: "",
    },
    {
        itemCode: "AC123",
        itemName: "Air Conditioner",
        itemPrice: "1000",
        company: "Toyota",
        warranty: "1 year",
        itemQuantity: "10",
        itemImage: "",
    }
  ];

//   {item.map( ( parts ) => (
//     parts.itemQuantity <= 0 ? parts.isAvailable(false) : parts.isAvailable(true)
//   ))}

  

  return (
    <>
      <div className="mx-4">
        <div className="flex border-b-2 items-center justify-between">
          <h1 className="my-4 text-[48px] font-extrabold uppercase text-[#204a64]">
            Inventory Panel
          </h1>
          <Link to={"/admin/dashboard"} className="mx-4 cursor-pointer">
            <MdDashboard className="h-[24px] w-[24px]" />
          </Link>
        </div>
        <div className="mt-2">
          <Link to={"/admin/additem"} className="bg-blue-500 hover:bg-blue-700 text-white uppercase p-2 rounded-md ">
            Add Item
          </Link>
        </div>

        <div className="flex flex-wrap items-cente justify-start gap-2 mt-3 mx-4">
          {item.map((item, index) => (
            <>
              <div
                key={index}
                className="mt-4 flex items-center justify-center text-[#204a64]"
              >
                <div className="flex flex-col justify-center cursor-pointer  transform transition-transform duration-300 hover:scale-95  items-center p-2
                 bg-gray-100 border rounded-md">
                  <div className="flex items-center gap-4 justify-between w-[100%] border-b-2 py-2 text-[16px]">
                    <span>ID: {item.itemCode} </span>
                    <span>
                      {item.isAvailable ? (
                        <span className="bg-green-600 py-1 px-2 m-1 text-[12px] rounded-sm text-white ">
                          Available
                        </span>
                      ) : (
                        <span className="bg-red-600 py-1 px-2 m-1 text-[12px] rounded-sm text-white">
                          Out of Stock
                        </span>
                      )}{" "}
                    </span>
                  </div>
                  <div className="m-2 flex items-center justify-center w-[75%]">
                    <img
                      src={item.itemImage}
                      alt="profile"
                      className="h-[80px] rounded-md "
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center border-b-2 pb-2  items-center">
                    <span className="text-[16px] uppercase ">
                      {item.itemName}
                    </span>
                    <span>Warranty: {item.warranty}</span>
                    <span>Company: {item.company}</span>
                  </div>
                  <div className="flex items-center w-[100%] mt-2 mx-1 justify-between">
                    <span className="text-[12px]">Qty: {item.itemQuantity}</span>
                    <span className="text-[12px]">Price: {item.itemPrice}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default InventorySection;
