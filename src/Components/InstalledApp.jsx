import { toast } from "react-toastify";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import { Server, Trash, Trash2 } from "lucide-react";

const InstalledApp = ({ insApp, setInstalledApp }) => {

  // local storage data remove
  const handleUninstall = (id) => {
    const getExistingApp = JSON.parse(localStorage.getItem("appList"));
    const updatedList = getExistingApp.filter((el) => el.id !== id);

    //functionality of ui update
    setInstalledApp(updatedList);
    toast.error("App uninstalled successfully!", {
      icon: <Trash2 color="#991B1B" />,
      position: "top-right",
      theme: "light",
      style: {
        background: "#FECACA",
        color: "#991B1B",
        fontWeight: 500,
        borderRadius: "8px",
      },
    });

    localStorage.setItem("appList", JSON.stringify(updatedList));
  };

  const { image, id, title, downloads, ratingAvg, size } = insApp;

  return (
    <div className="bg-white p-3 flex justify-between items-center md:flex-row flex-col gap-4 rounded-md">
      
      <div className="flex items-center gap-4">
        <div className="w-20 h-16 rounded-md">
          <img src={image} alt={title} className="w-full h-16 rounded-md" />
        </div>

        <div className="space-y-2">
          <h3 className="text-[#001931] font-semibold">{title}</h3>

          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex items-center gap-2">
              <img src={download} alt="" className="w-4 h-4" />
              <p>{downloads}M</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={rating} alt="" className="w-4 h-4" />
              <p>{ratingAvg}</p>
            </div>

            <div className="flex items-center gap-2">
              <Server size={16} color="#9f62f2" />
              <p>{size}MB</p>
            </div>
            
          </div>
        </div>
      </div>

      <button className="btnUn" onClick={() => handleUninstall(id)}>
        Uninstall
        <Trash
          size={16}
          className="ml-2 text-current transition-colors duration-300"
          strokeWidth={2.5}
        />
      </button>

    </div>
  );
};

export default InstalledApp;
