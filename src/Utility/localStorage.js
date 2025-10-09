import { toast } from "react-toastify";

export const getAppFromLocalStorage = () => {
  try {
    const getApp = localStorage.getItem("appList");
    return getApp ? JSON.parse(getApp) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateAppList = (app) => {
  const appList = getAppFromLocalStorage();
  try {
    const isDuplicate = appList.some(el=> el.id === app.id);
    if (isDuplicate) {
      toast.error(`Already Installed ${app.title}`, {
        theme: "dark",
        position: "top-right",
      });
      return false; 
    }
    
    const newAppList = [...appList, app];
    localStorage.setItem("appList", JSON.stringify(newAppList));
    toast.success(`You've Successfully Installed ${app.title}`, {
      theme: "light",
      position: "top-right",
      style: {
        background: "#BBF7D0",
        color: "#166534",
        fontWeight: 500,
        borderRadius: "8px",
      },
    });
    return true; 
  } catch (error) {
    console.log(error);
    return false; 
  }
};
